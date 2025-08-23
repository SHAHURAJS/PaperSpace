import React, { useState, useEffect } from 'react';
import Navigation from './pages/Navbar/Navbar';
import HomePage from './pages/Home/Home';
import AboutPage from './pages/About/About';
import ProjectsPage from './pages/Projects/Projects';
import CareerPage from './pages/Career/Career';
import ContactPage from './pages/Contact/Contact';
import Footer from './pages/Footer/Footer';

function updateURL(page) {
  const path = page === 'home' ? '/' : `/${page}`;
  window.history.pushState({ page }, '', path);
}

function getPageFromURL() {
  const path = window.location.pathname;
  if (path === '/') return 'home';
  const page = path.substring(1);
  return ['home', 'about', 'projects', 'career', 'contact'].includes(page) ? page : 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => getPageFromURL());

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = (event) => {
      const page = event.state?.page || getPageFromURL();
      setCurrentPage(page);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigation = (page) => {
    setCurrentPage(page);
    updateURL(page);
  };

  // Render the current page based on state
  const renderCurrentPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigation} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigation} />;
      case 'projects':
        return <ProjectsPage onNavigate={handleNavigation} />;
      case 'career':
        return <CareerPage onNavigate={handleNavigation} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigation} />;
      default:
        return <HomePage onNavigate={handleNavigation}/>;
    }
  };

  const styles = {
    app: {
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }
  };

  return (
    <div style={styles.app}>
      <Navigation currentPage={currentPage} onNavigate={handleNavigation} />
      {renderCurrentPage()}
      <Footer />
    </div>
  );
}