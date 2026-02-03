export default function RppPage() {
  return (
    <main className="page">
      <div className="container">
        <a className="back-link" href="/">
          ← Kembali ke beranda
        </a>

        <header className="header">
          <span className="badge">RPP Cinta Kemenag</span>
          <h1 className="title">RPP siap pakai dalam beberapa langkah</h1>
          <p className="subtitle">
            Lengkapi detail kelas dan konteks pembelajaran untuk menghasilkan RPP
            sesuai format Kemenag dengan nilai karakter dan profil pelajar.
          </p>
        </header>

        <section className="section">
          <h2 className="card-title">Detail pembelajaran</h2>
          <form className="form">
            <div className="form-row">
              <label htmlFor="mapel">Mata pelajaran</label>
              <input id="mapel" placeholder="Contoh: Pendidikan Agama Islam" />
            </div>
            <div className="form-row">
              <label htmlFor="kelas">Kelas/Semester</label>
              <input id="kelas" placeholder="Contoh: VII / Ganjil" />
            </div>
            <div className="form-row">
              <label htmlFor="tujuan">Tujuan pembelajaran</label>
              <textarea
                id="tujuan"
                placeholder="Tuliskan tujuan pembelajaran utama."
              />
            </div>
            <div className="form-row">
              <label htmlFor="karakter">Penguatan karakter</label>
              <select id="karakter">
                <option>Religius &amp; Moderat</option>
                <option>Gotong royong</option>
                <option>Mandiri</option>
                <option>Bernalar kritis</option>
              </select>
            </div>
            <div className="actions">
              <button className="button" type="button">
                Buat draf RPP
              </button>
              <button className="button secondary" type="button">
                Simpan template
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
