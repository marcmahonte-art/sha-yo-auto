# -*- coding: utf-8 -*-
"""Aligne le catalogue TypeScript (CATALOG) sur les nouveaux modèles du Showroom."""
import io

MODELS = [
    ("Toyota Camry SE Hybrid", "Berline, blanc nacré — finition SE hybride.", "toyota-camry-se-hybrid"),
    ("Skynomad SUV", "Grand SUV, gris anthracite.", "skynomad-suv"),
    ("Changan UNI-V", "Berline fastback, gris foncé.", "changan-uni-v"),
    ("Landwind X7 2.0T", "SUV compact, or / bronze métallisé.", "landwind-x7-2-0t"),
    ("Mazda CX-5", "SUV, noir profond.", "mazda-cx-5"),
    ("Jetour Traveller T2", "4x4 tout-terrain, blanc & noir.", "jetour-traveller-t2"),
]

OLD_LOOKS = [
    ("Porsche 911 GT3 RS", "Configuration circuit Weissach.", "car_porsche_gt3_1795459062880.jpg"),
    ("Ferrari 296 GTB", "Coupé hybride V6 Rosso Corsa.", "car_ferrari_296_1795459062683.jpg"),
    ("Aston Martin DB12", "Super Tourer Vert Racing.", "car_aston_vantage_1795459064488.jpg"),
    ("Lamborghini Huracán STO", "V10 atmosphérique homologué piste.", "car_lambo_tecnica_1795459064265.jpg"),
    ("Berline GT Électrique", "Grand Tourisme zéro émission.", "car_audi_etron_1795459064488.jpg"),
    ("Aston Martin DB11 V8", "Coupé GT Bleu Nuit.", "car_amg_gt_1795459065093.jpg"),
]

ITEM = [("Jantes alliage", "Train roulant"), ("Sellerie et habillage", "Habitacle"), ("Kit carrosserie", "Extérieur")]

path = "src/main.ts"
lines = io.open(path, encoding="utf-8").read().split("\n")

# --- 1. bloc `looks` ---
for old_name, old_desc, old_img in OLD_LOOKS:
    idx = MODELS[OLD_LOOKS.index((old_name, old_desc, old_img))]
    new_name, new_desc, slug = idx
    for i, line in enumerate(lines):
        if old_name in line and line.strip().startswith("name:"):
            lines[i] = line.replace("'%s'" % old_name, "'%s'" % new_name)
        elif old_desc in line:
            lines[i] = line.replace("'%s'" % old_desc, "'%s'" % new_desc)
        elif old_img in line:
            lines[i] = line.replace(old_img, "showroom-%s.webp" % slug)

# --- 2. bloc `items` ---
start = next(i for i, l in enumerate(lines) if l.strip() == "items: [")
n = 0
for i in range(start, len(lines)):
    line = lines[i]
    st = line.strip()
    if st.startswith("name: '") and n < 18:
        lines[i] = "      name: '%s'," % ITEM[n % 3][0]
    elif st.startswith("type: '") and n < 18:
        lines[i] = "      type: '%s'," % ITEM[n % 3][1]
    elif st.startswith("modelName: '") and n < 18:
        lines[i] = "      modelName: '%s'," % MODELS[n // 3][0]
        n += 1
assert n == 18, n

io.open(path, "w", encoding="utf-8", newline="").write("\n".join(lines))
print("src/main.ts : 6 looks + %d items mis a jour" % n)
