# Direktori Laundry Self-Service — Kabupaten Sleman

WebGIS ini menggunakan source asli Direktori Laundry Self-Service Kabupaten Sleman.

## File
- `index.html` — halaman utama WebGIS.
- `style.css` — CSS asli yang diekstrak dari source WebGIS.
- `script.js` — JavaScript asli termasuk data 59 lokasi.
- `README.md` — dokumentasi.

## Penting
`style.css` pada paket ini sengaja menggunakan CSS yang cocok dengan struktur HTML asli (`header`, `.brand`, `.dial`, `.sidebar`, `.chips`, `.result-count`, `.stat`, dan lain-lain).

Jangan mengganti CSS ini dengan CSS dari struktur WebGIS lain karena class HTML-nya berbeda dan tampilan dapat berubah menjadi tidak terformat.

## Cara menjalankan
1. Extract ZIP.
2. Pastikan keempat file berada dalam folder yang sama.
3. Buka `index.html` melalui browser atau VS Code Live Server.
4. Internet diperlukan untuk Leaflet, OpenStreetMap/CARTO, Google Fonts, dan Google Maps.

## Data
Data 59 lokasi dipertahankan dari source WebGIS asli beserta koordinat dan atribut yang tersedia.
