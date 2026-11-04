"""Prepare reviewed KMŠ photographs (Python 3 + Pillow); no screenshots.
Originals and source selection are preserved in KMS-Foto-Paket.
"""
from pathlib import Path
from hashlib import sha256
import json
from PIL import Image, ImageOps
ROOT = Path(__file__).resolve().parents[1]
DETAILS = {
 'ftrgatev':('ftrgatev-01','Nastopajoči z mikrofonom na Ftrgatvi','Andraž Kramberger'),
 'cantus':('cantus-01','Udeleženci Cantusa za mizami v dvorani','Dostop.si'),
 'oder':('kms-oder-01','Glasbena skupina na odru KMŠ ODER','Vir: KMŠ'),
 'kreativa':('kreativa-01','Risanje na ustvarjalni delavnici KMŠ','Isidora Veličković'),
 'jazz':('jazz-veceri-01','Saksofonist, kontrabasist in bobnar na jazzovskem nastopu','Janin Vezonik'),
 'dobrodelnost':('dobrodelnost-01','Udeleženci dobrodelne akcije KrofeQ z vozičkom na ulici','Rok Hlade Weis'),
 'standup':('standup-01','Nasmejano občinstvo večera Stand UP v Pisarni','Vezonik (podpis na fotografiji)'),
 'pisarna':('pisarna-koncert-01','Pevka in glasbeniki na koncertu v Pisarni','Andraž Kramberger'),
}
def main():
 selected=json.loads((ROOT/'KMS-Foto-Paket/docs/selected-photographs.json').read_text())
 records=[]
 for row in selected:
  name,alt,credit=DETAILS[row['slug']]
  original=ROOT/row['original']
  with Image.open(original) as source:
   image=ImageOps.exif_transpose(source).convert('RGB');image.thumbnail((1280,1280),Image.Resampling.LANCZOS)
   jpg=ROOT/'public/assets/events'/f'{name}.jpg';webp=jpg.with_suffix('.webp')
   image.save(jpg,quality=87,optimize=True,progressive=True)
   image.save(webp,quality=82,method=6)
   row.update(src=f'/assets/events/{name}.jpg',webpSrc=f'/assets/events/{name}.webp',alt=alt,credit=credit,width=image.width,height=image.height,permission='KMŠ permission reported by user on 2026-11-04',reviewed=True,jpegBytes=jpg.stat().st_size,webpBytes=webp.stat().st_size,jpegSha256=sha256(jpg.read_bytes()).hexdigest(),webpSha256=sha256(webp.read_bytes()).hexdigest())
  records.append(row)
 (ROOT/'docs/KMS_PHOTO_SELECTION.json').write_text(json.dumps(records,ensure_ascii=False,indent=2)+'\n')
 public={r['slug']:{k:r[k] for k in ['src','webpSrc','alt','credit','sourcePage','width','height']} for r in records}
 code='// Reviewed local photographs; provenance: docs/KMS_PHOTO_SELECTION.json.\nexport const kmsPhotos = '+json.dumps(public,ensure_ascii=False,indent=2)+' as const;\n'
 code+='\nexport const heroPhotos = [\n  {position: "left", label: "Glasba", ...kmsPhotos.ftrgatev},\n  {position: "center", label: "Dogodki", ...kmsPhotos.oder},\n  {position: "right", label: "Skupnost", ...kmsPhotos.cantus},\n] as const;\n'
 (ROOT/'src/data/kmsPhotos.ts').write_text(code)
 print('Prepared',len(records),'reviewed photographs. JPEG:',sum(r['jpegBytes'] for r in records),'B; WebP:',sum(r['webpBytes'] for r in records),'B')
if __name__=='__main__':main()
