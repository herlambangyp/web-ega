# web-ega
Development website PT Ega Tekelindo Prima

## Preview Halaman
[https://herlambangyp.github.io/web-ega/](https://herlambangyp.github.io/web-ega/)

## Tentang
Repository baru berisi source-code front end pengembangan web PT Ega Tekelindo Prima

## Base
* HTML5
* ~~Tailwind CSS~~
* ~~DaisyUI~~
* Bootstrap 5
* CSS3
* JavaScript

## Dev Guide
#### Query Bahasa
Data penulisan bahasa menggunakan tag element 
"ind" untuk bahasa indonesia, "en" untuk bahasa inggris

Contoh:
```html
<div en="English text should be here" ind="Text bahasa indonesia ditempatkan disini"></div>
```

Tag en maupun ind juga support kode html. Dan untuk menulisnya, maka gunakan petik 1 (')
Contoh:
```html
<div en='<p class="text">English text should be here</p>' ind='<p class="text">Text bahasa indonesia ditempatkan disini</p>'></div>
```

Untuk menambahkan logika bahasa lain, cek `assets/js/bahasa.js` di fungsi bahasa() untuk lebih detilnya. Standardnya memang harus dibuat file json sendiri untuk data bahasa.
Cara diatas aku pakai untuk memeprcepat pengembangan inline-code di front-end
(atau jika ingin preview data)

#### Map tidak muncul saat preview file
Map indo dimuat dengan element div bukan img. Agar warna gambar bisa ditimpa. Tetapi dengan cara ini map nya tidak akan tampil, jika halaman index.html di preview melalui "klik 2x di file explorer"

Penyebabnya karena kebijakan keamanan browser terbaru. Pemuatan file lokal melalui css atau js akan di block
(mungkin untuk mencegah web nakal yang berusaha mengakses file lokal di komputer user. Tapi ini bisa sangat menggangu di fase development)

Solusi saat ini adalah menginstal aplikasi `laragon` lalu membuat blank project, maka laragon akan memberikan `url untuk testing`. 
Setelahnya letakan semua file web-ega di direktori blank project yang baru dibuat. Lalu akses `url testing` yang diberikan laragon.
Maka di url tersebut, web ega bisa tampil dengan map yang juga tampil (tidak di block browser)


