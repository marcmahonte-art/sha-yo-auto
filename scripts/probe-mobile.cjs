const { chromium } = require('C:/Users/Lenovo/AppData/Local/npm-cache/_npx/2334a3ea0ef73d73/node_modules/playwright');
const PORT = process.env.PORT || '3100';
(async () => {
  const b = await chromium.launch({ executablePath: 'C:/Users/Lenovo/AppData/Local/ms-playwright/chromium-1243/chrome-win64/chrome.exe' });
  for (const [name, w, h] of [['i15', 393, 852], ['se', 375, 667], ['pro-max', 430, 932]]) {
    const p = await b.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 2 });
    await p.goto(`http://127.0.0.1:${PORT}/showroom.html`, { waitUntil: 'networkidle' });
    await p.waitForTimeout(1500);
    const a = await p.$('[data-rw-auto]');
    if (a && (await a.isVisible()) && (await a.getAttribute('aria-pressed')) === 'true') await a.click();
    await p.waitForTimeout(1800);
    const info = await p.evaluate(() => {
      const stage = document.querySelector('.rw__stage');
      const sr = stage.getBoundingClientRect();
      const models = [...document.querySelectorAll('[data-rw-model]')].map((m) => {
        const r = m.getBoundingClientRect();
        const img = m.querySelector('[data-model-image]');
        const cs = getComputedStyle(m);
        return {
          x: Math.round(r.x), w: Math.round(r.width), y: Math.round(r.y), h: Math.round(r.height),
          op: cs.opacity, filter: cs.filter,
          z: cs.zIndex,
          name: img ? img.getAttribute('alt').slice(0, 18) : '',
        };
      });
      return { stage: { x: Math.round(sr.x), y: Math.round(sr.y), w: Math.round(sr.width), h: Math.round(sr.height) }, models };
    });
    console.log('===', name, w, 'x', h, '===');
    console.log('stage', info.stage);
    info.models.forEach((m, i) => console.log(i, JSON.stringify(m)));
    await p.screenshot({ path: `/tmp/mob-${name}.png`, fullPage: true });
    // only the stage
    await p.locator('.rw__stage').screenshot({ path: `/tmp/mob-stage-${name}.png` });
    await p.close();
  }
  await b.close();
})();
