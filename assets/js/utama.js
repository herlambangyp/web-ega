
// Bagian animasi pinPoint ketika map indonesia muncul di layar user
let mapKontener = document.querySelector(".mapKontener"),
observeMap = new IntersectionObserver(o=>{
  let divMap = o[0]
  if (!divMap.isIntersecting) return

  document.querySelectorAll(".pinPoint").forEach((pin, i) => {
    pin.style.setProperty("--pin-delay", `${i * 0.1}s`) // set jrak kemunculan antar pinPoint
    pin.classList.add("is-visible")
  })

  observeMap.unobserve(divMap.target)
}, {
  threshold: 0.3 // saat map 30% muncul di layar user, pinPoibt diberikna animasi muncul
})

if (mapKontener) {
  observeMap.observe(mapKontener)
}
// end Bagian animasi pinPoint ketika map indonesia muncul di layar user