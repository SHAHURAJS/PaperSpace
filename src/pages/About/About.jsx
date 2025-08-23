import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

function AboutPage() {
  const [currentView, setCurrentView] = useState('main');
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 'shounak',
      name: 'Shounak Patel',
      position: 'Principal Architect',
      image: '/api/placeholder/400/500',
      bio: `Shounak brings over 15 years of architectural expertise to every project. With a passion for sustainable design and innovative solutions, he has led numerous award-winning projects across residential and commercial sectors. His approach combines technical precision with creative vision, ensuring each space tells a unique story while meeting the highest standards of functionality and aesthetics.

      Shounak holds a Master's degree in Architecture from a prestigious institution and is a licensed architect with extensive experience in project management, client relations, and design development. He believes that great architecture should enhance human experiences while respecting environmental considerations.`
    },
    {
      id: 'priya',
      name: 'Priya Sharma',
      position: 'Lead Designer',
      image: '/api/placeholder/400/500',
      bio: `Priya is our creative visionary with a keen eye for detail and spatial relationships. With 10 years of experience in interior and architectural design, she specializes in creating harmonious environments that reflect our clients' personalities and lifestyles. Her expertise spans from conceptual design to detailed execution.

      She has worked on diverse projects ranging from luxury residences to boutique commercial spaces. Priya's design philosophy centers on creating timeless spaces that balance form and function, always with a focus on sustainability and user experience. Her collaborative approach ensures that every project benefits from multidisciplinary expertise.`
    },
    {
      id: 'arjun',
      name: 'Arjun Kumar',
      position: 'Project Director',
      image: '/api/placeholder/400/500',
      bio: `Arjun oversees all project operations with meticulous attention to detail and exceptional organizational skills. With 12 years of experience in construction management and architectural coordination, he ensures that every project is delivered on time, within budget, and to the highest quality standards.

      His background includes both field experience and design coordination, making him uniquely qualified to bridge the gap between creative vision and practical execution. Arjun is passionate about implementing sustainable building practices and innovative construction techniques that push the boundaries of traditional architecture.`
    }
  ];

  const styles = {
    container: {
      minHeight: 'calc(100vh - 200px)',
      background: '#f5f5f4',
      padding: '80px 24px',
      fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif'
    },
    maxWidth: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '64px',
      alignItems: 'center'
    },
    sectionTitle: {
      fontSize: '56px',
      fontWeight: '200',
      color: '#1e293b',
      marginBottom: '32px',
      letterSpacing: '-0.02em',
      fontFamily: '"Playfair Display", serif'
    },
    text: {
      color: '#475569',
      marginBottom: '24px',
      lineHeight: '1.7',
      fontSize: '20px',
      fontWeight: '300'
    },
    imagePlaceholder: {
      background: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(226, 232, 240, 0.8)',
      borderRadius: '20px',
      height: '400px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '18px',
      color: '#64748b',
      fontWeight: '300',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.08)'
    },
    teamSection: {
      marginTop: '80px'
    },
    teamTitle: {
      fontSize: '40px',
      fontWeight: '300',
      color: '#1e293b',
      marginBottom: '48px',
      textAlign: 'center',
      fontFamily: '"Playfair Display", serif'
    },
    teamGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '40px'
    },
    teamCard: {
      background: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(226, 232, 240, 0.8)',
      borderRadius: '24px',
      padding: '48px 40px',
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
      minHeight: '320px'
    },
    teamImage: {
      width: '160px',
      height: '160px',
      borderRadius: '50%',
      backgroundColor: '#e2e8f0',
      margin: '0 auto 32px auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '16px',
      color: '#64748b',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)'
    },
    teamName: {
      fontSize: '28px',
      fontWeight: '500',
      color: '#1e293b',
      marginBottom: '12px'
    },
    teamPosition: {
      fontSize: '18px',
      color: '#64748b',
      fontWeight: '300'
    },
    memberDetailView: {
      display: 'grid',
      gridTemplateColumns: '450px 1fr',
      gap: '80px',
      alignItems: 'start'
    },
    memberImage: {
      width: '100%',
      height: '500px',
      borderRadius: '20px',
      backgroundColor: '#e2e8f0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '16px',
      color: '#64748b',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)'
    },
    memberInfo: {
      paddingTop: '20px'
    },
    memberName: {
      fontSize: '48px',
      fontWeight: '300',
      color: '#1e293b',
      marginBottom: '8px',
      fontFamily: '"Playfair Display", serif'
    },
    memberPosition: {
      fontSize: '20px',
      color: '#64748b',
      marginBottom: '32px',
      fontWeight: '300'
    },
    memberBio: {
      fontSize: '18px',
      color: '#475569',
      lineHeight: '1.7',
      fontWeight: '300',
      whiteSpace: 'pre-line'
    },
    backButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
      color: 'white',
      padding: '12px 24px',
      border: 'none',
      borderRadius: '12px',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: '500',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      marginBottom: '40px',
      boxShadow: '0 4px 12px rgba(30, 41, 59, 0.15)'
    }
  };

  const mediaQueries = `
    @media (min-width: 768px) {
      .about-grid { grid-template-columns: 1fr 1fr !important; }
    }
    @media (max-width: 768px) {
      .member-detail-view { grid-template-columns: 1fr !important; gap: 32px !important; }
      .member-image { height: 300px !important; }
    }
  `;

  const handleTeamMemberClick = (member) => {
    setSelectedMember(member);
    setCurrentView('member');
    // Update URL without page reload
    window.history.pushState({}, '', `/about/${member.id}`);
  };

  const handleBackClick = () => {
    setCurrentView('main');
    setSelectedMember(null);
    window.history.pushState({}, '', '/about');
  };

  const renderMemberDetail = () => (
    <div style={styles.container}>
      <div style={styles.maxWidth}>
        <button 
          style={styles.backButton}
          onClick={handleBackClick}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 8px 25px rgba(30, 41, 59, 0.25)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 12px rgba(30, 41, 59, 0.15)';
          }}
        >
          <ArrowLeft size={20} />
          Back to About
        </button>
        
        <div className="member-detail-view" style={styles.memberDetailView}>
          <div 
            style={{
              ...styles.memberImage,
              backgroundImage: `url(${selectedMember?.image})`
            }}
          >
            {selectedMember?.name} Photo
          </div>
          
          <div style={styles.memberInfo}>
            <h1 style={styles.memberName}>{selectedMember?.name}</h1>
            <p style={styles.memberPosition}>{selectedMember?.position}</p>
            <p style={styles.memberBio}>{selectedMember?.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMainView = () => (
    <div style={styles.container}>
      <div style={styles.maxWidth}>
        <div className="about-grid" style={styles.grid}>
          <div>
            <h1 style={styles.sectionTitle}>About Our Studio</h1>
            <p style={styles.text}>
              With over 15 years of experience in architectural design, we specialize in creating 
              spaces that inspire and endure. Our team combines creative vision with technical 
              expertise to deliver exceptional results.
            </p>
            <p style={styles.text}>
              From residential homes to commercial complexes, we approach each project with 
              meticulous attention to detail and a commitment to sustainable design practices.
            </p>
            <p style={styles.text}>
              Our philosophy centers on the belief that great architecture should enhance the human 
              experience while respecting the environment. We work closely with our clients to 
              understand their vision and transform it into reality.
            </p>
          </div>
          <div style={styles.imagePlaceholder}>
            <span>Studio Team Photo</span>
          </div>
        </div>
        
        <div style={styles.teamSection}>
          <h2 style={styles.teamTitle}>Meet Our Team</h2>
          <div style={styles.teamGrid}>
            {teamMembers.map((member) => (
              <div 
                key={member.id}
                style={styles.teamCard}
                onClick={() => handleTeamMemberClick(member)}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.12)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.08)';
                }}
              >
                <div 
                  style={{
                    ...styles.teamImage,
                    backgroundImage: `url(${member.image})`
                  }}
                >
                  {member.name}
                </div>
                <h3 style={styles.teamName}>{member.name}</h3>
                <p style={styles.teamPosition}>{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <style>{mediaQueries}</style>
      {currentView === 'main' ? renderMainView() : renderMemberDetail()}
    </>
  );
}

export default AboutPage;