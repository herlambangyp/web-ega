export function initTheme() {

    let savedTheme =
        localStorage.getItem('selected-theme')

    if (savedTheme) {

        document.documentElement.setAttribute(
            'data-theme',
            savedTheme
        )

    }

    document.querySelectorAll('[pilihTema]').forEach(btn => {

        btn.onclick = () => {

            document.documentElement.setAttribute(
                'data-theme',
                btn.value
            )

            localStorage.setItem(
                'selected-theme',
                btn.value
            )

            btn.closest("details")?.removeAttribute("open")
        }

    })

}