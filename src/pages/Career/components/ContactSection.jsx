function ContactSection({ Mail, MessageCircle }) {
  const styles = {
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
      fontFamily: 'Jost, sans-serif'
    },
    contactText: {
      fontSize: '1.4rem',
      color: '#57534e',
      marginBottom: '2.5rem',
      fontWeight: '300',
      lineHeight: '1.6',
      fontFamily: 'Jost, sans-serif'
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
      minWidth: '150px',
      fontFamily: 'Jost, sans-serif'
    }
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:careers@studiopaperspace.com';
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '918855837620';
    const message = encodeURIComponent('Hi! I am interested in career opportunities at Studio Paper Space.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div style={styles.contactSection}>
      <h2 style={styles.contactTitle}>Ready to Apply?</h2>
      <p style={styles.contactText}>
        Send your resume and portfolio to get started on your journey with us. 
        We're excited to see what you can bring to our team!
      </p>

      <div className="contact-buttons" style={styles.contactButtons}>
        <button className="contact-button" style={styles.contactButton} onClick={handleEmailClick}>
          <Mail size={20} />
          Email Us
        </button>

        <button className="contact-button" style={styles.contactButton} onClick={handleWhatsAppClick}>
          <MessageCircle size={20} />
          WhatsApp
        </button>
      </div>
    </div>
  );
}

export default ContactSection;
