import React from "react";
import logo1 from "../../../assets/logo1.png"; 

function Logo({ styles, handleNavigation }) {
  return (
    <div 
      className="logo" 
      style={styles.logo} 
      onClick={() => handleNavigation('home')}
    >
      <img 
        src={logo1} 
        alt="Logo" 
        style={styles.logoImg}
      />
      STUDIO<span style={styles.logoSpan}>PAPERSPACE</span>
    </div>
  );
}

export default Logo;
