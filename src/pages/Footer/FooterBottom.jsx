export default function FooterBottom({ styles }) {

  const handleDeveloperClick = () => {
    window.open("https://www.instagram.com/websahitya", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="footer-bottom" style={styles.footerBottom}>
      <div style={styles.footerText}>
        © 2025 STUDIOPAPERSPACE. All rights reserved.
      </div>
      <div 
        style={{ ...styles.developerText, cursor: "pointer" }}
        onClick={handleDeveloperClick}
      >
        Developed and managed by Webसाहित्य
      </div>
    </div>
  );
}
