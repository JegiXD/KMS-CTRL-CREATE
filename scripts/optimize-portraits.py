"""Recreate local WebP derivatives; requires Python 3 and Pillow with WebP support.

Run from any directory: python3 scripts/optimize-portraits.py
Original JPEGs, dimensions, crops and colour profiles on disk are not modified.
"""

from io import BytesIO
from pathlib import Path

from PIL import Image, features


ROOT = Path(__file__).resolve().parents[1]
PORTRAITS = ("jan-ozvaldic", "doroteja-plohl", "gabriela-brodnjak")


def main():
    if not features.check("webp"):
        raise RuntimeError("Pillow needs WebP support")

    total_original = total_webp = 0
    for name in PORTRAITS:
        source = ROOT / "public" / "assets" / "team" / f"{name}.jpg"
        output = source.with_suffix(".webp")
        with Image.open(source) as image:
            if image.size != (300, 300):
                raise ValueError(f"Recheck crop and dimensions before exporting: {source}")
            encoded = BytesIO()
            image.save(encoded, format="WEBP", quality=85, method=6)
        data = encoded.getvalue()
        original_size = source.stat().st_size
        if len(data) >= original_size:
            raise ValueError(f"WebP is not smaller than the source: {source}")
        output.write_bytes(data)
        total_original += original_size
        total_webp += len(data)
        print(f"{output.relative_to(ROOT)}: {original_size} -> {len(data)} bytes")

    print(f"Total: {total_original} -> {total_webp} bytes ({1 - total_webp / total_original:.1%} smaller)")


if __name__ == "__main__":
    main()
