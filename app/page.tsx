export default function Home() {
  const menus = [
    { title: "RPP Cinta Kemenag", href: "/rpp" },
    { title: "Asesmen Lengkap", href: "/asesmen" },
    { title: "Jurnal Harian", href: "/jurnal" }
  ];

  return (
    <main style={{ padding: 24 }}>
      <h1>SiAP GURU AI</h1>
      <p>Generator perangkat ajar berbasis AI</p>

      <div style={{ marginTop: 24 }}>
        {menus.map((m) => (
          <div key={m.title} style={{ marginBottom: 12 }}>
            <a href={m.href}>{m.title}</a>
          </div>
        ))}
      </div>
    </main>
  );
}
