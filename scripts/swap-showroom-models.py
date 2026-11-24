# -*- coding: utf-8 -*-
"""Remplace les 6 modèles du Showroom par les véhicules de `doc shayo/voiture showroom`.

Les noms, carrosseries et teintes proviennent du PDF « Catalogue Showroom Chaillot Auto ».
La configuration (options, prix, finitions) reste inchangée : elle sera traitée plus tard.
"""
import io
import re

MODELS = [
    dict(old="Porsche 911 GT3 RS", new="Toyota Camry SE Hybrid", body="Berline",
         teinte="Blanc nacré", oldimg="car_porsche_gt3_1795459062880.jpg",
         slug="toyota-camry-se-hybrid", pins=[(37, 77), (57, 49), (17, 62)]),
    dict(old="Ferrari 296 GTB", new="Skynomad SUV", body="Grand SUV",
         teinte="Gris anthracite", oldimg="car_ferrari_296_1795459062683.jpg",
         slug="skynomad-suv", pins=[(37, 75), (57, 42), (17, 58)]),
    dict(old="Aston Martin DB12", new="Changan UNI-V", body="Berline Fastback",
         teinte="Gris foncé", oldimg="car_aston_vantage_1795459064488.jpg",
         slug="changan-uni-v", pins=[(37, 77), (57, 49), (17, 62)]),
    dict(old="Lamborghini Huracán STO", new="Landwind X7 2.0T", body="SUV Compact",
         teinte="Or / Bronze métallisé", oldimg="car_lambo_tecnica_1795459064265.jpg",
         slug="landwind-x7-2-0t", pins=[(37, 75), (57, 43), (17, 58)]),
    dict(old="Berline GT Électrique", new="Mazda CX-5", body="SUV",
         teinte="Noir profond", oldimg="car_audi_etron_1795459064488.jpg",
         slug="mazda-cx-5", pins=[(37, 74), (57, 40), (17, 56)]),
    dict(old="Aston Martin DB11 V8", new="Jetour Traveller T2", body="4x4 Tout-Terrain",
         teinte="Blanc & Noir", oldimg="car_amg_gt_1795459065093.jpg",
         slug="jetour-traveller-t2", pins=[(37, 74), (57, 39), (17, 56)]),
]

# Libellés de configuration génériques, alignés sur les visuels d'accessoires existants.
ITEM = [
    ("Jantes alliage", "Train roulant"),
    ("Sellerie et habillage", "Habitacle"),
    ("Kit carrosserie", "Extérieur"),
]

OLD_ITEMS = [
    ["Jantes Forgées Magnésium", "Sellerie Baquet Carbone", "Pack Aéro Carbone DRS"],
    ["Jantes Forgées Corsa", "Sièges Racing Carbone", "Pack Fiorano Carbone"],
    ["Jantes Forgées Y-Spoke", "Sellerie Grand Tourisme", "Pack Splitter & Diffuseur"],
    ["Jantes Monobloc Hek", "Baquets Monocoque STO", "Pack Aéro Cofango Carbone"],
    ["Jantes Aéro Forgées", "Sellerie Sport Végane", "Pack Carbone Track"],
    ["Jantes Forgées 10 Branches", "Sellerie Cuir Capitonnée", "Pack Carbone Extérieur"],
]

OLD_TYPES = [
    "Atelier Weissach", "Sellerie Sur Mesure", "Département Aéro",
    "Atelier Maranello", "Sellerie Cuir Pleine Fleur", "Département Aéro",
    "Atelier Gaydon", "Cuir Bridge of Weir", "Département Aéro",
    "Sant’Agata Forged", "Atelier Alcantara", "Département Aéro",
    "Atelier Performance", "Sellerie Sur Mesure", "Département Aéro",
    "Atelier Gaydon", "Cuir Pleine Fleur", "Département Aéro",
]

