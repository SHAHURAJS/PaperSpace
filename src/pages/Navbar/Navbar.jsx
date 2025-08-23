import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navigation({ currentPage, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (page) => currentPage === page;

  const handleNavigation = (page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  const styles = {
    nav: {
      padding: '16px 24px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f4',
      position: 'relative'
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#374151',
      cursor: 'pointer',
      position: 'absolute',
      left: '24px'
    },
    logoSpan: {
      color: '#6B7280'
    },
    desktopMenu: {
      display: 'none',
      gap: '48px',
      alignItems: 'center'
    },
    menuLink: {
      color: '#374151',
      textDecoration: 'none',
      transition: 'color 0.3s',
      cursor: 'pointer',
      paddingBottom: '4px'
    },
    mobileMenuButton: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'block',
      position: 'absolute',
      right: '24px'
    },
    mobileMenu: {
      backgroundColor: '#f5f5f4',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      display: isMenuOpen ? 'block' : 'none'
    },
    mobileMenuContent: {
      padding: '16px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      alignItems: 'center'
    },
    mobileMenuLink: {
      color: '#374151',
      textDecoration: 'none',
      cursor: 'pointer'
    }
  };

  const mediaQueries = `
    @media (min-width: 480px) {
      .logo { font-size: 18px !important; }
    }
    
    @media (min-width: 640px) {
      .logo { font-size: 20px !important; }
    }
    
    @media (min-width: 900px) {
      .desktop-menu { 
        display: flex !important; 
        gap: 24px !important;
      }
      .mobile-menu-button { display: none !important; }
      .logo { font-size: 22px !important; }
    }
    
    @media (min-width: 1100px) {
      .desktop-menu { 
        gap: 32px !important;
      }
      .logo { font-size: 24px !important; }
    }
    
    @media (min-width: 1200px) {
      .desktop-menu { 
        gap: 40px !important;
      }
    }
    
    @media (min-width: 1400px) {
      .desktop-menu { 
        gap: 48px !important;
      }
    }
  `;

  return (
    <>
      <style>{mediaQueries}</style>
      <nav style={styles.nav}>
        <div className="logo" style={styles.logo} onClick={() => handleNavigation('home')}>
          STUDIO<span style={styles.logoSpan}>PAPERSPACE</span>
          {/* <img src={logo1} alt="Logo 1" style={{ height: '40px', marginRight: '8px' }} />
          <img src={logo2} alt="Logo 2" style={{ height: '40px' }} /> */}
        </div>
        
        <div className="desktop-menu" style={styles.desktopMenu}>
          <span 
            style={styles.menuLink}
            onClick={() => handleNavigation('home')}
          >
            Home
          </span>
          <span 
            style={styles.menuLink}
            onClick={() => handleNavigation('about')}
          >
            About
          </span>
          <span 
            style={styles.menuLink}
            onClick={() => handleNavigation('projects')}
          >
            Projects
          </span>
          <span 
            style={styles.menuLink}
            onClick={() => handleNavigation('career')}
          >
            Career
          </span>
          <span 
            style={styles.menuLink}
            onClick={() => handleNavigation('contact')}
          >
            Contact
          </span>
        </div>

        <button 
          className="mobile-menu-button"
          style={styles.mobileMenuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div style={styles.mobileMenu}>
        <div style={styles.mobileMenuContent}>
          <span style={styles.mobileMenuLink} onClick={() => handleNavigation('home')}>Home</span>
          <span style={styles.mobileMenuLink} onClick={() => handleNavigation('about')}>About</span>
          <span style={styles.mobileMenuLink} onClick={() => handleNavigation('projects')}>Projects</span>
          <span style={styles.mobileMenuLink} onClick={() => handleNavigation('career')}>Career</span>
          <span style={styles.mobileMenuLink} onClick={() => handleNavigation('contact')}>Contact</span>
        </div>
      </div>
    </>
  );
}
export default Navigation;