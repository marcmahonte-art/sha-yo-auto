# -*- coding: utf-8 -*-
"""Prépare les deux visuels supplémentaires du catalogue au format Showroom."""
import importlib.util
import os

from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
SPEC = importlib.util.spec_from_file_location(
    "extract_catalogue_cars", os.path.join(HERE, "extract-catalogue-cars.py")
)
extract = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(extract)

SRC = os.path.join("doc shayo", "voiture showroom")
OUT = os.path.join("src", "assets", "images", "catalogue")

CARS = [
    ("Zotye T700 2017.png", "zotye-t700-2017-rouge"),
    ("GLE mercedes.png", "mercedes-benz-gle"),
]


def main():
    os.makedirs(OUT, exist_ok=True)
    for filename, slug in CARS:
        im = Image.open(os.path.join(SRC, filename)).convert("RGB")
        im = extract.white_point(im)
        bx0, by0, bx1, by1 = extract.body_bbox(im)
        scale = extract.TARGET_W / (bx1 - bx0)
        im = im.resize(
            (round(im.width * scale), round(im.height * scale)), Image.LANCZOS
        )
        canvas = Image.new("RGB", (extract.CW, extract.CH), (255, 255, 255))
        canvas.paste(
            im,
            (
                round(extract.LEFT - bx0 * scale),
                round(extract.BASELINE - by1 * scale),
            ),
        )
        dst = os.path.join(OUT, "%s.webp" % slug)
        canvas.save(dst, "WEBP", quality=84, method=6)
        print("%-24s %4d Ko" % (slug, os.path.getsize(dst) // 1024))


if __name__ == "__main__":
    main()
