# -*- coding: utf-8 -*-
"""Normalise les logos marques dans une même boîte 140 x 40 (fond transparent).

Les fichiers source ont des ratios très différents (emblemes carres, wordmarks
très larges) : on rogne les marges transparentes puis on ajuste chaque logo
dans une boite identique, ce qui donne une taille visuelle homogene dans la
bande de defilement.
"""
import os
from PIL import Image

SRC = os.path.join("doc shayo", "logo")
DST = os.path.join("src", "assets", "images", "brands")

BRANDS = [
    ("audi", "audi.png"),
    ("byd", "BYD-Logo.png"),
    ("changan", "changan.png"),
    ("exeed", "exceed.png"),
    ("honda", "honda.png"),
    ("jetour", "lg-698eea37900fd-Jetour.webp"),
    ("land-rover", "landrover.png"),
    ("mazda", "Mazda_logo.png"),
    ("mercedes-benz", "mercedes.png"),
    ("toyota", "Toyota_logo.png"),
]

BOX_W, BOX_H = 140, 40


def trim_alpha(im):
    alpha = im.getchannel("A")
    bbox = alpha.point(lambda p: 255 if p > 8 else 0).getbbox()
    return im.crop(bbox) if bbox else im


def main():
    os.makedirs(DST, exist_ok=True)
    for slug, filename in BRANDS:
        im = Image.open(os.path.join(SRC, filename)).convert("RGBA")
        im = trim_alpha(im)
        scale = min(BOX_W / im.width, BOX_H / im.height)
        size = (max(1, round(im.width * scale)), max(1, round(im.height * scale)))
        im = im.resize(size, Image.LANCZOS)

        canvas = Image.new("RGBA", (BOX_W, BOX_H), (0, 0, 0, 0))
        canvas.alpha_composite(im, ((BOX_W - size[0]) // 2, (BOX_H - size[1]) // 2))
        out = os.path.join(DST, f"brand-{slug}.webp")
        canvas.save(out, "WEBP", quality=90, method=6)
        print(f"{slug:14} {size[0]:3}x{size[1]:2}  {os.path.getsize(out) // 1024} Ko")


if __name__ == "__main__":
    main()
