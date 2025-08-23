import { Mail, MessageCircle } from "lucide-react";

function CareerPage() {
  const styles = {
    container: {
      minHeight: 'calc(100vh - 200px)',
      background: '#f5f5f4',
      padding: '80px 24px',
      fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif'
    },
    maxWidth: {
      maxWidth: '900px',
      margin: '0 auto',
      textAlign: 'center'
    },
    sectionTitle: {
      fontSize: '56px',
      fontWeight: '200',
      color: '#1e293b',
      marginBottom: '24px',
      letterSpacing: '-0.02em',
      fontFamily: '"Playfair Display", serif'
    },
    description: {
      fontSize: '22px',
      color: '#475569',
      lineHeight: '1.7',
      marginBottom: '64px',
      maxWidth: '650px',
      margin: '0 auto 64px auto',
      fontWeight: '300'
    },
    contactSection: {
      background: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(226, 232, 240, 0.8)',
      borderRadius: '24px',
      padding: '56px 40px',
      marginTop: '48px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.08)'
    },
    contactTitle: {
      fontSize: '32px',
      fontWeight: '300',
      color: '#1e293b',
      marginBottom: '20px',
      fontFamily: '"Playfair Display", serif'
    },
    contactText: {
      fontSize: '20px',
      color: '#64748b',
      marginBottom: '40px',
      fontWeight: '300'
    },
    contactButtons: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    contactButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
      color: 'white',
      padding: '16px 32px',
      border: 'none',
      borderRadius: '12px',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: '500',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      textDecoration: 'none',
      boxShadow: '0 4px 12px rgba(30, 41, 59, 0.15)'
    },
    whyJoin: {
      marginBottom: '64px',
      background: 'rgba(255, 255, 255, 0.6)',
      borderRadius: '20px',
      padding: '48px 40px',
      border: '1px solid rgba(226, 232, 240, 0.6)'
    },
    whyJoinTitle: {
      fontSize: '40px',
      fontWeight: '300',
      color: '#1e293b',
      marginBottom: '32px',
      fontFamily: '"Playfair Display", serif'
    },
    whyJoinList: {
      textAlign: 'left',
      maxWidth: '600px',
      margin: '0 auto'
    },
    whyJoinItem: {
      fontSize: '18px',
      color: '#475569',
      marginBottom: '20px',
      paddingLeft: '32px',
      position: 'relative',
      fontWeight: '300',
      lineHeight: '1.6'
    },
    bullet: {
      position: 'absolute',
      left: '0',
      color: '#64748b',
      fontSize: '24px',
      top: '-2px'
    }
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:careers@paperspacestudio.com';
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/your-whatsapp-number', '_blank');
  };

  return (
    <div style={styles.container}>
      <div style={styles.maxWidth}>
        <h1 style={styles.sectionTitle}>Join Our Team</h1>
        
        <p style={styles.description}>
          We're a passionate team of architects and designers creating innovative, 
          sustainable spaces that inspire. If you share our vision for thoughtful 
          design and want to be part of something meaningful, we'd love to hear from you.
        </p>

        <div style={styles.whyJoin}>
          <h2 style={styles.whyJoinTitle}>Why Work With Us?</h2>
          <div style={styles.whyJoinList}>
            <div style={styles.whyJoinItem}>
              <span style={styles.bullet}>•</span>
              Work on diverse, exciting projects from residential to commercial
            </div>
            <div style={styles.whyJoinItem}>
              <span style={styles.bullet}>•</span>
              Collaborative environment that values creativity and innovation
            </div>
            <div style={styles.whyJoinItem}>
              <span style={styles.bullet}>•</span>
              Opportunities for professional growth and skill development
            </div>
            <div style={styles.whyJoinItem}>
              <span style={styles.bullet}>•</span>
              Commitment to sustainable and responsible design practices
            </div>
            <div style={styles.whyJoinItem}>
              <span style={styles.bullet}>•</span>
              Flexible work arrangements and competitive compensation
            </div>
          </div>
        </div>

        <div style={styles.contactSection}>
          <h2 style={styles.contactTitle}>Ready to Apply?</h2>
          <p style={styles.contactText}>
            To apply, please send your resume and portfolio to paperspacestudio.com
          </p>
          
          <div style={styles.contactButtons}>
            <button 
              style={styles.contactButton}
              onClick={handleEmailClick}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 25px rgba(30, 41, 59, 0.25)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 12px rgba(30, 41, 59, 0.15)';
              }}
            >
              <Mail size={20} />
              Email Us
            </button>
            
            <button 
              style={styles.contactButton}
              onClick={handleWhatsAppClick}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 25px rgba(30, 41, 59, 0.25)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 12px rgba(30, 41, 59, 0.15)';
              }}
            >
              <MessageCircle size={20} />
              WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerPage;