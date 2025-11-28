function WhyJoinSection() {
  const styles = {
   whyJoin: {
  margin: '0 auto',
  background: 'rgba(255, 255, 255, 0.8)',
  padding: '3rem 2.5rem',
  borderRadius: '30px',
  boxShadow: '0 20px 50px rgba(28, 25, 23, 0.08)',
  border: '1px solid rgba(28, 25, 23, 0.1)',
  backdropFilter: 'blur(10px)'
}

,
    whyJoinTitle: {
      fontSize: 'clamp(2.5rem, 4vw, 3rem)',
      fontWeight: '300',
      color: '#1c1917',
      marginBottom: '2rem',
      fontFamily: 'Jost, sans-serif'
    },
    whyJoinList: {
      textAlign: 'left',
      width: '80%', // ⬆️ increased width
      margin: '0 auto',
      display: 'grid',
      gap: '1.5rem'
    },
    whyJoinItem: {
      fontSize: '1.5rem',
      color: '#57534e',
      paddingLeft: '2rem',
      position: 'relative',
      fontWeight: '300',
      lineHeight: '1.6',
      padding: '1rem 0 1rem 2.5rem',
      borderRadius: '15px',
      background: 'rgba(28, 25, 23, 0.02)',
      transition: 'all 0.3s ease',
      fontFamily: 'Jost, sans-serif'
    },
    bullet: {
      position: 'absolute',
      left: '1rem',
      color: '#1c1917',
      fontSize: '1.2rem',
      top: '50%',
      transform: 'translateY(-50%)',
      fontWeight: '600',
      fontFamily: 'Jost, sans-serif'
    }
  };

  const items = [
    "Work on diverse, exciting projects from residential to commercial",
    "Collaborative environment that values creativity and innovation",
    "Opportunities for professional growth and skill development",
    "Commitment to sustainable and responsible design practices",
    "Flexible work arrangements and competitive compensation"
  ];

  return (
    <div style={styles.whyJoin}>
      <h2 style={styles.whyJoinTitle}>Why Work With Us?</h2>
      <div className="why-join-list" style={styles.whyJoinList}>
        {items.map((text, i) => (
          <div key={i} className="why-join-item" style={styles.whyJoinItem}>
            <span style={styles.bullet}>•</span>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyJoinSection;
