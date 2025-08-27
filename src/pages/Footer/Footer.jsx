import { Instagram, Linkedin, Facebook, Youtube } from 'lucide-react';

function Footer() {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/studiopaperspace'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/company/studiopaperspace'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/studiopaperspace'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com/@studiopaperspace'
    }
  ];

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const styles = {
    footer: {
      padding: '32px 24px',
      backgroundColor: '#e0dfddff',
      color: '#1c1917'
    },
    footerContent: {
      maxWidth: '1152px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '24px'
    },
    footerTop: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '24px',
      width: '100%'
    },
    footerLogo: {
      fontSize: '20px',
      fontWeight: 'bold'
    },
    footerLogoSpan: {
      color: '#57534e'
    },
    socialIcons: {
      display: 'flex',
      gap: '16px',
      alignItems: 'center'
    },
    socialIcon: {
      width: '40px',
      height: '40px',
      borderRadius: '8px',
      backgroundColor: '#1c1917',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      border: 'none'
    },
    footerText: {
      color: '#57534e',
      textAlign: 'center'
    }
  };

  const mediaQueries = `
    @media (min-width: 768px) {
      .footer-content { 
        flex-direction: row !important; 
        justify-content: space-between !important;
      }
      .footer-top {
        flex-direction: row !important;
        justify-content: space-between !important;
        align-items: center !important;
        width: auto !important;
        gap: 32px !important;
      }
      .footer-text {
        text-align: left !important;
      }
    }

    .social-icon:hover {
      background-color: #292524 !important;
      transform: translateY(-2px);
    }
  `;

  return (
    <>
      <style>{mediaQueries}</style>
      <footer style={styles.footer}>
        <div className="footer-content" style={styles.footerContent}>
          <div className="footer-top" style={styles.footerTop}>
            <div style={styles.footerLogo}>
              STUDIO<span style={styles.footerLogoSpan}>PAPERSPACE</span>
            </div>
            
            <div style={styles.socialIcons}>
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <button
                    key={social.name}
                    className="social-icon"
                    style={styles.socialIcon}
                    onClick={() => handleSocialClick(social.url)}
                    aria-label={`Visit our ${social.name} page`}
                  >
                    <IconComponent size={20} color="white" />
                  </button>
                );
              })}
            </div>
          </div>
          
          <div className="footer-text" style={styles.footerText}>
            © 2025 STUDIOPAPERSPACE. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;