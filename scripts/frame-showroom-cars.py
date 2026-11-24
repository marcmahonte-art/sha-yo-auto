# -*- coding: utf-8 -*-
"""Recadre les prises de vue studio du PDF sur la composition exacte du Showroom.

Sortie : 1200 x 760 (ratio 1.58, comme les visuels d'origine), voiture à 88 % de la
largeur, ligne de sol à 88 % de la hauteur, fond blanc pur (compatible mix-blend-mode: multiply).
Les positions des repères 1/2/3 sont calculées à partir de la boîte englobante réelle.
"""
import os
import statistics

from PIL import Image, ImageChops

SRC = "doc shayo/voiture showroom"
OUT = "src/assets/images"

CARS = [
    ("toyota-camry-se-hybrid", "Toyota Camry SE Hybrid.png"),
    ("skynomad-suv", "Skynomad SUV.png"),
    ("changan-uni-v", "Changan UNI-V.png"),
    ("landwind-x7-2-0t", "Landwind X7 2.0T.png"),
    ("mazda-cx-5", "Mazda CX-5.png"),
    ("jetour-traveller-t2", "Jetour Traveller T2.png"),
]

CW, CH = 1200, 760
TARGET_W = 1056
BASELINE = 669
LEFT = (CW - TARGET_W) // 2


def body_bbox(im, thr=45):
    bg = Image.new("RGB", im.size, (255, 255, 255))
    diff = ImageChops.difference(im.convert("RGB"), bg).convert("L")
    return diff.point(lambda p: 255 if p > thr else 0).getbbox()


def white_point(im):
    """Ramène un fond studio gris (ex. #F1F1F1) à un blanc pur."""
    w, h = im.size
    band = [im.getpixel((x, y)) for y in range(0, 25) for x in range(0, w, 7)]
    band += [im.getpixel((x, y)) for x in range(0, 25) for y in range(0, h, 7)]
    bg = [statistics.median(v[i] for v in band) for i in range(3)]
    if min(bg) >= 253:
        return im, bg
    gain = [255.0 / max(c, 1) for c in bg]
    lut = []
    for c in range(3):
        g = gain[c]
        lut += [min(255, int(round(v * g))) for v in range(256)]
    return im.point(lut), bg


def main():
    rows = []
    for slug, fname in CARS:
        im = Image.open(os.path.join(SRC, fname))
        if im.mode in ("RGBA", "LA", "P"):
            im = im.convert("RGBA")
            flat = Image.new("RGBA", im.size, (255, 255, 255, 255))
            im = Image.alpha_composite(flat, im)
        im = im.convert("RGB")
        im, bg = white_point(im)

        bx0, by0, bx1, by1 = body_bbox(im)
        s = TARGET_W / (bx1 - bx0)
        scaled = im.resize((round(im.width * s), round(im.height * s)), Image.LANCZOS)

        canvas = Image.new("RGB", (CW, CH), (255, 255, 255))
        canvas.paste(scaled, (round(LEFT - bx0 * s), round(BASELINE - by1 * s)))

        dst = os.path.join(OUT, "showroom-%s.webp" % slug)
        canvas.save(dst, "WEBP", quality=84, method=6)

        car_h = round((by1 - by0) * s)
        y0c = BASELINE - car_h
        pins = [
            (round((LEFT + 0.35 * TARGET_W) / CW * 100), round((BASELINE - 0.20 * car_h) / CH * 100)),
            (round((LEFT + 0.58 * TARGET_W) / CW * 100), round((y0c + 0.32 * car_h) / CH * 100)),
            (round((LEFT + 0.13 * TARGET_W) / CW * 100), round((BASELINE - 0.45 * car_h) / CH * 100)),
        ]
        rows.append((slug, bg, os.path.getsize(dst) // 1024, pins))

    print("%-26s %-16s %5s  repères" % ("fichier", "fond source", "Ko"))
    for slug, bg, kb, pins in rows:
        print("%-26s %-16s %5d  %s" % (slug, "%.0f/%.0f/%.0f" % tuple(bg), kb, pins))


if __name__ == "__main__":
    main()
