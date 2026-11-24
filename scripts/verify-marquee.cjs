const { chromium } = require('C:/Users/Lenovo/AppData/Local/npm-cache/_npx/2334a3ea0ef73d73/node_modules/playwright');
const PORT = process.env.PORT || '3100';
(async () => {
  const b = await chromium.launch({ executablePath: 'C:/Users/Lenovo/AppData/Local/ms-playwright/chromium-1243/chrome-win64/chrome.exe' });
  for (const [name, w, h] of [['desktop', 1440, 950], ['mobile', 393, 852]]) {
    const p = await b.newPage({ viewport: { width: w, height: h } });
    const errs = [];
    p.on('pageerror', (e) => errs.push(e.message));
    p.on('response', (r) => { if (r.status() >= 400) errs.push(r.status() + ' ' + r.url().split('/').pop()); });
    await p.goto(`http://127.0.0.1:${PORT}/`, { waitUntil: 'networkidle' });
    await p.waitForTimeout(600);
    const sec = p.locator('#marques-et-collections');
    await sec.scrollIntoViewIfNeeded();
    await p.waitForTimeout(500);
    const first = await p.locator('.sy-marquee__track').evaluate((e) => getComputedStyle(e).transform);
    await p.locator('.sy-marquee').screenshot({ path: `/tmp/marquee-${name}-1.png` });
    await p.waitForTimeout(1400);
    const second = await p.locator('.sy-marquee__track').evaluate((e) => getComputedStyle(e).transform);
    await p.locator('.sy-marquee').screenshot({ path: `/tmp/marquee-${name}-2.png` });
    await sec.screenshot({ path: `/tmp/marquee-section-${name}.png` });
    const info = await p.evaluate(() => {
      const m = document.querySelector('.sy-marquee');
      const g = [...document.querySelectorAll('.sy-marquee__group')];
      const imgs = [...m.querySelectorAll('img')];
      return {
        overflow: getComputedStyle(m).overflow,
        groups: g.map((x) => Math.round(x.getBoundingClientRect().width)),
        imgs: imgs.length,
        broken: imgs.filter((i) => !i.complete || i.naturalWidth === 0).length,
        filter: getComputedStyle(imgs[0]).filter,
        hscroll: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      };
    });
    console.log(name, JSON.stringify(info), 'transform:', first, '->', second, 'errors:', errs.length ? errs : 'none');
    await p.close();
  }
  await b.close();
})();
