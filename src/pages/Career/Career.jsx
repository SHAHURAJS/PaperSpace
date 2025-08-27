import { Mail, MessageCircle } from "lucide-react";

function CareerPage() {
  const styles = {
    container: {
      minHeight: 'calc(100vh - 200px)',
      background: '#f5f5f4',
      padding: '120px 24px 80px',
      fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif'
    },
    maxWidth: {
      maxWidth: '1000px',
      margin: '0 auto',
      textAlign: 'center'
    },
    sectionTitle: {
      fontSize: 'clamp(3.5rem, 6vw, 5rem)',
      fontWeight: '300',
      color: '#1c1917',
      marginBottom: '2rem',
      letterSpacing: '-0.02em',
      fontFamily: '"Playfair Display", serif',
      lineHeight: '1.1'
    },
    description: {
      fontSize: 'clamp(1.2rem, 2vw, 1.4rem)',
      color: '#57534e',
      lineHeight: '1.7',
      marginBottom: '4rem',
      maxWidth: '700px',
      margin: '0 auto 4rem auto',
      fontWeight: '300'
    },
    whyJoin: {
      marginBottom: '4rem',
      background: 'rgba(255, 255, 255, 0.8)',
      borderRadius: '30px',
      padding: '3rem 2.5rem',
      border: '1px solid rgba(28, 25, 23, 0.1)',
      boxShadow: '0 20px 50px rgba(28, 25, 23, 0.08)',
      backdropFilter: 'blur(10px)'
    },
    whyJoinTitle: {
      fontSize: 'clamp(2.5rem, 4vw, 3rem)',
      fontWeight: '300',
      color: '#1c1917',
      marginBottom: '2rem',
      fontFamily: '"Playfair Display", serif'
    },
    whyJoinList: {
      textAlign: 'left',
      maxWidth: '650px',
      margin: '0 auto',
      display: 'grid',
      gap: '1.5rem'
    },
    whyJoinItem: {
      fontSize: '1.1rem',
      color: '#57534e',
      paddingLeft: '2rem',
      position: 'relative',
      fontWeight: '300',
      lineHeight: '1.6',
      padding: '1rem 0 1rem 2.5rem',
      borderRadius: '15px',
      background: 'rgba(28, 25, 23, 0.02)',
      transition: 'all 0.3s ease'
    },
    bullet: {
      position: 'absolute',
      left: '1rem',
      color: '#1c1917',
      fontSize: '1.2rem',
      top: '50%',
      transform: 'translateY(-50%)',
      fontWeight: '600'
    },
    contactSection: {
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(15px)',
      border: '1px solid rgba(28, 25, 23, 0.1)',
      borderRadius: '30px',
      padding: '3.5rem 2.5rem',
      marginTop: '3rem',
      boxShadow: '0 30px 80px rgba(28, 25, 23, 0.1)'
    },
    contactTitle: {
      fontSize: 'clamp(2rem, 4vw, 2.5rem)',
      fontWeight: '300',
      color: '#1c1917',
      marginBottom: '1.5rem',
      fontFamily: '"Playfair Display", serif'
    },
    contactText: {
      fontSize: '1.2rem',
      color: '#57534e',
      marginBottom: '2.5rem',
      fontWeight: '300',
      lineHeight: '1.6'
    },
    contactButtons: {
      display: 'flex',
      gap: '1.5rem',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    contactButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      background: 'linear-gradient(135deg, #1c1917 0%, #292524 100%)',
      color: 'white',
      padding: '1rem 2rem',
      border: 'none',
      borderRadius: '50px',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: '500',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      textDecoration: 'none',
      boxShadow: '0 10px 30px rgba(28, 25, 23, 0.2)',
      minWidth: '150px'
    }
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:careers@studiopaperspace.com';
  };

  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number (format: country code + number without + or spaces)
    const phoneNumber = '919876543210'; // Example: +91 98765 43210 becomes 919876543210
    const message = encodeURIComponent('Hi! I am interested in career opportunities at Studio Paper Space.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const addHoverEffects = () => {
    return `
      .contact-button:hover {
        transform: translateY(-3px);
        box-shadow: 0 20px 40px rgba(28, 25, 23, 0.3) !important;
      }
      
      .why-join-item:hover {
        background: rgba(28, 25, 23, 0.05) !important;
        transform: translateX(5px);
      }
      
      @media (max-width: 768px) {
        .contact-buttons {
          flex-direction: column !important;
          align-items: center !important;
        }
        
        .contact-button {
          width: 100% !important;
          max-width: 280px !important;
        }
        
        .why-join-list {
          text-align: center !important;
        }
        
        .why-join-item {
          text-align: left !important;
        }
      }
    `;
  };

  return (
    <>
      <style>{addHoverEffects()}</style>
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
            <div className="why-join-list" style={styles.whyJoinList}>
              <div className="why-join-item" style={styles.whyJoinItem}>
                <span style={styles.bullet}>•</span>
                Work on diverse, exciting projects from residential to commercial
              </div>
              <div className="why-join-item" style={styles.whyJoinItem}>
                <span style={styles.bullet}>•</span>
                Collaborative environment that values creativity and innovation
              </div>
              <div className="why-join-item" style={styles.whyJoinItem}>
                <span style={styles.bullet}>•</span>
                Opportunities for professional growth and skill development
              </div>
              <div className="why-join-item" style={styles.whyJoinItem}>
                <span style={styles.bullet}>•</span>
                Commitment to sustainable and responsible design practices
              </div>
              <div className="why-join-item" style={styles.whyJoinItem}>
                <span style={styles.bullet}>•</span>
                Flexible work arrangements and competitive compensation
              </div>
            </div>
          </div>

          <div style={styles.contactSection}>
            <h2 style={styles.contactTitle}>Ready to Apply?</h2>
            <p style={styles.contactText}>
              Send your resume and portfolio to get started on your journey with us. 
              We're excited to see what you can bring to our team!
            </p>
            
            <div className="contact-buttons" style={styles.contactButtons}>
              <button 
                className="contact-button"
                style={styles.contactButton}
                onClick={handleEmailClick}
              >
                <Mail size={20} />
                Email Us
              </button>
              
              <button 
                className="contact-button"
                style={styles.contactButton}
                onClick={handleWhatsAppClick}
              >
                <MessageCircle size={20} />
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CareerPage;