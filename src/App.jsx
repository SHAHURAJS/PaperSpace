// import React, { useState, useEffect } from 'react';
// import Navigation from './pages/Navbar/Navbar';
// import HomePage from './pages/Home/Home';
// import AboutPage from './pages/About/About';
// import ProjectsPage from './pages/Projects/Projects';
// import CareerPage from './pages/Career/Career';
// import ContactPage from './pages/Contact/Contact';
// import Footer from './pages/Footer/Footer';

// function updateURL(page) {
//   const path = page === 'home' ? '/' : `/${page}`;
//   window.history.pushState({ page }, '', path);
// }

// function getPageFromURL() {
//   const path = window.location.pathname;
//   if (path === '/') return 'home';
//   const page = path.substring(1);
//   return ['home', 'about', 'projects', 'career', 'contact'].includes(page) ? page : 'home';
// }

// export default function App() {
//   const [currentPage, setCurrentPage] = useState(() => getPageFromURL());

//   // Handle browser back/forward buttons
//   useEffect(() => {
//     const handlePopState = (event) => {
//       const page = event.state?.page || getPageFromURL();
//       setCurrentPage(page);
//     };

//     window.addEventListener('popstate', handlePopState);
//     return () => window.removeEventListener('popstate', handlePopState);
//   }, []);

//   const handleNavigation = (page) => {
//     setCurrentPage(page);
//     updateURL(page);
//   };

//   // Render the current page based on state
//   const renderCurrentPage = () => {
//     switch(currentPage) {
//       case 'home':
//         return <HomePage onNavigate={handleNavigation} />;
//       case 'about':
//         return <AboutPage onNavigate={handleNavigation} />;
//       case 'projects':
//         return <ProjectsPage onNavigate={handleNavigation} />;
//       case 'career':
//         return <CareerPage onNavigate={handleNavigation} />;
//       case 'contact':
//         return <ContactPage onNavigate={handleNavigation} />;
//       default:
//         return <HomePage onNavigate={handleNavigation}/>;
//     }
//   };

//   const styles = {
//     app: {
//       minHeight: '100vh',
//       fontFamily: 'Arial, sans-serif'
//     }
//   };

//   return (
//     <div style={styles.app}>
//       <Navigation currentPage={currentPage} onNavigate={handleNavigation} />
//       {renderCurrentPage()}
//       <Footer />
//     </div>
//   );
// }




import React, { useState, useEffect } from 'react';
import Navigation from './pages/Navbar/Navbar';
import HomePage from './pages/Home/Home';
import AboutPage from './pages/About/About';
import ProjectsPage from './pages/Projects/Projects';
import CareerPage from './pages/Career/Career';
import ContactPage from './pages/Contact/Contact';
import Footer from './pages/Footer/Footer';

function updateURL(page, projectSlug = null) {
  let path;
  if (page === 'home') {
    path = '/';
  } else if (page === 'projects' && projectSlug) {
    path = `/projects/${projectSlug}`;
  } else {
    path = `/${page}`;
  }
  window.history.pushState({ page, projectSlug }, '', path);
}

function getPageFromURL() {
  const path = window.location.pathname;
  if (path === '/') return { page: 'home', projectSlug: null };
  
  // Check if it's a project detail page
  const projectMatch = path.match(/^\/projects\/([^\/]+)$/);
  if (projectMatch) {
    return { page: 'projects', projectSlug: projectMatch[1] };
  }
  
  // Regular page
  const page = path.substring(1);
  const validPages = ['home', 'about', 'projects', 'career', 'contact'];
  return { 
    page: validPages.includes(page) ? page : 'home', 
    projectSlug: null 
  };
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    const { page } = getPageFromURL();
    return page;
  });
  const [projectSlug, setProjectSlug] = useState(() => {
    const { projectSlug } = getPageFromURL();
    return projectSlug;
  });

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = (event) => {
      const { page, projectSlug } = event.state || getPageFromURL();
      setCurrentPage(page);
      setProjectSlug(projectSlug);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigation = (page, slug = null) => {
    setCurrentPage(page);
    setProjectSlug(slug);
    updateURL(page, slug);
  };

  // Render the current page based on state
  const renderCurrentPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigation} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigation} />;
      case 'projects':
        return <ProjectsPage onNavigate={handleNavigation} projectSlug={projectSlug} />;
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