PIN_RE = re.compile(r'style="left:[0-9]+%;top:[0-9]+%;--pi:[0-9]+"')
TYPE_RE = re.compile(r'(class="rw__type">)([^<]*)<')
LBL_RE = re.compile(r'(<span class="rw__label">)3 options</span>')
SIZE_RE = re.compile(r'(width="1200")(\s+)height="900"')


def esc(text):
    return text.replace("&", "&amp;")


def rewrite(path, is_html):
    src = io.open(path, encoding="utf-8").read()
    size_before = len(src)
    s = src

    # 1. tokenise les 18 noms d'options (chaînes toutes distinctes)
    for m, names in enumerate(OLD_ITEMS):
        for j, name in enumerate(names):
            variants = [name, name.replace("&", "&amp;"), name.replace("&amp;", "&")]
            needle = next((v for v in variants if v in s), None)
            assert needle, (path, name)
            s = s.replace(needle, "@@IT%d_%d@@" % (m, j))

    # 2. tokenise les libellés de type, positionnellement (valeurs répétées)
    type_hits = []

    def on_type(mo):
        idx = len(type_hits)
        type_hits.append(idx)
        return mo.group(1) + "@@TY%d@@" % idx + "<"

    s = TYPE_RE.sub(on_type, s)
    assert len(type_hits) == 18, ("types", len(type_hits))

    # 3. tokenise les positions des repères, positionnellement
    pin_hits = []

    def on_pin(mo):
        idx = len(pin_hits)
        pin_hits.append(idx)
        return "@@PIN%d@@" % idx

    s = PIN_RE.sub(on_pin, s)
    assert len(pin_hits) == 18, ("pins", len(pin_hits))

    # 4. tokenise le libellé « 3 options » de chaque en-tête de modèle
    lbl_hits = []

    def on_lbl(mo):
        idx = len(lbl_hits)
        lbl_hits.append(idx)
        return mo.group(1) + "@@LBL%d@@" % idx + "</span>"

    s = LBL_RE.sub(on_lbl, s)
    assert len(lbl_hits) == 6, ("labels", len(lbl_hits))

    # 5. noms de modèles et chemins d'images
    for idx, model in enumerate(MODELS):
        assert model["old"] in s, model["old"]
        assert model["oldimg"] in s, model["oldimg"]
        s = s.replace(model["old"], "@@MD%d@@" % idx)
        s = s.replace(model["oldimg"], "showroom-%s.webp" % model["slug"])

    # 6. résolution des jetons
    for idx, model in enumerate(MODELS):
        s = s.replace("@@MD%d@@" % idx, model["new"])
    for m in range(6):
        for j in range(3):
            s = s.replace("@@IT%d_%d@@" % (m, j), ITEM[j][0])
    for idx in range(18):
        s = s.replace("@@TY%d@@" % idx, ITEM[idx % 3][1])
    k = 0
    for model in MODELS:
        for x, y in model["pins"]:
            s = s.replace("@@PIN%d@@" % k,
                          'style="left:%d%%;top:%d%%;--pi:%d"' % (x, y, (k % 3) + 1))
            k += 1
    for idx, model in enumerate(MODELS):
        s = s.replace("@@LBL%d@@" % idx, esc("%s · %s" % (model["body"], model["teinte"])))

    # 7. texte alternatif enrichi sur les 12 visuels de véhicule
    for model in MODELS:
        alt = esc("%s — %s, %s, vue trois-quarts avant" % (model["new"], model["body"], model["teinte"]))
        s = s.replace('alt="%s"' % model["new"], 'alt="%s"' % alt)

    # 8. dimensions intrinsèques désormais 1200 x 760
    s = SIZE_RE.sub(lambda mo: mo.group(1) + mo.group(2) + 'height="760"', s)

    io.open(path, "w", encoding="utf-8", newline="").write(s)
    print("%-14s %6d -> %6d caracteres" % (path, size_before, len(s)))
    return s


if __name__ == "__main__":
    rewrite("showroom.html", True)
    rewrite("index.html", True)
