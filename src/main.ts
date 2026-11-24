interface Variant {
  id: number;
  a: boolean;
  o: string[];
}

interface CatalogItem {
  id: string;
  name: string;
  type: string;
  modelName: string;
  price: number;
  image: string;
  sizes: string[];
  variants: Variant[];
}

interface CatalogLook {
  name: string;
  description: string;
  image: string;
  products: string[];
}

interface CatalogData {
  looks: CatalogLook[];
  items: CatalogItem[];
}

interface BagEntry {
  id: number;
  quantity: number;
}

interface BodyState {
  el: HTMLElement;
  hit: HTMLButtonElement | null;
  index: number;
  a: number;
  x: number;
  g: number;
  v: number;
  prevGoal: number;
  trip: boolean;
  from: number;
  blurStr: string;
  w: number;
}

const CAR_AR = 1.58;

const CATALOG: CatalogData = {
  looks: [
    {
      name: 'Toyota Camry SE Hybrid',
      description: 'Berline, blanc nacré — finition SE hybride.',
      image: '/src/assets/images/showroom-toyota-camry-se-hybrid.webp',
      products: ['gt3-jantes', 'gt3-sellerie', 'gt3-aero'],
    },
    {
      name: 'Skynomad SUV',
      description: 'Grand SUV, gris anthracite.',
      image: '/src/assets/images/showroom-skynomad-suv.webp',
      products: ['296-jantes', '296-sellerie', '296-aero'],
    },
    {
      name: 'Changan UNI-V',
      description: 'Berline fastback, gris foncé.',
      image: '/src/assets/images/showroom-changan-uni-v.webp',
      products: ['db12-jantes', 'db12-sellerie', 'db12-aero'],
    },
    {
      name: 'Landwind X7 2.0T',
      description: 'SUV compact, or / bronze métallisé.',
      image: '/src/assets/images/showroom-landwind-x7-2-0t.webp',
      products: ['sto-jantes', 'sto-sellerie', 'sto-aero'],
    },
    {
      name: 'Mazda CX-5',
      description: 'SUV, noir profond.',
      image: '/src/assets/images/showroom-mazda-cx-5.webp',
      products: ['gt-ev-jantes', 'gt-ev-sellerie', 'gt-ev-aero'],
    },
    {
      name: 'Jetour Traveller T2',
      description: '4x4 tout-terrain, blanc & noir.',
      image: '/src/assets/images/showroom-jetour-traveller-t2.webp',
      products: ['db11-jantes', 'db11-sellerie', 'db11-aero'],
    },
  ],
  items: [
    {
      id: 'gt3-jantes',
      name: 'Jantes alliage',
      type: 'Train roulant',
      modelName: 'Toyota Camry SE Hybrid',
      price: 6800,
      image: '/src/assets/images/part_forged_wheel_1795459065168.jpg',
      sizes: ['20" / 21"', '21" / 22"', 'Magnésium'],
      variants: [
        { id: 10101, a: true, o: ['20" / 21"'] },
        { id: 10102, a: true, o: ['21" / 22"'] },
        { id: 10103, a: true, o: ['Magnésium'] },
      ],
    },
    {
      id: 'gt3-sellerie',
      name: 'Sellerie et habillage',
      type: 'Habitacle',
      modelName: 'Toyota Camry SE Hybrid',
      price: 5400,
      image: '/src/assets/images/part_sport_seat_1795459064793.jpg',
      sizes: ['Alcantara Noir', 'Cuir Craie', 'Race-Tex GT'],
      variants: [
        { id: 10104, a: true, o: ['Alcantara Noir'] },
        { id: 10105, a: true, o: ['Cuir Craie'] },
        { id: 10106, a: true, o: ['Race-Tex GT'] },
      ],
    },
    {
      id: 'gt3-aero',
      name: 'Kit carrosserie',
      type: 'Extérieur',
      modelName: 'Toyota Camry SE Hybrid',
      price: 9800,
      image: '/src/assets/images/part_carbon_aero_1795459065577.jpg',
      sizes: ['Satiné', 'Brillant', 'Carbone Apparent'],
      variants: [
        { id: 10107, a: true, o: ['Satiné'] },
        { id: 10108, a: true, o: ['Brillant'] },
        { id: 10109, a: true, o: ['Carbone Apparent'] },
      ],
    },
    {
      id: '296-jantes',
      name: 'Jantes alliage',
      type: 'Train roulant',
      modelName: 'Skynomad SUV',
      price: 7400,
      image: '/src/assets/images/part_forged_wheel_1795459065168.jpg',
      sizes: ['20"', '21"', 'Fibre Carbone'],
      variants: [
        { id: 10201, a: true, o: ['20"'] },
        { id: 10202, a: true, o: ['21"'] },
        { id: 10203, a: true, o: ['Fibre Carbone'] },
      ],
    },
    {
      id: '296-sellerie',
      name: 'Sellerie et habillage',
      type: 'Habitacle',
      modelName: 'Skynomad SUV',
      price: 6200,
      image: '/src/assets/images/part_sport_seat_1795459064793.jpg',
      sizes: ['Cuir Nero', 'Rosso Daytona', 'Alcantara'],
      variants: [
        { id: 10204, a: true, o: ['Cuir Nero'] },
        { id: 10205, a: true, o: ['Rosso Daytona'] },
        { id: 10206, a: true, o: ['Alcantara'] },
      ],
    },
    {
      id: '296-aero',
      name: 'Kit carrosserie',
      type: 'Extérieur',
      modelName: 'Skynomad SUV',
      price: 11400,
      image: '/src/assets/images/part_carbon_aero_1795459065577.jpg',
      sizes: ['Brillant', 'Satiné', 'Forgé'],
      variants: [
        { id: 10207, a: true, o: ['Brillant'] },
        { id: 10208, a: true, o: ['Satiné'] },
        { id: 10209, a: true, o: ['Forgé'] },
      ],
    },
    {
      id: 'db12-jantes',
      name: 'Jantes alliage',
      type: 'Train roulant',
      modelName: 'Changan UNI-V',
      price: 5800,
      image: '/src/assets/images/part_forged_wheel_1795459065168.jpg',
      sizes: ['21"', '22"', 'Bronze Satiné'],
      variants: [
        { id: 10301, a: true, o: ['21"'] },
        { id: 10302, a: true, o: ['22"'] },
        { id: 10303, a: true, o: ['Bronze Satiné'] },
      ],
    },
    {
      id: 'db12-sellerie',
      name: 'Sellerie et habillage',
      type: 'Habitacle',
      modelName: 'Changan UNI-V',
      price: 6400,
      image: '/src/assets/images/part_sport_seat_1795459064793.jpg',
      sizes: ['Cuir Havane', 'Noir Obsidienne', 'Vert Racing'],
      variants: [
        { id: 10304, a: true, o: ['Cuir Havane'] },
        { id: 10305, a: true, o: ['Noir Obsidienne'] },
        { id: 10306, a: true, o: ['Vert Racing'] },
      ],
    },
    {
      id: 'db12-aero',
      name: 'Kit carrosserie',
      type: 'Extérieur',
      modelName: 'Changan UNI-V',
      price: 7800,
      image: '/src/assets/images/part_carbon_aero_1795459065577.jpg',
      sizes: ['2x2 Twill', 'Satiné', 'Noir Laqué'],
      variants: [
        { id: 10307, a: true, o: ['2x2 Twill'] },
        { id: 10308, a: true, o: ['Satiné'] },
        { id: 10309, a: true, o: ['Noir Laqué'] },
      ],
    },
    {
      id: 'sto-jantes',
      name: 'Jantes alliage',
      type: 'Train roulant',
      modelName: 'Landwind X7 2.0T',
      price: 7900,
      image: '/src/assets/images/part_forged_wheel_1795459065168.jpg',
      sizes: ['20"', '21"', 'Magnésium Noir'],
      variants: [
        { id: 10401, a: true, o: ['20"'] },
        { id: 10402, a: true, o: ['21"'] },
        { id: 10403, a: true, o: ['Magnésium Noir'] },
      ],
    },
    {
      id: 'sto-sellerie',
      name: 'Sellerie et habillage',
      type: 'Habitacle',
      modelName: 'Landwind X7 2.0T',
      price: 5900,
      image: '/src/assets/images/part_sport_seat_1795459064793.jpg',
      sizes: ['Nero Cosmus', 'Grigio Titans', 'Surpiqûres Or'],
      variants: [
        { id: 10404, a: true, o: ['Nero Cosmus'] },
        { id: 10405, a: true, o: ['Grigio Titans'] },
        { id: 10406, a: true, o: ['Surpiqûres Or'] },
      ],
    },
    {
      id: 'sto-aero',
      name: 'Kit carrosserie',
      type: 'Extérieur',
      modelName: 'Landwind X7 2.0T',
      price: 12200,
      image: '/src/assets/images/part_carbon_aero_1795459065577.jpg',
      sizes: ['Carbone Mat', 'Carbone Forgé', 'Brillant'],
      variants: [
        { id: 10407, a: true, o: ['Carbone Mat'] },
        { id: 10408, a: true, o: ['Carbone Forgé'] },
        { id: 10409, a: true, o: ['Brillant'] },
      ],
    },
    {
      id: 'gt-ev-jantes',
      name: 'Jantes alliage',
      type: 'Train roulant',
      modelName: 'Mazda CX-5',
      price: 4600,
      image: '/src/assets/images/part_forged_wheel_1795459065168.jpg',
      sizes: ['20"', '21"', '22"'],
      variants: [
        { id: 10501, a: true, o: ['20"'] },
        { id: 10502, a: true, o: ['21"'] },
        { id: 10503, a: true, o: ['22"'] },
      ],
    },
    {
      id: 'gt-ev-sellerie',
      name: 'Sellerie et habillage',
      type: 'Habitacle',
      modelName: 'Mazda CX-5',
      price: 4900,
      image: '/src/assets/images/part_sport_seat_1795459064793.jpg',
      sizes: ['Noir Carbone', 'Blanc Polaire', 'Gris Graphite'],
      variants: [
        { id: 10504, a: true, o: ['Noir Carbone'] },
        { id: 10505, a: true, o: ['Blanc Polaire'] },
        { id: 10506, a: true, o: ['Gris Graphite'] },
      ],
    },
    {
      id: 'gt-ev-aero',
      name: 'Kit carrosserie',
      type: 'Extérieur',
      modelName: 'Mazda CX-5',
      price: 6500,
      image: '/src/assets/images/part_carbon_aero_1795459065577.jpg',
      sizes: ['Satiné', 'Brillant', 'Mat'],
      variants: [
        { id: 10507, a: true, o: ['Satiné'] },
        { id: 10508, a: true, o: ['Brillant'] },
        { id: 10509, a: true, o: ['Mat'] },
      ],
    },
    {
      id: 'db11-jantes',
      name: 'Jantes alliage',
      type: 'Train roulant',
      modelName: 'Jetour Traveller T2',
      price: 5600,
      image: '/src/assets/images/part_forged_wheel_1795459065168.jpg',
      sizes: ['20"', '21"', 'Titane Brossé'],
      variants: [
        { id: 10601, a: true, o: ['20"'] },
        { id: 10602, a: true, o: ['21"'] },
        { id: 10603, a: true, o: ['Titane Brossé'] },
      ],
    },
    {
      id: 'db11-sellerie',
      name: 'Sellerie et habillage',
      type: 'Habitacle',
      modelName: 'Jetour Traveller T2',
      price: 6100,
      image: '/src/assets/images/part_sport_seat_1795459064793.jpg',
      sizes: ['Bleu Nuit', 'Cuir Camel', 'Noir Pur'],
      variants: [
        { id: 10604, a: true, o: ['Bleu Nuit'] },
        { id: 10605, a: true, o: ['Cuir Camel'] },
        { id: 10606, a: true, o: ['Noir Pur'] },
      ],
    },
    {
      id: 'db11-aero',
      name: 'Kit carrosserie',
      type: 'Extérieur',
      modelName: 'Jetour Traveller T2',
      price: 8300,
      image: '/src/assets/images/part_carbon_aero_1795459065577.jpg',
      sizes: ['Brillant', 'Satiné', 'Carbone Teinté'],
      variants: [
        { id: 10607, a: true, o: ['Brillant'] },
        { id: 10608, a: true, o: ['Satiné'] },
        { id: 10609, a: true, o: ['Carbone Teinté'] },
      ],
    },
  ],
};

