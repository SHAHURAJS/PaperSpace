// import React, { useState } from 'react';
// import { Phone, Mail, MapPin } from 'react-feather';

// function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//     phone: ''
//   });

//   const styles = {
//     container: {
//       minHeight: 'calc(100vh - 200px)',
//       background: '#f5f5f4',
//       padding: '80px 24px',
//       fontFamily: 'Jost, sans-serif'
//     },
//     maxWidth: {
//       maxWidth: '896px',
//       margin: '0 auto'
//     },
//     sectionTitle: {
//       fontSize: '48px',
//       fontWeight: '300',
//       color: '#374151',
//       marginBottom: '24px',
//       textAlign: 'center',
//       fontFamily: 'Jost, sans-serif'
//     },
//     subtitle: {
//       fontSize: '20px',
//       color: '#6B7280',
//       marginBottom: '48px',
//       textAlign: 'center',
//       fontFamily: 'Jost, sans-serif'
//     },
//     grid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
//       gap: '32px',
//       marginBottom: '48px'
//     },
//     contactItem: {
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       gap: '12px'
//     },
//     contactText: {
//       color: '#374151',
//       fontSize: '16px',
//       fontFamily: 'Jost, sans-serif',
//       cursor: 'pointer'
//     },
//     formSection: {
//       backgroundColor: 'white',
//       padding: '48px',
//       maxWidth: '600px',
//       margin: '0 auto',
//       borderRadius: '12px',
//       boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
//     },
//     form: {
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '24px'
//     },
//     inputGroup: {
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '8px'
//     },
//     label: {
//       color: '#374151',
//       fontWeight: '600',
//       fontSize: '14px',
//       fontFamily: 'Jost, sans-serif'
//     },
//     input: {
//       padding: '12px 16px',
//       border: '1px solid #D1D5DB',
//       fontSize: '16px',
//       transition: 'border-color 0.3s',
//       borderRadius: '6px',
//       fontFamily: 'Jost, sans-serif'
//     },
//     textarea: {
//       padding: '12px 16px',
//       border: '1px solid #D1D5DB',
//       fontSize: '16px',
//       minHeight: '120px',
//       resize: 'vertical',
//       fontFamily: 'Jost, sans-serif',
//       transition: 'border-color 0.3s',
//       borderRadius: '6px'
//     },
//     submitButton: {
//       backgroundColor: '#374151',
//       color: 'white',
//       padding: '16px 48px',
//       border: 'none',
//       cursor: 'pointer',
//       fontSize: '16px',
//       transition: 'background-color 0.3s',
//       alignSelf: 'flex-start',
//       borderRadius: '6px',
//       fontFamily: 'Jost, sans-serif',
//       fontWeight: '500'
//     }
//   };

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert('Thank you for your message! We\'ll get back to you soon.');
//     setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
//   };

//   const handleEmailClick = () => {
//     window.location.href = 'mailto:studiopaperspace@gmail.com';
//   };

//   const handleLocationClick = () => {
//     window.open('https://maps.app.goo.gl/m8ufCaicN3HPRrdv8?g_st=ipc', '_blank');
//   };

//   const handleWhatsAppClick = () => {
//     // Replace with actual WhatsApp number (format: country code + number without + or spaces)
//     const phoneNumber = '918855837620'; // Example: +91 98765 43210 becomes 919876543210
//     const message = encodeURIComponent('Hi! I am interested in your architectural services.');
//     window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
//   };

//   // Add Google Fonts import and universal font styling
//   const fontStyles = `
//     @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&display=swap');
    
//     /* Apply Jost font to all elements */
//     * {
//       font-family: 'Jost', sans-serif !important;
//     }
    
//     .contact-text-hover:hover {
//       color: #1f2937;
//       text-decoration: underline;
//     }
    
//     .submit-button:hover {
//       background-color: #4B5563 !important;
//     }
    
//     .form-input:focus {
//       border-color: #374151 !important;
//       outline: none;
//       box-shadow: 0 0 0 3px rgba(55, 65, 81, 0.1);
//     }
    
//     .form-section {
//       transition: box-shadow 0.3s ease;
//     }
    
//     .form-section:hover {
//       box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15) !important;
//     }
    
//     @media (max-width: 768px) {
//       .section-title {
//         font-size: 36px !important;
//       }
      
//       .subtitle {
//         font-size: 18px !important;
//       }
      
//       .form-section {
//         padding: 32px !important;
//       }
      
//       .contact-grid {
//         grid-template-columns: 1fr !important;
//         gap: 24px !important;
//       }
//     }
//   `;

//   return (
//     <>
//       <style>{fontStyles}</style>
//       <div style={styles.container}>
//         <div style={styles.maxWidth}>
//           <h1 className="section-title" style={styles.sectionTitle}>Get In Touch</h1>
//           <p className="subtitle" style={styles.subtitle}>
//             Ready to start your next project? Let's discuss your vision.
//           </p>
          
//           <div className="contact-grid" style={styles.grid}>
//             <div style={styles.contactItem}>
//               <Phone size={20} style={{ color: '#6B7280' }} />
//               <span 
//                 className="contact-text-hover" 
//                 style={styles.contactText} 
//                 onClick={handleWhatsAppClick}
//               >
//                 8855837620
//               </span>
//             </div>
//             <div style={styles.contactItem}>
//               <Mail size={20} style={{ color: '#6B7280' }} />
//               <span 
//                 className="contact-text-hover" 
//                 style={styles.contactText} 
//                 onClick={handleEmailClick}
//               >
//                 studiopaperspace@gmail.com
//               </span>
//             </div>
//             <div style={styles.contactItem}>
//               <MapPin size={20} style={{ color: '#6B7280' }} />
//               <span 
//                 className="contact-text-hover" 
//                 style={styles.contactText} 
//                 onClick={handleLocationClick}
//               >
//                 Pune, Maharashtra
//               </span>
//             </div>
//           </div>

