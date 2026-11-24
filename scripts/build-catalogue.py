# -*- coding: utf-8 -*-
"""Génère les 10 fiches du catalogue public à partir du PDF Chaillot Auto."""
import html
import io
import re

CARS = [
    ("toyota-camry-se-hybrid", "Toyota Camry SE Hybrid", "Berline", "Blanc nacré", "berline", "Profil trois-quarts avant",
     "Finition sportive SE avec calandre nid d’abeille noire, emblème Toyota hybride bleu et jantes alliage multibranches."),
    ("mazda-cx-3-awd", "Mazda CX-3 AWD", "SUV Compact", "Gris métallisé", "suv", "Profil trois-quarts avant",
     "Transmission intégrale AWD, calandre chromée Kodo, passages de roues noirs mats et jantes alliage."),
    ("zotye-t700", "Zotye T700", "SUV", "Blanc pur", "suv", "Profil trois-quarts avant",
     "Calandre étoilée chromée, optiques LED effilées, ouïes latérales chromées et barres de toit aluminium."),
    ("skynomad-suv", "Skynomad SUV", "Grand SUV", "Gris anthracite", "suv", "Profil trois-quarts avant",
     "Face avant épurée avec signature lumineuse horizontale, capteur de toit, poignées affleurantes et jantes bicolores grand diamètre."),
    ("changan-uni-v", "Changan UNI-V", "Berline Fastback", "Gris foncé", "berline", "Profil trois-quarts avant",
     "Calandre paramétrique sans cadre, phares LED acérés, bouclier sport et jantes alliage noir brillant."),
    ("landwind-x7-2-0t", "Landwind X7 2.0T", "SUV Compact", "Or / Bronze métallisé", "suv", "Profil trois-quarts avant",
     "Carrosserie teinte bronze doré, montants de toit noir laqué, sabot avant aluminium et jantes bicolores."),
    ("landwind-x5", "Landwind X5", "SUV", "Blanc pur", "suv", "Vue de face trois-quarts",
     "Vue trois-quarts face mettant en valeur la calandre à barrettes chromées, les rétroviseurs noirs et le sabot de protection avant."),
    ("toyota-yaris-l", "Toyota Yaris L", "Citadine Compacte", "Blanc pur", "citadine", "Profil trois-quarts avant",
     "Silhouette compacte 5 portes, calandre trapézoïdale noire, optiques effilées et jantes alliage argentées."),
    ("mazda-cx-5", "Mazda CX-5", "SUV", "Noir profond", "suv", "Profil trois-quarts avant",
     "Teinte noir brillant, entourage de calandre chromé et jantes alliage 5 branches doubles."),
    ("jetour-traveller-t2", "Jetour Traveller T2", "4x4 Tout-Terrain", "Blanc & Noir", "4x4", "Profil trois-quarts avant",
     "Design baroudeur angulaire, galerie de toit avec rampes LED intégrées, pare-chocs renforcé noir et pneus tout-terrain."),
]

FILTERS = """        <div class="sy-filters" role="group" aria-label="Filtrer les véhicules">
          <button class="sy-filter" type="button" data-filter="all" aria-pressed="true">Tous</button>
          <button class="sy-filter" type="button" data-filter="berline" aria-pressed="false">Berlines</button>
          <button class="sy-filter" type="button" data-filter="suv" aria-pressed="false">SUV</button>
          <button class="sy-filter" type="button" data-filter="4x4" aria-pressed="false">4x4</button>
          <button class="sy-filter" type="button" data-filter="citadine" aria-pressed="false">Citadines</button>
          <button class="sy-filter sy-btn sy-btn--quiet" type="button" data-filter-reset>Réinitialiser les filtres</button>
        </div>
        <div class="sy-grid sy-grid--cols-3 gap-6">
"""

CARD = """          <button class="sy-card" type="button" data-cat="{cat}" data-vehicle="{name}" data-body="{body}" data-color="{color}" data-angle="{angle}" data-desc="{desc}">
            <img class="sy-card-img" src="/src/assets/images/catalogue/{slug}.webp" alt="{name}, {body}, {color}" width="1200" height="760" />
            <span class="sy-card-body">
              <span class="sy-card-title">{name}</span>
              <span class="sy-card-text">{body} · {color}</span>
              <span class="sy-card-status sy-badge">Prix sur demande</span>
              <span class="sy-card-cta">Voir la fiche <span aria-hidden="true">→</span></span>
            </span>
          </button>
"""

BLOCK_RE = re.compile(
    r'        <div class="sy-filters".*?<div class="sy-grid sy-grid--cols-3 gap-6">.*?'
    r'<!-- Additional vehicle cards can be added here -->\n        </div>\n',
    re.S,
)


def main():
    path = "catalogue.html"
    html_text = io.open(path, encoding="utf-8").read()

    cards = "".join(
        CARD.format(
            slug=slug, cat=cat,
            name=html.escape(name, quote=True), body=html.escape(body, quote=True),
            color=html.escape(color, quote=True), angle=html.escape(angle, quote=True),
            desc=html.escape(desc, quote=True),
        )
        for slug, name, body, color, cat, angle, desc in CARS
    )

    new_block = FILTERS + cards + "        </div>\n"
    html_text, n = BLOCK_RE.subn(lambda _: new_block, html_text, count=1)
    assert n == 1, "bloc catalogue introuvable"

    html_text = html_text.replace(
        "Véhicules neufs, d’occasion et de luxe à Ouagadougou. Les véhicules sont publiés ici dès que leur état, leurs caractéristiques et leur prix sont validés.",
        "Véhicules neufs, d’occasion et de luxe à Ouagadougou. Les caractéristiques proviennent du catalogue visuel Chaillot Auto ; le prix et la disponibilité se demandent directement à l’équipe SHA-YO AUTO.",
    )

    io.open(path, "w", encoding="utf-8", newline="").write(html_text)
    print("%d fiches générées dans %s" % (len(CARS), path))


if __name__ == "__main__":
    main()
