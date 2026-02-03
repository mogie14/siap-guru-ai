export default function AsesmenPage() {
  return (
    <main className="page">
      <div className="container">
        <a className="back-link" href="/">
          ← Kembali ke beranda
        </a>

        <header className="header">
          <span className="badge">Asesmen Lengkap</span>
          <h1 className="title">Bank asesmen yang rapi &amp; terstruktur</h1>
          <p className="subtitle">
            Tentukan tujuan asesmen, bentuk soal, dan indikator untuk menghasilkan
            instrumen penilaian yang siap digunakan.
          </p>
        </header>

        <section className="section">
          <h2 className="card-title">Rancang asesmen</h2>
          <form className="form">
            <div className="form-row">
              <label htmlFor="jenis">Jenis asesmen</label>
              <select id="jenis">
                <option>Formatif</option>
                <option>Sumatif</option>
                <option>Diagnostik</option>
              </select>
            </div>
            <div className="form-row">
              <label htmlFor="indikator">Indikator capaian</label>
              <textarea
                id="indikator"
                placeholder="Masukkan indikator yang ingin diukur."
              />
            </div>
            <div className="form-row">
              <label htmlFor="rubrik">Rubrik penilaian</label>
              <textarea
                id="rubrik"
                placeholder="Tuliskan kriteria penilaian."
              />
            </div>
            <div className="actions">
              <button className="button" type="button">
                Generate instrumen
              </button>
              <button className="button secondary" type="button">
                Unduh ringkasan
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
