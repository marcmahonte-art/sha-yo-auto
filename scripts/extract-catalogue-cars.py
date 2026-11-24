# -*- coding: utf-8 -*-
"""Extrait les 10 visuels du PDF catalogue et les recadre comme le Showroom."""
import io
import os
import statistics

import fitz
from PIL import Image, ImageChops

PDF = os.path.join("doc shayo", "voiture showroom", "Catalogue Showroom Chaillot Auto.pdf")
OUT = os.path.join("src", "assets", "images", "catalogue")

SLUGS = [
    "toyota-camry-se-hybrid",
    "mazda-cx-3-awd",
    "zotye-t700",
    "skynomad-suv",
    "changan-uni-v",
    "landwind-x7-2-0t",
    "landwind-x5",
    "toyota-yaris-l",
    "mazda-cx-5",
    "jetour-traveller-t2",
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
    w, h = im.size
    band = [im.getpixel((x, y)) for y in range(0, min(25, h)) for x in range(0, w, 7)]
    band += [im.getpixel((x, y)) for x in range(0, min(25, w)) for y in range(0, h, 7)]
    bg = [statistics.median(v[i] for v in band) for i in range(3)]
    if min(bg) >= 253:
        return im
    gain = [255.0 / max(c, 1) for c in bg]
    lut = []
    for c in range(3):
        g = gain[c]
        lut += [min(255, int(round(v * g))) for v in range(256)]
    return im.point(lut)


def main():
    os.makedirs(OUT, exist_ok=True)
    doc = fitz.open(PDF)
    images = []
    for page in doc:
        for entry in page.get_images(full=True):
            images.append(doc.extract_image(entry[0])["image"])
    assert len(images) == len(SLUGS), "%d visuels pour %d modèles" % (len(images), len(SLUGS))

    for slug, raw in zip(SLUGS, images):
        im = Image.open(io.BytesIO(raw)).convert("RGB")
        im = white_point(im)
        bx0, by0, bx1, by1 = body_bbox(im)
        scale = TARGET_W / (bx1 - bx0)
        im = im.resize((round(im.width * scale), round(im.height * scale)), Image.LANCZOS)
        canvas = Image.new("RGB", (CW, CH), (255, 255, 255))
        canvas.paste(im, (round(LEFT - bx0 * scale), round(BASELINE - by1 * scale)))
        dst = os.path.join(OUT, "%s.webp" % slug)
        canvas.save(dst, "WEBP", quality=84, method=6)
        print("%-24s %4d Ko" % (slug, os.path.getsize(dst) // 1024))


if __name__ == "__main__":
    main()
