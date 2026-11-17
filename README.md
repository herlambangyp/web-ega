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
### 1. Gunakan `preview.exe` untuk preview 
Jalankan `preview.exe` jika ingin preview web ini. Fungsi intinya, **meniru github-pages** tetapi di komputer lokal. Aku buat `preview.exe` sangat spesifik untuk membangun environment front-end, tanpa perlu setup Node, localserver, laragon atau hal ribet lain. Tinggal klik dan web langsung tampil

Web ini memakai module javascript, yang tidak bisa diload dg preview `file:\\...` atau klik 2x di file explorer. Load module, perlu environment yang benar. Disinilah peran `preview.exe`

**JANGAN UPLOAD `preview.exe` KE HOSTING.** 

`preview.exe` bukan program yang wajib ada, itu hanyalah alat untuk "preview web" dan **Sangat opsional**. Seluruh kode web ini tetap native html, dan bisa diupload ke hosting manapun tanpa perlu `preview.exe`

---
### 2. Query Bahasa 

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

---

### 3. Bahan komponen bootsrap
Link Komponen:

[https://bootstrapmade.com/content/demo/NiceAdmin/widgets-cards.html](https://bootstrapmade.com/content/demo/NiceAdmin/widgets-cards.html)

Cukup banyak komponen atau berbagai template element yang bisa dicopas dari link diatas. Perlu digaris bawahi, CSS atau JS nya tidak sepenuhnya sama. tetapi secara "pondasi" baik project ini maupun link komponen memiliki pondasi framework yang sama yaitu `Bootstrap 5`. Jadi seharusnya 90% komponen di link komponen bisa bekerja sempurna di project ini