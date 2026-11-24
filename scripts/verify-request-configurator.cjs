const { chromium } = require('C:/Users/Lenovo/AppData/Local/npm-cache/_npx/2334a3ea0ef73d73/node_modules/playwright');
const PORT = process.env.PORT || '3100';

async function run(b, name, w, h) {
  const p = await b.newPage({ viewport: { width: w, height: h } });
  const errs = [];
  p.on('pageerror', (e) => errs.push(e.message));
  p.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()); });
  p.on('response', (r) => { if (r.status() >= 400) errs.push(r.status() + ' ' + r.url().split('/').pop()); });
  await p.goto(`http://127.0.0.1:${PORT}/showroom.html`, { waitUntil: 'networkidle' });
  await p.waitForTimeout(1200);
  const a = await p.$('[data-rw-auto]');
  if (a && (await a.isVisible()) && (await a.getAttribute('aria-pressed')) === 'true') await a.click();
  await p.waitForTimeout(700);

  const base = await p.evaluate(() => {
    const c = document.querySelector('request-configurator');
    return c ? {
      steps: c.querySelectorAll('.rw__config-step').length,
      pins: document.querySelectorAll('[data-rw-hero][data-index="0"] [data-rw-pin]').length,
      vehicle: c.querySelector('[data-summary="vehicle"]').textContent,
      host: c.parentElement?.getAttribute('data-rw-config-host') !== null,
      label: document.querySelector('[data-rw-pieces]').textContent,
    } : null;
  });
  console.log(name, 'base', JSON.stringify(base));

  const choose = async (name, value) => {
    await p.locator(`request-configurator input[name="${name}"][value="${value}"]`).check({ force: true });
  };
  await choose('motorisation', 'Diesel');
  await choose('transmission', 'Automatique');
  await p.click('[data-config-next]');
  await choose('etat', 'Occasion');
  await p.click('[data-config-next]');
  await choose('budget', '15 à 25 millions FCFA');
  await p.click('[data-config-next]');
  await choose('couleur', 'Noir');

  const summary = await p.evaluate(() => {
    const c = document.querySelector('request-configurator');
    return Object.fromEntries([...c.querySelectorAll('.rw__config-row')].map((r) => [r.querySelector('span').textContent, r.querySelector('strong').textContent]));
  });
  const sendVisible = await p.locator('[data-config-send]').isVisible();
  console.log(name, 'summary', JSON.stringify(summary), 'send', sendVisible);
  await p.waitForTimeout(1200);
  await p.locator('.rw__panel').screenshot({ path: `/tmp/config-${name}-filled.png` });

  // message WhatsApp (sans ouvrir réellement la fenêtre)
  const message = await p.evaluate(() => {
    const orig = window.open;
    let url = '';
    window.open = (u) => { url = u; return {}; };
    document.querySelector('[data-config-send]').click();
    window.open = orig;
    return decodeURIComponent(url.split('?text=')[1] || '');
  });
  console.log(name, 'message:', JSON.stringify(message));

  // changement de modèle -> reset
  if (w < 750) {
    await p.evaluate(() => document.querySelector('runway-section').go(1));
  } else {
    const ticks = await p.$$('[data-rw-tick]');
    await ticks[1].click();
  }
  await p.waitForTimeout(1400);
  const after = await p.evaluate(() => {
    const c = document.querySelector('request-configurator');
    return {
      vehicle: c.querySelector('[data-summary="vehicle"]').textContent,
      step: c.querySelector('[data-step-count]').textContent,
      checked: c.querySelectorAll('input:checked').length,
      summary: c.querySelector('[data-summary="etat"]').textContent,
      hostIndex: c.parentElement?.closest('[data-rw-panel]')?.dataset.rwPanel,
    };
  });
  console.log(name, 'after switch', JSON.stringify(after));
  await p.locator('.rw__panel').screenshot({ path: `/tmp/config-${name}-reset.png` });
  console.log(name, 'errors:', errs.length ? errs : 'none');
  const over = await p.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  console.log(name, 'hscroll', over);
  await p.close();
}

(async () => {
  const b = await chromium.launch({ executablePath: 'C:/Users/Lenovo/AppData/Local/ms-playwright/chromium-1243/chrome-win64/chrome.exe' });
  await run(b, 'desktop', 1440, 950);
  await run(b, 'mobile', 393, 852);
  await b.close();
})();
