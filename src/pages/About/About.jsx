import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import CollabAbout from '../../assets/about/CollabAbout.JPG';
import Pratik from '../../assets/about/Pratik.JPG';
import Shounak from '../../assets/about/Shounak.JPG';
import Sushant from '../../assets/about/Sushant.JPG';

function AboutPage() {
  const [currentView, setCurrentView] = useState('main');
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 'shounak',
      name: 'Ar. Shounak Joshi',
      position: 'Partner – Client Relations & Execution Head',
      image: Shounak,
      bio: `Shounak brings over 15 years of architectural expertise to every project. With a passion for sustainable design and innovative solutions, he has led numerous award-winning projects across residential and commercial sectors. His approach combines technical precision with creative vision, ensuring each space tells a unique story while meeting the highest standards of functionality and aesthetics.

Shounak holds a Master's degree in Architecture from a prestigious institution and is a licensed architect with extensive experience in project management, client relations, and design development. He believes that great architecture should enhance human experiences while respecting environmental considerations.`,
      quote: '"For me, architecture begins with understanding people. Translating a client\'s vision into built form is where our journey truly begins."'
    },
    {
      id: 'pratik',
      name: 'Ar. Pratik Bhende',
      position: 'Partner – Design Head',
      image: Pratik,
      bio: `Pratik is our creative visionary with a keen eye for detail and spatial relationships. With 10 years of experience in interior and architectural design, he specializes in creating harmonious environments that reflect our clients' personalities and lifestyles. His expertise spans from conceptual design to detailed execution.

He has worked on diverse projects ranging from luxury residences to boutique commercial spaces. Pratik's design philosophy centers on creating timeless spaces that balance form and function, always with a focus on sustainability and user experience. His collaborative approach ensures that every project benefits from multidisciplinary expertise.`,
      quote: '"Design is more than aesthetics; it\'s about purpose, context, and experience. I believe in crafting spaces that speak to the soul."'
    },
    {
      id: 'sushant',
      name: 'Ar. Sushant Bhujbal',
      position: 'Partner – Execution, Legal & Liaisoning Head',
      image: Sushant,
      bio: `Sushant oversees all project operations with meticulous attention to detail and exceptional organizational skills. With 12 years of experience in construction management and architectural coordination, he ensures that every project is delivered on time, within budget, and to the highest quality standards.

His background includes both field experience and design coordination, making him uniquely qualified to bridge the gap between creative vision and practical execution. Sushant is passionate about implementing sustainable building practices and innovative construction techniques that push the boundaries of traditional architecture.`,
      quote: '"Bridging the gap between vision and reality requires not just design, but precision, process, and policy. I ensure ideas stand on solid ground."'
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
    subsectionTitle: {
      fontSize: '28px',
      fontWeight: '600',
      color: '#1e293b',
      marginTop: '48px',
      marginBottom: '24px',
      letterSpacing: '-0.01em'
    },
    text: {
      color: '#475569',
      marginBottom: '24px',
      lineHeight: '1.7',
      fontSize: '18px',
      fontWeight: '300'
    },
    boldText: {
      fontWeight: '600',
      color: '#1e293b'
    },
    quote: {
      fontSize: '20px',
      fontStyle: 'italic',
      color: '#334155',
      marginTop: '32px',
      padding: '24px',
      background: 'rgba(255, 255, 255, 0.5)',
      borderRadius: '12px',
      borderLeft: '4px solid #1e293b'
    },
    studioQuote: {
      fontSize: '24px',
      fontStyle: 'italic',
      color: '#1e293b',
      textAlign: 'center',
      marginTop: '48px',
      padding: '32px',
      background: 'rgba(255, 255, 255, 0.8)',
      borderRadius: '16px',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08)'
    },
    tagline: {
      fontSize: '32px',
      fontWeight: '300',
      color: '#1e293b',
      textAlign: 'center',
      marginTop: '32px',
      fontFamily: '"Playfair Display", serif'
    },
    taglineSubtext: {
      fontSize: '18px',
      color: '#64748b',
      textAlign: 'center',
      marginTop: '8px',
      fontStyle: 'italic'
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
      minHeight: '380px'
    },
    teamImage: {
      width: '100%',
      height: '300px',
      borderRadius: '16px',
      backgroundColor: '#e2e8f0',
      margin: '0 auto 24px auto',
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
      fontSize: '24px',
      fontWeight: '500',
      color: '#1e293b',
      marginBottom: '12px'
    },
    teamPosition: {
      fontSize: '16px',
      color: '#64748b',
      fontWeight: '300',
      marginBottom: '16px'
    },
    teamQuote: {
      fontSize: '14px',
      fontStyle: 'italic',
      color: '#475569',
      lineHeight: '1.5'
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
    memberQuote: {
      fontSize: '20px',
      fontStyle: 'italic',
      color: '#334155',
      marginTop: '32px',
      padding: '24px',
      background: 'rgba(255, 255, 255, 0.5)',
      borderRadius: '12px',
      borderLeft: '4px solid #1e293b'
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
  };

  const handleBackClick = () => {
    setCurrentView('main');
    setSelectedMember(null);
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
            <div style={styles.memberQuote}>{selectedMember?.quote}</div>
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
            
            <h2 style={styles.subsectionTitle}>About Office</h2>
            
            <h3 style={{...styles.boldText, fontSize: '20px', marginTop: '32px', marginBottom: '16px'}}>Vision</h3>
            <p style={styles.text}>
              To shape meaningful, timeless spaces that seamlessly blend design innovation, functional clarity, 
              and contextual relevance—making architecture a catalyst for better living and lasting impact.
            </p>

            <h3 style={{...styles.boldText, fontSize: '20px', marginTop: '32px', marginBottom: '16px'}}>Mission</h3>
            <p style={styles.text}>
              At Studio Paper Space, we aim to design thoughtful spaces that are functional, beautiful, and built to last. 
              We work closely with our clients, combining creative ideas with practical solutions, and ensure every project 
              is delivered with clarity, care, and precision.
            </p>

            <h3 style={{...styles.boldText, fontSize: '20px', marginTop: '32px', marginBottom: '16px'}}>Ideology</h3>
            <p style={styles.text}>
              We believe that:<br/>
              <strong>Design is dialogue</strong> – between ideas, users, environment, and culture.<br/>
              <strong>Execution is expression</strong> – where discipline and detail bring design to life.<br/>
              <strong>Every space holds power</strong> – when shaped with intention, sensitivity, and precision.<br/>
              Our strength lies in collaborative minds that respect both creativity and constructability.
            </p>

            <div style={styles.tagline}>
              Precision on Paper. Power in Space.
            </div>
            <div style={styles.taglineSubtext}>
              A philosophy we live by. A promise we build with.
            </div>
          </div>
          
          <div style={styles.imagePlaceholder}>
            <img 
              src={CollabAbout} 
              alt="Studio Collaboration" 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover', 
                borderRadius: '20px' 
              }}
            />
          </div>
        </div>

        <div style={styles.studioQuote}>
          <strong>Studio Paper Space</strong><br/>
          "At Studio Paper Space, we design with intent, build with integrity, and collaborate with passion. 
          Every line we draw shapes a story worth telling."
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
                <p style={styles.teamQuote}>{member.quote}</p>
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