import React from "react";
import { Menu, X } from "lucide-react";

function MobileMenuToggle({ styles, isMenuOpen, setIsMenuOpen }) {
  return (
    <button
      className="mobile-menu-button"
      style={styles.mobileMenuButton}
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );
}

export default MobileMenuToggle;
