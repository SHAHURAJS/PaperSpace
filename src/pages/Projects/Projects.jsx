function ProjectsPage() {
  const projects = [
    { id: 1, title: "Modern Residence", category: "Residential", year: "2024" },
    { id: 2, title: "Tech Office Complex", category: "Commercial", year: "2024" },
    { id: 3, title: "Cultural Center", category: "Public", year: "2023" },
    { id: 4, title: "Luxury Villa", category: "Residential", year: "2023" },
    { id: 5, title: "Urban Mixed-Use", category: "Commercial", year: "2023" },
    { id: 6, title: "Educational Campus", category: "Public", year: "2022" }
  ];

  const styles = {
     container: {
      minHeight: 'calc(100vh - 200px)',
      background: '#f5f5f4',
      padding: '80px 24px',
      fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif'
    },
    maxWidth: {
      maxWidth: '1152px',
      margin: '0 auto'
    },
    sectionTitle: {
      fontSize: '48px',
      fontWeight: '300',
      color: '#374151',
      marginBottom: '48px',
      textAlign: 'center'
    },
    gridThreeCol: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '32px'
    },
    projectCard: {
      backgroundColor: 'white',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      transition: 'box-shadow 0.3s',
      cursor: 'pointer'
    },
    projectImage: {
      backgroundColor: '#E5E7EB',
      height: '250px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#6B7280',
      fontSize: '16px'
    },
    projectContent: {
      padding: '32px'
    },
    projectTitle: {
      fontSize: '24px',
      fontWeight: '600',
      color: '#374151',
      marginBottom: '8px'
    },
    projectMeta: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '16px'
    },
    projectCategory: {
      color: '#6B7280',
      fontSize: '14px',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },
    projectYear: {
      color: '#6B7280',
      fontSize: '14px'
    },
    projectDescription: {
      color: '#6B7280',
      lineHeight: '1.6'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.maxWidth}>
        <h1 style={styles.sectionTitle}>Our Projects</h1>
        <div style={styles.gridThreeCol}>
          {projects.map((project) => (
            <div 
              key={project.id} 
              style={styles.projectCard}
              onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)'}
              onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)'}
            >
              <div style={styles.projectImage}>
                <span>Project {project.id} Image</span>
              </div>
              <div style={styles.projectContent}>
                <h3 style={styles.projectTitle}>{project.title}</h3>
                <div style={styles.projectMeta}>
                  <span style={styles.projectCategory}>{project.category}</span>
                  <span style={styles.projectYear}>{project.year}</span>
                </div>
                <p style={styles.projectDescription}>
                  A contemporary design solution that combines innovative architecture with sustainable 
                  practices to create a functional and inspiring space.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;