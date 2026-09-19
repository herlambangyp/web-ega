// Fungsi disini sebaiknya di scrap jika logika bahasa ditentukan oleh server/backend

let basaDevice =navigator.language.split("-")[0],
basa 

function bahasa() {
    basa = cekBahasa()
    document.documentElement.lang = basa
}

function tombolBahasa() {
    // buat button dengan tag "bahasa" di html, jika ingin menambahkan button bahasa baru
    // actually, ga harus button sih. Element input, option, select, textarea jg bisa 
    // Element lain yang tidak support tag "value". isi valuenya bisa disimpan di tag "data-isi"

    document.querySelectorAll('[bahasa]').forEach(btn => {

        btn.onclick=o=> {
            let url = new URL(window.location.href)
            url.searchParams.set("lang", btn.value||btn.dataset.isi)
            localStorage.setItem('bahasaTersimpan', btn.value||btn.dataset.isi)
            history.replaceState({}, "", url) // Jgn digatni pushstate. User bisa stuk
            bahasa()
        }

    })

}


function cekBahasa() {
    // fungsi ini sebaiknya diganti dengan logika get locale di backend (atau tergantung apakah basa ditentukan oleh js atau server)

    let params = new URLSearchParams(window.location.search),
    langURL = params.get("lang")||localStorage.getItem('bahasaTersimpan')
    console.log('bahsa web = ', langURL||'sesuai perangkat')

    // bahasa berdasakran url ?lang=
    if (langURL === "id") return "id"
    if (langURL === "en") return "en"

    // di url gada lang, cek apakah device user berbahasa indo
    if (basaDevice === "id") {
        return basaDevice
    }

    // device user berbahasa lain, dn gada lang di url atau lang di url berisi bahasa lain
    return "en"
}

// Setup Bahasa
tombolBahasa()
bahasa()
