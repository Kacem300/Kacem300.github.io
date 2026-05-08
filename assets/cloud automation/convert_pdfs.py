import fitz
import os

os.chdir(os.path.dirname(os.path.abspath(__file__)))

pdf_files = {
    'Hardware.pdf (2).pdf': 'Hardware2.png',
    'Hardware.pdf (3).pdf': 'Hardware3.png',
    'Hardware3.pdf': 'Hardware.png'
}

for pdf_name, img_name in pdf_files.items():
    try:
        doc = fitz.open(pdf_name)
        pix = doc[0].get_pixmap(matrix=fitz.Matrix(2, 2))
        pix.save(img_name)
        print(f"✓ Converted {pdf_name} to {img_name}")
    except Exception as e:
        print(f"✗ Error converting {pdf_name}: {e}")

print("Done!")
