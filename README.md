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
> MOHON BACA ULANG LOGIKA DIPERBARUI !!

Data penulisan bahasa menggunakan atribut class="bahasaYgDituju"
class "ind" untuk bahasa indonesia, class "en" untuk bahasa inggris

Contoh:
```html
<span class="ind">Tulisan Bahasa Indonesia Disini</span><span class="en">English Text Here</span>
```

Semisal belum ingin mengisi bahasa, maka sah-sah saja tidak harus menulis class

Contoh:
```html
<p>Tidak ada logika bahasa disini. Tidak masalah</p>
<p> 
    Disini baru ada logika bahasa
    <span class="ind">Ini berisi Logika <b>Bahasa Indonesia</b></span>
    <span class="en">This contain <b>English</b> language logic</span>
</p>
<a class="ind" href="#">Selain span juga bisa</a><a class="en" href="#">Span not primarily expected</a> 
```
Logika bahasa sekarang ditangani CSS bukan js lagi (agar lebih ringan peforma dan SEO Friendly). Untuk menambahkan logika bahasa lain, cek `assets/css/main.css` (Cek komen css tentang bahasa). Standardnya memang harus dibuat file json sendiri untuk data bahasa.
Cara diatas aku pakai untuk memeprcepat pengembangan inline-code di front-end

### 2. Map Indo tidak muncul saat preview file
Map indo dimuat dengan element div bukan img. Agar warna gambar bisa ditimpa. Tetapi dengan cara ini map tidak akan tampil, jika halaman index.html di preview melalui "klik 2x di file explorer"

Kebijakan keamanan browser terbaru memblokir pemuatan file lokal melalui css atau js (mungkin untuk mencegah web nakal yang berusaha mengakses file lokal di komputer user)

Solusi saat ini adalah menginstal aplikasi `laragon` lalu membuat blank project, maka laragon akan memberikan `url untuk testing`. 
Setelahnya letakan semua file web-ega di direktori blank project yang baru dibuat. Lalu akses `url testing` yang diberikan laragon.
Maka di url tersebut, map indo bisa tampil (tidak di block browser)