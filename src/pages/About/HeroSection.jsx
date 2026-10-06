function HeroSection({ CollabAbout }) {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">About Our Studio</h1>
          <p className="hero-subtitle">
            We are architects, designers, and builders united by a shared
            vision: creating spaces that inspire, function beautifully, and
            stand the test of time.
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
