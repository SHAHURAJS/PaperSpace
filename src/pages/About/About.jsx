import { useState } from 'react';
import { ArrowLeft, Award, Users, Building, Eye, Target, Lightbulb } from 'lucide-react';
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

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');

    .about-container {
      min-height: 100vh;
      background: #F5f5f4;
      font-family: 'Inter', sans-serif;
    }

    /* Hero Section */
    .hero-section {
      padding: 120px 24px 0;
      position: relative;
      overflow: hidden;
    }

    .hero-section::before {
      content: '';
      position: absolute;
      top: 0;
      right: -50%;
      width: 100%;
      height: 100%;
      background: #f5f5f4;
      pointer-events: none;
    }

    .hero-content {
      max-width: 1400px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 100px;
      align-items: center;
      position: relative;
      z-index: 2;
    }

    .hero-text {
      padding-right: 40px;
    }

    .hero-title {
      font-family: 'Playfair Display', serif;
      font-size: clamp(3.5rem, 6vw, 5rem);
      font-weight: 300;
      color: #1c1917;
      margin-bottom: 2rem;
      line-height: 1.1;
      letter-spacing: -0.02em;
    }

    .hero-subtitle {
      font-size: clamp(1.2rem, 2vw, 1.5rem);
      color: #57534e;
      font-weight: 300;
      margin-bottom: 3rem;
      line-height: 1.6;
    }

    .hero-image {
      position: relative;
      border-radius: 30px;
      overflow: hidden;
      box-shadow: 0 40px 100px rgba(28, 25, 23, 0.15);
    }

    .hero-image img {
      width: 100%;
      height: 500px;
      object-fit: cover;
      display: block;
    }

    /* Values Section */
    .values-section {
      padding: 120px 24px;
      background: white;
      position: relative;
    }

    .values-container {
      max-width: 1400px;
      margin: 0 auto;
    }

    .values-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 60px;
    }

    .value-card {
      position: relative;
      padding: 0;
      background: transparent;
    }

    .value-icon {
      width: 80px;
      height: 80px;
      background: linear-gradient(135deg, #1c1917 0%, #57534e 100%);
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 2rem;
      box-shadow: 0 15px 35px rgba(28, 25, 23, 0.2);
    }

    .value-title {
      font-family: 'Playfair Display', serif;
      font-size: 2rem;
      font-weight: 400;
      color: #1c1917;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .value-text {
      color: #57534e;
      font-size: 1.1rem;
      line-height: 1.8;
      font-weight: 300;
    }

    .value-text strong {
      color: #1c1917;
      font-weight: 600;
    }

    /* Tagline Section */
    .tagline-section {
      padding: 100px 24px;
      background: #f5f5f4;
      color: #1c1917;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .tagline-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23000000" fill-opacity="0.05"><circle cx="30" cy="30" r="2"/></g></svg>');
      pointer-events: none;
    }

    .tagline-content {
      max-width: 800px;
      margin: 0 auto;
      position: relative;
      z-index: 2;
    }

    .main-tagline {
      font-family: 'Playfair Display', serif;
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 300;
      margin-bottom: 2rem;
      line-height: 1.2;
    }

    .tagline-subtext {
      font-size: 1.3rem;
      opacity: 0.8;
      font-weight: 300;
      margin-bottom: 3rem;
    }

    .studio-quote {
      font-size: 1.4rem;
      font-style: italic;
      font-weight: 300;
      line-height: 1.6;
      padding: 2rem;
      border: 2px solid rgba(28, 25, 23, 0.2);
      border-radius: 20px;
      background: rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(10px);
    }

    /* Construction Excellence Section */
    .construction-section {
      padding: 120px 24px;
      background: #f5f5f4;
    }

    .construction-container {
      max-width: 1200px;
      margin: 0 auto;
      text-align: center;
    }

    .construction-title {
      font-family: 'Playfair Display', serif;
      font-size: clamp(2.5rem, 5vw, 3.5rem);
      font-weight: 300;
      color: #1c1917;
      margin-bottom: 3rem;
    }

    .construction-content {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
      text-align: left;
      background: white;
      padding: 60px;
      border-radius: 30px;
      box-shadow: 0 30px 80px rgba(28, 25, 23, 0.1);
      position: relative;
      overflow: hidden;
    }

    .construction-content::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 5px;
      height: 100%;
      background: linear-gradient(to bottom, #1c1917, #57534e);
    }

    .construction-text {
      color: #57534e;
      font-size: 1.2rem;
      line-height: 1.8;
      font-weight: 300;
    }

    .construction-text:first-child {
      margin-bottom: 2rem;
    }

    /* Team Section */
    .team-section {
      padding: 120px 24px;
      background: white;
    }

    .team-container {
      max-width: 1400px;
      margin: 0 auto;
    }

    .team-title {
      font-family: 'Playfair Display', serif;
      font-size: clamp(2.5rem, 5vw, 3.5rem);
      font-weight: 300;
      color: #1c1917;
      margin-bottom: 4rem;
      text-align: center;
    }

    .team-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
      gap: 50px;
    }

    .team-card {
      background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
      border-radius: 30px;
      padding: 0;
      overflow: hidden;
      box-shadow: 0 20px 50px rgba(28, 25, 23, 0.08);
      position: relative;
    }

    .team-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 5px;
      background: linear-gradient(90deg, #1c1917, #57534e);
    }

    .team-image {
      width: 100%;
      height: 350px;
      background-size: cover;
      background-position: center;
      background-color: #e5e5e5;
    }

    .team-content {
      padding: 40px;
    }

    .team-name {
      font-family: 'Playfair Display', serif;
      font-size: 1.8rem;
      font-weight: 400;
      color: #1c1917;
      margin-bottom: 0.5rem;
    }

    .team-position {
      color: #57534e;
      font-size: 1rem;
      font-weight: 500;
      margin-bottom: 1.5rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .team-quote {
      color: #78716c;
      font-style: italic;
      font-size: 1rem;
      line-height: 1.6;
      font-weight: 300;
    }

    /* Member Detail View */
    .member-detail-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #faf7f0 0%, #f5f2ea 100%);
      padding: 80px 24px;
    }

    .member-detail-content {
      max-width: 1400px;
      margin: 0 auto;
    }

    .back-button {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      background: linear-gradient(135deg, #1c1917 0%, #292524 100%);
      color: white;
      padding: 15px 30px;
      border: none;
      border-radius: 50px;
      cursor: pointer;
      font-size: 16px;
      font-weight: 500;
      transition: all 0.3s ease;
      margin-bottom: 60px;
      box-shadow: 0 10px 30px rgba(28, 25, 23, 0.2);
    }

    .back-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 20px 40px rgba(28, 25, 23, 0.3);
    }

    .member-detail-grid {
      display: grid;
      grid-template-columns: 500px 1fr;
      gap: 100px;
      align-items: start;
    }

    .member-image-large {
      width: 100%;
      height: 600px;
      background-size: cover;
      background-position: center;
      border-radius: 30px;
      box-shadow: 0 40px 100px rgba(28, 25, 23, 0.15);
      background-color: #e5e5e5;
    }

    .member-info {
      padding-top: 40px;
    }

    .member-name-large {
      font-family: 'Playfair Display', serif;
      font-size: clamp(3rem, 5vw, 4rem);
      font-weight: 300;
      color: #1c1917;
      margin-bottom: 1rem;
      line-height: 1.1;
    }

    .member-position-large {
      font-size: 1.3rem;
      color: #57534e;
      font-weight: 400;
      margin-bottom: 3rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .member-bio-large {
      color: #57534e;
      font-size: 1.1rem;
      line-height: 1.8;
      font-weight: 300;
      white-space: pre-line;
      margin-bottom: 3rem;
    }

    .member-quote-large {
      font-size: 1.3rem;
      font-style: italic;
      color: #1c1917;
      padding: 30px;
      background: white;
      border-radius: 20px;
      border-left: 5px solid #1c1917;
      box-shadow: 0 20px 50px rgba(28, 25, 23, 0.08);
      line-height: 1.6;
    }

    /* Responsive Design */
    @media (max-width: 1024px) {
      .hero-content {
        grid-template-columns: 1fr;
        gap: 60px;
        text-align: center;
      }

      .hero-text {
        padding-right: 0;
      }

      .values-grid {
        grid-template-columns: 1fr;
        gap: 40px;
      }

      .member-detail-grid {
        grid-template-columns: 1fr;
        gap: 50px;
      }

      .construction-content {
        padding: 40px;
      }
    }

    @media (max-width: 768px) {
      .hero-section {
        padding: 80px 16px 0;
      }

      .values-section,
      .construction-section,
      .team-section {
        padding: 80px 16px;
      }

      .tagline-section {
        padding: 80px 16px;
      }

      .team-grid {
        grid-template-columns: 1fr;
        gap: 30px;
      }

      .team-card {
        margin: 0 auto;
        max-width: 400px;
      }

      .construction-content {
        padding: 30px;
      }

      .member-detail-container {
        padding: 60px 16px;
      }

      .back-button {
        margin-bottom: 40px;
      }
    }
  `;

  const handleTeamMemberClick = (member) => {
    // Removed navigation functionality - cards no longer navigate
    return;
  };

  const handleBackClick = () => {
    setCurrentView('main');
    setSelectedMember(null);
  };

  const renderMemberDetail = () => (
    <div className="member-detail-container">
      <style>{styles}</style>
      <div className="member-detail-content">
        <button className="back-button" onClick={handleBackClick}>
          <ArrowLeft size={20} />
          Back to About
        </button>
        
        <div className="member-detail-grid">
          <div 
            className="member-image-large"
            style={{
              backgroundImage: `url(${selectedMember?.image})`
            }}
          />
          
          <div className="member-info">
            <h1 className="member-name-large">{selectedMember?.name}</h1>
            <p className="member-position-large">{selectedMember?.position}</p>
            <p className="member-bio-large">{selectedMember?.bio}</p>
            <div className="member-quote-large">{selectedMember?.quote}</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMainView = () => (
    <div className="about-container">
      <style>{styles}</style>
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">About Our Studio</h1>
            <p className="hero-subtitle">
              We are architects, designers, and builders united by a shared vision: 
              creating spaces that inspire, function beautifully, and stand the test of time.
            </p>
          </div>
          
          <div className="hero-image">
            <img src={CollabAbout} alt="Studio Collaboration" />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="values-container">
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <Eye size={32} color="white" />
              </div>
              <h3 className="value-title">Vision</h3>
              <p className="value-text">
                To shape meaningful, timeless spaces that seamlessly blend design innovation, 
                functional clarity, and contextual relevance—making architecture a catalyst 
                for better living and lasting impact.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <Target size={32} color="white" />
              </div>
              <h3 className="value-title">Mission</h3>
              <p className="value-text">
                At Studio Paper Space, we aim to design thoughtful spaces that are functional, 
                beautiful, and built to last. We work closely with our clients, combining creative 
                ideas with practical solutions, and ensure every project is delivered with clarity, 
                care, and precision.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <Lightbulb size={32} color="white" />
              </div>
              <h3 className="value-title">Ideology</h3>
              <p className="value-text">
                We believe that <strong>Design is dialogue</strong> – between ideas, users, environment, and culture. 
                <strong>Execution is expression</strong> – where discipline and detail bring design to life. 
                <strong>Every space holds power</strong> – when shaped with intention, sensitivity, and precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="tagline-section">
        <div className="tagline-content">
          <h2 className="main-tagline">Precision on Paper. Power in Space.</h2>
          <p className="tagline-subtext">A philosophy we live by. A promise we build with.</p>
          <div className="studio-quote">
            "At Studio Paper Space, we design with intent, build with integrity, and collaborate with passion. 
            Every line we draw shapes a story worth telling."
          </div>
        </div>
      </section>

      {/* Construction Excellence Section */}
      <section className="construction-section">
        <div className="construction-container">
          <h2 className="construction-title">Our Construction Excellence</h2>
          <div className="construction-content">
            <p className="construction-text">
              Our construction process reflects the same care and precision that we bring into design. 
              From the strong foundation to the last detail, every stage is carried out with discipline 
              and quality checks. The site progresses with clean shuttering, carefully tied reinforcement, 
              and structural clarity, ensuring long-term durability. Concrete works are executed with accuracy, 
              giving strength and stability to the building frame. Brick masonry and staircase construction 
              take shape in a methodical way, keeping both function and design in mind.
            </p>
            <p className="construction-text">
              We believe construction is not just about building walls—it is about creating safe, lasting, 
              and meaningful spaces. Each project is supervised with attention to detail, blending engineering 
              expertise with architectural vision. The result is not only a strong structure but also a space 
              that lives up to the design intent, ready to be transformed into a functional and beautiful environment.
            </p>
          </div>
        </div>
      </section>
        
      {/* Team Section */}
      <section className="team-section">
        <div className="team-container">
          <h2 className="team-title">Meet Our Team</h2>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div 
                key={member.id}
                className="team-card"
                onClick={() => handleTeamMemberClick(member)}
              >
                <div 
                  className="team-image"
                  style={{
                    backgroundImage: `url(${member.image})`
                  }}
                />
                <div className="team-content">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-position">{member.position}</p>
                  <p className="team-quote">{member.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  return currentView === 'main' ? renderMainView() : renderMemberDetail();
}

export default AboutPage;