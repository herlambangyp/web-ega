let basaDevice =navigator.language.split("-")[0]

export function bahasa() {
document.querySelectorAll("[ind]").forEach(e => {
    e.textContent = setBahasa(
        e.getAttribute("ind"),
        e.getAttribute("en")   
    )
})
document.documentElement.lang = cekBahasa()
}

function setBahasa(indo, en){
    switch (cekBahasa()) {
        case 'id':
        return indo
        default:
        return en
    }

}

export function tombolBahasa() {

    document.querySelectorAll('[bahasa]').forEach(btn => {

        btn.onclick = () => {

            let url = new URL(window.location.href)

            url.searchParams.set("lang", btn.value)

            history.replaceState({}, "", url)

            bahasa()

            btn.closest("details")?.removeAttribute("open")
        }

    })

}


function cekBahasa() {

    let params = new URLSearchParams(window.location.search),
    langURL = params.get("lang")

    // bahasa berdasakran url ?lang=
    if (langURL === "id") return "id"
    if (langURL === "en") return "en"

    // di url gada lang, cek apakah device user abhasa indo
    if (basaDevice === "id") {
        return basaDevice
    }

    // device user bahasa lain, dan gada lang di url atau lang di url berisi bahasa lain
    return "en"
}