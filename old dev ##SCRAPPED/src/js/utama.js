import { bahasa, tombolBahasa } from "./bahasa.js"
import { initOdometer } from "./odometer.js"
import { loadHTML } from "./perakit.js"
import { initTheme } from "./tema.js"

// load file (Jika buat komponen baru, masukan disini. Path diambil dari lokasi index.html
// Template : loadHTML("id dari div", "nama dan lokasi file")
await loadHTML("header", "src/komponen/header.html")
await loadHTML("judul", "src/komponen/judul.html")
await loadHTML("portofolio", "src/komponen/portofolio.html")
await loadHTML("service", "src/komponen/service.html")
await loadHTML("footer", "src/komponen/footer.html")

// Variabel global
let state = "tertutup",
mobileMenu = document.getElementById("mobileMenu")



// Setup tema
initTheme()

// Setup Bahasa
tombolBahasa()
bahasa()

// odometer
initOdometer()

// Navigasi Mobile
btnMobileMenu.onclick = () => {
    if (
        state === "membuka" ||
        state === "menutup"
    ) {
        return
    }
    if (state === "tertutup") {
        state = "membuka"
        btnMobileMenu.classList.add("buka")
        mobileMenu.classList.add("terbuka")
    } else {
        state = "menutup"
        btnMobileMenu.classList.remove("buka")
        mobileMenu.classList.remove("terbuka")
    }
}

mobileMenu.addEventListener("transitionend", () => {
    if (state === "membuka") {
        state = "terbuka"
    }
    else if (state === "menutup") {
        state = "tertutup"
    }
})

// window.addEventListener("scroll", () => {

//     if (window.scrollY > 0) {
//         kotakHeader.classList.remove("bg-[linear-gradient(45deg,var(--color-accent)_35%,transparent_35%)]")
//         kotakHeader.classList.add("backdrop-blur-sm")
//         kotakHeader.classList.add("bg-[linear-gradient(45deg,var(--color-accent)_35%,color-mix(in_srgb,var(--color-base-100)_70%,transparent)_35%)]")    
//     } else {
//         kotakHeader.classList.remove("bg-[linear-gradient(45deg,var(--color-accent)_35%,color-mix(in_srgb,var(--color-base-100)_70%,transparent)_35%)]")
//         kotakHeader.classList.remove("backdrop-blur-sm")
//         kotakHeader.classList.add("bg-transparent")
//         kotakHeader.classList.add("bg-[linear-gradient(45deg,var(--color-accent)_35%,transparent_35%)]")
//     }

// })

document.onclick=o=>{
    document.querySelectorAll("details[open]").forEach(details => {
        if (!details.contains(o.target)) {
            details.removeAttribute("open")
        }
    })
}