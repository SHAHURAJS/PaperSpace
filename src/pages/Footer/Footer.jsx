
import { Instagram, Linkedin, Facebook, Youtube } from "lucide-react";
import FooterAbout from "./FooterAbout";
import FooterContact from "./FooterContact";
import FooterSocial from "./FooterSocial";
import FooterBottom from "./FooterBottom";

function Footer() {
  const socialLinks = [
    { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/studio_paperspace?igsh=MXVqMXB3aDgxZm9kOA%3D%3D&utm_source=qr" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/company/studiopaperspace" },
    { name: "Facebook", icon: Facebook, url: "https://facebook.com/studiopaperspace" },
    { name: "YouTube", icon: Youtube, url: "https://youtube.com/@studiopaperspace" }
  ];

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const styles = {
    footer: { padding: "48px 24px 32px", backgroundColor: "#e0dfddff", color: "#1c1917", fontFamily: "Jost, sans-serif" },
    footerContent: { maxWidth: "1500px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "32px" },
    footerMain: { display: "grid", gridTemplateColumns: "1fr", gap: "32px" },
    section: { display: "flex", flexDirection: "column", gap: "16px" },
    sectionTitle: { fontSize: "18px", fontWeight: "600", color: "#1c1917", fontFamily: "Jost, sans-serif", marginBottom: "8px" },
    aboutText: { color: "#57534e", lineHeight: "1.6", fontSize: "18px", fontFamily: "Jost, sans-serif", fontWeight: "300" },
    contactItem: { display: "flex", alignItems: "center", gap: "12px", color: "#57534e", fontSize: "18px", fontFamily: "Jost, sans-serif", fontWeight: "300" },
    contactIcon: { width: "16px", height: "16px", color: "#1c1917" },
    socialIcons: { display: "flex", gap: "12px", alignItems: "center" },
    socialIcon: { width: "36px", height: "36px", borderRadius: "8px", backgroundColor: "#1c1917", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all 0.3s ease", border: "none" },
    footerBottom: { paddingTop: "24px", borderTop: "1px solid rgba(28, 25, 23, 0.1)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" },
    footerText: { color: "#57534e", fontSize: "18px", fontFamily: "Jost, sans-serif", fontWeight: "300" },
    developerText: { color: "#57534e", fontSize: "18px", fontFamily: "Jost, sans-serif", fontWeight: "600", fontStyle: "italic" }
  };

  const mediaQueries = `
    @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&display=swap');
    @media (min-width: 768px) { .footer-main { grid-template-columns: 1fr 1fr 1fr !important; gap: 48px !important; } }
    @media (max-width: 767px) { .footer-bottom { flex-direction: column !important; align-items: flex-start !important; gap: 8px !important; } }
    .social-icon:hover { background-color: #292524 !important; transform: translateY(-2px); }
  `;

  const handleLocationClick = () => {
    window.open('https://maps.app.goo.gl/m8ufCaicN3HPRrdv8?g_st=ipc', '_blank');
  };

  return (
    <>
      <style>{mediaQueries}</style>
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div className="footer-main" style={styles.footerMain}>
            <FooterAbout styles={styles} />
            <FooterContact styles={styles} handleLocationClick={handleLocationClick} />
            <FooterSocial styles={styles} socialLinks={socialLinks} handleSocialClick={handleSocialClick} />
          </div>

          <FooterBottom styles={styles} />
        </div>
      </footer>
    </>
  );
}

export default Footer;
