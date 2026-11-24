/**
 * SHA-YO AUTO — interactions éditoriales (hors Showroom).
 * Le composant Showroom est piloté uniquement par src/main.ts, non modifié.
 */

const WHATSAPP_NUMBER = '22673366363';

function status(message) {
  const el = document.getElementById('sy-status');
  if (!el) return;
  el.textContent = message;
  window.setTimeout(() => {
    if (el.textContent === message) el.textContent = '';
  }, 5000);
}

/* ------------------------------------------------------- Filtres catalogue */

function initCatalogueFilters() {
  const filters = Array.from(document.querySelectorAll('.sy-filter[data-filter]'));
  const cards = Array.from(document.querySelectorAll('.sy-card'));
  if (!filters.length) return;

  const countEl = document.getElementById('catalogue-count');
  const reset = document.querySelector('[data-filter-reset]');

  const apply = (value) => {
    filters.forEach((btn) => {
      btn.setAttribute('aria-pressed', String(btn.dataset.filter === value));
    });

    let visible = 0;
    cards.forEach((card) => {
      const cats = (card.dataset.cat || '').split(/\s+/);
      const show = value === 'all' || cats.includes(value);
      card.hidden = !show;
      if (show) visible += 1;
    });

    if (countEl) {
      countEl.textContent = `${visible} véhicule${visible > 1 ? 's' : ''} publié${visible > 1 ? 's' : ''}`;
    }
  };

  filters.forEach((btn) => {
    btn.addEventListener('click', () => apply(btn.dataset.filter || 'all'));
  });

  if (reset) {
    reset.addEventListener('click', () => {
      apply('all');
      status('Filtres réinitialisés.');
    });
  }

  apply('all');
}

/* -------------------------------------------------- Fiche véhicule (pop-up) */

function initVehicleDialog() {
  const dialog = document.getElementById('vehicle-dialog');
  const cards = Array.from(document.querySelectorAll('.sy-card[data-vehicle]'));
  if (!dialog || !cards.length) return;

  const title = dialog.querySelector('[data-vehicle-dialog-title], #vehicle-dialog-title');
  const image = dialog.querySelector('[data-vehicle-image]');
  const body = dialog.querySelector('[data-vehicle-body]');
  const color = dialog.querySelector('[data-vehicle-color]');
  const angle = dialog.querySelector('[data-vehicle-angle]');
  const desc = dialog.querySelector('[data-vehicle-desc]');
  const whatsapp = dialog.querySelector('[data-vehicle-whatsapp]');
  const closers = Array.from(dialog.querySelectorAll('[data-vehicle-close]'));
  let opener = null;

  const close = () => {
    if (typeof dialog.close === 'function') dialog.close();
    else dialog.removeAttribute('open');
    if (opener && typeof opener.focus === 'function') opener.focus();
    opener = null;
  };

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      const name = card.dataset.vehicle || 'Véhicule';
      const vehicleBody = card.dataset.body || '—';
      const vehicleColor = card.dataset.color || '—';
      const vehicleAngle = card.dataset.angle || '—';
      const vehicleDesc = card.dataset.desc || '';
      const cardImage = card.querySelector('.sy-card-img');
      const src = cardImage ? (cardImage.currentSrc || cardImage.src || '') : '';

      opener = card;
      if (title) title.textContent = name;
      if (image) {
        if (src) image.src = src;
        image.alt = `${name}, ${vehicleBody}, ${vehicleColor}`;
      }
      if (body) body.textContent = vehicleBody;
      if (color) color.textContent = vehicleColor;
      if (angle) angle.textContent = vehicleAngle;
      if (desc) desc.textContent = vehicleDesc;

      if (whatsapp) {
        const lines = [
          'Bonjour SHA-YO AUTO,',
          'Je souhaite connaître le prix de ce véhicule :',
          `Véhicule : ${name}`,
          `Carrosserie : ${vehicleBody}`,
          `Teinte : ${vehicleColor}`,
          `Angle du visuel : ${vehicleAngle}`,
          vehicleDesc ? `Informations : ${vehicleDesc}` : '',
          'Merci de me confirmer le prix et la disponibilité.',
        ].filter(Boolean);
        whatsapp.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
      }

      if (typeof dialog.showModal === 'function') dialog.showModal();
      else dialog.setAttribute('open', '');
    });
  });

  closers.forEach((btn) => btn.addEventListener('click', close));

  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) close();
  });

  if (whatsapp) {
    whatsapp.addEventListener('click', () => {
      status('Votre demande de prix a été préparée dans WhatsApp.');
    });
  }
}

/* ---------------------------------------------------------- Boîte de devis */

function initQuoteDialog() {
  const dialog = document.getElementById('quote-dialog');
  const form = document.getElementById('quote-form');
  if (!dialog || !form) return;

  const subject = form.elements.namedItem('subject');
  const openers = Array.from(document.querySelectorAll('[data-quote-open]'));
  const closers = Array.from(document.querySelectorAll('[data-quote-close]'));

  const open = (opener) => {
    if (subject && opener && opener.dataset.subject) {
      subject.value = opener.dataset.subject;
    }
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');
    const first = form.querySelector('input');
    if (first) first.focus();
  };

  const close = () => {
    if (typeof dialog.close === 'function') dialog.close();
    else dialog.removeAttribute('open');
  };

  openers.forEach((btn) => btn.addEventListener('click', () => open(btn)));
  closers.forEach((btn) => btn.addEventListener('click', close));

  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) close();
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form.elements.namedItem('name');
    const phone = form.elements.namedItem('phone');
    const message = form.elements.namedItem('message');
    let valid = true;

    [name, phone].forEach((field) => {
      const empty = !field.value.trim();
      field.setAttribute('aria-invalid', String(empty));
      const error = field.parentElement.querySelector('.sy-error');
      if (error) error.textContent = empty ? 'Ce champ est obligatoire.' : '';
      if (empty) valid = false;
    });

    if (!valid) {
      const firstInvalid = form.querySelector('[aria-invalid="true"]');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    const lines = [
      'Bonjour SHA-YO AUTO,',
      `Je suis ${name.value.trim()}.`,
      `Objet : ${subject && subject.value ? subject.value : 'Demande d’information'}.`,
      message && message.value.trim() ? `Message : ${message.value.trim()}` : '',
      `Mon téléphone : ${phone.value.trim()}`,
    ].filter(Boolean);

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener');
    status('Votre demande a été préparée dans WhatsApp.');
    close();
    form.reset();
  });
}

/* ------------------------------------------------------------------- Init */

function init() {
  initCatalogueFilters();
  initVehicleDialog();
  initQuoteDialog();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
