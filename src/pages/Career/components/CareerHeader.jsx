function CareerHeader() {
  const styles = {
    sectionTitle: {
      fontSize: 'clamp(3.5rem, 6vw, 5rem)',
      fontWeight: '300',
      color: '#1c1917',
      marginBottom: '3rem',
      letterSpacing: '-0.02em',
      fontFamily: 'Jost, sans-serif',
      lineHeight: '1.1'
    },
    description: {
      fontSize: 'clamp(1.3rem, 3vw, 1.5rem)',
      color: '#57534e',
      lineHeight: '1.7',
      marginBottom: '4rem',
      maxWidth: '700px',
      margin: '0 auto 4rem auto',
      fontWeight: '300',
      fontFamily: 'Jost, sans-serif'
    }
  };

  return (
    <>
      <h1 style={styles.sectionTitle}>Join Our Team</h1>
      <p style={styles.description}>
        We're a passionate team of architects and designers creating innovative, 
        sustainable spaces that inspire. If you share our vision for thoughtful 
        design and want to be part of something meaningful, we'd love to hear from you.
      </p>
    </>
  );
}

export default CareerHeader;
