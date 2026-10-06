import React from "react";
import { menuItems } from "../menuItems";

function MobileMenu({ styles, isActive, handleNavigation }) {
  return (
    <div style={styles.mobileMenu}>
      <div style={styles.mobileMenuContent}>
        {menuItems.map((item) => (
          <span 
            key={item.id}
            style={styles.mobileMenuLink}
            className={`mobile-nav-link ${isActive(item.id) ? "nav-link-active" : ""}`}
            onClick={() => handleNavigation(item.id)}
          >
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default MobileMenu;
