const { chromium } = require('C:/Users/Lenovo/AppData/Local/npm-cache/_npx/2334a3ea0ef73d73/node_modules/playwright');
const exe = 'C:/Users/Lenovo/AppData/Local/ms-playwright/chromium-1243/chrome-win64/chrome.exe';
const PORT = process.env.PORT || '3101';

(async () => {
  const browser = await chromium.launch({ executablePath: exe, headless: true });
  for (const w of [1440, 1024, 768, 390, 360]) {
    const page = await browser.newPage({ viewport: { width: w, height: 900 } });
    const errors = [];
    page.on('pageerror', (e) => errors.push(e.message));
    page.on('response', (r) => { if (r.status() >= 400) errors.push(r.status() + ' ' + r.url().split('/').pop()); });
    await page.goto(`http://127.0.0.1:${PORT}/index.html`, { waitUntil: 'networkidle' });
    await page.locator('.sy-location-logo').evaluate((img) => img.decode().catch(() => {}));

    const data = await page.evaluate(() => {
      const s = document.getElementById('nous-trouver');
      const img = s.querySelector('.sy-location-logo');
      const hrefs = (sel) => [...s.querySelectorAll(sel)].map((a) => a.getAttribute('href'));
      const text = s.textContent;
      return {
        cols: getComputedStyle(s.querySelector('.sy-location-layout')).gridTemplateColumns,
        gridCols: getComputedStyle(s.querySelector('.sy-location-grid')).gridTemplateColumns,
        cards: s.querySelectorAll('.sy-location').length,
        cardHeights: [...s.querySelectorAll('.sy-location')].map((c) => Math.round(c.getBoundingClientRect().height)),
        logo: img.complete && img.naturalWidth > 0,
        dl: s.querySelectorAll('dl').length,
        oldInfo: ['Boulevard des Tensoba', 'Wemtenga (9GFC+PXF)', 'Sur les deux voies', 'Horaires non communiqués', 'Information non confirmée'].filter((v) => text.includes(v)),
        hscroll: document.documentElement.scrollWidth > window.innerWidth,
        wa: hrefs('a[href^="https://wa.me/"]'),
        tel: hrefs('a[href^="tel:"]'),
        map: hrefs('a[href*="google.com/maps"]'),
        service: s.querySelector('.sy-location-service')?.textContent.trim() || null,
        titles: [...s.querySelectorAll('.sy-location h3')].map((h) => h.textContent.trim()),
      };
    });
    console.log(w, JSON.stringify(data), 'errors', errors.length);
    if (w === 1440 || w === 390) {
      await page.locator('#nous-trouver').screenshot({ path: `scripts/shot-locations-${w}.png` });
    }
    await page.close();
  }
  await browser.close();
})();
