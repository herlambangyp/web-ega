# web-ega
Development website PT Ega Tekelindo Prima

## Tentang
Repository baru berisi source-code front end pengembangan web PT Ega Tekelindo Prima

## Base
* HTML5
* ~~Tailwind CSS~~
* ~~DaisyUI~~
* Bootstrap 5
* CSS3
* JavaScript

## NOTE Terkait map yang tidak muncul:
Map indo dimuat dengan element div bukan img. Karena fleksibiltas untuk menimpa warna gambar
Tapi ada kemungkinan map nya tidak akan tampil, jika halaman index.html di preview melalui "klik 2x di file explorer"

Penyebabnya karena kebijakan keamanan browser terbaru dimana pemuatan file lokal melalui css atau js akan di block
(mungkin untuk mencegah web nakal yang berusaha mengakses file lokal di komputer user. Tapi ini bisa sangat menggangu di fase development)

Solusi saat ini adalah menginstal aplikasi "laragon" lalu membuat blank project, maka laragon akan memberikan "url untuk testing". 
Setelahnya letakan semua file web-ega di direktori blank project yang baru dibuat. Lalu akses url testing yang diberikan laragon.
Maka di url tersebut, web ega bisa tampil dengan map yang juga tampil (tidak di block browser)

## Preview Halaman
[https://herlambangyp.github.io/web-ega/](https://herlambangyp.github.io/web-ega/)
