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
  const cards = Array.from(document.querySelectorAll('.sy-card[data-cat]'));
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
  initQuoteDialog();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
