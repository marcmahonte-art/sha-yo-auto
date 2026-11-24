const PORT = process.env.PORT || '3000';
const { chromium } = require('C:/Users/Lenovo/AppData/Local/npm-cache/_npx/2334a3ea0ef73d73/node_modules/playwright');

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:/Users/Lenovo/AppData/Local/ms-playwright/chromium-1243/chrome-win64/chrome.exe',
  });
  const errors = [];
  const page = await browser.newPage({ viewport: { width: 1440, height: 950 } });
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', (e) => errors.push('PAGEERROR ' + e.message));

  await page.goto('http://127.0.0.1:' + PORT + '/showroom.html', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  const auto = await page.$('[data-rw-auto]');
  if (auto && (await auto.getAttribute('aria-pressed')) === 'true') await auto.click();
  await page.waitForTimeout(1200);

  const ticks = await page.$$('[data-rw-tick]');
  for (let i = 0; i < ticks.length; i++) {
    await ticks[i].click();
    await page.waitForTimeout(2000);
    await page.screenshot({ path: `apercus/showroom-model-${i + 1}.png` });
  }

  // lightbox (pins are only rendered there in popup mode)
  await ticks[0].click();
  await page.waitForTimeout(1800);
  await page.click('[data-rw-hero][data-index="0"] [data-rw-zoom]');
  await page.waitForTimeout(1800);
  await page.screenshot({ path: 'apercus/showroom-zoom.png' });
  const pinBox = await page.evaluate(() => {
    const lb = document.querySelector('.rw__lb');
    const pins = [...document.querySelectorAll('.rw__lb-model .rw__pin')].map((p) => {
      const r = p.getBoundingClientRect();
      return { x: Math.round(r.x), y: Math.round(r.y), label: p.getAttribute('aria-label') };
    });
    return { open: lb && lb.getAttribute('aria-hidden'), pins };
  });
  console.log('lightbox:', JSON.stringify(pinBox, null, 1));

  // mobile
  const m = await browser.newPage({ viewport: { width: 390, height: 844 } });
  m.on('console', (x) => { if (x.type() === 'error') errors.push('MOBILE ' + x.text()); });
  await m.goto('http://127.0.0.1:' + PORT + '/showroom.html', { waitUntil: 'networkidle' });
  await m.waitForTimeout(2500);
  await m.screenshot({ path: 'apercus/showroom-mobile.png' });

  // home page showroom block
  const h = await browser.newPage({ viewport: { width: 1440, height: 950 } });
  h.on('pageerror', (e) => errors.push('HOME ' + e.message));
  await h.goto('http://127.0.0.1:' + PORT + '/', { waitUntil: 'networkidle' });
  await h.waitForTimeout(2500);
  const home = await h.evaluate(() => ({
    ticks: [...document.querySelectorAll('.rw__tick-name')].map((t) => t.textContent.trim()),
  }));
  console.log('accueil ticks:', home.ticks);

  console.log('console errors:', errors.length ? errors : 'none');
  await browser.close();
})();
