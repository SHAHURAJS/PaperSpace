function Footer() {
  const styles = {
    footer: {
      padding: '32px 24px',
      backgroundColor: '#374151',
      color: 'white'
    },
    footerContent: {
      maxWidth: '1152px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '16px'
    },
    footerLogo: {
      fontSize: '20px',
      fontWeight: 'bold'
    },
    footerLogoSpan: {
      color: '#9CA3AF'
    },
    footerText: {
      color: '#9CA3AF'
    }
  };

  const mediaQueries = `
    @media (min-width: 768px) {
      .footer-content { flex-direction: row !important; }
    }
  `;

  return (
    <>
      <style>{mediaQueries}</style>
      <footer style={styles.footer}>
        <div className="footer-content" style={styles.footerContent}>
          <div style={styles.footerLogo}>
            STUDIO<span style={styles.footerLogoSpan}>PAPERSPACE</span>
          </div>
          <div style={styles.footerText}>
            © 2025 STUDIOPAPERSPACE. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;