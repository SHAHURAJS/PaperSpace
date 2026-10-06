
import React from "react";
import "./mediaQueries.css";

import navigationStyles from "./navigation.styles";

import useNavigation from "./hooks/useNavigation";

import Logo from "./parts/Logo";
import DesktopMenu from "./parts/DesktopMenu";
import MobileMenu from "./parts/MobileMenu";
import MobileMenuToggle from "./parts/MobileMenuToggle";

function Navbar({ currentPage, onNavigate }) {
  const { isMenuOpen, setIsMenuOpen, handleNavigation } = useNavigation(onNavigate);

  const isHomePage = currentPage === "home";
  const shouldUseVideoStyle = isHomePage;


  const styles = navigationStyles(shouldUseVideoStyle, isMenuOpen);

  const isActive = (page) => currentPage === page;

  return (
    <>
      <nav 
        style={styles.nav} 
        className={`${shouldUseVideoStyle ? 'navbar-home-desktop' : ''} navbar-mobile`}
      >
        <Logo styles={styles} handleNavigation={handleNavigation} />

        <DesktopMenu 
          styles={styles} 
          isActive={isActive} 
          handleNavigation={handleNavigation} 
        />

        <MobileMenuToggle 
          styles={styles} 
          isMenuOpen={isMenuOpen} 
          setIsMenuOpen={setIsMenuOpen} 
        />
      </nav>

      <MobileMenu 
        styles={styles} 
        isActive={isActive} 
        handleNavigation={handleNavigation} 
      />
    </>
  );
}

export default Navbar;
