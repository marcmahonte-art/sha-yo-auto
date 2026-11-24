import './request-configurator.css';

export const WHATSAPP_NUMBER = '22673366363';

export interface ChoiceGroup {
  id: string;
  label: string;
  options: string[];
}

export interface RequestQuestion {
  id: string;
  title: string;
  groups: ChoiceGroup[];
  summaryLabel: string;
}

export const REQUEST_QUESTIONS: RequestQuestion[] = [
  {
    id: 'motorisation',
    title: 'Motorisation + Transmission',
    summaryLabel: 'Motorisation',
    groups: [
      { id: 'motorisation', label: 'Motorisation', options: ['Diesel', 'Essence', 'Hybride'] },
      { id: 'transmission', label: 'Transmission', options: ['Automatique', 'Manuelle'] },
    ],
  },
  {
    id: 'etat',
    title: 'État recherché',
    summaryLabel: 'État',
    groups: [{ id: 'etat', label: 'État recherché', options: ['Neuf', 'Occasion', 'Indifférent'] }],
  },
  {
    id: 'budget',
    title: 'Budget estimatif',
    summaryLabel: 'Budget',
    groups: [
      {
        id: 'budget',
        label: 'Budget estimatif',
        options: [
          'Moins de 10 millions FCFA',
          '10 à 15 millions FCFA',
          '15 à 25 millions FCFA',
          '25 à 40 millions FCFA',
          'Plus de 40 millions FCFA',
          'À discuter',
        ],
      },
    ],
  },
  {
    id: 'couleur',
    title: 'Couleur préférée',
    summaryLabel: 'Couleur',
    groups: [{ id: 'couleur', label: 'Couleur préférée', options: ['Noir', 'Blanc', 'Gris', 'Autre'] }],
  },
];

export function buildWhatsappUrl(lines: string[]): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
}

export class RequestConfigurator extends HTMLElement {
  private answers: Record<string, string> = {};
  private step = 0;
  private vehicleName = '';
  private rendered = false;

  connectedCallback(): void {
    if (this.rendered) return;
    this.rendered = true;
    this.render();
    this.bind();
    this.update();
  }

  public setVehicle(name: string): void {
    this.vehicleName = name || '';
    this.update();
  }

  public reset(): void {
    this.answers = {};
    this.step = 0;
    const status = this.querySelector<HTMLElement>('.rw__config-status');
    if (status) status.textContent = '';
    this.update();
  }

  private render(): void {
    const steps = REQUEST_QUESTIONS.map((question, index) => {
      const groups = question.groups
        .map((group) => {
          const choices = group.options
            .map((option, i) => {
              const id = `rw-opt-${group.id}-${i}`;
              return `<label class="rw__opt-choice" for="${id}"><input type="radio" id="${id}" name="${group.id}" value="${option}" /><span>${option}</span></label>`;
            })
            .join('');
          return `<fieldset class="rw__config-group"><legend>${group.label}</legend><div class="rw__config-choices">${choices}</div></fieldset>`;
        })
        .join('');

      return `<section class="rw__config-step" data-step="${index}" data-rw-card="${index + 1}" ${index ? 'hidden' : ''}>
        <span class="rw__type">${String(index + 1).padStart(2, '0')} — ${question.title}</span>
        ${groups}
      </section>`;
    }).join('');

    const summaryRows = REQUEST_QUESTIONS.map(
      (q) => `<div class="rw__config-row"><span>${q.summaryLabel}</span><strong data-summary="${q.id}">—</strong></div>`
    ).join('');

    this.innerHTML = `<div class="rw__config">
      <div class="rw__config-progress">
        <span data-step-count>01 / 04</span>
        <span class="rw__config-bar"><i data-step-bar></i></span>
      </div>
      <div class="rw__config-body">${steps}</div>
      <div class="rw__config-summary" aria-live="polite">
        <span class="rw__config-summary-title">Votre demande</span>
        <div class="rw__config-row"><span>Véhicule vu</span><strong data-summary="vehicle">—</strong></div>
        ${summaryRows}
        <p class="rw__config-note">Les budgets sont des tranches indicatives à adapter à la clientèle de SHA-YO AUTO.</p>
      </div>
      <div class="rw__config-actions">
        <button class="rw__config-back" type="button" data-config-back hidden>Retour</button>
        <button class="rw__cta" type="button" data-config-next>
          <span class="rw__cta-add">Continuer</span>
          <svg class="rw__cta-arrow" width="22" height="12" viewBox="0 0 26 14" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 7h24M19 1l6 6-6 6" /></svg>
        </button>
        <button class="rw__cta" type="button" data-config-send hidden>
          <span class="rw__cta-add">Envoyer ma configuration</span>
          <svg class="rw__cta-arrow" width="22" height="12" viewBox="0 0 26 14" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 7h24M19 1l6 6-6 6" /></svg>
        </button>
      </div>
      <p class="rw__config-status" role="status"></p>
    </div>`;
  }