const STORAGE_KEY = 'showroom-selection-v1';
const MONEY_FORMAT = new Intl.NumberFormat('fr-FR', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
});

function clamp(val: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, val));
}

function decodeModelImage(img: HTMLImageElement): void {
  if (img.classList.contains('is-decoded')) return;
  const mark = () => img.classList.add('is-decoded');
  if (typeof img.decode === 'function') {
    img
      .decode()
      .then(mark)
      .catch(() => {
        if (img.complete && img.naturalWidth > 0) {
          mark();
        } else {
          img.addEventListener('load', mark, { once: true });
        }
      });
  } else if (img.complete && img.naturalWidth > 0) {
    mark();
  } else {
    img.addEventListener('load', mark, { once: true });
  }
}

class StylingBag {
  private entries: BagEntry[] = [];
  private variantMap = new Map<number, { item: CatalogItem; variant: Variant }>();
  private toastTimer = 0;
  private dialog: HTMLDialogElement | null;
  private itemsEl: HTMLElement | null;
  private totalEl: HTMLElement | null;
  private exportBtn: HTMLButtonElement | null;
  private statusEl: HTMLElement | null;

  constructor() {
    this.dialog = document.getElementById('bag-dialog') as HTMLDialogElement | null;
    this.itemsEl = document.getElementById('bag-items');
    this.totalEl = document.getElementById('bag-total');
    this.exportBtn = document.getElementById('export-bag') as HTMLButtonElement | null;
    this.statusEl = document.getElementById('bag-status');

    this.validateCatalog();
    this.load();
    this.updateCounts();
    this.bindUI();
  }

  private validateCatalog(): void {
    if (!CATALOG || !Array.isArray(CATALOG.items)) {
      throw new Error('Impossible de charger le catalogue.');
    }
    for (const item of CATALOG.items) {
      if (
        typeof item.id !== 'string' ||
        typeof item.name !== 'string' ||
        !Number.isFinite(item.price) ||
        item.price < 0 ||
        !Array.isArray(item.variants)
      ) {
        throw new Error('Le catalogue est indisponible.');
      }
      for (const variant of item.variants) {
        if (
          !Number.isSafeInteger(variant.id) ||
          typeof variant.a !== 'boolean' ||
          !Array.isArray(variant.o) ||
          !variant.o.every((x) => typeof x === 'string')
        ) {
          throw new Error('Le catalogue est indisponible.');
        }
        this.variantMap.set(variant.id, { item, variant });
      }
    }
  }

