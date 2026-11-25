export async function render(element, path = '', dataLainya = '') {
  let namaBersih = String(element ?? '').replace(/^[.#]+/, '').trim(),
  targetPath = path || `./assets/komponen/${namaBersih}.html`

  try {
    let response = await fetch(targetPath),
        responText = await response.text()

    document.getElementById(element).innerHTML = responText

    // tindakan untuk data lainya
    if (dataLainya==='navPerluBeda') aktifkanHeaderLink()
  }
  catch (e) {
    // console.warn(`Gagal mencari element `,element,' atau file: ', path, '\n\nDetail Eror:\n\n', e)
  }
}

function aktifkanHeaderLink() {
  let halSekarang = window.location.pathname.split('/').pop() || 'index.html',
      navmenu_a = document.querySelectorAll('#navmenu a')

  navmenu_a.forEach(link => {
    const linkHref = link.getAttribute('href')
    link.classList.remove('active')
    if (linkHref === halSekarang) {
      link.classList.add('active')
    }
  })
}