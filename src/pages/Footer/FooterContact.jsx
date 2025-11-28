import { Mail, Phone, MapPin } from "lucide-react";

export default function FooterContact({ styles, handleLocationClick }) {
  return (
    <div style={styles.section}>
      <h3 style={styles.sectionTitle}>Contact</h3>
      <div style={styles.contactItem}>
        <Mail style={styles.contactIcon} size={16} />
        <span>studiopaperspace@gmail.com</span>
      </div>
      <div style={styles.contactItem}>
        <Phone style={styles.contactIcon} size={16} />
        <span>8855837620</span>
      </div>
      <div style={styles.contactItem}>
        <MapPin style={styles.contactIcon} size={16} />
        <span onClick={handleLocationClick}>Pune, Maharashtra</span>
      </div>
    </div>
  );
}
