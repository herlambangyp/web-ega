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

Source-code dari `preview.exe`: https://github.com/herlambangyp/python/tree/main/miniServer

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

**Terkait 2 meta description:**

Tidak seharusnya ada 2 meta description. Meta description ini akan dimanipulasi js untuk diremove salah satu berdasarkan bahasa yang digunakan saat ini.
**ini memang bukan praktik yang benar**. Praktik yang benar memang harus membuat banyak halaman untuk tiap bahasa. Atau tetap 1 halaman template, lalu digenerate server (php misalnya). **Tetapi ini cara "barely fit"** untuk mempertahankan SEO bagus, dengan 1 halaman dinamis **tanpa pemrosesan server**

---

### 3. Bahan template bootsrap
Link Template:

[https://bootstrapmade.com/content/demo/NiceAdmin/widgets-cards.html](https://bootstrapmade.com/content/demo/NiceAdmin/widgets-cards.html)

Cukup banyak template html yang bisa dicopas dari link diatas. Perlu digaris bawahi, CSS atau JS nya tidak sepenuhnya sama. tetapi secara "pondasi" baik project ini maupun link template memiliki pondasi framework yang sama yaitu `Bootstrap 5`. Jadi seharusnya 90% template di link template bisa bekerja sempurna di project ini

---

### 4. Membuat komponen
Dengan adanya `preview.exe`, sekarang pengembangan web berbasis komponen bisa lebih "propper"

Untuk mulai membuat komponen tempatkan komponen di:

```text
assets/komponen/ <--- Disini
```

**Komponen tetap berbasis .html** bukan .php, .tsx, .vue, atau yg lain. 

Load komponen di:
```text
assets/js/main.js
```
Komponen wajib dipanggil di *Promise.all()* di `main.js`. Untuk komponen spesifik seperti komponen nested (komponen yang dipanggil didalam komponen), panggil diluar *Promise.all()*. Dan gunakan *await* agar tidak terjadi refrence error

Fungsi `render()` bersifat asyncronous, dan menerima 3 parameter: (`element`, `lokasi komponen`, `dataLain (opsional)`)

```js
// Contoh load komponen di main.js
await Promise.all([
  // Render komponen umum atau non-nested
  render('#header', './assets/komponen/header.html', 'navPerluBeda'),
  render('#footer', './assets/komponen/footer.html'),
  render('#mapIndo', './assets/komponen/index/mapIndo.html'),
])

// Render komponen nested (misalnya id="tombolTema" berada di komponen header.html)
await render('#tombolTema', './assets/komponen/tombolTema.html')
```