//           <div className="form-section" style={styles.formSection}>
//             <form style={styles.form} onSubmit={handleSubmit}>
//               <div style={styles.inputGroup}>
//                 <label style={styles.label} htmlFor="name">Name *</label>
//                 <input
//                   className="form-input"
//                   style={styles.input}
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>
              
//               <div style={styles.inputGroup}>
//                 <label style={styles.label} htmlFor="email">Email *</label>
//                 <input
//                   className="form-input"
//                   style={styles.input}
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>

//               <div style={styles.inputGroup}>
//                 <label style={styles.label} htmlFor="phone">Phone *</label>
//                 <input
//                   className="form-input"
//                   style={styles.input}
//                   type="text"
//                   id="phone"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>
              
//               <div style={styles.inputGroup}>
//                 <label style={styles.label} htmlFor="subject">Subject *</label>
//                 <input
//                   className="form-input"
//                   style={styles.input}
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>
              
//               <div style={styles.inputGroup}>
//                 <label style={styles.label} htmlFor="message">Message *</label>
//                 <textarea
//                   className="form-input"
//                   style={styles.textarea}
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>
              
//               <button 
//                 type="submit"
//                 className="submit-button"
//                 style={styles.submitButton}
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default ContactPage;




import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

function ContactPage() {
  const styles = {
    container: {
      minHeight: 'calc(100vh - 200px)',
      background: '#f5f5f4',
      padding: '80px 24px',
      fontFamily: 'Jost, sans-serif'
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
      textAlign: 'center',
      fontFamily: 'Jost, sans-serif'
    },
    subtitle: {
      fontSize: '20px',
      color: '#6B7280',
      marginBottom: '48px',
      textAlign: 'center',
      fontFamily: 'Jost, sans-serif'
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
      fontSize: '16px',
      fontFamily: 'Jost, sans-serif',
      cursor: 'pointer'
    },
    formSection: {
      backgroundColor: 'white',
      padding: '48px',
      maxWidth: '700px',
      margin: '0 auto',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      justifyContent: 'center'
    },
    iframeContainer: {
      width: '100%',
      maxWidth: '640px',
      height: '959px',
      border: 'none',
      borderRadius: '8px',
      overflow: 'hidden'
    },
    iframe: {
      width: '100%',
      height: '100%',
      border: 'none'
    }
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:studiopaperspace@gmail.com';
  };

  const handleLocationClick = () => {
    window.open('https://maps.app.goo.gl/m8ufCaicN3HPRrdv8?g_st=ipc', '_blank');
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '918855837620';
    const message = encodeURIComponent('Hi! I am interested in your architectural services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const fontStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&display=swap');
    
    * {
      font-family: 'Jost', sans-serif !important;
    }
    
    .contact-text-hover:hover {
      color: #1f2937;
      text-decoration: underline;
    }
    
    .form-section {
      transition: box-shadow 0.3s ease;
    }
    
    .form-section:hover {
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15) !important;
    }
    
    @media (max-width: 768px) {
      .section-title {
        font-size: 36px !important;
      }
      
      .subtitle {
        font-size: 18px !important;
      }
      
      .form-section {
        padding: 24px !important;
      }
      
      .contact-grid {
        grid-template-columns: 1fr !important;
        gap: 24px !important;
      }
      
      .iframe-container {
        height: 800px !important;
      }
    }
    
    @media (max-width: 480px) {
      .iframe-container {
        height: 700px !important;
      }
    }
  `;

  return (
    <>
      <style>{fontStyles}</style>
      <div style={styles.container}>
        <div style={styles.maxWidth}>
          <h1 className="section-title" style={styles.sectionTitle}>Get In Touch</h1>
          <p className="subtitle" style={styles.subtitle}>
            Ready to start your next project? Let's discuss your vision.
          </p>
          
          <div className="contact-grid" style={styles.grid}>
            <div style={styles.contactItem}>
              <Phone size={20} style={{ color: '#6B7280' }} />
              <span 
                className="contact-text-hover" 
                style={styles.contactText} 
                onClick={handleWhatsAppClick}
              >
                8855837620
              </span>
            </div>
            <div style={styles.contactItem}>
              <Mail size={20} style={{ color: '#6B7280' }} />
              <span 
                className="contact-text-hover" 
                style={styles.contactText} 
                onClick={handleEmailClick}
              >
                studiopaperspace@gmail.com
              </span>
            </div>
            <div style={styles.contactItem}>
              <MapPin size={20} style={{ color: '#6B7280' }} />
              <span 
                className="contact-text-hover" 
                style={styles.contactText} 
                onClick={handleLocationClick}
              >
                Pune, Maharashtra
              </span>
            </div>
          </div>

          <div className="form-section" style={styles.formSection}>
            <div className="iframe-container" style={styles.iframeContainer}>
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSeWAOYAzGM4wJxkVp_j2cKktLLfQz3WNADG8k2pRlF3tg6eRA/viewform?embedded=true" 
                style={styles.iframe}
                title="Contact Form"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;