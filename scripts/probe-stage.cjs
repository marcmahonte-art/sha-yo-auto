const PORT = process.env.PORT || '3000';
const { chromium } = require('C:/Users/Lenovo/AppData/Local/npm-cache/_npx/2334a3ea0ef73d73/node_modules/playwright');

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:/Users/Lenovo/AppData/Local/ms-playwright/chromium-1243/chrome-win64/chrome.exe',
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 950 } });
  await page.goto('http://127.0.0.1:' + PORT + '/showroom.html', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);
  const auto = await page.$('[data-rw-auto]');
  if (auto && (await auto.getAttribute('aria-pressed')) === 'true') await auto.click();
  await page.waitForTimeout(1800);

  const out = await page.evaluate(() => {
    const stage = document.querySelector('[data-rw-stage]');
    const sr = stage.getBoundingClientRect();
    const models = [...document.querySelectorAll('[data-rw-model]')].map((m) => {
      const b = m.getBoundingClientRect();
      const fig = m.querySelector('.rw__figure').getBoundingClientRect();
      const img = m.querySelector('[data-model-image]').getBoundingClientRect();
      const cs = getComputedStyle(m);
      return {
        op: Number(m.style.opacity).toFixed(2),
        z: m.style.zIndex,
        filter: cs.filter,
        blend: cs.mixBlendMode,
        model: [Math.round(b.x), Math.round(b.width)],
        figure: [Math.round(fig.x), Math.round(fig.width)],
        img: [Math.round(img.x), Math.round(img.width)],
      };
    });
    const hero = document.querySelector('.rw__hero.is-on');
    const hb = hero.getBoundingClientRect();
    return {
      stage: [Math.round(sr.x), Math.round(sr.width)],
      hero: [Math.round(hb.x), Math.round(hb.width)],
      models: models.filter((m) => Number(m.op) > 0),
    };
  });
  console.log(JSON.stringify(out, null, 1));
  await browser.close();
})();
