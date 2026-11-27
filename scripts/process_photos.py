"""
Pipeline de Processamento e Otimização de Fotos - Rodrigues Tur
Ecosystem: HelpUS Technology
Domain: rodriguestour.helpusbr.com
Suporte a imagens individuais e pacotes compactados .ZIP do WhatsApp.
"""

import os
import sys
import json
import shutil
import zipfile
from pathlib import Path
from datetime import datetime
from PIL import Image, ImageOps, ExifTags

BASE_DIR = Path(r"D:\AntiG\rodriguestur")
INTAKE_DIR = BASE_DIR / "media" / "fotos_novas"
GALLERY_DIR = BASE_DIR / "assets" / "images" / "viagens"

def get_exif_date(image):
    """Extrai a data original da foto a partir dos metadados EXIF."""
    try:
        exif = image.getexif()
        if not exif:
            return None
        for tag_id, value in exif.items():
            tag_name = ExifTags.TAGS.get(tag_id, tag_id)
            if tag_name in ("DateTimeOriginal", "DateTimeDigitized", "DateTime"):
                clean_val = str(value).strip().replace("-", ":")
                parts = clean_val.split(" ")
                date_parts = parts[0].split(":")
                if len(date_parts) == 3:
                    return f"{date_parts[0]}-{date_parts[1].zfill(2)}-{date_parts[2].zfill(2)}"
    except Exception:
        pass
    return None

def process_image(src_path, trip_slug="2026-11-20-a-26", force_date=None):
    """Otimiza a imagem, gera miniatura/capa e organiza na pasta por data."""
    src_path = Path(src_path)
    if not src_path.exists():
        print(f"[ERRO] Arquivo não encontrado: {src_path}")
        return None

    try:
        with Image.open(src_path) as im:
            im = ImageOps.exif_transpose(im).convert("RGB")
            
            photo_date = force_date or get_exif_date(im)
            if not photo_date:
                mtime = os.path.getmtime(src_path)
                photo_date = datetime.fromtimestamp(mtime).strftime("%Y-%m-%d")

            target_folder = GALLERY_DIR / trip_slug / photo_date
            target_folder.mkdir(parents=True, exist_ok=True)

            existing_photos = sorted(list(target_folder.glob("foto-*.jpg")))
            next_idx = len(existing_photos) + 1
            dest_filename = f"foto-{next_idx:03d}.jpg"
            dest_path = target_folder / dest_filename

            im_web = im.copy()
            im_web.thumbnail((1600, 1600), Image.Resampling.LANCZOS)
            im_web.save(dest_path, "JPEG", quality=82, optimize=True)

            capa_path = target_folder / "capa.jpg"
            if not capa_path.exists():
                thumb = ImageOps.fit(im, (480, 480), Image.Resampling.LANCZOS)
                thumb.save(capa_path, "JPEG", quality=85, optimize=True)

            size_kb = os.path.getsize(dest_path) // 1024
            print(f"[OK] Processada: {dest_path.name} em {photo_date} ({size_kb} KB, {im_web.size[0]}x{im_web.size[1]})")
            return {
                "trip": trip_slug,
                "date": photo_date,
                "path": str(dest_path.relative_to(BASE_DIR)).replace("\\", "/"),
                "capa": str(capa_path.relative_to(BASE_DIR)).replace("\\", "/"),
                "size_kb": size_kb
            }
    except Exception as e:
        print(f"[FALHA] Erro ao processar {src_path.name}: {e}")
        return None

def process_intake_folder(trip_slug="2026-11-20-a-26"):
    """Varre a pasta de entrada, descompacta .ZIPs do WhatsApp e processa fotos."""
    if not INTAKE_DIR.exists():
        return []

    done_dir = INTAKE_DIR / "_processados"
    done_dir.mkdir(exist_ok=True)

    # 1. Trata arquivos ZIP (exportação em lote do WhatsApp)
    zip_files = list(INTAKE_DIR.glob("*.zip"))
    for zf in zip_files:
        print(f"[ZIP] Descompactando arquivo do WhatsApp: {zf.name}...")
        try:
            with zipfile.ZipFile(zf, "r") as z:
                z.extractall(INTAKE_DIR)
            shutil.move(str(zf), str(done_dir / zf.name))
        except Exception as e:
            print(f"[ERRO] Falha ao descompactar {zf.name}: {e}")

    # 2. Processa todas as imagens encontradas
    extensions = (".jpg", ".jpeg", ".png", ".webp", ".heic")
    files = [f for f in INTAKE_DIR.iterdir() if f.is_file() and f.suffix.lower() in extensions]
    if not files:
        print("[INFO] Nenhuma nova foto encontrada em:", INTAKE_DIR)
        return []

    print(f"[INFO] Processando {len(files)} nova(s) foto(s)...")
    processed = []
    for f in sorted(files):
        res = process_image(f, trip_slug=trip_slug)
        if res:
            processed.append(res)
            shutil.move(str(f), str(done_dir / f.name))
            
    print(f"[CONCLUÍDO] {len(processed)} foto(s) otimizada(s) e organizadas com sucesso!")
    return processed

if __name__ == "__main__":
    if len(sys.argv) > 1:
        for arg in sys.argv[1:]:
            process_image(arg)
    else:
        process_intake_folder()
