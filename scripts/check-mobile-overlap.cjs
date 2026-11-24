const { chromium } = require('C:/Users/Lenovo/AppData/Local/npm-cache/_npx/2334a3ea0ef73d73/node_modules/playwright');
const PORT = process.env.PORT || '3100';
(async () => {
  const b = await chromium.launch({ executablePath: 'C:/Users/Lenovo/AppData/Local/ms-playwright/chromium-1243/chrome-win64/chrome.exe' });
  const p = await b.newPage({ viewport: { width: 393, height: 852 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  const errs = [];
  p.on('pageerror', (e) => errs.push(e.message));
  p.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()); });
  await p.goto(`http://127.0.0.1:${PORT}/showroom.html`, { waitUntil: 'networkidle' });
  await p.waitForTimeout(1600);
  // stop autoplay via the pause control
  await p.evaluate(() => {
    const a = document.querySelector('[data-rw-auto]');
    if (a && a.getAttribute('aria-pressed') === 'true') a.click();
  });
  await p.waitForTimeout(1400);
  await p.screenshot({ path: '/tmp/chk-mobile-page.png', fullPage: true });
  await p.locator('.rw__stage').screenshot({ path: '/tmp/chk-mobile-stage.png' });

  const stages = await p.locator('.rw__stage').boundingBox();
  // swipe left to advance and capture transition frames
  await p.mouse.move(stages.x + stages.width * 0.75, stages.y + stages.height * 0.5);
  await p.mouse.down();
  await p.mouse.move(stages.x + stages.width * 0.15, stages.y + stages.height * 0.5, { steps: 8 });
  await p.mouse.up();
  for (let i = 0; i < 4; i++) {
    await p.waitForTimeout(180 + i * 180);
    await p.locator('.rw__stage').screenshot({ path: `/tmp/chk-swipe-${i}.png` });
  }
  await p.waitForTimeout(1500);
  await p.locator('.rw__stage').screenshot({ path: '/tmp/chk-after-swipe.png' });

  // lightbox on mobile
  const zoom = await p.$('[data-rw-hero][data-index="1"] [data-rw-zoom]');
  if (zoom) {
    await zoom.click({ force: true });
    await p.waitForTimeout(1400);
    await p.screenshot({ path: '/tmp/chk-mobile-lightbox.png' });
  }
  console.log('errors:', errs.length ? errs : 'none');
  await p.close();

  const h = await b.newPage({ viewport: { width: 393, height: 852 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await h.goto(`http://127.0.0.1:${PORT}/`, { waitUntil: 'networkidle' });
  await h.waitForTimeout(2200);
  await h.locator('#showroom').screenshot({ path: '/tmp/chk-home-stage.png' });
  await h.close();
  await b.close();
})();
