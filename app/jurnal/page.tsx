export default function JurnalPage() {
  return (
    <main className="page">
      <div className="container">
        <a className="back-link" href="/">
          ← Kembali ke beranda
        </a>

        <header className="header">
          <span className="badge">Jurnal Harian</span>
          <h1 className="title">Jurnal pembelajaran harian yang konsisten</h1>
          <p className="subtitle">
            Catat aktivitas kelas, refleksi, dan tindak lanjut untuk dokumentasi yang
            mudah dipantau.
          </p>
        </header>

        <section className="section">
          <h2 className="card-title">Isi jurnal</h2>
          <form className="form">
            <div className="form-row">
              <label htmlFor="tanggal">Tanggal</label>
              <input id="tanggal" type="date" />
            </div>
            <div className="form-row">
              <label htmlFor="kegiatan">Kegiatan utama</label>
              <textarea
                id="kegiatan"
                placeholder="Ringkas kegiatan belajar mengajar hari ini."
              />
            </div>
            <div className="form-row">
              <label htmlFor="refleksi">Refleksi guru</label>
              <textarea
                id="refleksi"
                placeholder="Tuliskan refleksi dan rencana tindak lanjut."
              />
            </div>
            <div className="actions">
              <button className="button" type="button">
                Simpan jurnal
              </button>
              <button className="button secondary" type="button">
                Cetak laporan
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