  private bind(): void {
    this.addEventListener('change', (event) => {
      const input = event.target as HTMLInputElement;
      if (!input || input.type !== 'radio') return;
      this.answers[input.name] = input.value;
      this.update();
    });

    this.querySelector('[data-config-back]')?.addEventListener('click', () => {
      if (this.step > 0) {
        this.step -= 1;
        this.update();
      }
    });

    this.querySelector('[data-config-next]')?.addEventListener('click', () => {
      if (!this.canContinue()) return;
      if (this.step < REQUEST_QUESTIONS.length - 1) {
        this.step += 1;
        this.update();
      }
    });

    this.querySelector('[data-config-send]')?.addEventListener('click', () => this.send());
  }

  private canContinue(): boolean {
    return REQUEST_QUESTIONS[this.step].groups.every((group) => Boolean(this.answers[group.id]));
  }

  private isComplete(): boolean {
    return REQUEST_QUESTIONS.every((question) => question.groups.every((group) => Boolean(this.answers[group.id])));
  }

  private update(): void {
    if (!this.rendered) return;

    this.querySelectorAll<HTMLElement>('.rw__config-step').forEach((el, index) => {
      el.hidden = index !== this.step;
    });

    this.querySelectorAll<HTMLInputElement>('input[type="radio"]').forEach((input) => {
      input.checked = this.answers[input.name] === input.value;
    });

    const count = this.querySelector<HTMLElement>('[data-step-count]');
    if (count) count.textContent = `${String(this.step + 1).padStart(2, '0')} / ${String(REQUEST_QUESTIONS.length).padStart(2, '0')}`;
    const bar = this.querySelector<HTMLElement>('[data-step-bar]');
    if (bar) bar.style.width = `${((this.step + 1) / REQUEST_QUESTIONS.length) * 100}%`;

    const back = this.querySelector<HTMLButtonElement>('[data-config-back]');
    if (back) back.hidden = this.step === 0;
    const next = this.querySelector<HTMLButtonElement>('[data-config-next]');
    if (next) {
      next.hidden = this.isComplete();
      next.disabled = !this.canContinue();
    }
    const send = this.querySelector<HTMLButtonElement>('[data-config-send]');
    if (send) send.hidden = !this.isComplete();

    const vehicle = this.querySelector<HTMLElement>('[data-summary="vehicle"]');
    if (vehicle) vehicle.textContent = this.vehicleName || '—';
    const motor = this.querySelector<HTMLElement>('[data-summary="motorisation"]');
    if (motor) {
      const a = this.answers['motorisation'] || '';
      const b = this.answers['transmission'] || '';
      motor.textContent = [a, b].filter(Boolean).join(' · ') || '—';
    }
    (['etat', 'budget', 'couleur'] as const).forEach((id) => {
      const el = this.querySelector<HTMLElement>(`[data-summary="${id}"]`);
      if (el) el.textContent = this.answers[id] || '—';
    });
  }

  private send(): void {
    if (!this.isComplete()) return;
    const lines = [
      'Bonjour SHA-YO AUTO,',
      `Véhicule vu : ${this.vehicleName || 'Showroom'}`,
      `Motorisation : ${this.answers['motorisation']} · ${this.answers['transmission']}`,
      `État : ${this.answers['etat']}`,
      `Budget : ${this.answers['budget']}`,
      `Couleur : ${this.answers['couleur']}`,
    ];
    const status = this.querySelector<HTMLElement>('.rw__config-status');
    const opened = window.open(buildWhatsappUrl(lines), '_blank', 'noopener');
    if (status) {
      status.textContent = opened
        ? 'Votre demande a été préparée dans WhatsApp.'
        : 'Autorisez les fenêtres pop-up pour envoyer votre demande.';
    }
  }
}

if (!customElements.get('request-configurator')) {
  customElements.define('request-configurator', RequestConfigurator);
}
