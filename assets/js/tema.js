function initTheme() {

    let savedTheme=localStorage.getItem('selected-theme')
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme',savedTheme)
    }

    // buat button dengan tag "pilihTema" di html, jika ingin menambahkan button tema baru
    // actually, ga harus button sih. Element input, option, select, textarea jg bisa 
    // Element lain yang tidak support tag value. isi valuenya bisa disimpan di tag "data-isi"

    document.querySelectorAll('[pilihTema]').forEach(btn => {
        btn.onclick=o=> {
            document.documentElement.setAttribute('data-theme',btn.value||btn.dataset.isi)
            localStorage.setItem('selected-theme',btn.value)
        }
    })
}

// Setup tema
initTheme()