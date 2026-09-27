function showToast({pesanEn = '', pesanId = pesanEn, durasi = 3000, jenis = 'neutral',}) {
  let container = document.getElementById('toastContainer'),
  config = {
    success: { bgClass: 'bg-success text-bg-success', icon: '<i class="bi bi-check-circle-fill  me-2 fs-5"></i>' },
    danger: { bgClass: 'bg-danger text-bg-danger', icon: '<i class="bi bi-exclamation-triangle-fill me-2 fs-5"></i>' },
    neutral: { bgClass: 'bg-primary text-bg-primary', icon: '<i class="bi bi-info-circle-fill me-2 fs-5"></i>' },
    warning: { bgClass: 'bg-warning text-bg-warning', icon: '<i class="bi bi-info-circle-fill me-2 fs-5"></i>' },
    info: { bgClass: 'bg-info text-bg-info', icon: '<i class="bi bi-info-circle-fill me-2 fs-5"></i>' },

    loadsuccess: { bgClass: 'bg-success text-bg-success', icon: '<i class="me-2 spinner-border spinner-border-sm" role="status"></i>' },
    loaddanger: { bgClass: 'bg-danger text-bg-danger', icon: '<i class="me-2 spinner-border spinner-border-sm" role="status"></i>' },
    loadneutral: { bgClass: 'bg-primary text-bg-primary', icon: '<i class="me-2 spinner-border spinner-border-sm" role="status"></i>' },
    loadwarning: { bgClass: 'bg-warning text-bg-warning', icon: '<i class="me-2 spinner-border spinner-border-sm" role="status"></i>' },
    loadinfo: { bgClass: 'bg-info text-bg-info', icon: '<i class="me-2 spinner-border spinner-border-sm" role="status"></i>' },
  },
  theme = config[jenis] || config.neutral,
  toastEl = document.createElement('div'), 
  timer


  toastEl.className = `toast align-items-center ${theme.bgClass} border-0 show toast-slide-in`
  toastEl.setAttribute('role', 'alert')
  toastEl.innerHTML = `
    <div class="d-flex">
      <div class="toast-body d-flex align-items-center">
        ${theme.icon}
        <span class="ind">${pesanId}</span>
        <span class="en">${pesanEn}</span>
      </div>
      <button type="button" class="btn-close ${jenis !== 'neutral' ? 'btn-close-white' : ''} me-2 m-auto" aria-label="Close"></button>
    </div>
  `
  container.appendChild(toastEl)

  function closeToast() {
    if (toastEl.classList.contains('toast-slide-out')) return
    
    toastEl.classList.remove('toast-slide-in')
    toastEl.classList.add('toast-slide-out')

    // samakan durasi penghapusan deng animasi slide-out di nonBs.css
    setTimeout(t=>{toastEl.remove()}, 400)
  }

  // Otomatis tutup toast
  if (typeof durasi === 'number' && durasi > 0) {
    timer = setTimeout(t => { closeToast() }, durasi)
  }  

  // ditutp tanda silang
  toastEl.querySelector('.btn-close').onclick=o=>{
    clearTimeout(timer) // Batalkan timer klo ada
    closeToast()
  }

  return {
  close: closeToast,
  update: ({ pesanId, pesanEn, jenis, durasi = 3000 }) => {
    theme = config[jenis] || config.neutral
    toastEl.className = `toast align-items-center ${theme.bgClass} border-0 show`
    toastEl.querySelector('.toast-body').innerHTML = `
      ${theme.icon}
      <span class="ind">${pesanId}</span>
      <span class="en">${pesanEn || pesanId}</span>
    `
    
    if (typeof durasi === 'number' && durasi > 0) {
        timer = setTimeout(t => { closeToast() }, durasi)
    }}
}
}