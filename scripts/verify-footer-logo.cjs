const { chromium } = require('C:/Users/Lenovo/AppData/Local/npm-cache/_npx/2334a3ea0ef73d73/node_modules/playwright');
const exe = 'C:/Users/Lenovo/AppData/Local/ms-playwright/chromium-1243/chrome-win64/chrome.exe';
const PORT = process.env.PORT || '3101';
const pages = ['index.html', 'a-propos.html', 'catalogue.html', 'services.html'];

(async () => {
  const browser = await chromium.launch({ executablePath: exe, headless: true });
  for (const w of [1440, 390]) {
    for (const file of pages) {
      const page = await browser.newPage({ viewport: { width: w, height: 900 } });
      const errors = [];
      page.on('pageerror', (e) => errors.push(e.message));
      page.on('response', (r) => { if (r.status() >= 400) errors.push(r.status() + ' ' + r.url().split('/').pop()); });
      await page.goto(`http://127.0.0.1:${PORT}/${file}`, { waitUntil: 'networkidle' });
      const img = page.locator('.sy-footer-brand .brand img');
      await img.evaluate((el) => el.decode().catch(() => {}));
      const data = await page.evaluate(() => {
        const el = document.querySelector('.sy-footer-brand .brand img');
        return {
          loaded: el.complete && el.naturalWidth > 0,
          alt: el.alt,
          width: Math.round(el.getBoundingClientRect().width),
          hscroll: document.documentElement.scrollWidth > window.innerWidth,
          hasOldText: document.querySelector('.sy-footer-brand .brand').textContent.trim() === 'SHA-YO AUTO',
        };
      });
      console.log(w, file, JSON.stringify(data), 'errors', errors.length);
      if (w === 1440 && file === 'index.html') {
        await page.locator('.sy-footer-brand').screenshot({ path: 'scripts/shot-footer-logo.png' });
      }
      await page.close();
    }
  }
  await browser.close();
})();
