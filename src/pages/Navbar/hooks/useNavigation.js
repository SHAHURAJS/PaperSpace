import { useState } from "react";

export default function useNavigation(onNavigate) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return { isMenuOpen, setIsMenuOpen, handleNavigation };
}
