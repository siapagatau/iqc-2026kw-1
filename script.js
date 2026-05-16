// Ini otak pintar buat web IQC Kakak 🧠👶

function updateWeb() {
    // 1. Ambil apa yang Kakak ketik di kotak
    const prov = document.getElementById('inputProvider').value;
    const bat = document.getElementById('inputBaterai').value;
    const pesan = document.getElementById('inputPesan').value;

    // 2. Ambil tempat buat nampilin hasilnya
    const dispProv = document.getElementById('displayProvider');
    const dispBat = document.getElementById('displayBaterai');
    const dispPesan = document.getElementById('displayPesan');

    // 3. Pindahin tulisannya pelan-pelan (cek dulu biar ndak error)
    if (dispProv) dispProv.innerText = prov || "Provider";
    if (dispBat) dispBat.innerText = (bat || "100") + "% 🔋";
    if (dispPesan) dispPesan.innerText = pesan || "Halo Kakak! Tulis pesan di sini ya...";
}

// Alat ajaib buat foto webnya jadi gambar (Screenshot otomatis)
function unduhGambar() {
    const area = document.getElementById('areaFoto');
    
    // Pake alat html2canvas biar cling! ✨
    html2canvas(area, {
        backgroundColor: null, // Biar belakangnya transparan kalo mau
        scale: 2 // Biar gambarnya tajem ndak pecah-pecah
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'iqc-keren-kakak.png';
        link.href = canvas.toDataURL('image/png');
        link.click(); // Langsung masuk ke folder download! 📥
    });
}