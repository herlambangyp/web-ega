// Fungsi disini sebaiknya di scrap jika logika bahasa ditentukan oleh server/backend

// sebenarnya cukup cuma "navigator.language" tapi beberapa device lama kadang me return "ID-id", device modern cuma "id". Jadi aku bungkus jadi variabel, biar support keduanya
let basaDevice =navigator.language.split("-")[0] 

function bahasa() {
    const language = cekBahasa(),
    translation = window.translations[language]

    // translate untuk hardcode element. Seperti nama tema, tombol kembali/back, link navigasi, dll yang dianggap bukan konten
    document.querySelectorAll("[en]").forEach(e => {
        e.innerHTML = setBahasa(
            e.getAttribute("ind")||e.getAttribute("en"), // argumen text indo
            e.getAttribute("en")||e.getAttribute("ind")   // argumen text en
                               // argumen text jpn, dutch, cina dll (perlu ditambahkan di tag html, dan parameter baru di setBahasa<--Cek bawah)
                            )
    })

    // SCRAPPED!!! 
    // translate konten web, seperti tentang kami, spesifikasi produk, dll. data text, disimpan di "pra"Json file
    // pra-json file disimpan di assets/JSON/"lang".js
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n,
        elements = document.querySelectorAll(`[data-i18n="${key}"]`),
        index = [...elements].indexOf(element),
        text = ambilTranslation(translation, key, index)

        if (text !== undefined) {
            element.innerHTML = text;
        }

    })

    document.documentElement.lang = language
}

function setBahasa(indo='', en=''){
    switch (cekBahasa()) {

        case 'id':
        return indo

        default:
        return en
    }

}

function ambilTranslation(data, path, index = null) {

    return path
        .split(".")
        .reduce((result, key) => {
            if (Array.isArray(result)) {
                result = result[index];
            }
            return result?.[key];
        }, data);
}
function tombolBahasa() {
    // buat button dengan tag "bahasa" di html, jika ingin menambahkan button bahasa baru
    // actually, ga harus button sih. Element input, option, select, textarea jg bisa 
    // Element lain yang tidak support tag "value". isi valuenya bisa disimpan di tag "data-isi"

    document.querySelectorAll('[bahasa]').forEach(btn => {

        btn.onclick=o=> {
            let url = new URL(window.location.href)
            url.searchParams.set("lang", btn.value||btn.dataset.isi)
            history.replaceState({}, "", url) // Jgn digatni pushstate. User bisa stuk
            bahasa()
        }

    })

}


function cekBahasa() {
    // fungsi ini sebaiknya diganti dengan logika get locale di backend (atau tergantung apakah basa ditentukan oleh js atau server)

    let params = new URLSearchParams(window.location.search),
    langURL = params.get("lang")

    // bahasa berdasakran url ?lang=
    if (langURL === "id") return "id"
    if (langURL === "en") return "en"

    // di url gada lang, cek apakah device user berabhasa indo
    if (basaDevice === "id") {
        return basaDevice
    }

    // device user bahasa lain, dn gada lang di url atau lang di url berisi bahasa lain
    return "en"
}

// Setup Bahasa
tombolBahasa()
bahasa()
