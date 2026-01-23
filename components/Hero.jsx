export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url('/images/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <div>
        <img
          src="/images/logo.svg"
          alt="DEVILS logo"
          style={{
            width: "clamp(120px, 25vw, 220px)",
            marginBottom: "1.5rem",
          }}
        />

        <h1
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            color: "#b11226",
            letterSpacing: "0.3rem",
          }}
        >
          DEVILS
        </h1>

        <p style={{ marginTop: "1rem" }}>
          Rock & Hard Rock desde Monterrey
        </p>
      </div>
    </section>
  );
}
