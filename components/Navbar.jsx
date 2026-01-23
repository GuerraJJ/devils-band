import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        background: "rgba(0,0,0,0.8)",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 10,
      }}
    >
      <strong style={{ color: "#b11226" }}>DEVILS</strong>

      <div style={{ display: "flex", gap: "1rem" }}>
        <Link href="/">Home</Link>
        <Link href="/music">Música</Link>
        <Link href="/contact">Contacto</Link>
      </div>
    </nav>
  );
}
