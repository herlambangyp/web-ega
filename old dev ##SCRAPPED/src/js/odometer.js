// ======================================================
// ODOMETER
// ======================================================

export function initOdometer() {

    const elements =
        document.querySelectorAll("[dari][ke]")

    elements.forEach(element => {

        const dari =
            Number(element.getAttribute("dari"))

        const ke =
            Number(element.getAttribute("ke"))

        if (
            Number.isNaN(dari) ||
            Number.isNaN(ke)
        ) return

        buatOdometer(element, dari, ke)

    })

}


// ======================================================
// BUAT ODOMETER
// ======================================================

function buatOdometer(element, dari, ke) {

    const panjang =
        Math.max(
            String(Math.abs(dari)).length,
            String(Math.abs(ke)).length
        )

    const nilaiAwal =
        String(Math.abs(dari))
        .padStart(panjang, "0")

    element.innerHTML = ""

    for (let i = 0; i < panjang; i++) {

        const digit =
            document.createElement("span")

        digit.className =
            "odometer-digit"

        const numbers =
            document.createElement("span")

        numbers.className =
            "odometer-numbers"

        for (let n = 0; n <= 9; n++) {

            const angka =
                document.createElement("span")

            angka.textContent = n

            numbers.appendChild(angka)

        }

        digit.appendChild(numbers)
        element.appendChild(digit)

    }

    // Posisi awal
    updateDigit(
        element,
        Number(nilaiAwal)
    )

    // Jalankan ketika terlihat
    const observer =
        new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return

                animasi(
                    element,
                    dari,
                    ke,
                    panjang
                )

                observer.unobserve(element)

            })

        }, {
            threshold: 0.5
        })

    observer.observe(element)

}


// ======================================================
// UPDATE DIGIT
// ======================================================

function updateDigit(element, nilai) {

    const digits =
        element.querySelectorAll(
            ".odometer-numbers"
        )

    const panjang = digits.length

    const angka =
        Math.floor(Math.abs(nilai))
            .toString()
            .padStart(panjang, "0")

    digits.forEach((numbers, i) => {

        const digit =
            Number(angka[i])

            numbers.style.transform =
            `translate3d(0, -${digit}lh, 0)`

    })

}


// ======================================================
// ANIMASI
// ======================================================

function animasi(
    element,
    dari,
    ke,
    panjang
) {

    const duration = 1500

    const start =
        performance.now()

    function frame(waktu) {

        const progress =
            Math.min(
                (waktu - start) / duration,
                1
            )

        // Ease out
        const eased =
            1 - Math.pow(1 - progress, 4)

        const nilai =
            dari + (ke - dari) * eased

        updateDigit(
            element,
            nilai
        )

        if (progress < 1) {

            requestAnimationFrame(frame)

        }

    }

    requestAnimationFrame(frame)

}