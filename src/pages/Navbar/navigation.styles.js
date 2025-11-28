const navigationStyles = (shouldUseVideoStyle, isMenuOpen) => ({
 nav: {
  padding: '16px 24px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'transparent',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 9999, // <-- FIXED
  backdropFilter: 'blur(10px)',
  borderBottom: shouldUseVideoStyle ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
  transition: 'all 0.3s ease',
  fontFamily: 'Jost, sans-serif'
}
,
  logo: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: shouldUseVideoStyle ? '#ffffff' : '#374151',
    cursor: 'pointer',
    position: 'absolute',
    left: '24px',
    textShadow: shouldUseVideoStyle ? '0 2px 4px rgba(0,0,0,0.3)' : 'none',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Jost, sans-serif'
  },
  logoSpan: {
  color: 'inherit',
  opacity: shouldUseVideoStyle ? 0.8 : 1, // only adjust brightness, not color
  marginLeft: '2px',
}
,
  logoImg: {
    height: '32px',
    marginRight: '6px',
    verticalAlign: 'middle'
  },
  desktopMenu: {
    display: 'none',
    gap: '48px',
    alignItems: 'center'
  },
  menuLink: (isActive) => ({
  color: shouldUseVideoStyle
    ? (isActive ? '#ffffff' : '#ffffffb0')  // white active vs faded white
    : (isActive ? '#000000' : '#374151'),   // black active vs normal
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  paddingBottom: '4px',
  borderBottom: isActive
    ? `2px solid ${shouldUseVideoStyle ? '#ffffff' : '#000000'}`
    : '2px solid transparent',
  fontWeight: isActive ? '600' : '400'
}),

  mobileMenuButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'block',
    position: 'absolute',
    right: '24px',
    color: shouldUseVideoStyle ? '#ffffff' : '#000000', // <--- FIXED,
    zIndex: '101'
  },mobileMenu: {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(255,255,255,0.6)',
  backdropFilter: 'blur(10px)',
  display: isMenuOpen ? 'flex' : 'none',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9998,
  transition: 'opacity 0.3s ease'
}

,

  mobileMenuContent: {
    padding: '16px 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    alignItems: 'center'
  },
  mobileMenuLink: {
    color: '#374151',
    cursor: 'pointer',
    fontSize: '20px',
    fontWeight: '400',
    transition: 'all 0.3s ease'
  }
});

export default navigationStyles;
