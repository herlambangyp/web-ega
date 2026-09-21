// Dokumentasi counterAPI : https://docs.counterapi.dev/javascript/quick-start/

async function counterAPI() {
  // Jangan ubah jadi sinkronus function. Buffer counterAPI bisa sangat lambat
  // pertahankan async, dan biarkan html menghandle "loading"

  try {
    let testMode = false, // ganti true untuk test, agar tidak memakan kuota CounterAPI
    testAPI = 1000, // Simulasi jumlah kunjungna
    jumlahKunjungan

    if (testMode) {
      console.log (`counterAPI mode test dijalankan`)
      await new Promise(resolve => {
        setTimeout(resolve, 3000) // Simulasi bufer loading
      })
      jumlahKunjungan = testAPI
    } 
    else {
      let workspaceSlug = 'wsega', // Data diambil dari dashboard counterAPI akunku
      counterSlug = 'egadataview', // sama ini juga
      addPengunjung = await fetch(`https://api.counterapi.dev/v2/${workspaceSlug}/${counterSlug}/up`),
      result = await addPengunjung.json()

      console.log('hasil fetch CounterAPI:\n', result)
      jumlahKunjungan = result.data.up_count
    }

    // dokumentasi lengkap PureCounter : https://github.com/srexi/purecounterjs
    new PureCounter({
      selector: '.jumKunjungan',
      start: 0,
      end: jumlahKunjungan,
      duration: 1,
      delay: 10,
      once: true
    })
    document.querySelector('.textKunjungan').style.display = "inline" 

  } catch (er) {
    console.log('ada eror dengan CounterAPI:\n', er)
  }
}

// Setup CounterAPI
counterAPI()