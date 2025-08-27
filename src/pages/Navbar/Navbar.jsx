import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navigation({ currentPage, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (page) => currentPage === page;
  const isHomePage = currentPage === 'home';

  const handleNavigation = (page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  // Check if we're on desktop (width > 900px)
  const [isDesktop, setIsDesktop] = React.useState(window.innerWidth > 900);
  
  React.useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 900);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Only apply video overlay styles on desktop home page
  const shouldUseVideoStyle = isHomePage && isDesktop;

  const styles = {
    nav: {
      padding: '16px 24px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: shouldUseVideoStyle ? 'transparent' : '#f5f5f4',
      position: shouldUseVideoStyle ? 'absolute' : 'relative',
      top: shouldUseVideoStyle ? '0' : 'auto',
      left: shouldUseVideoStyle ? '0' : 'auto',
      right: shouldUseVideoStyle ? '0' : 'auto',
      zIndex: shouldUseVideoStyle ? '100' : 'auto',
      backdropFilter: shouldUseVideoStyle ? 'blur(10px)' : 'none',
      borderBottom: shouldUseVideoStyle ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
      transition: 'all 0.3s ease'
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: shouldUseVideoStyle ? '#ffffff' : '#374151',
      cursor: 'pointer',
      position: 'absolute',
      left: '24px',
      textShadow: shouldUseVideoStyle ? '0 2px 4px rgba(0,0,0,0.3)' : 'none',
      transition: 'all 0.3s ease'
    },
    logoSpan: {
      color: shouldUseVideoStyle ? 'rgba(255, 255, 255, 0.8)' : '#6B7280'
    },
    desktopMenu: {
      display: 'none',
      gap: '48px',
      alignItems: 'center'
    },
    menuLink: {
      color: shouldUseVideoStyle ? '#ffffff' : '#374151',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      paddingBottom: '4px',
      textShadow: shouldUseVideoStyle ? '0 1px 2px rgba(0,0,0,0.3)' : 'none',
      fontWeight: shouldUseVideoStyle ? '500' : '400'
    },
    menuLinkHover: {
      color: shouldUseVideoStyle ? 'rgba(255, 255, 255, 0.8)' : '#6B7280'
    },
    mobileMenuButton: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'block',
      position: 'absolute',
      right: '24px',
      color: '#374151', // Always dark on mobile for visibility
      filter: 'none',
      zIndex: '101' // Higher z-index to ensure visibility
    },
    mobileMenu: {
      backgroundColor: '#f5f5f4', // Always stone background on mobile
      backdropFilter: 'none',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      display: isMenuOpen ? 'block' : 'none',
      position: 'static', // Always static positioning on mobile
      top: 'auto',
      left: 'auto',
      right: 'auto',
      zIndex: '100',
      width: '100%'
    },
    mobileMenuContent: {
      padding: '16px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      alignItems: 'center'
    },
    mobileMenuLink: {
      color: '#374151', // Always dark text on mobile
      textDecoration: 'none',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: '400', // Consistent weight
      transition: 'all 0.3s ease'
    }
  };

  const mediaQueries = `
    @media (max-width: 899px) {
      /* Mobile-specific overrides */
      .navbar-mobile {
        background-color: #f5f5f4 !important;
        position: relative !important;
        backdrop-filter: none !important;
        border-bottom: none !important;
      }
      
      .navbar-mobile .logo {
        color: #374151 !important;
        text-shadow: none !important;
      }
      
      .navbar-mobile .logo span {
        color: #6B7280 !important;
      }
      
      .mobile-menu-button {
        color: #374151 !important;
        filter: none !important;
      }
      
      .mobile-menu {
        background-color: #f5f5f4 !important;
        position: static !important;
        z-index: 1000 !important;
      }
    }
    
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
      
      /* Desktop home page styles */
      .navbar-home-desktop {
        background: transparent !important;
        position: absolute !important;
        backdrop-filter: blur(10px) !important;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
      }
      
      .navbar-home-desktop .logo {
        color: #ffffff !important;
        text-shadow: 0 2px 4px rgba(0,0,0,0.3) !important;
      }
      
      .navbar-home-desktop .logo span {
        color: rgba(255, 255, 255, 0.8) !important;
      }
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

    /* Hover effects for navigation links */
    .nav-link:hover {
      color: ${shouldUseVideoStyle ? 'rgba(255, 255, 255, 0.8)' : '#6B7280'} !important;
      transform: translateY(-1px);
    }

    .mobile-nav-link:hover {
      color: #6B7280 !important; /* Always consistent on mobile */
      transform: translateX(5px);
    }

    /* Active page indicator */
    .nav-link-active {
      border-bottom: 2px solid ${shouldUseVideoStyle ? '#ffffff' : '#374151'} !important;
      padding-bottom: 2px !important;
    }

    /* Mobile active page indicator - always consistent */
    .mobile-nav-link.nav-link-active {
      border-bottom: 2px solid #374151 !important;
      padding-bottom: 2px !important;
    }

    /* Navbar scroll effect for desktop home page only */
    ${shouldUseVideoStyle ? `
      .navbar-home {
        background: rgba(0, 0, 0, 0.1) !important;
      }
      
      .navbar-home:hover {
        background: rgba(0, 0, 0, 0.2) !important;
      }
    ` : ''}
  `;

  return (
    <>
      <style>{mediaQueries}</style>
      <nav style={styles.nav} className={`${shouldUseVideoStyle ? 'navbar-home-desktop' : ''} navbar-mobile`}>
        <div className="logo" style={styles.logo} onClick={() => handleNavigation('home')}>
          STUDIO<span style={styles.logoSpan}>PAPERSPACE</span>
        </div>
        
        <div className="desktop-menu" style={styles.desktopMenu}>
          <span 
            style={styles.menuLink}
            className={`nav-link ${isActive('home') ? 'nav-link-active' : ''}`}
            onClick={() => handleNavigation('home')}
          >
            Home
          </span>
          <span 
            style={styles.menuLink}
            className={`nav-link ${isActive('about') ? 'nav-link-active' : ''}`}
            onClick={() => handleNavigation('about')}
          >
            About
          </span>
          <span 
            style={styles.menuLink}
            className={`nav-link ${isActive('projects') ? 'nav-link-active' : ''}`}
            onClick={() => handleNavigation('projects')}
          >
            Projects
          </span>
          <span 
            style={styles.menuLink}
            className={`nav-link ${isActive('career') ? 'nav-link-active' : ''}`}
            onClick={() => handleNavigation('career')}
          >
            Career
          </span>
          <span 
            style={styles.menuLink}
            className={`nav-link ${isActive('contact') ? 'nav-link-active' : ''}`}
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
          <span 
            style={styles.mobileMenuLink} 
            className={`mobile-nav-link ${isActive('home') ? 'nav-link-active' : ''}`}
            onClick={() => handleNavigation('home')}
          >
            Home
          </span>
          <span 
            style={styles.mobileMenuLink} 
            className={`mobile-nav-link ${isActive('about') ? 'nav-link-active' : ''}`}
            onClick={() => handleNavigation('about')}
          >
            About
          </span>
          <span 
            style={styles.mobileMenuLink} 
            className={`mobile-nav-link ${isActive('projects') ? 'nav-link-active' : ''}`}
            onClick={() => handleNavigation('projects')}
          >
            Projects
          </span>
          <span 
            style={styles.mobileMenuLink} 
            className={`mobile-nav-link ${isActive('career') ? 'nav-link-active' : ''}`}
            onClick={() => handleNavigation('career')}
          >
            Career
          </span>
          <span 
            style={styles.mobileMenuLink} 
            className={`mobile-nav-link ${isActive('contact') ? 'nav-link-active' : ''}`}
            onClick={() => handleNavigation('contact')}
          >
            Contact
          </span>
        </div>
      </div>
    </>
  );
}

export default Navigation;