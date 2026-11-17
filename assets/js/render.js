export async function render(element, path, headerLink=false) {
  try {
    let response = await fetch(path),
        responText = await response.text()

    document.querySelector(element).innerHTML = responText
    if (headerLink) aktifkanHeaderLink()
  }
  catch (e) {
    console.warn(`Gagal mencari element `,element,' atau file: ', path, '\n\nDetail Eror:\n\n', e)
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