# web-ega
Development website PT Ega Tekelindo Prima

## Preview Halaman
[https://herlambangyp.github.io/web-ega/](https://herlambangyp.github.io/web-ega/)

## Tentang
Repository source-code front end web PT Ega Tekelindo Prima

## Base
* HTML5
* Bootstrap 5
* CSS3
* JavaScript

## Dev Guide
### 1. Query Bahasa
Data penulisan bahasa menggunakan atribut element 
"ind" untuk bahasa indonesia, "en" untuk bahasa inggris

Contoh:
```html
<div en="English text should be here" ind="Text bahasa indonesia ditempatkan disini"></div>
```

Atribut en maupun ind juga support kode html. Untuk menulisnya, wajib gunakan petik 1 (')

Contoh:
```html
<div en='<p class="text">English text should be here</p>' ind='<p class="text">Text bahasa indonesia ditempatkan disini</p>'></div>
```

Untuk menambahkan logika bahasa lain, cek `assets/js/bahasa.js` di fungsi bahasa(). Standardnya memang harus dibuat file json sendiri untuk data bahasa.
Cara diatas aku pakai untuk memeprcepat pengembangan inline-code di front-end

### 2. Map Indo tidak muncul saat preview file
Map indo dimuat dengan element div bukan img. Agar warna gambar bisa ditimpa. Tetapi dengan cara ini map tidak akan tampil, jika halaman index.html di preview melalui "klik 2x di file explorer"

Kebijakan keamanan browser terbaru memblokir pemuatan file lokal melalui css atau js (mungkin untuk mencegah web nakal yang berusaha mengakses file lokal di komputer user)

Solusi saat ini adalah menginstal aplikasi `laragon` lalu membuat blank project, maka laragon akan memberikan `url untuk testing`. 
Setelahnya letakan semua file web-ega di direktori blank project yang baru dibuat. Lalu akses `url testing` yang diberikan laragon.
Maka di url tersebut, map indo bisa tampil (tidak di block browser)