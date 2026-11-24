const { chromium } = require('C:/Users/Lenovo/AppData/Local/npm-cache/_npx/2334a3ea0ef73d73/node_modules/playwright');
const PORT = process.env.PORT || '3100';

const SELECTORS = [
  'body', '.rw', '.rw__panel', '.rw__look-panel', 'request-configurator', '.rw__config',
  '.rw__config-body', '.rw__config-step:not([hidden])', '.rw__config-group',
  '.rw__config-choices', '.rw__config-summary', '.rw__config-row', '.rw__config-actions',
];

async function measure(p, label, vw) {
  const rows = await p.evaluate((sels) => sels.map((s) => {
    const e = document.querySelector(s);
    if (!e) return null;
    const r = e.getBoundingClientRect();
    return {
      s,
      x: Math.round(r.x), r: Math.round(r.right),
      w: Math.round(r.width), sw: e.scrollWidth, cw: e.clientWidth,
      over: e.scrollWidth - e.clientWidth,
    };
  }).filter(Boolean), SELECTORS);
  const bad = rows.filter((r) => r.over > 1 || r.r > vw + 1 || r.x < -1);
  console.log(label, bad.length ? JSON.stringify(bad) : 'aucun débordement');
  return bad;
}

(async () => {
  const b = await chromium.launch({ executablePath: 'C:/Users/Lenovo/AppData/Local/ms-playwright/chromium-1243/chrome-win64/chrome.exe' });
  for (const [name, w, h] of [['d1440', 1440, 950], ['d1024', 1024, 800], ['tab768', 768, 1024], ['i15', 393, 852], ['se', 375, 667], ['small', 360, 780]]) {
    const p = await b.newPage({ viewport: { width: w, height: h } });
    await p.goto(`http://127.0.0.1:${PORT}/showroom.html`, { waitUntil: 'networkidle' });
    await p.waitForTimeout(1400);
    const a = await p.$('[data-rw-auto]');
    if (a && (await a.isVisible()) && (await a.getAttribute('aria-pressed')) === 'true') await a.click();
    await p.waitForTimeout(600);
    await measure(p, name + ' step1', w);

    const flow = [
      [['motorisation', 'Diesel'], ['transmission', 'Automatique']],
      [['etat', 'Occasion']],
      [['budget', 'Plus de 40 millions FCFA']],
      [['couleur', 'Noir']],
    ];
    for (let i = 0; i < flow.length; i++) {
      for (const [n, v] of flow[i]) await p.locator(`input[name="${n}"][value="${v}"]`).check({ force: true });
      if (i < flow.length - 1) await p.click('[data-config-next]');
      await p.waitForTimeout(300);
      await measure(p, `${name} step${i + 2}`, w);
    }
    await p.waitForTimeout(1000);
    await p.screenshot({ path: `/tmp/overflow-${name}.png`, fullPage: true });
    await p.close();
  }
  await b.close();
})();
