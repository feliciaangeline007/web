# Felicia Profile (Node HTTP Router)

Profile page untuk Felicia Angeline (Universitas Tarumanagara) menggunakan Node.js + built-in HTTP router.

## Struktur

- `index.js` - entry server
- `router.js` - router handler
- `package.json` - scripts
- `views/` - halaman HTML statis
- `public/` - aset statis (CSS) untuk referensi

## Menjalankan

1. `npm install`
2. `npm run dev`
3. Buka `http://localhost:3000`

Route:
- `/`
- `/about`

## Catatan

- Konten bisa diubah di `views/index.html` dan `views/about.html`.
- Styling sekarang di-inline pada HTML. File `public/styles.css` disimpan sebagai referensi.
