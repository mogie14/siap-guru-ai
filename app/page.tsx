export default function Home() {
  const menus = [
    {
      title: "RPP Cinta Kemenag",
      href: "/rpp",
      description:
        "Susun rencana pelaksanaan pembelajaran dengan struktur Kemenag dan nilai karakter."
    },
    {
      title: "Asesmen Lengkap",
      href: "/asesmen",
      description:
        "Bangun bank soal, rubrik, dan instrumen penilaian untuk formatif dan sumatif."
    },
    {
      title: "Jurnal Harian",
      href: "/jurnal",
      description:
        "Catat aktivitas, refleksi, dan tindak lanjut pembelajaran secara ringkas."
    }
  ];

  return (
    <main className="page">
      <div className="container">
        <header className="header">
          <span className="badge">SiAP GURU AI</span>
          <h1 className="title">Generator perangkat ajar berbasis AI</h1>
          <p className="subtitle">
            Selesaikan persiapan pembelajaran lebih cepat dengan template siap pakai,
            prompt terarah, dan rekomendasi perangkat ajar yang konsisten.
          </p>
        </header>

        <section className="menu-grid">
          {menus.map((m) => (
            <a key={m.title} className="card" href={m.href}>
              <h2 className="card-title">{m.title}</h2>
              <p className="card-desc">{m.description}</p>
              <span className="card-link">Mulai buat →</span>
            </a>
          ))}
        </section>

        <section className="section">
          <h2 className="card-title">Alur kerja cepat</h2>
          <ol className="card-desc">
            <li>Lengkapi detail kelas, mapel, dan capaian pembelajaran.</li>
            <li>Pilih keluaran (RPP, asesmen, jurnal) yang dibutuhkan.</li>
            <li>Salin hasilnya ke dokumen resmi atau edit sesuai kebutuhan sekolah.</li>
          </ol>
        </section>
      </div>
    </main>
  );
}
