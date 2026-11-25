// Fungsi disini sebaiknya di scrap jika logika bahasa ditentukan oleh server/backend

let basaDevice = navigator.language.split("-")[0],
    basa = cekBahasa(),
    url = new URL(window.location.href)

// deklarasikan awal bahasa web di url    
url.searchParams.set("lang", localStorage.getItem('bahasaTersimpan')||basa)
history.replaceState({}, "", url) // Jgn digatni pushstate. User bisa stuk

// Hapus meta description yg ngga sesuai bahasa. (tidak perlu di "restore" saat berganti bahasa. Karena yg butuh meta itu bot crawler, bukan pengunjung web)
document.querySelectorAll(`meta[name="description"]:not([data-lang="${basa}"])`).forEach(e => e.remove())

export function bahasa() {
    basa = cekBahasa()
    // ubaha basa placeholder input
    const selector = '[placeholderInd], [placeholderEn]'
    document.querySelectorAll(selector).forEach(input => {
        switch (basa) {
            case 'id':
                input.setAttribute('placeholder', input.getAttribute('placeholderInd') || input.getAttribute('placeholder') || '')
                break

            default:
                input.setAttribute('placeholder', input.getAttribute('placeholderEn') || input.getAttribute('placeholder') || '')
                break
        }
    })
    // lang att html
    document.documentElement.lang = basa
}

export function tombolBahasa() {
    document.querySelectorAll('[bahasa]').forEach(btn => {
        btn.onclick = o => {
            url = new URL(window.location.href)
            url.searchParams.set("lang", btn.value || btn.dataset.isi)
            localStorage.setItem('bahasaTersimpan', btn.value||btn.dataset.isi)
            history.replaceState({}, "", url)
            bahasa()
        }
    })

}


function cekBahasa() {
    // fungsi ini sebaiknya diganti dengan logika get locale di backend (atau tergantung apakah bahasa dicek oleh js atau server)

    let params = new URLSearchParams(window.location.search),
        langURL = params.get("lang")

    // console.log('bahsa web = ', langURL || 'sesuai perangkat')

    // bahasa berdasakran url ?lang=
    if (langURL === "id") return "id"
    if (langURL === "en") return "en"

    // di url gada lang, atau url di lang berbahasa yang belum dideklarasikan (ja misalnya), 
    // cek apakah device user berbahasa indo
    if (basaDevice === "id") {
        return basaDevice
    }

    // device user berbahasa lain, dn gada lang di url
    return "en"
}