#!/usr/bin/env python3
"""Write smaller WebP copies of the photographs, portraits and paper figures.

Pages show these images far smaller than the files are stored: a 1,400 px
photograph sits in a 270 px card. For every image in the folders below this
writes `<name>-320.webp`, `-640.webp` and `-960.webp` beside it (only widths
smaller than the original). `src/data/image-variants.ts` finds them at build
time and offers them to the browser, which picks the smallest that is sharp.

Run after adding or replacing an image:  python3 scripts/make-image-variants.py
Needs Pillow. The originals are never modified.
"""
import re
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent / 'public' / 'media'
FOLDERS = ['documentary', 'figures-published', 'people']
WIDTHS = [320, 640, 960]
VARIANT = re.compile(r'-(\d+)\.webp$')

for folder in FOLDERS:
    for source in sorted((ROOT / folder).iterdir()):
        if source.suffix.lower() not in {'.jpg', '.jpeg', '.png', '.webp'} or VARIANT.search(source.name):
            continue
        image = Image.open(source)
        image = image.convert('RGBA' if image.mode in ('RGBA', 'LA', 'P') else 'RGB')
        for width in WIDTHS:
            if width >= image.width:
                continue
            target = source.with_name(f'{source.stem}-{width}.webp')
            height = round(image.height * width / image.width)
            image.resize((width, height), Image.LANCZOS).save(target, 'WEBP', quality=80, method=6)
            print(f'{target.relative_to(ROOT)}  {target.stat().st_size // 1024} KB')
