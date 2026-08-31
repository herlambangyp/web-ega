export async function loadHTML(id, file) {
    const element = document.getElementById(id),
    response = await fetch(file)
    if(!element){
        console.log('elemen ', id, ' tidak ditemukan')
        return
    }
    element.innerHTML = await response.text()
}