  private load(): void {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        this.entries = [];
        return;
      }
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) {
        this.entries = [];
        return;
      }
      this.entries = parsed
        .filter(
          (e): e is BagEntry =>
            e &&
            typeof e === 'object' &&
            Number.isSafeInteger(e.id) &&
            Number.isSafeInteger(e.quantity) &&
            e.quantity >= 1 &&
            e.quantity <= 20
        )
        .slice(0, 50);
    } catch {
      this.entries = [];
    }
  }

  private save(): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.entries));
    } catch {
      // Ignore storage errors in restricted contexts
    }
  }

  private updateCounts(): void {
    const count = this.entries.reduce((sum, e) => sum + e.quantity, 0);
    document.querySelectorAll('[data-cart-count]').forEach((el) => {
      el.textContent = String(count);
    });
  }

  private showToast(msg: string): void {
    if (!this.statusEl) return;
    window.clearTimeout(this.toastTimer);
    this.statusEl.textContent = msg;
    this.statusEl.classList.add('is-on');
    this.toastTimer = window.setTimeout(() => {
      this.statusEl?.classList.remove('is-on');
    }, 2500);
  }

  private bindUI(): void {
    const openBtn = document.getElementById('open-bag');
    const closeBtn = document.getElementById('close-bag');

    openBtn?.addEventListener('click', () => {
      this.render();
      this.dialog?.showModal();
    });

    closeBtn?.addEventListener('click', () => {
      this.dialog?.close();
    });

    this.dialog?.addEventListener('click', (e) => {
      if (!this.dialog) return;
      const rect = this.dialog.getBoundingClientRect();
      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
      if (!inside) {
        this.dialog.close();
      }
    });

    this.exportBtn?.addEventListener('click', () => {
      this.exportShortlist();
    });
  }

  public add(items: Array<{ id: number; quantity: number }>): void {
    if (!Array.isArray(items) || items.length === 0) {
      throw new Error('Veuillez choisir une finition disponible.');
    }
    for (const req of items) {
      const hit = this.variantMap.get(req.id);
      if (!hit || !hit.variant.a) {
        throw new Error('Veuillez choisir une finition disponible.');
      }
    }

    for (const req of items) {
      const qty = clamp(req.quantity || 1, 1, 20);
      const existing = this.entries.find((e) => e.id === req.id);
      if (existing) {
        existing.quantity = Math.min(20, existing.quantity + qty);
      } else if (this.entries.length < 50) {
        this.entries.push({ id: req.id, quantity: qty });
      }
    }

    this.save();
    this.updateCounts();
    if (this.dialog?.open) {
      this.render();
    }
    this.showToast(
      items.length === 1
        ? 'Équipement ajouté à votre sélection'
        : 'Configuration ajoutée à votre sélection'
    );
  }

  public render(): void {
    if (!this.itemsEl || !this.totalEl || !this.exportBtn) return;

    this.itemsEl.innerHTML = '';

    const validEntries = this.entries.filter((e) => this.variantMap.has(e.id));
    if (validEntries.length === 0) {
      const empty = document.createElement('p');
      empty.className = 'bag-note';
      empty.textContent =
        'Votre sélection est vide. Choisissez une finition pour enregistrer un équipement.';
      this.itemsEl.appendChild(empty);
      this.totalEl.textContent = '';
      this.exportBtn.disabled = true;
      return;
    }

    let subtotal = 0;

    validEntries.forEach((entry) => {
      const lookup = this.variantMap.get(entry.id);
      if (!lookup) return;
      const { item, variant } = lookup;

      subtotal += item.price * entry.quantity;

      const row = document.createElement('div');
      row.className = 'bag-row';

      const img = document.createElement('img');
      img.src = item.image;
      img.alt = item.name;
      img.loading = 'lazy';
      img.decoding = 'async';
      img.referrerPolicy = 'no-referrer';

      const details = document.createElement('div');
      const title = document.createElement('h3');
      title.textContent = item.name;

      const meta = document.createElement('p');
      meta.textContent = `Finition ${variant.o.join(' / ')} · Quantité ${entry.quantity} · ${MONEY_FORMAT.format(item.price)}`;

      const modelRef = document.createElement('p');
      modelRef.className = 'bag-model-ref';
      modelRef.textContent = item.modelName;

      details.append(title, meta, modelRef);

      const removeBtn = document.createElement('button');
      removeBtn.className = 'bag-remove';
      removeBtn.type = 'button';
      removeBtn.setAttribute('aria-label', `Supprimer ${item.name}`);
      removeBtn.textContent = '×';
      removeBtn.addEventListener('click', () => {
        const idx = this.entries.indexOf(entry);
        if (idx !== -1) {
          this.entries.splice(idx, 1);
          this.save();
          this.updateCounts();
          this.render();
        }
      });

      row.append(img, details, removeBtn);
      this.itemsEl?.appendChild(row);
    });

    this.totalEl.textContent = `Total indicatif ${MONEY_FORMAT.format(subtotal)}`;
    this.exportBtn.disabled = false;
  }

  private exportShortlist(): void {
    const validEntries = this.entries.filter((e) => this.variantMap.has(e.id));
    if (validEntries.length === 0) return;

    let subtotal = 0;
    const lines = validEntries.map((entry) => {
      const lookup = this.variantMap.get(entry.id)!;
      subtotal += lookup.item.price * entry.quantity;
      return `${lookup.item.modelName} — ${lookup.item.name} · Finition ${lookup.variant.o.join(' / ')} · Quantité ${entry.quantity} · ${MONEY_FORMAT.format(lookup.item.price)}`;
    });

    const parts = [
      'MAISON AUTO — FICHE DE CONFIGURATION',
      'Tarifs indicatifs ; aucune commande ni paiement n’est effectué ici.',
      '',
      ...lines,
      '',
      `Total indicatif : ${MONEY_FORMAT.format(subtotal)}`,
    ];

    const blob = new Blob([parts.join('\n\n')], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'showroom-configuration.txt';
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
}

const bag = new StylingBag();

class RunwaySection extends HTMLElement {
  private readonly LOOK_COUNT = 6;
  private readonly BODY_COUNT = 12;
  private readonly K = 95;
  private readonly C = 2 * Math.sqrt(95);

  private stage!: HTMLElement;
  private actorsEl!: HTMLElement;
  private heroesEl!: HTMLElement;
  private panelEl!: HTMLElement;
  private liveEl!: HTMLElement;
  private piecesEl!: HTMLElement;
  private autoBtn!: HTMLButtonElement;
  private cursorEl: HTMLElement | null = null;
  private lb!: HTMLElement;
  private lbStage!: HTMLElement;
  private lbKicker!: HTMLElement;
  private lbName!: HTMLElement;

  private bodies: BodyState[] = [];
  private heroes: HTMLElement[] = [];
  private ticks: HTMLButtonElement[] = [];
  private panels: HTMLElement[] = [];

  private index = 0;
  private target = 0;
  private cur = 0;
  private vel = 0;
  private still = true;
  private zoomed = false;
  private playing = false;
  private visible = true;
  private dragging = false;
  private panelHover = false;
  private engaged = false;
  private reducedMotion = false;

  private W = 0;
  private H = 0;
  private fs = 1.08;
  private modelH = 380;
  private unit = 300;
  private latchedVh = 0;
  private latchedW = 0;

  private rafId = 0;
  private lastTime = 0;
  private autoTimer = 0;
  private resizeTimer = 0;
  private zoomClearTimer = 0;
  private wheelAcc = 0;
  private wheelLockUntil = 0;
  private suppressClickUntil = 0;

  // Drag tracking
  private dragPointerId = -1;
  private dragStartX = 0;
  private dragStartY = 0;
  private dragStartTarget = 0;
  private dragIntent: 'none' | 'drag' | 'abandoned' = 'none';
  private dragSamples: Array<{ x: number; t: number }> = [];

  // Custom cursor
  private cursorX = 0;
  private cursorY = 0;
  private cursorTargetX = 0;
  private cursorTargetY = 0;
  private cursorEntered = false;
  private cursorRafId = 0;

  // Mobile sheet state
  private sheetHost: HTMLElement | null = null;
  private activeSheetCard: HTMLElement | null = null;
  private activePickerPlaceholder: Comment | null = null;

  private visObserver: IntersectionObserver | null = null;
  private revealObserver: IntersectionObserver | null = null;
  private stageResizeObserver: ResizeObserver | null = null;
  private motionMq: MediaQueryList | null = null;
  private cleanups: Array<() => void> = [];

  connectedCallback(): void {
    this.stage = this.querySelector('[data-rw-stage]') as HTMLElement;
    this.actorsEl = this.querySelector('[data-rw-actors]') as HTMLElement;
    this.heroesEl = this.querySelector('[data-rw-heroes]') as HTMLElement;
    this.panelEl = this.querySelector('.rw__panel') as HTMLElement;
    this.liveEl = this.querySelector('[data-rw-live]') as HTMLElement;
    this.piecesEl = this.querySelector('[data-rw-pieces]') as HTMLElement;
    this.autoBtn = this.querySelector('[data-rw-auto]') as HTMLButtonElement;
    this.cursorEl = this.querySelector('[data-rw-cursor]') as HTMLElement | null;
    this.lb = this.querySelector('[data-rw-lb]') as HTMLElement;
    this.lbStage = this.querySelector('[data-rw-lb-stage]') as HTMLElement;
    this.lbKicker = this.querySelector('[data-rw-lb-kicker]') as HTMLElement;
    this.lbName = this.querySelector('[data-rw-lb-name]') as HTMLElement;

    this.heroes = Array.from(this.querySelectorAll('[data-rw-hero]'));
    this.ticks = Array.from(this.querySelectorAll('[data-rw-tick]'));
    this.panels = Array.from(this.querySelectorAll('[data-rw-panel]'));

    this.motionMq = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.reducedMotion = this.motionMq.matches;
    const onMotionChange = (e: MediaQueryListEvent) => {
      this.reducedMotion = e.matches;
      if (this.reducedMotion) {
        this.play(false);
        this.classList.add('is-revealed');
      }
    };
    this.motionMq.addEventListener('change', onMotionChange);
    this.cleanups.push(() => this.motionMq?.removeEventListener('change', onMotionChange));

    this.initBodies();
    this.initImages();
    this.initPickers();
    this.initCursor();
    this.initObservers();
    this.bindEvents();
    this.bindHeaderNav();

    const startOffset = this.reducedMotion ? 0 : 1.15;
    this.target = 0;
    this.cur = -startOffset;
    this.vel = 0;
    for (const s of this.bodies) {
      const goal = this.wrapN(s.a - 0);
      s.x = goal + startOffset;
      s.g = s.x;
      s.prevGoal = goal;
    }

    this.classList.add('rw--js');
    this.style.setProperty('--rw-progress', (1 / this.LOOK_COUNT).toFixed(3));
    this.setStill(startOffset === 0);
    this.measure();
    this.setIndex(0, true);

    if (startOffset > 0) {
      this.kick();
    } else {
      this.renderAll();
    }

    if (this.dataset.autoplay === 'true' && !this.reducedMotion) {
      this.play(true);
    }
  }

  disconnectedCallback(): void {
    window.cancelAnimationFrame(this.rafId);
    window.cancelAnimationFrame(this.cursorRafId);
    window.clearTimeout(this.autoTimer);
    window.clearTimeout(this.resizeTimer);
    window.clearTimeout(this.zoomClearTimer);
    this.visObserver?.disconnect();
    this.revealObserver?.disconnect();
    this.stageResizeObserver?.disconnect();
    this.dockSheet();
    this.sheetHost?.remove();
    this.sheetHost = null;
    for (const fn of this.cleanups) fn();
    this.cleanups = [];
  }

  private isMobile(): boolean {
    return window.innerWidth <= 749;
  }

  private mode(): string {
    return this.isMobile() ? this.dataset.mstyle || 'classic' : this.dataset.style || 'ring';
  }

  private wrapN(val: number): number {
    return ((val % this.BODY_COUNT) + this.BODY_COUNT) % this.BODY_COUNT;
  }

  private initBodies(): void {
    const originals = Array.from(this.actorsEl.querySelectorAll('[data-rw-model]')) as HTMLElement[];
    for (let i = 0; i < originals.length; i++) {
      const clone = originals[i].cloneNode(true) as HTMLElement;
      clone.setAttribute('data-rw-clone', '');
      clone.querySelectorAll('img').forEach((img) => {
        img.setAttribute('loading', 'lazy');
      });
      this.actorsEl.appendChild(clone);
    }

    const allModels = Array.from(this.actorsEl.querySelectorAll('[data-rw-model]')) as HTMLElement[];
    this.bodies = allModels.map((el, a) => ({
      el,
      hit: el.querySelector('.rw__hit') as HTMLButtonElement | null,
      index: a % this.LOOK_COUNT,
      a,
      x: 0,
      g: 0,
      v: 0,
      prevGoal: 0,
      trip: false,
      from: 0,
      blurStr: '',
      w: 0,
    }));
  }

  private initImages(): void {
    this.querySelectorAll<HTMLImageElement>('[data-model-image]').forEach(decodeModelImage);
  }

  private bindHeaderNav(): void {
    document.querySelectorAll<HTMLElement>('[data-nav-go]').forEach((el) => {
      const onClick = (e: Event) => {
        e.preventDefault();
        const idx = Number(el.dataset.navGo);
        if (Number.isFinite(idx)) {
          this.engage();
          this.go(idx);
        }
      };
      el.addEventListener('click', onClick);
      this.cleanups.push(() => el.removeEventListener('click', onClick));
    });

    document.querySelectorAll<HTMLElement>('[data-nav-inspect]').forEach((el) => {
      const onClick = (e: Event) => {
        e.preventDefault();
        this.engage();
        if (this.zoomed) {
          this.closeZoom();
        } else {
          this.openZoom();
        }
      };
      el.addEventListener('click', onClick);
      this.cleanups.push(() => el.removeEventListener('click', onClick));
    });
  }

  private initPickers(): void {
    this.querySelectorAll<HTMLElement>('[data-rw-card]').forEach((card) => {
      this.syncCardOptions(card, false);
    });
  }

  private syncCardOptions(card: HTMLElement, userInitiated: boolean): void {
    const picker = this.getPickerForCard(card);
    if (!picker) return;
    const script = picker.querySelector<HTMLScriptElement>('script[data-rw-variants]');
    if (!script) return;
    let variants: Variant[] = [];
    try {
      variants = JSON.parse(script.textContent || '[]');
    } catch {
      variants = [];
    }

    const fieldsets = Array.from(picker.querySelectorAll('fieldset'));
    const selectedValues = fieldsets.map((fs) => {
      const checked = fs.querySelector<HTMLInputElement>('input[type="radio"]:checked');
      return checked ? checked.value : '';
    });

    const match = variants.find((v) =>
      v.o.every((val, idx) => val === selectedValues[idx])
    );

    fieldsets.forEach((fs, optIdx) => {
      const inputs = Array.from(fs.querySelectorAll<HTMLInputElement>('input[type="radio"]'));
      inputs.forEach((input) => {
        const pill = input.closest('.rw__pill');
        const avail = variants.some(
          (v) =>
            v.a &&
            v.o[optIdx] === input.value &&
            v.o.every((val, i) => i === optIdx || val === selectedValues[i])
        );
        pill?.classList.toggle('is-unavailable', !avail);
      });
    });

    const confirmBtn = picker.querySelector<HTMLButtonElement>('[data-rw-confirm]');
    const confirmLabel = picker.querySelector<HTMLElement>('[data-rw-confirm-label]');

    if (match && match.a) {
      card.dataset.selected = String(match.id);
      if (confirmBtn) confirmBtn.disabled = false;
      if (confirmLabel) confirmLabel.textContent = confirmLabel.dataset.add || 'Ajouter à la sélection';
    } else {
      delete card.dataset.selected;
      if (confirmBtn) confirmBtn.disabled = true;
      if (confirmLabel) confirmLabel.textContent = this.dataset.msgSoldout || 'Indisponible';
    }

    if (userInitiated) {
      card.dataset.touched = '1';
    }
  }

  private getPickerForCard(card: HTMLElement): HTMLElement | null {
    const inCard = card.querySelector<HTMLElement>('[data-rw-picker]');
    if (inCard) return inCard;
    if (this.activeSheetCard === card && this.sheetHost) {
      return this.sheetHost.querySelector<HTMLElement>('[data-rw-picker]');
    }
    return null;
  }

  private initCursor(): void {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!canHover) {
      this.cursorEl?.remove();
      this.cursorEl = null;
      return;
    }

    this.classList.add('rw--cursor');

    const updateCursor = () => {
      if (!this.cursorEl) return;
      const factor = this.reducedMotion ? 1 : 0.18;
      this.cursorX += (this.cursorTargetX - this.cursorX) * factor;
      this.cursorY += (this.cursorTargetY - this.cursorY) * factor;
      this.cursorEl.style.transform = `translate3d(${this.cursorX.toFixed(1)}px, ${this.cursorY.toFixed(1)}px, 0)`;

      const dist = Math.hypot(this.cursorTargetX - this.cursorX, this.cursorTargetY - this.cursorY);
      if (dist >= 0.2) {
        this.cursorRafId = window.requestAnimationFrame(updateCursor);
      } else {
        this.cursorX = this.cursorTargetX;
        this.cursorY = this.cursorTargetY;
        this.cursorEl.style.transform = `translate3d(${this.cursorX.toFixed(1)}px, ${this.cursorY.toFixed(1)}px, 0)`;
        this.cursorRafId = 0;
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse' || !this.cursorEl) return;
      const rect = this.stage.getBoundingClientRect();
      this.cursorTargetX = e.clientX - rect.left;
      this.cursorTargetY = e.clientY - rect.top;

      if (!this.cursorEntered) {
        this.cursorEntered = true;
        this.cursorX = this.cursorTargetX;
        this.cursorY = this.cursorTargetY;
        this.cursorEl.style.transform = `translate3d(${this.cursorX.toFixed(1)}px, ${this.cursorY.toFixed(1)}px, 0)`;
        this.cursorEl.classList.add('is-on');
      }

      const targetEl = e.target as HTMLElement | null;
      const isPinOrHit = !this.dragging && Boolean(targetEl?.closest('.rw__pin, .rw__hit'));
      const isZoom = !this.dragging && !isPinOrHit && Boolean(targetEl?.closest('.rw__zoom'));
      this.cursorEl.classList.toggle('is-link', isPinOrHit);
      this.cursorEl.classList.toggle('is-view', isZoom);

      if (!this.cursorRafId) {
        this.cursorRafId = window.requestAnimationFrame(updateCursor);
      }
    };

    const onPointerLeave = () => {
      if (!this.cursorEl) return;
      this.cursorEntered = false;
      this.cursorEl.classList.remove('is-on', 'is-link', 'is-view');
    };

    this.stage.addEventListener('pointermove', onPointerMove);
    this.stage.addEventListener('pointerleave', onPointerLeave);
    this.cleanups.push(() => {
      this.stage.removeEventListener('pointermove', onPointerMove);
      this.stage.removeEventListener('pointerleave', onPointerLeave);
    });
  }

  private initObservers(): void {
    this.visObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          this.visible = entry.isIntersecting;
          if (this.visible) {
            this.kick();
            this.restartAuto();
          }
        }
      },
      { threshold: 0 }
    );
    this.visObserver.observe(this);

    if (this.reducedMotion) {
      this.classList.add('is-revealed');
    } else {
      this.revealObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              window.requestAnimationFrame(() => {
                window.requestAnimationFrame(() => {
                  this.classList.add('is-revealed');
                });
              });
              this.revealObserver?.disconnect();
              break;
            }
          }
        },
        { threshold: 0, rootMargin: '0px 0px -22% 0px' }
      );
      this.revealObserver.observe(this);
    }

    this.stageResizeObserver = new ResizeObserver(() => {
      this.measure();
    });
    this.stageResizeObserver.observe(this.stage);
  }

  private bindEvents(): void {
    const onResize = () => {
      window.clearTimeout(this.resizeTimer);
      this.resizeTimer = window.setTimeout(() => this.measure(), 120);
    };
    window.addEventListener('resize', onResize);
    this.cleanups.push(() => window.removeEventListener('resize', onResize));

    const onVisChange = () => {
      if (!document.hidden && this.visible) {
        this.kick();
        this.restartAuto();
      }
    };
    document.addEventListener('visibilitychange', onVisChange);
    this.cleanups.push(() => document.removeEventListener('visibilitychange', onVisChange));

    // Pointer drag / swipe on stage
    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      this.dragPointerId = e.pointerId;
      this.dragStartX = e.clientX;
      this.dragStartY = e.clientY;
      this.dragStartTarget = this.target;
      this.dragIntent = 'none';
      this.dragSamples = [{ x: e.clientX, t: performance.now() }];
    };

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerId !== this.dragPointerId) return;
      if (e.pointerType === 'mouse' && (e.buttons & 1) === 0) {
        this.finishDrag(e);
        return;
      }

      const dx = e.clientX - this.dragStartX;
      const dy = e.clientY - this.dragStartY;

      if (this.dragIntent === 'none') {
        if (Math.abs(dy) > 10 && Math.abs(dy) >= Math.abs(dx)) {
          this.dragIntent = 'abandoned';
          this.dragPointerId = -1;
          return;
        }
        if (Math.abs(dx) > 8 && Math.abs(dx) > 1.2 * Math.abs(dy)) {
          this.dragIntent = 'drag';
          this.dragging = true;
          this.classList.add('is-dragging');
          this.setStill(false);
          try {
            this.stage.setPointerCapture(e.pointerId);
          } catch {
            // Ignore capture failure
          }
        }
      }

      if (this.dragIntent === 'drag') {
        const now = performance.now();
        this.dragSamples.push({ x: e.clientX, t: now });
        if (this.dragSamples.length > 6) this.dragSamples.shift();
        this.target = this.dragStartTarget - dx / this.unit;
        this.kick();
      }
    };

    const onPointerUpOrCancel = (e: PointerEvent) => {
      if (e.pointerId !== this.dragPointerId) return;
      this.finishDrag(e);
    };

    this.stage.addEventListener('pointerdown', onPointerDown);
    this.stage.addEventListener('pointermove', onPointerMove);
    this.stage.addEventListener('pointerup', onPointerUpOrCancel);
    this.stage.addEventListener('pointercancel', onPointerUpOrCancel);
    this.cleanups.push(() => {
      this.stage.removeEventListener('pointerdown', onPointerDown);
      this.stage.removeEventListener('pointermove', onPointerMove);
      this.stage.removeEventListener('pointerup', onPointerUpOrCancel);
      this.stage.removeEventListener('pointercancel', onPointerUpOrCancel);
    });

    // Suppress click shortly after drag
    const onCaptureClick = (e: MouseEvent) => {
      if (performance.now() < this.suppressClickUntil) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    this.addEventListener('click', onCaptureClick, true);
    this.cleanups.push(() => this.removeEventListener('click', onCaptureClick, true));

    // Trackpad horizontal wheel
    const onWheel = (e: WheelEvent) => {
      if (this.zoomed) return;
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
      e.preventDefault();
      const now = performance.now();
      if (now < this.wheelLockUntil) return;
      this.wheelAcc += e.deltaX;
      if (Math.abs(this.wheelAcc) > 45) {
        if (this.wheelAcc > 0) this.next();
        else this.prev();
        this.wheelAcc = 0;
        this.wheelLockUntil = now + 520;
      }
    };
    this.stage.addEventListener('wheel', onWheel, { passive: false });
    this.cleanups.push(() => this.stage.removeEventListener('wheel', onWheel));

    // Keyboard navigation
    const onStageKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        this.next();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        this.prev();
      }
    };
    this.stage.addEventListener('keydown', onStageKey);
    this.cleanups.push(() => this.stage.removeEventListener('keydown', onStageKey));

    const onSectionKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (this.activeSheetCard) {
          e.preventDefault();
          const card = this.activeSheetCard;
          this.closeSheet();
          card.querySelector<HTMLButtonElement>('[data-rw-add]')?.focus({ preventScroll: true });
        } else if (this.zoomed) {
          e.preventDefault();
          this.closeZoom();
        }
      }
    };
    this.addEventListener('keydown', onSectionKey);
    this.cleanups.push(() => this.removeEventListener('keydown', onSectionKey));

    // Panel hover pause & engage
    const onPanelEnter = (e: PointerEvent) => {
      if (e.pointerType === 'mouse') {
        this.panelHover = true;
      }
    };
    const onPanelLeave = (e: PointerEvent) => {
      if (e.pointerType === 'mouse') {
        this.panelHover = false;
        this.restartAuto();
      }
    };
    const onPanelClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest('button, a, input, select, label')) {
        this.engage();
      }
    };
    const onPanelChange = (e: Event) => {
      this.engage();
      const target = e.target as HTMLElement | null;
      const card = target?.closest<HTMLElement>('[data-rw-card]');
      if (card) {
        this.syncCardOptions(card, true);
      }
    };

    // Row hover hot-linking
    const onPanelPointerOver = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      const card = (e.target as HTMLElement | null)?.closest<HTMLElement>('[data-rw-card]');
      if (!card) return;
      const n = Number(card.dataset.rwCard);
      if (n) this.hot(n, false);
    };
    const onPanelPointerOut = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      const card = (e.target as HTMLElement | null)?.closest<HTMLElement>('[data-rw-card]');
      if (!card) return;
      const rel = e.relatedTarget as Node | null;
      if (!rel || !card.contains(rel)) {
        this.clearHot();
      }
    };

    this.panelEl.addEventListener('pointerenter', onPanelEnter);
    this.panelEl.addEventListener('pointerleave', onPanelLeave);
    this.panelEl.addEventListener('click', onPanelClick);
    this.panelEl.addEventListener('change', onPanelChange);
    this.panelEl.addEventListener('pointerover', onPanelPointerOver);
    this.panelEl.addEventListener('pointerout', onPanelPointerOut);
    this.cleanups.push(() => {
      this.panelEl.removeEventListener('pointerenter', onPanelEnter);
      this.panelEl.removeEventListener('pointerleave', onPanelLeave);
      this.panelEl.removeEventListener('click', onPanelClick);
      this.panelEl.removeEventListener('change', onPanelChange);
      this.panelEl.removeEventListener('pointerover', onPanelPointerOver);
      this.panelEl.removeEventListener('pointerout', onPanelPointerOut);
    });

    // Delegated click handler on section
    const onSectionClick = (e: MouseEvent) => {
      this.handleClick(e.target as HTMLElement | null);
    };
    this.addEventListener('click', onSectionClick);
    this.cleanups.push(() => this.removeEventListener('click', onSectionClick));
  }

  private handleClick(target: HTMLElement | null): void {
    if (!target) return;

    // 1. pick-close
    if (target.closest('[data-rw-pick-close]')) {
      const card = this.activeSheetCard;
      this.closeSheet();
      card?.querySelector<HTMLButtonElement>('[data-rw-add]')?.focus({ preventScroll: true });
      return;
    }

    // 2. popup close button
    if (target.closest('[data-rw-zoom-close]')) {
      this.closeZoom();
      return;
    }

    // 3. click on popup backdrop or popup stage beside the car
    if (this.zoomed && target.closest('[data-rw-lb]') && !target.closest('.rw__lb-model, .rw__lb-top')) {
      this.closeZoom();
      return;
    }

    // 4. zoom opens popup
    if (target.closest('[data-rw-zoom]')) {
      this.openZoom();
      return;
    }

    // 5. clicking equipment title or thumbnail opens zoom and highlights pin
    const inspectPinEl = target.closest<HTMLElement>('[data-rw-inspect-pin]');
    if (inspectPinEl) {
      const pinNum = Number(inspectPinEl.dataset.rwInspectPin);
      this.engage();
      if (!this.zoomed) {
        this.openZoom();
      }
      if (pinNum) {
        this.hot(pinNum, false);
      }
      return;
    }

    // 6. next
    if (target.closest('[data-rw-next]')) {
      this.next();
      return;
    }

    // 7. prev
    if (target.closest('[data-rw-prev]')) {
      this.prev();
      return;
    }

    // 8. tick
    const tickBtn = target.closest<HTMLElement>('[data-rw-tick]');
    if (tickBtn) {
      const idx = Number(tickBtn.dataset.rwTick);
      if (Number.isFinite(idx)) this.go(idx);
      return;
    }

    // 9. autoplay toggle
    if (target.closest('[data-rw-auto]')) {
      if (!this.playing) {
        this.engaged = false;
        this.play(true);
      } else {
        this.play(false);
      }
      return;
    }

    // 10. pin
    const pinBtn = target.closest<HTMLElement>('[data-rw-pin]');
    if (pinBtn) {
      this.engage();
      const n = Number(pinBtn.dataset.rwPin);
      if (n) this.hot(n, true);
      return;
    }

    // 11. queue body [data-rw-go]
    const goBtn = target.closest<HTMLElement>('[data-rw-go]');
    if (goBtn) {
      const bodyEl = goBtn.closest<HTMLElement>('[data-rw-model]');
      const bodyObj = this.bodies.find((b) => b.el === bodyEl);
      if (bodyObj) {
        const k = this.getBodyRank(bodyObj);
        if (k === 0) {
          this.openZoom();
        } else if (Math.abs(k) < 6) {
          this.moveTo(Math.round(this.target) + k);
        }
      }
      return;
    }

    // 12. confirm finish add
    const confirmBtn = target.closest<HTMLElement>('[data-rw-confirm]');
    if (confirmBtn) {
      const picker = confirmBtn.closest<HTMLElement>('[data-rw-picker]');
      const card =
        picker?.closest<HTMLElement>('[data-rw-card]') || this.activeSheetCard;
      if (card) {
        this.handleConfirmAdd(card);
      }
      return;
    }

    // 13. plus button
    const addBtn = target.closest<HTMLElement>('[data-rw-add]');
    if (addBtn) {
      const card = addBtn.closest<HTMLElement>('[data-rw-card]');
      if (card) {
        this.toggleCardPicker(card);
      }
      return;
    }

    // 14. add full configuration
    const allBtn = target.closest<HTMLElement>('[data-rw-all]');
    if (allBtn) {
      const panel = allBtn.closest<HTMLElement>('[data-rw-panel]');
      if (panel) {
        this.handleAddFullLook(panel, allBtn as HTMLButtonElement);
      }
    }
  }

  private getBodyRank(s: BodyState): number {
    const base = Math.round(this.target);
    if (this.mode() === 'ring') {
      let k = (s.a - base) % this.BODY_COUNT;
      if (k > this.BODY_COUNT / 2) k -= this.BODY_COUNT;
      if (k <= -this.BODY_COUNT / 2) k += this.BODY_COUNT;
      return k;
    }
    return this.wrapN(s.a - base);
  }

  private finishDrag(e: PointerEvent): void {
    const wasDragging = this.dragIntent === 'drag';
    this.dragPointerId = -1;
    this.dragIntent = 'none';

    if (wasDragging) {
      this.dragging = false;
      this.classList.remove('is-dragging');
      this.suppressClickUntil = performance.now() + 60;
      try {
        if (this.stage.hasPointerCapture(e.pointerId)) {
          this.stage.releasePointerCapture(e.pointerId);
        }
      } catch {
        // Ignore
      }

      const first = this.dragSamples[0];
      const last = this.dragSamples[this.dragSamples.length - 1];
      const dt = last && first ? last.t - first.t : 0;
      const vx = dt > 0 ? (last.x - first.x) / dt : 0;
      const dx = e.clientX - this.dragStartX;
      const sign = -1;
      const from = Math.round(this.dragStartTarget);

      if (this.isMobile()) {
        if (Math.abs(dx) > 30 || Math.abs(vx) > 0.3) {
          this.moveTo(from + sign * (dx > 0 ? 1 : -1));
        } else {
          this.moveTo(from);
        }
      } else {
        let i = Math.round(this.target + (sign * vx * 160) / this.unit);
        if (i === from && Math.abs(vx) > 0.3) {
          i = from + sign * (vx > 0 ? 1 : -1);
        }
        i = clamp(i, from - 2, from + 2);
        this.moveTo(i);
      }
    }
  }

  public measure(): void {
    if (this.isMobile()) {
      const w = window.innerWidth;
      const h = window.innerHeight;
      if (w !== this.latchedW || Math.abs(h - this.latchedVh) >= 160 || !this.latchedVh) {
        this.latchedW = w;
        this.latchedVh = h;
      }
      const mPct = clamp(Number(this.dataset.mheightVh || 109), 50, 120);
      const frameH = (this.latchedVh * mPct) / 100;
      this.style.setProperty('--rw-frame-h', `${frameH.toFixed(2)}px`);
    } else {
      let headerH = 0;
      document
        .querySelectorAll<HTMLElement>(
          '.shopify-section-group-header-group, #shopify-section-header, #shopify-section-announcement-bar'
        )
        .forEach((el) => {
          if (!el.contains(this)) {
            const rect = el.getBoundingClientRect();
            if (rect.height > 0) headerH += rect.height;
          }
        });
      const frameH = Math.max(280, window.innerHeight - headerH);
      this.style.setProperty('--rw-frame-h', `${frameH}px`);

      if (this.activeSheetCard) {
        this.closeSheet();
      }
    }

    const stageRect = this.stage.getBoundingClientRect();
    this.W = stageRect.width;
    this.H = stageRect.height;

    const m = this.mode();
    this.fs = m === 'ring' ? 1.08 : 1;
    this.style.setProperty('--rw-fs', String(this.fs));

    // La largeur utile de la scène dépend de la place laissée par le panneau :
    // sur une scène étroite (tablette), la voiture doit occuper plus de largeur.
    const capW = this.W < 520 ? 0.86 : this.W < 760 ? 0.7 : 0.56;
    const modelH =
      m === 'ring'
        ? Math.max(150, Math.min(Math.round((this.H - 34 - 18) / 1.08), Math.round((this.W * capW) / CAR_AR)))
        : Math.max(150, Math.min(Math.round(this.H - 42), Math.round((this.W * 0.88) / CAR_AR)));
    this.modelH = modelH;
    this.stage.style.setProperty('--rw-model-h', `${modelH}px`);

    const hx = m === 'ring' ? 0.5 * this.W : this.isMobile() ? 0.5 * this.W : 0.4 * this.W;
    // Anneau : la voiture active est centrée dans la scène (alignée sur le calcul
    // de `floor` dans renderAll) au lieu de rester collée au bas de la scène.
    const hy =
      m === 'ring'
        ? Math.max(34, Math.round((this.H - modelH * this.fs) / 2))
        : this.isMobile()
          ? 22
          : 36;
    this.stage.style.setProperty('--rw-hx', `${hx.toFixed(2)}px`);
    this.stage.style.setProperty('--rw-hy', `${hy}px`);
    this.style.setProperty(
      '--rw-ax',
      `${(this.W > 0 ? (hx / this.W) * 100 : 48).toFixed(2)}%`
    );

    if (m === 'ring') {
      this.unit = Math.max(this.isMobile() ? 90 : 120, 0.3 * this.W);
    } else {
      const sx = this.isMobile() ? 0.71 : 0.125;
      this.unit = Math.max(this.isMobile() ? 90 : 120, this.W * sx * 1.6);
    }

    for (const s of this.bodies) {
      s.w = s.el.offsetWidth || Math.round(modelH * CAR_AR);
    }

    this.renderAll();
  }

  private setStill(val: boolean): void {
    if (this.still === val) return;
    this.still = val;
    this.classList.toggle('rw--still', val);
  }

  private kick(): void {
    if (!this.visible || document.hidden) return;
    if (!this.rafId) {
      this.rafId = window.requestAnimationFrame((now) => this.tick(now));
    }
  }

  private tick(now: number): void {
    this.rafId = 0;
    if (!this.visible || document.hidden) {
      this.lastTime = 0;
      return;
    }

    const dt = this.lastTime ? Math.min(0.034, (now - this.lastTime) / 1000) : 1 / 60;
    this.lastTime = now;

    const m = this.mode();

    if (this.reducedMotion) {
      this.cur = this.target;
      this.vel = 0;
      for (const s of this.bodies) {
        const goal = this.wrapN(s.a - this.target);
        s.x = goal;
        s.g = goal;
        s.v = 0;
        s.prevGoal = goal;
        s.trip = false;
      }
      this.setStill(!this.dragging);
      this.renderAll();
      if (this.dragging) {
        this.rafId = window.requestAnimationFrame((t) => this.tick(t));
      } else {
        this.lastTime = 0;
      }
      return;
    }

    if (m === 'ring') {
      const h = dt / 3;
      for (let step = 0; step < 3; step++) {
        const acc = -this.K * (this.cur - this.target) - this.C * this.vel;
        this.vel += acc * h;
        this.cur += this.vel * h;
      }
      const settled =
        !this.dragging &&
        Math.abs(this.cur - this.target) <= 0.0005 &&
        Math.abs(this.vel) <= 0.0005;
      if (settled) {
        this.cur = this.target;
        this.vel = 0;
        this.setStill(true);
      } else {
        this.setStill(false);
      }
      this.renderAll();
      if (!settled) {
        this.rafId = window.requestAnimationFrame((t) => this.tick(t));
      } else {
        this.lastTime = 0;
      }
    } else {
      let anyMoving = false;
      const h = dt / 3;

      for (const s of this.bodies) {
        const goal = this.wrapN(s.a - this.target);
        if (Math.abs(goal - s.prevGoal) > this.BODY_COUNT / 2) {
          s.trip = true;
          s.from = s.x;
        }
        s.prevGoal = goal;

        const tau = this.dragging
          ? 0.016
          : s.trip
            ? 0.1
            : 0.03 + 0.04 * Math.min(goal, 4);
        s.g += (goal - s.g) * (1 - Math.exp(-dt / tau));

        for (let step = 0; step < 3; step++) {
          const acc = -this.K * (s.x - s.g) - this.C * s.v;
          s.v += acc * h;
          s.x += s.v * h;
        }

        if (s.trip && Math.abs(s.x - goal) < 0.02) {
          s.trip = false;
        }

        const settled =
          !this.dragging &&
          !s.trip &&
          Math.abs(s.x - goal) <= 0.0006 &&
          Math.abs(s.g - goal) <= 0.0006 &&
          Math.abs(s.v) <= 0.0006;

        if (settled) {
          s.x = goal;
          s.g = goal;
          s.v = 0;
        } else {
          anyMoving = true;
        }
      }

      this.setStill(!this.dragging && !anyMoving);
      this.renderAll();

      if (this.dragging || anyMoving) {
        this.rafId = window.requestAnimationFrame((t) => this.tick(t));
      } else {
        this.lastTime = 0;
      }
    }
  }

  private put(
    s: BodyState,
    x: number,
    bottom: number,
    scale: number,
    opacity: number,
    blur: number,
    z: number
  ): void {
    let op = opacity;
    if (x + (s.w * scale) / 2 < -4 || x - (s.w * scale) / 2 > this.W + 4) {
      op = 0;
    }
    s.el.style.transform = `translate3d(${x.toFixed(2)}px, ${(-bottom).toFixed(2)}px, 0) translateX(-50%) scale(${scale.toFixed(4)})`;
    s.el.style.opacity = op.toFixed(3);
    s.el.style.zIndex = String(z);
    s.el.style.visibility = op < 0.01 ? 'hidden' : 'visible';
    s.el.style.pointerEvents = op < 0.5 ? 'none' : '';

    if (this.dataset.blur === 'true') {
      const b = Math.round(blur * 10) / 10;
      const nextFilter = b > 0.05 ? `blur(${b}px)` : '';
      if (nextFilter !== s.blurStr) {
        s.blurStr = nextFilter;
        s.el.style.filter = nextFilter;
      }
    }
  }

  private renderAll(): void {
    if (!this.W || !this.H) return;
    const m = this.mode();

    if (m === 'ring') {
      const mobile = this.isMobile();
      const cx = 0.5 * this.W;
      const R = (mobile ? 0.72 : 0.78) * this.W;
      const P = (mobile ? 1.9 : 1.65) * this.W;
      // La voiture active est centrée verticalement dans la scène au lieu d'être
      // collée en bas : supprime le grand vide blanc au-dessus du véhicule.
      const heroH = this.modelH * this.fs;
      const floor = Math.min(this.H - 34, Math.max(this.H * 0.42, (this.H + heroH) / 2));
      const horizon = 0.36 * this.H;
      const step = (Math.PI * 2) / this.BODY_COUNT;

      for (const s of this.bodies) {
        let phi = ((s.a - this.cur) * step) % (Math.PI * 2);
        if (phi > Math.PI) phi -= Math.PI * 2;
        if (phi <= -Math.PI) phi += Math.PI * 2;

        const zDepth = R * (1 - Math.cos(phi));
        const persp = P / (P + zDepth);
        const sl = Math.abs(phi) / step;
        // Réduction d'échelle par distance : les voitures voisines passent
        // nettement derrière la voiture active au lieu de la heurter.
        const scale =
          persp * (1 - 0.28 * clamp(sl, 0, 1)) * (1 + (this.fs - 1) * clamp(1 - sl, 0, 1));
        const x = cx + R * Math.sin(phi) * persp;
        const feet = horizon + (floor - horizon) * persp;
        const bottom = this.H - feet;
        const blur = sl <= 1 ? 2.4 * sl : Math.min(2.4 + (sl - 1) * 2, 7);
        // Un seul voisin visible de chaque côté, en fondu : plus d'empilement
        // de silhouettes sombres autour du véhicule.
        let opacity = clamp(1 - 0.5 * sl, 0, 1);
        if (this.still && sl < 0.02) {
          opacity = 0;
        }
        const z = Math.round(scale * 1000);
        this.put(s, x, bottom, scale, opacity, blur, z);
      }
    } else {
      const mobile = this.isMobile();
      const ax = mobile ? 0.5 : 0.4;
      const ay = mobile ? 22 : 36;
      // Sur mobile la voiture active occupe 88 % de la scène : la suivante doit
      // être rejetée au-delà du bord pour ne pas mordre sur son arrière.
      const sx = mobile ? 0.71 : 0.125;
      const sy = mobile ? 22 : 58;
      const sr = mobile ? 0.62 : 0.76;
      const ex = mobile ? 0.55 : 0.38;
      const d = mobile ? 3 : 5;

      for (const s of this.bodies) {
        const goal = this.wrapN(s.a - this.target);
        let k = s.x;
        let e = -1;

        if (s.trip && Math.abs(goal - s.from) > 0.0001) {
          const u = Math.abs(s.x - s.from) / Math.abs(goal - s.from);
          if (goal > s.from) {
            if (u < 0.5) e = 2 * u * 1.4;
            else k = goal + 2 * (1 - u);
          } else {
            if (u < 0.5) k = s.from + 2 * u;
            else e = 2 * (1 - u) * 1.4;
          }
        } else if (k < 0) {
          e = Math.min(-k, 1.4);
        }

        if (e >= 0) {
          const x = this.W * (ax - ex * e);
          const bottom = ay - 22 * e;
          const scale = 1 + 0.14 * e;
          const opacity = mobile ? 0 : Math.max(0, 1 - 1.05 * e);
          const blur = 4 * Math.min(e, 1);
          this.put(s, x, bottom, scale, opacity, blur, 1100);
        } else {
          const x = this.W * (ax + sx * k);
          const bottom = ay + sy * k;
          const scale = Math.pow(sr, k);
          // Le modèle suivant n'est qu'un repère de profondeur : très léger et
          // flou, jamais une seconde voiture qui entre en collision avec l'active.
          // Sur mobile, une seule voiture à la fois : aucun voiture ne peut
          // venir recouvrir le modèle actif, même pendant une transition.
          let opacity = mobile ? 0 : k <= d - 1 ? 1 - 0.13 * k : Math.max(0, 0.61 * (d - k));
          if (this.still && Math.abs(k) < 0.02) {
            opacity = 0;
          }
          const blur = mobile ? Math.min(2.6 * k, 4) : Math.min(0.9 * k, 3.2);
          const z = 1000 - Math.round(10 * k);
          this.put(s, x, bottom, scale, opacity, blur, z);
        }
      }
    }
  }

  public next(): void {
    this.moveTo(Math.round(this.target) + 1);
  }

  public prev(): void {
    this.moveTo(Math.round(this.target) - 1);
  }

  public go(i: number): void {
    if (i === this.index && this.still) return;
    let d = (i - this.index) % this.LOOK_COUNT;
    if (d < 0) d += this.LOOK_COUNT;
    if (d > 3) d -= this.LOOK_COUNT;
    this.moveTo(Math.round(this.target) + d);
  }

  public moveTo(T: number): void {
    this.target = T;
    this.setStill(false);
    const nextIdx = ((T % this.LOOK_COUNT) + this.LOOK_COUNT) % this.LOOK_COUNT;
    this.setIndex(nextIdx, false);
    this.kick();
  }

  private setIndex(i: number, silent: boolean): void {
    const prevIdx = this.index;
    this.index = ((i % this.LOOK_COUNT) + this.LOOK_COUNT) % this.LOOK_COUNT;

    const m = this.mode();
    for (const s of this.bodies) {
      const k = this.getBodyRank(s);
      const accessible = k !== 0 && (m === 'ring' ? Math.abs(k) <= 2 : k <= 3);
      if (accessible) {
        s.el.removeAttribute('aria-hidden');
        if (s.hit) s.hit.tabIndex = 0;
      } else {
        s.el.setAttribute('aria-hidden', 'true');
        if (s.hit) s.hit.tabIndex = -1;
      }
    }

    if (silent) return;

    this.closeZoom();
    if (this.isMobile()) {
      this.closeSheet();
    }

    this.style.setProperty('--rw-progress', ((this.index + 1) / this.LOOK_COUNT).toFixed(3));

    this.heroes.forEach((hero, idx) => {
      hero.classList.remove('was');
      if (idx === prevIdx && idx !== this.index) {
        hero.classList.add('was');
      }
      const isCurrent = idx === this.index;
      hero.classList.toggle('is-on', isCurrent);
      hero.setAttribute('aria-hidden', isCurrent ? 'false' : 'true');
      const zoomBtn = hero.querySelector<HTMLButtonElement>('[data-rw-zoom]');
      if (zoomBtn) zoomBtn.tabIndex = isCurrent ? 0 : -1;
    });

    if (!this.reducedMotion) {
      this.stage.classList.remove('is-sweep');
      void this.stage.offsetWidth;
      this.stage.classList.add('is-sweep');
    }

    const activeHero = this.heroes[this.index];
    if (activeHero && this.liveEl) {
      this.liveEl.textContent = activeHero.dataset.label || '';
    }

    this.ticks.forEach((tick, idx) => {
      tick.setAttribute('aria-current', idx === this.index ? 'true' : 'false');
      tick.classList.toggle('is-past', idx < this.index);
    });

    this.panels.forEach((panel, idx) => {
      panel.classList.remove('is-in');
      panel.hidden = idx !== this.index;
    });

    const activePanel = this.panels[this.index];
    if (activePanel) {
      void activePanel.offsetWidth;
      activePanel.classList.add('is-in');

      const tpl = activePanel.querySelector<HTMLTemplateElement>('template[data-rw-pieces-text]');
      const piecesText = tpl?.content.textContent?.trim() || '3 options';
      if (this.piecesEl) {
        this.piecesEl.textContent = piecesText;
        this.piecesEl.classList.remove('is-swap');
        void this.piecesEl.offsetWidth;
        this.piecesEl.classList.add('is-swap');
      }
      const mLabel = activePanel.querySelector<HTMLElement>('.rw__mhead .rw__label');
      if (mLabel) {
        mLabel.classList.remove('is-swap');
        void mLabel.offsetWidth;
        mLabel.classList.add('is-swap');
      }
    }

    this.clearHot();
    this.restartAuto();
  }

  private play(state: boolean): void {
    this.playing = state;
    this.autoBtn?.classList.toggle('is-playing', state);
    this.autoBtn?.setAttribute('aria-pressed', state ? 'true' : 'false');
    if (state) {
      this.restartAuto();
    } else {
      window.clearTimeout(this.autoTimer);
      this.ticks.forEach((t) => t.classList.remove('is-run'));
    }
  }

  private restartAuto(): void {
    window.clearTimeout(this.autoTimer);
    this.ticks.forEach((t) => t.classList.remove('is-run'));
    if (!this.playing) return;

    const currentTick = this.ticks[this.index];
    if (currentTick) {
      void currentTick.offsetWidth;
      currentTick.classList.add('is-run');
    }

    const speed = Number(this.dataset.speed || 5000);
    this.autoTimer = window.setTimeout(() => {
      if (
        this.playing &&
        this.visible &&
        !this.dragging &&
        !document.hidden &&
        !this.panelHover &&
        !this.zoomed &&
        !this.engaged
      ) {
        this.next();
      } else if (this.playing) {
        this.restartAuto();
      }
    }, speed);
  }

  private engage(): void {
    if (this.engaged) return;
    this.engaged = true;
    this.play(false);
  }

  private clearHot(): void {
    this.querySelectorAll('.is-hot').forEach((el) => el.classList.remove('is-hot'));
  }

  private hot(n: number, scroll: boolean): void {
    this.clearHot();

    const pinContainer = this.zoomed ? this.lbStage : this.heroes[this.index];
    const pin = pinContainer?.querySelector<HTMLElement>(`[data-rw-pin="${n}"]`);
    pin?.classList.add('is-hot');

    const activePanel = this.panels[this.index];
    const card = activePanel?.querySelector<HTMLElement>(`[data-rw-card="${n}"]`);
    card?.classList.add('is-hot');

    if (scroll && card) {
      this.revealCard(card);
    }
  }

  private revealCard(card: HTMLElement): void {
    const list = card.closest<HTMLElement>('.rw__items');
    if (!list) return;
    const behavior: ScrollBehavior = this.reducedMotion ? 'auto' : 'smooth';

    if (list.scrollWidth > list.clientWidth + 2) {
      const cardRect = card.getBoundingClientRect();
      const listRect = list.getBoundingClientRect();
      list.scrollTo({
        left: list.scrollLeft + (cardRect.left - listRect.left - 20),
        behavior,
      });
    } else if (list.scrollHeight > list.clientHeight + 2) {
      list.scrollTo({
        top: card.offsetTop - list.offsetTop - 12,
        behavior,
      });
    } else {
      const rect = card.getBoundingClientRect();
      if (rect.top < 0 || rect.bottom > window.innerHeight - 140) {
        window.scrollBy({
          top: rect.top - 0.3 * window.innerHeight,
          behavior,
        });
      }
    }
  }

  private toggleCardPicker(card: HTMLElement): void {
    if (card.classList.contains('is-added') || card.classList.contains('is-loading')) return;
    const picker = this.getPickerForCard(card);
    if (!picker) return;
    const addBtn = card.querySelector<HTMLButtonElement>('[data-rw-add]');

    if (this.isMobile()) {
      if (this.activeSheetCard === card) {
        this.closeSheet();
      } else {
        this.openSheet(card);
      }
      return;
    }

    const isOpen = !picker.hidden;
    if (isOpen) {
      picker.hidden = true;
      card.classList.remove('is-picking');
      addBtn?.setAttribute('aria-expanded', 'false');
    } else {
      picker.hidden = false;
      card.classList.add('is-picking');
      addBtn?.setAttribute('aria-expanded', 'true');
      this.revealCard(card);
      const checked = picker.querySelector<HTMLInputElement>('input[type="radio"]:checked');
      checked?.focus({ preventScroll: true });
    }
  }

  private ensureSheetHost(): HTMLElement {
    if (this.sheetHost) return this.sheetHost;
    const host = document.createElement('div');
    host.className = 'rw-sheet-host';

    const cs = getComputedStyle(this);
    const props = [
      '--rw-panel',
      '--rw-text',
      '--rw-muted',
      '--rw-line',
      '--rw-accent',
      '--rw-on-accent',
      '--rw-btn-bg',
      '--rw-btn-fg',
      '--rw-btn-radius',
      '--rw-pill-radius',
      '--rw-bar-r',
      '--rw-thumb-radius',
      '--rw-pt-size',
      '--rw-price',
      '--rw-opt',
      '--rw-ease',
      '--rw-ease-sheet',
      '--rw-ease-spring',
    ];
    for (const prop of props) {
      const val = cs.getPropertyValue(prop);
      if (val) host.style.setProperty(prop, val);
    }
    host.style.fontFamily = cs.fontFamily;
    host.style.color = cs.color;

    const scrim = document.createElement('button');
    scrim.className = 'rw__pick-scrim';
    scrim.type = 'button';
    scrim.setAttribute('data-rw-pick-close', '');
    scrim.tabIndex = -1;
    scrim.setAttribute('aria-hidden', 'true');
    host.appendChild(scrim);

    host.addEventListener('click', (e) => {
      this.handleClick(e.target as HTMLElement | null);
    });
    host.addEventListener('change', (e) => {
      this.engage();
      if (this.activeSheetCard) {
        this.syncCardOptions(this.activeSheetCard, true);
      }
      void e;
    });
    host.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.activeSheetCard) {
        e.preventDefault();
        const card = this.activeSheetCard;
        this.closeSheet();
        card.querySelector<HTMLButtonElement>('[data-rw-add]')?.focus({ preventScroll: true });
      }
    });

    document.body.appendChild(host);
    this.sheetHost = host;
    return host;
  }

  private openSheet(card: HTMLElement): void {
    this.closeSheet();
    const picker = card.querySelector<HTMLElement>('[data-rw-picker]');
    if (!picker) return;

    const host = this.ensureSheetHost();
    const placeholder = document.createComment('rw-picker-slot');
    card.insertBefore(placeholder, picker);
    this.activePickerPlaceholder = placeholder;
    this.activeSheetCard = card;

    picker.hidden = false;
    host.appendChild(picker);
    void host.offsetWidth;
    host.classList.add('is-open');

    this.classList.add('rw--picking');
    card.classList.add('is-picking');
    card.querySelector<HTMLButtonElement>('[data-rw-add]')?.setAttribute('aria-expanded', 'true');

    const checked = picker.querySelector<HTMLInputElement>('input[type="radio"]:checked');
    checked?.focus({ preventScroll: true });
  }

  private closeSheet(): void {
    this.dockSheet();
    this.classList.remove('rw--picking');
    if (this.sheetHost) {
      this.sheetHost.classList.remove('is-open');
    }
  }

  private dockSheet(): void {
    if (!this.activeSheetCard || !this.sheetHost) return;
    const card = this.activeSheetCard;
    const picker = this.sheetHost.querySelector<HTMLElement>('[data-rw-picker]');
    if (picker) {
      picker.hidden = true;
      if (this.activePickerPlaceholder && this.activePickerPlaceholder.parentNode === card) {
        card.insertBefore(picker, this.activePickerPlaceholder);
        this.activePickerPlaceholder.remove();
      } else {
        card.appendChild(picker);
      }
    }
    card.classList.remove('is-picking');
    const addBtn = card.querySelector<HTMLButtonElement>('[data-rw-add]');
    if (addBtn && !card.classList.contains('is-added')) {
      addBtn.setAttribute('aria-expanded', 'false');
    }
    this.activeSheetCard = null;
    this.activePickerPlaceholder = null;
  }

  private markCardAdded(card: HTMLElement): void {
    card.classList.remove('is-loading', 'is-picking');
    card.classList.add('is-added');

    const picker = this.getPickerForCard(card);
    if (picker) {
      if (this.activeSheetCard === card) {
        this.closeSheet();
      } else {
        picker.hidden = true;
      }
    }

    const addBtn = card.querySelector<HTMLButtonElement>('[data-rw-add]');
    if (addBtn) {
      if (addBtn.dataset.addedLabel) {
        addBtn.setAttribute('aria-label', addBtn.dataset.addedLabel);
      }
      addBtn.removeAttribute('aria-expanded');
    }

    if (this.isMobile() && !this.reducedMotion && typeof navigator.vibrate === 'function') {
      try {
        navigator.vibrate(12);
      } catch {
        // Ignore
      }
    }

    const panel = card.closest<HTMLElement>('[data-rw-panel]');
    if (panel) {
      this.checkPanelCompletion(panel);
    }
  }

  private checkPanelCompletion(panel: HTMLElement): void {
    const cards = Array.from(panel.querySelectorAll<HTMLElement>('[data-rw-card]'));
    if (cards.length >= 2 && cards.every((c) => c.classList.contains('is-added'))) {
      panel.classList.add('is-complete');
      const msgEl = panel.querySelector<HTMLElement>('[data-rw-msg]');
      if (msgEl) msgEl.textContent = '';
    }
  }

  private handleConfirmAdd(card: HTMLElement): void {
    if (card.classList.contains('is-added') || card.classList.contains('is-loading')) return;
    card.dataset.touched = '1';
    const variantId = Number(card.dataset.selected);
    const panel = card.closest<HTMLElement>('[data-rw-panel]');
    const msgEl = panel?.querySelector<HTMLElement>('[data-rw-msg]');
    if (msgEl) msgEl.textContent = '';

    if (!Number.isSafeInteger(variantId)) {
      if (msgEl) msgEl.textContent = this.dataset.msgError || 'Impossible d’ajouter à la sélection. Veuillez réessayer.';
      return;
    }

    card.classList.add('is-loading');
    try {
      bag.add([{ id: variantId, quantity: 1 }]);
      this.markCardAdded(card);
    } catch (err) {
      card.classList.remove('is-loading');
      if (msgEl) {
        msgEl.textContent =
          err instanceof Error && err.message
            ? err.message
            : this.dataset.msgError || 'Impossible d’ajouter à la sélection. Veuillez réessayer.';
      }
    }
  }

  private handleAddFullLook(panel: HTMLElement, ctaBtn: HTMLButtonElement): void {
    if (panel.classList.contains('is-complete') || ctaBtn.classList.contains('is-loading')) return;

    const msgEl = panel.querySelector<HTMLElement>('[data-rw-msg]');
    if (msgEl) msgEl.textContent = '';

    const cards = Array.from(panel.querySelectorAll<HTMLElement>('[data-rw-card]')).filter((card) => {
      if (card.classList.contains('is-added')) return false;
      const confirmBtn = this.getPickerForCard(card)?.querySelector<HTMLButtonElement>('[data-rw-confirm]');
      if (confirmBtn?.disabled && !card.dataset.selected) return false;
      return true;
    });

    const ready: Array<{ card: HTMLElement; id: number }> = [];
    const pending: HTMLElement[] = [];

    for (const card of cards) {
      const directId = Number(card.dataset.variantId);
      const selectedId = Number(card.dataset.selected);
      if (Number.isSafeInteger(directId) && directId > 0) {
        ready.push({ card, id: directId });
      } else if (card.dataset.touched === '1' && Number.isSafeInteger(selectedId) && selectedId > 0) {
        ready.push({ card, id: selectedId });
      } else {
        pending.push(card);
      }
    }

    if (ready.length > 0) {
      ctaBtn.classList.add('is-loading');
      ready.forEach((r) => r.card.classList.add('is-loading'));
      try {
        bag.add(ready.map((r) => ({ id: r.id, quantity: 1 })));
        ready.forEach((r) => this.markCardAdded(r.card));
      } catch {
        ready.forEach((r) => r.card.classList.remove('is-loading'));
        if (msgEl) msgEl.textContent = this.dataset.msgError || 'Impossible d’ajouter à la sélection. Veuillez réessayer.';
        ctaBtn.classList.remove('is-loading');
        return;
      }
      ctaBtn.classList.remove('is-loading');
    }

    if (pending.length > 0) {
      if (this.isMobile()) {
        this.openSheet(pending[0]);
      } else {
        pending.forEach((card) => {
          const picker = this.getPickerForCard(card);
          if (picker && picker.hidden) {
            picker.hidden = false;
            card.classList.add('is-picking');
            card.querySelector<HTMLButtonElement>('[data-rw-add]')?.setAttribute('aria-expanded', 'true');
          }
        });
        this.revealCard(pending[0]);
      }

      if (msgEl) {
        const titles = pending.map((c) => c.dataset.title || '').filter(Boolean);
        const tpl = this.dataset.msgChoose || 'Choisissez une finition pour : [items]';
        msgEl.textContent = tpl.replace('[items]', titles.join(', '));
      }
    }
  }

  public openZoom(): void {
    if (this.zoomed) return;
    const hero = this.heroes[this.index];
    if (!hero) return;

    this.engage();
    this.clearHot();
    window.clearTimeout(this.zoomClearTimer);
    this.zoomed = true;

    const shadow = hero.querySelector('.rw__shadow')?.cloneNode(true) as HTMLElement | undefined;
    const figure = hero.querySelector('.rw__figure')?.cloneNode(true) as HTMLElement | undefined;
    if (!figure) return;

    figure.querySelector('.rw__zoom')?.remove();
    figure.querySelectorAll<HTMLElement>('[data-rw-pin]').forEach((pin) => {
      pin.tabIndex = 0;
    });
    figure.querySelectorAll<HTMLImageElement>('[data-model-image]').forEach((img) => {
      img.setAttribute('loading', 'eager');
      decodeModelImage(img);
    });

    const lbModel = document.createElement('div');
    lbModel.className = 'rw__lb-model';
    const foot = hero.style.getPropertyValue('--rw-foot');
    if (foot) lbModel.style.setProperty('--rw-foot', foot);

    if (shadow) lbModel.appendChild(shadow);
    lbModel.appendChild(figure);

    this.lbStage.innerHTML = '';
    this.lbStage.appendChild(lbModel);

    const word = this.lb.dataset.word || 'Modèle';
    this.lbKicker.textContent = `${word} ${String(this.index + 1).padStart(2, '0')}`;
    this.lbName.textContent = hero.dataset.name || '';

    const stageRect = this.lbStage.getBoundingClientRect();
    const h = Math.max(150, Math.min(stageRect.height, stageRect.width / CAR_AR));
    lbModel.style.setProperty('--rw-model-h', `${h.toFixed(2)}px`);
    const sizesVal = `${Math.round(h * CAR_AR)}px`;
    figure.querySelectorAll<HTMLImageElement>('[data-model-image]').forEach((img) => {
      img.setAttribute('sizes', sizesVal);
    });

    this.classList.add('rw--zoom');
    this.lb.setAttribute('aria-hidden', 'false');

    const heroFigure = hero.querySelector<HTMLElement>('.rw__figure');
    if (!this.reducedMotion && heroFigure) {
      const a = heroFigure.getBoundingClientRect();
      const b = figure.getBoundingClientRect();
      if (a.height > 0 && b.height > 0) {
        lbModel.style.transformOrigin = '0 100%';
        lbModel.style.transition = 'none';
        lbModel.style.transform = `translate3d(${a.left - b.left}px, ${a.bottom - b.bottom}px, 0) scale(${a.height / b.height})`;
        void lbModel.offsetWidth;
        lbModel.style.transition = '';
        lbModel.style.transform = '';
      }
    }

    const closeBtn = this.lb.querySelector<HTMLButtonElement>('[data-rw-zoom-close]');
    closeBtn?.focus({ preventScroll: true });
  }

  private closeZoom(): void {
    if (!this.zoomed) return;
    this.zoomed = false;

    const wasFocusedInside = this.lb.contains(document.activeElement);
    const lbModel = this.lbStage.querySelector<HTMLElement>('.rw__lb-model');
    const cloneFigure = lbModel?.querySelector<HTMLElement>('.rw__figure');
    const heroFigure = this.heroes[this.index]?.querySelector<HTMLElement>('.rw__figure');

    if (!this.reducedMotion && lbModel && cloneFigure && heroFigure) {
      const a = heroFigure.getBoundingClientRect();
      const b = cloneFigure.getBoundingClientRect();
      if (a.height > 0 && b.height > 0) {
        lbModel.style.transformOrigin = '0 100%';
        lbModel.style.transform = `translate3d(${a.left - b.left}px, ${a.bottom - b.bottom}px, 0) scale(${a.height / b.height})`;
      }
    }

    this.classList.remove('rw--zoom');
    this.lb.setAttribute('aria-hidden', 'true');

    window.clearTimeout(this.zoomClearTimer);
    this.zoomClearTimer = window.setTimeout(
      () => {
        if (!this.zoomed) {
          this.lbStage.innerHTML = '';
        }
      },
      this.reducedMotion ? 0 : 950
    );

    if (wasFocusedInside) {
      this.stage.focus({ preventScroll: true });
    }
  }
}

if (!customElements.get('runway-section')) {
  customElements.define('runway-section', RunwaySection);
}
