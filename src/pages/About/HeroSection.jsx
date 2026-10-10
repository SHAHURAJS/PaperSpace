function HeroSection({ CollabAbout }) {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">About Our Studio</h1>
          <p className="hero-subtitle">
            Studio PaperSpace is a Pune-based architecture and interior design studio creating functional, elegant, and thoughtfully designed spaces that blend creativity, practicality, and timeless aesthetics.
          </p>
        </div>

        <div className="hero-image">
          <img src={CollabAbout} alt="Studio Collaboration" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
