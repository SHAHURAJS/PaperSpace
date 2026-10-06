export default function FooterSocial({ styles, socialLinks, handleSocialClick }) {
  return (
    <div style={styles.section}>
      <h3 style={styles.sectionTitle}>Follow Us</h3>
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
              <IconComponent size={18} color="white" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
