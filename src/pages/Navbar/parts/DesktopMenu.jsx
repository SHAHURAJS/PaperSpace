import React from "react";
import { menuItems } from "../menuItems";

function DesktopMenu({ styles, isActive, handleNavigation }) {
  return (
    <div className="desktop-menu" style={styles.desktopMenu}>
      {menuItems.map((item) => (
        <span
          key={item.id}
          style={styles.menuLink(isActive(item.id))}

          className={`nav-link ${isActive(item.id) ? "nav-link-active" : ""}`}
          onClick={() => handleNavigation(item.id)}
        >
          {item.label}
        </span>
      ))}
    </div>
  );
}

export default DesktopMenu;
