# -*- coding: utf-8 -*-
"""Remplace les 3 cartes d'accessoires par l'assistant de recherche 4 critères.

- 6 panneaux : chaque contenu après .rw__mhead devient un simple hôte.
- 6 blocs de repères : les libellés deviennent ceux des 4 critères et un 4e pin est ajouté.
- Le compteur « 3 options » devient « 4 critères ».
"""
import io
import re

FILES = ["showroom.html", "index.html"]

PIN_LABELS = {
    1: "Motorisation + Transmission",
    2: "État recherché",
    3: "Budget estimatif",
    4: "Couleur préférée",
}

PIN4 = [
    (76, 40),  # Toyota Camry SE Hybrid
    (76, 31),  # Skynomad SUV
    (76, 40),  # Changan UNI-V
    (76, 33),  # Landwind X7 2.0T
    (76, 28),  # Mazda CX-5
    (76, 28),  # Jetour Traveller T2
]

PANEL_RE = re.compile(
    r'(<div class="rw__look-panel[^>]*data-rw-panel="\d+"[^>]*>\s*'
    r'<div class="rw__mhead">.*?</div>\s*)'
    r'.*?'
    r'(<template data-rw-pieces-text>)3 options(</template>\s*</div>)',
    re.S,
)

PINS_RE = re.compile(r'<div class="rw__pins">.*?</div>\s*</div>', re.S)


def esc(text):
    return text.replace("&", "&amp;")


def rewrite_pins(html):
    for n, label in PIN_LABELS.items():
        html = re.sub(
            r'(<button class="rw__pin"[^>]*data-rw-pin="%d"[^>]*data-tip=")[^"]*(")' % n,
            lambda m, v=label: m.group(1) + esc(v) + m.group(2),
            html,
        )
        html = re.sub(
            r'(<button class="rw__pin"[^>]*data-rw-pin="%d"[^>]*aria-label=")\d+ : [^"]*(")' % n,
            lambda m, v=n, l=label: m.group(1) + "%d : %s" % (v, l) + m.group(2),
            html,
        )

    counter = {"i": 0}

    def add_fourth(match):
        block = match.group(0)
        if 'data-rw-pin="4"' in block:
            return block
        x, y = PIN4[counter["i"] % len(PIN4)]
        counter["i"] += 1
        label = esc(PIN_LABELS[4])
        pin = (
            '\n                            <button class="rw__pin" type="button" data-rw-pin="4" '
            'data-tip="%s" style="left:%d%%;top:%d%%;--pi:4" aria-label="4 : %s" tabindex="-1">'
            '<span class="rw__pin-dot">4</span></button>' % (label, x, y, label)
        )
        cut = block.rfind("</div>")
        return block[:cut] + pin + "\n" + block[cut:]

    html = PINS_RE.sub(add_fourth, html)
    assert counter["i"] == 6, "6 blocs de repères attendus, %d traités" % counter["i"]
    return html


def main():
    for path in FILES:
        html = io.open(path, encoding="utf-8").read()
        before = html

        html, panels = PANEL_RE.subn(
            lambda m: m.group(1)
            + '<div class="rw__config-host" data-rw-config-host></div>\n                  '
            + m.group(2)
            + "4 critères"
            + m.group(3),
            html,
        )
        assert panels == 6, "%s : 6 panneaux attendus, %d traités" % (path, panels)

        html = html.replace(
            '<span class="rw__label" data-rw-pieces>3 options</span>',
            '<span class="rw__label" data-rw-pieces>4 critères</span>',
        )
        html = rewrite_pins(html)

        io.open(path, "w", encoding="utf-8", newline="").write(html)
        print("%-14s %d -> %d octets | panneaux=%d pins=%d" % (
            path, len(before), len(html), panels, html.count('data-rw-pin="')
        ))


if __name__ == "__main__":
    main()
