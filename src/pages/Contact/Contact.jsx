import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'react-feather';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const styles = {
 container: {
      minHeight: 'calc(100vh - 200px)',
      background: '#f5f5f4',
      padding: '80px 24px',
      fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif'
    },

    maxWidth: {
      maxWidth: '896px',
      margin: '0 auto'
    },
    sectionTitle: {
      fontSize: '48px',
      fontWeight: '300',
      color: '#374151',
      marginBottom: '24px',
      textAlign: 'center'
    },
    subtitle: {
      fontSize: '20px',
      color: '#6B7280',
      marginBottom: '48px',
      textAlign: 'center'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '32px',
      marginBottom: '48px'
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px'
    },
    contactText: {
      color: '#374151',
      fontSize: '16px'
    },
    formSection: {
      backgroundColor: 'white',
      padding: '48px',
      maxWidth: '600px',
      margin: '0 auto'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    label: {
      color: '#374151',
      fontWeight: '600',
      fontSize: '14px'
    },
    input: {
      padding: '12px 16px',
      border: '1px solid #D1D5DB',
      fontSize: '16px',
      transition: 'border-color 0.3s'
    },
    textarea: {
      padding: '12px 16px',
      border: '1px solid #D1D5DB',
      fontSize: '16px',
      minHeight: '120px',
      resize: 'vertical',
      fontFamily: 'Arial, sans-serif',
      transition: 'border-color 0.3s'
    },
    submitButton: {
      backgroundColor: '#374151',
      color: 'white',
      padding: '16px 48px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.3s',
      alignSelf: 'flex-start'
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div style={styles.container}>
      <div style={styles.maxWidth}>
        <h1 style={styles.sectionTitle}>Get In Touch</h1>
        <p style={styles.subtitle}>
          Ready to start your next project? Let's discuss your vision.
        </p>
        
        <div style={styles.grid}>
          <div style={styles.contactItem}>
            <Phone size={20} style={{ color: '#6B7280' }} />
            <span style={styles.contactText}>+1 (555) 123-4567</span>
          </div>
          <div style={styles.contactItem}>
            <Mail size={20} style={{ color: '#6B7280' }} />
            <span style={styles.contactText}>hello@archstudio.com</span>
          </div>
          <div style={styles.contactItem}>
            <MapPin size={20} style={{ color: '#6B7280' }} />
            <span style={styles.contactText}>New York, NY</span>
          </div>
        </div>

        <div style={styles.formSection}>
          <form style={styles.form} onSubmit={handleSubmit}>
            <div style={styles.inputGroup}>
              <label style={styles.label} htmlFor="name">Name *</label>
              <input
                style={styles.input}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                onFocus={(e) => e.target.style.borderColor = '#374151'}
                onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
              />
            </div>
            
            <div style={styles.inputGroup}>
              <label style={styles.label} htmlFor="email">Email *</label>
              <input
                style={styles.input}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                onFocus={(e) => e.target.style.borderColor = '#374151'}
                onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
              />
            </div>
            
            <div style={styles.inputGroup}>
              <label style={styles.label} htmlFor="subject">Subject *</label>
              <input
                style={styles.input}
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                onFocus={(e) => e.target.style.borderColor = '#374151'}
                onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
              />
            </div>
            
            <div style={styles.inputGroup}>
              <label style={styles.label} htmlFor="message">Message *</label>
              <textarea
                style={styles.textarea}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                onFocus={(e) => e.target.style.borderColor = '#374151'}
                onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
              />
            </div>
            
            <button 
              type="submit"
              style={styles.submitButton}
              onMouseOver={(e) => e.target.style.backgroundColor = '#4B5563'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#374151'}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;