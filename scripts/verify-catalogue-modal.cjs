const { chromium } = require('C:/Users/Lenovo/AppData/Local/npm-cache/_npx/2334a3ea0ef73d73/node_modules/playwright');
const PORT = process.env.PORT || '3101';
const exe = 'C:/Users/Lenovo/AppData/Local/ms-playwright/chromium-1243/chrome-win64/chrome.exe';

async function run(browser, name, w, h) {
  const page = await browser.newPage({ viewport: { width: w, height: h } });
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('response', (r) => { if (r.status() >= 400) errors.push(r.status() + ' ' + r.url().split('/').pop()); });

  await page.goto(`http://127.0.0.1:${PORT}/catalogue.html`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  const cards = await page.locator('.sy-card[data-vehicle]').count();
  const counter = await page.locator('#catalogue-count').textContent();

  await page.locator('.sy-card[data-vehicle]').first().click();
  await page.waitForTimeout(250);

  const first = await page.evaluate(() => {
    const d = document.getElementById('vehicle-dialog');
    const wa = d.querySelector('[data-vehicle-whatsapp]');
    const img = d.querySelector('[data-vehicle-image]');
    return {
      open: d.open,
      title: d.querySelector('#vehicle-dialog-title').textContent,
      body: d.querySelector('[data-vehicle-body]').textContent,
      color: d.querySelector('[data-vehicle-color]').textContent,
      desc: d.querySelector('[data-vehicle-desc]').textContent.slice(0, 40),
      imgLoaded: !!img.complete && img.naturalWidth > 0,
      waText: decodeURIComponent(wa.href.split('?text=')[1] || ''),
      overflowX: document.documentElement.scrollWidth > window.innerWidth,
    };
  });

  await page.locator('#vehicle-dialog [data-vehicle-close]').first().click();
  const closed = await page.evaluate(() => !document.getElementById('vehicle-dialog').open);

  await page.locator('.sy-card[data-vehicle]').nth(8).click();
  const secondTitle = await page.locator('#vehicle-dialog-title').textContent();
  await page.keyboard.press('Escape');
  const escaped = await page.evaluate(() => !document.getElementById('vehicle-dialog').open);

  await page.locator('.sy-filter[data-filter="suv"]').click();
  const suvVisible = await page.locator('.sy-card[data-vehicle]:visible').count();
  const suvCounter = await page.locator('#catalogue-count').textContent();

  console.log(name, JSON.stringify({
    cards, counter, first, closed, secondTitle, escaped, suvVisible, suvCounter, errors,
  }, null, 2));

  await page.close();
}

(async () => {
  const browser = await chromium.launch({ executablePath: exe, headless: true });
  await run(browser, 'desktop', 1440, 900);
  await run(browser, 'mobile', 390, 844);
  await browser.close();
})();
