const PORT = process.env.PORT || '3000';
const { chromium } = require('C:/Users/Lenovo/AppData/Local/npm-cache/_npx/2334a3ea0ef73d73/node_modules/playwright');

const VIEWPORTS = [
  ['desktop-1440', 1440, 950],
  ['desktop-1280', 1280, 800],
  ['laptop-1024', 1024, 768],
  ['iphone-15', 393, 852],
  ['iphone-se', 375, 667],
  ['iphone-pro-max', 430, 932],
  ['android-360', 360, 780],
];

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:/Users/Lenovo/AppData/Local/ms-playwright/chromium-1243/chrome-win64/chrome.exe',
  });
  for (const [name, w, h] of VIEWPORTS) {
    const page = await browser.newPage({ viewport: { width: w, height: h } });
    await page.goto('http://127.0.0.1:' + PORT + '/showroom.html', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2200);
    const data = await page.evaluate(() => {
      const sec = document.querySelector('runway-section');
      const stage = document.querySelector('[data-rw-stage]');
      const hero = document.querySelector('.rw__hero.is-on');
      const img = hero?.querySelector('[data-model-image]');
      const head = document.querySelector('.rw__head');
      const ticks = document.querySelector('.rw__ticks');
      const cs = getComputedStyle(sec);
      const r = (el) => { const b = el.getBoundingClientRect(); return { x: Math.round(b.x), y: Math.round(b.y), w: Math.round(b.width), h: Math.round(b.height) }; };
      const neighbours = [...document.querySelectorAll('[data-rw-model]')]
        .filter((m) => Number(m.style.opacity) > 0.02 && Number(m.style.opacity) < 0.99)
        .map((m) => { const b = m.getBoundingClientRect(); return { x: Math.round(b.x), w: Math.round(b.width), op: Number(m.style.opacity).toFixed(2) }; });
      return {
        frameH: cs.getPropertyValue('--rw-frame-h').trim(),
        modelH: getComputedStyle(stage).getPropertyValue('--rw-model-h').trim(),
        section: r(sec), head: r(head), stage: r(stage), hero: r(hero), img: img ? r(img) : null,
        ticks: r(ticks),
        neighbours,
      };
    });
    const voidTop = data.hero.y - (data.head.y + data.head.h);
    const voidBottom = data.stage.y + data.stage.h - (data.hero.y + data.hero.h);
    console.log(`\n### ${name}  (${w}x${h})`);
    console.log(`  frame ${data.frameH} | modelH ${data.modelH}`);
    console.log(`  head  y=${data.head.y} h=${data.head.h}`);
    console.log(`  stage y=${data.stage.y} h=${data.stage.h}  (w=${data.stage.w})`);
    console.log(`  hero  y=${data.hero.y} h=${data.hero.h} w=${data.hero.w}  -> x ${data.hero.x}..${data.hero.x + data.hero.w}`);
    console.log(`  vide  au-dessus=${Math.round(voidTop)}  en-dessous=${Math.round(voidBottom)}`);
    console.log(`  voisins: ${JSON.stringify(data.neighbours)}`);
    await page.close();
  }
  await browser.close();
})();
