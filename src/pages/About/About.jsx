// import { useState } from 'react';
// import { ArrowLeft, Award, Users, Building, Eye, Target, Lightbulb, Home, Palette, Hammer, FileCheck, TreePine } from 'lucide-react';
// import CollabAbout from '../../assets/about/CollabAbout.JPG'
// import Pratik from '../../assets/about/Pratik.JPG'
// import Shounak from '../../assets/about/Shounak.JPG'
// import Sushant from '../../assets/about/Sushant.JPG'

// function AboutPage() {
//   const [currentView, setCurrentView] = useState('main');
//   const [selectedMember, setSelectedMember] = useState(null);
//   const [hoveredMember, setHoveredMember] = useState(null);

//   const teamMembers = [
//     {
//       id: 'shounak',
//       name: 'Ar. Shounak Joshi',
//       position: 'Client Relation & Execution Head',
//       image: Shounak,
//       quote: '"For me, architecture begins with understanding people. Translating a client\'s vision into built form is where our journey truly begins."'
//     },
//     {
//       id: 'pratik',
//       name: 'Ar. Pratik Bhende',
//       position: 'Design Head',
//       image: Pratik,
//       quote: '"Design is more than aesthetics; it\'s about purpose, context, and experience. I believe in crafting spaces that speak to the soul."'
//     },
//     {
//       id: 'sushant',
//       name: 'Ar. Sushant Bhujbal',
//       position: 'Execution, Legal & Liasoning Head',
//       image: Sushant,
//       quote: '"Bridging the gap between vision and reality requires not just design, but precision, process, and policy. I ensure ideas stand on solid ground."'
//     }
//   ];

//   const services = [
//     {
//       icon: <Home size={24} color="white" />,
//       title: 'Architecture',
//       description: 'Creative designs blending function with timeless aesthetics.'
//     },
//     {
//       icon: <Palette size={24} color="white" />,
//       title: 'Interior',
//       description: 'Personalized interiors crafted for comfort and style.'
//     },
//     {
//       icon: <Hammer size={24} color="white" />,
//       title: 'Construction',
//       description: 'Reliable execution ensuring quality and timely delivery.'
//     },
//     {
//       icon: <FileCheck size={24} color="white" />,
//       title: 'Liasoning',
//       description: 'Hassle-free approvals with complete regulatory compliance.'
//     },
//     {
//       icon: <TreePine size={24} color="white" />,
//       title: 'Landscape',
//       description: 'Beautiful outdoor spaces harmonizing nature and design.'
//     }
//   ];

//   const handleTeamMemberClick = (member) => {
//     // Toggle quote visibility on click for all screen sizes
//     setSelectedMember(selectedMember?.id === member.id ? null : member);
//   };

//   const handleBackClick = () => {
//     setCurrentView('main');
//     setSelectedMember(null);
//   };

//   const renderMemberDetail = () => (
//     <div className="member-detail-container">
//       <div className="member-detail-content">
//         <button className="back-button" onClick={handleBackClick}>
//           <ArrowLeft size={20} />
//           Back to About
//         </button>
        
//         <div className="member-detail-grid">
//           <div 
//             className="member-image-large"
//             style={{
//               backgroundImage: `url(${selectedMember?.image})`
//             }}
//           />
          
//           <div className="member-info">
//             <h1 className="member-name-large">{selectedMember?.name}</h1>
//             <p className="member-position-large">{selectedMember?.position}</p>
//             <p className="member-bio-large">{selectedMember?.bio}</p>
//             <div className="member-quote-large">{selectedMember?.quote}</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const renderMainView = () => (
//     <div className="about-container">
//       {/* Hero Section */}
//       <section className="hero-section">
//         <div className="hero-content">
//           <div className="hero-text">
//             <h1 className="hero-title">About Our Studio</h1>
//             <p className="hero-subtitle">
//               We are architects, designers, and builders united by a shared vision: 
//               creating spaces that inspire, function beautifully, and stand the test of time.
//             </p>
//           </div>
          
//           <div className="hero-image">
//             <img src={CollabAbout} alt="Studio Collaboration" />
//           </div>
//         </div>
//       </section>

//       {/* Values Section */}
//       <section className="values-section">
//         <div className="values-container">
//           <div className="values-grid">
//             <div className="value-card">
//               <div className="value-icon">
//                 <Eye size={32} color="white" />
//               </div>
//               <div className="value-content">
//                 <h3 className="value-title">Vision</h3>
//                 <p className="value-text">
//                   To shape meaningful, timeless spaces that seamlessly blend design innovation, 
//                   functional clarity, and contextual relevance—making architecture a catalyst 
//                   for better living and lasting impact.
//                 </p>
//               </div>
//             </div>

//             <div className="value-card">
//               <div className="value-icon">
//                 <Target size={32} color="white" />
//               </div>
//               <div className="value-content">
//                 <h3 className="value-title">Mission</h3>
//                 <p className="value-text">
//                   At Studio Paper Space, we aim to design thoughtful spaces that are functional, 
//                   beautiful, and built to last. We work closely with our clients, combining creative 
//                   ideas with practical solutions, and ensure every project is delivered with clarity, 
//                   care, and precision.
//                 </p>
//               </div>
//             </div>

//             <div className="value-card">
//               <div className="value-icon">
//                 <Lightbulb size={32} color="white" />
//               </div>
//               <div className="value-content">
//                 <h3 className="value-title">Ideology</h3>
//                 <p className="value-text">
//                   We believe that <strong>Design is dialogue</strong> – between ideas, users, environment, and culture. 
//                   <strong>Execution is expression</strong> – where discipline and detail bring design to life. 
//                   <strong>Every space holds power</strong> – when shaped with intention, sensitivity, and precision.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

   

//       {/* Tagline Section */}
//       <section className="tagline-section">
//         <div className="tagline-content">
//           <h2 className="main-tagline">Precision on Paper.<br />Power in Space.</h2>
//           <p className="tagline-subtext">A philosophy we live by. A promise we build with.</p>
//           <div className="studio-quote">
//             "At Studio PaperSpace, we design with intent, build with integrity, and collaborate with passion. 
//             Every line we draw shapes a story worth telling."
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="team-section">
//         <div className="team-container">
//           <h2 className="team-title">Meet Our Team</h2>
//           <div className="team-grid">
//             {teamMembers.map((member) => (
//               <div 
//                 key={member.id}
//                 className={`team-card ${selectedMember?.id === member.id ? 'show-quote' : ''}`}
//                 onClick={() => handleTeamMemberClick(member)}
//                 onMouseEnter={() => setHoveredMember(member.id)}
//                 onMouseLeave={() => setHoveredMember(null)}
//               >
//                 <div 
//                   className="team-image"
//                   style={{
//                     backgroundImage: `url(${member.image})`
//                   }}
//                 />
//                 <div className="team-content">
//                   <h3 className="team-name">{member.name}</h3>
//                   <p className="team-position">{member.position}</p>
//                   <p className="team-quote">{member.quote}</p>
//                   <div className="quote-indicator"></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>


//          {/* Services Section */}
//       <section className="services-section">
//         <div className="services-container">
//           <h2 className="services-title">Our Services</h2>
//           <div className="services-grid">
//             {services.map((service, index) => (
//               <div key={index} className="service-card">
//                 <div className="service-icon">
//                   {service.icon}
//                 </div>
//                 <h3 className="service-title">{service.title}</h3>
//                 <p className="service-description">{service.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <style jsx>{`
//         @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&display=swap');

//         .about-container {
//           min-height: 100vh;
//           background: #F5f5f4;
//           font-family: 'Jost', sans-serif;
//         }

//         /* Apply Jost font to all elements */
//         * {
//           font-family: 'Jost', sans-serif !important;
//         }

//         /* Hero Section */
//         .hero-section {
//           padding: 120px 24px 0;
//           position: relative;
//           overflow: hidden;
//         }

//         .hero-section::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           right: -50%;
//           width: 100%;
//           height: 100%;
//           background: #f5f5f4;
//           pointer-events: none;
//         }

//         .hero-content {
//           max-width: 1400px;
//           margin: 0 auto;
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 100px;
//           align-items: center;
//           position: relative;
//           z-index: 2;
//         }

//         .hero-text {
//           padding-right: 40px;
//         }

//         .hero-title {
//           font-family: 'Jost', sans-serif;
//           font-size: clamp(3.5rem, 6vw, 5rem);
//           font-weight: 300;
//           color: #1c1917;
//           margin-bottom: 2rem;
//           line-height: 1.1;
//           letter-spacing: -0.02em;
//         }

//         .hero-subtitle {
//           font-family: 'Jost', sans-serif;
//           font-size: clamp(1.2rem, 2vw, 1.5rem);
//           color: #57534e;
//           font-weight: 300;
//           margin-bottom: 3rem;
//           line-height: 1.6;
//         }

//         .hero-image {
//           position: relative;
//           border-radius: 30px;
//           overflow: hidden;
//           box-shadow: 0 40px 100px rgba(28, 25, 23, 0.15);
//         }

//         .hero-image img {
//           width: 100%;
//           height: 500px;
//           object-fit: cover;
//           display: block;
//         }

//         /* Values Section */
//         .values-section {
//           padding: 120px 24px;
//           background: white;
//           position: relative;
//         }

//         .values-container {
//           max-width: 1400px;
//           margin: 0 auto;
//         }

//         .values-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
//           gap: 60px;
//         }

//         .value-card {
//           position: relative;
//           padding: 0;
//           background: transparent;
//         }

//         .value-icon {
//           width: 80px;
//           height: 80px;
//           background: linear-gradient(135deg, #1c1917 0%, #57534e 100%);
//           border-radius: 20px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           margin-bottom: 2rem;
//           box-shadow: 0 15px 35px rgba(28, 25, 23, 0.2);
//         }

//         .value-title {
//           font-family: 'Jost', sans-serif;
//           font-size: 2rem;
//           font-weight: 400;
//           color: #1c1917;
//           margin-bottom: 1rem;
//           display: flex;
//           align-items: center;
//           gap: 1rem;
//         }

//         .value-text {
//           font-family: 'Jost', sans-serif;
//           color: #57534e;
//           font-size: 1.1rem;
//           line-height: 1.8;
//           font-weight: 300;
//         }

//         .value-text strong {
//           color: #1c1917;
//           font-weight: 600;
//           font-family: 'Jost', sans-serif;
//         }

//         /* Services Section */
//         .services-section {
//           padding: 120px 24px;
//           background: #f5f5f4;
//         }

//         .services-container {
//           max-width: 1400px;
//           margin: 0 auto;
//         }

//         .services-title {
//           font-family: 'Jost', sans-serif;
//           font-size: clamp(2.5rem, 5vw, 3.5rem);
//           font-weight: 300;
//           color: #1c1917;
//           margin-bottom: 4rem;
//           text-align: center;
//         }

//         .services-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//           gap: 25px;
//         }

//         .service-card {
//           background: white;
//           border-radius: 15px;
//           padding: 25px 20px;
//           text-align: center;
//           box-shadow: 0 8px 20px rgba(28, 25, 23, 0.08);
//           transition: all 0.3s ease;
//           position: relative;
//           overflow: hidden;
//         }

//         .service-card::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           height: 4px;
//           background: linear-gradient(90deg, #1c1917, #57534e);
//         }

//         .service-card:hover {
//           transform: translateY(-3px);
//           box-shadow: 0 15px 30px rgba(28, 25, 23, 0.12);
//         }

//         .service-icon {
//           width: 50px;
//           height: 50px;
//           background: linear-gradient(135deg, #1c1917 0%, #57534e 100%);
//           border-radius: 12px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           margin: 0 auto 1rem;
//           box-shadow: 0 6px 15px rgba(28, 25, 23, 0.2);
//         }

//         .service-title {
//           font-family: 'Jost', sans-serif;
//           font-size: 1.2rem;
//           font-weight: 500;
//           color: #1c1917;
//           margin-bottom: 0.8rem;
//         }

//         .service-description {
//           font-family: 'Jost', sans-serif;
//           color: #57534e;
//           font-size: 0.9rem;
//           line-height: 1.5;
//           font-weight: 300;
//         }

//         /* Tagline Section */
//         .tagline-section {
//           padding: 100px 24px;
//           background: #f5f5f4;
//           color: #1c1917;
//           text-align: center;
//           position: relative;
//           overflow: hidden;
//         }

//         .tagline-section::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23000000" fill-opacity="0.05"><circle cx="30" cy="30" r="2"/></g></svg>');
//           pointer-events: none;
//         }

//         .tagline-content {
//           max-width: 800px;
//           margin: 0 auto;
//           position: relative;
//           z-index: 2;
//         }

//         .main-tagline {
//           font-family: 'Jost', sans-serif;
//           font-size: clamp(2.5rem, 5vw, 4rem);
//           font-weight: 300;
//           margin-bottom: 2rem;
//           line-height: 1.2;
//         }

//         .tagline-subtext {
//           font-family: 'Jost', sans-serif;
//           font-size: 1.3rem;
//           opacity: 0.8;
//           font-weight: 300;
//           margin-bottom: 3rem;
//         }

//         .studio-quote {
//           font-family: 'Jost', sans-serif;
//           font-size: 1.4rem;
//           font-style: italic;
//           font-weight: 300;
//           line-height: 1.6;
//           padding: 2rem;
//           border: 2px solid rgba(28, 25, 23, 0.2);
//           border-radius: 20px;
//           background: rgba(255, 255, 255, 0.3);
//           backdrop-filter: blur(10px);
//         }

//         /* Team Section */
//         .team-section {
//           padding: 120px 24px;
//           background: white;
//         }

//         .team-container {
//           max-width: 1400px;
//           margin: 0 auto;
//         }

//         .team-title {
//           font-family: 'Jost', sans-serif;
//           font-size: clamp(2.5rem, 5vw, 3.5rem);
//           font-weight: 300;
//           color: #1c1917;
//           margin-bottom: 4rem;
//           text-align: center;
//         }

//         .team-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
//           gap: 50px;
//         }

//         .team-card {
//           background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
//           border-radius: 30px;
//           padding: 0;
//           overflow: hidden;
//           box-shadow: 0 20px 50px rgba(28, 25, 23, 0.08);
//           position: relative;
//           cursor: pointer;
//           transition: all 0.4s ease;
//         }

//         .team-card:hover {
//           transform: translateY(-10px);
//           box-shadow: 0 30px 70px rgba(28, 25, 23, 0.15);
//         }

//         .team-card::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           height: 5px;
//           background: linear-gradient(90deg, #1c1917, #57534e);
//         }

//         .team-image {
//           width: 100%;
//           height: 350px;
//           background-size: cover;
//           background-position: center;
//           background-color: #e5e5e5;
//           position: relative;
//           overflow: hidden;
//         }

//         .team-image::after {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: rgba(28, 25, 23, 0);
//           transition: all 0.3s ease;
//         }

//         .team-card:hover .team-image::after {
//           background: rgba(28, 25, 23, 0.1);
//         }

//         .team-content {
//           padding: 40px;
//           position: relative;
//           background: white;
//           transition: all 0.4s ease;
//         }

//         .team-name {
//           font-family: 'Jost', sans-serif;
//           font-size: 1.8rem;
//           font-weight: 400;
//           color: #1c1917;
//           margin-bottom: 0.5rem;
//         }

//         .team-position {
//           font-family: 'Jost', sans-serif;
//           color: #57534e;
//           font-size: 1rem;
//           font-weight: 500;
//           margin-bottom: 1.5rem;
//           text-transform: uppercase;
//           letter-spacing: 0.5px;
//         }

//         /* UPDATED: Quote styles for ALL screen sizes - hidden by default */
//         .team-quote {
//           font-family: 'Jost', sans-serif;
//           color: #78716c;
//           font-style: italic;
//           font-size: 1rem;
//           line-height: 1.6;
//           font-weight: 300;
//           opacity: 0;
//           max-height: 0;
//           overflow: hidden;
//           transition: all 0.4s ease;
//         }

//         /* Show quote on hover or when clicked (for all screen sizes) */
//         .team-card.show-quote .team-quote,
//         .team-card:hover .team-quote {
//           opacity: 1;
//           max-height: 200px;
//           margin-top: 1rem;
//         }

//         .team-card.show-quote .team-content,
//         .team-card:hover .team-content {
//           padding-bottom: 50px;
//         }

//         /* Quote indicator - visible on all screen sizes */
//         .quote-indicator {
//           position: absolute;
//           bottom: 15px;
//           right: 20px;
//           width: 30px;
//           height: 30px;
//           background: linear-gradient(135deg, #1c1917 0%, #57534e 100%);
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           opacity: 0;
//           transform: translateY(10px);
//           transition: all 0.3s ease;
//           pointer-events: none;
//         }

//         .team-card:hover .quote-indicator,
//         .team-card.show-quote .quote-indicator {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .quote-indicator::after {
//           content: '"';
//           color: white;
//           font-size: 16px;
//           font-weight: bold;
//           font-family: 'Jost', sans-serif;
//         }

//         /* Member Detail View */
//         .member-detail-container {
//           min-height: 100vh;
//           background: linear-gradient(135deg, #faf7f0 0%, #f5f2ea 100%);
//           padding: 80px 24px;
//         }

//         .member-detail-content {
//           max-width: 1400px;
//           margin: 0 auto;
//         }

//         .back-button {
//           display: inline-flex;
//           align-items: center;
//           gap: 12px;
//           background: linear-gradient(135deg, #1c1917 0%, #292524 100%);
//           color: white;
//           padding: 15px 30px;
//           border: none;
//           border-radius: 50px;
//           cursor: pointer;
//           font-size: 16px;
//           font-weight: 500;
//           font-family: 'Jost', sans-serif;
//           transition: all 0.3s ease;
//           margin-bottom: 60px;
//           box-shadow: 0 10px 30px rgba(28, 25, 23, 0.2);
//         }

//         .back-button:hover {
//           transform: translateY(-3px);
//           box-shadow: 0 20px 40px rgba(28, 25, 23, 0.3);
//         }

//         .member-detail-grid {
//           display: grid;
//           grid-template-columns: 500px 1fr;
//           gap: 100px;
//           align-items: start;
//         }

//         .member-image-large {
//           width: 100%;
//           height: 600px;
//           background-size: cover;
//           background-position: center;
//           border-radius: 30px;
//           box-shadow: 0 40px 100px rgba(28, 25, 23, 0.15);
//           background-color: #e5e5e5;
//         }

//         .member-info {
//           padding-top: 40px;
//         }

//         .member-name-large {
//           font-family: 'Jost', sans-serif;
//           font-size: clamp(3rem, 5vw, 4rem);
//           font-weight: 300;
//           color: #1c1917;
//           margin-bottom: 1rem;
//           line-height: 1.1;
//         }

//         .member-position-large {
//           font-family: 'Jost', sans-serif;
//           font-size: 1.3rem;
//           color: #57534e;
//           font-weight: 400;
//           margin-bottom: 3rem;
//           text-transform: uppercase;
//           letter-spacing: 1px;
//         }

//         .member-bio-large {
//           font-family: 'Jost', sans-serif;
//           color: #57534e;
//           font-size: 1.1rem;
//           line-height: 1.8;
//           font-weight: 300;
//           white-space: pre-line;
//           margin-bottom: 3rem;
//         }

//         .member-quote-large {
//           font-family: 'Jost', sans-serif;
//           font-size: 1.3rem;
//           font-style: italic;
//           color: #1c1917;
//           padding: 30px;
//           background: white;
//           border-radius: 20px;
//           border-left: 5px solid #1c1917;
//           box-shadow: 0 20px 50px rgba(28, 25, 23, 0.08);
//           line-height: 1.6;
//         }

//         /* Responsive Design */
//         @media (max-width: 1024px) {
//           .hero-content {
//             grid-template-columns: 1fr;
//             gap: 60px;
//             text-align: center;
//           }

//           .hero-text {
//             padding-right: 0;
//           }

//           .values-grid {
//             grid-template-columns: 1fr;
//             gap: 40px;
//           }

//           .member-detail-grid {
//             grid-template-columns: 1fr;
//             gap: 50px;
//           }

//           .services-grid {
//             grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//           }
//         }

//         @media (max-width: 768px) {
//           .hero-section {
//             padding: 80px 16px 0;
//           }

//           .values-section,
//           .services-section,
//           .team-section {
//             padding: 80px 16px;
//           }

//           .tagline-section {
//             padding: 80px 16px;
//           }

//           .team-grid {
//             grid-template-columns: 1fr;
//             gap: 30px;
//           }

//           .team-card {
//             margin: 0 auto;
//             max-width: 400px;
//           }

//           .member-detail-container {
//             padding: 60px 16px;
//           }

//           .back-button {
//             margin-bottom: 40px;
//           }

//           /* Mobile fix for values section - horizontal layout */
//           .value-card {
//             display: flex;
//             align-items: flex-start;
//             gap: 20px;
//             text-align: left;
//           }

//           .value-icon {
//             flex-shrink: 0;
//             margin-bottom: 0;
//             width: 60px;
//             height: 60px;
//           }

//           .value-content {
//             flex: 1;
//           }

//           .value-title {
//             font-size: 1.5rem;
//             margin-bottom: 0.8rem;
//             gap: 0;
//           }

//           .value-text {
//             font-size: 1rem;
//           }

//           .services-grid {
//             grid-template-columns: 1fr;
//             gap: 25px;
//           }

//           /* Additional mobile touch-friendly styles */
//           .team-card {
//             /* Add a subtle hint that cards are interactive */
//             position: relative;
//           }
          
//           .team-card::after {
//             content: 'Tap to view quote';
//             position: absolute;
//             bottom: 20px;
//             left: 20px;
//             font-size: 0.8rem;
//             color: #78716c;
//             opacity: 0.7;
//             font-style: italic;
//             font-family: 'Jost', sans-serif;
//             pointer-events: none;
//           }
          
//           .team-card.show-quote::after {
//             display: none;
//           }
//         }
//       `}</style>
//     </div>
//   );

//   return currentView === 'main' ? renderMainView() : renderMemberDetail();
// }

// export default AboutPage;


import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import "./about.css";

import HeroSection from "./HeroSection";
import ValuesSection from "./ValuesSection";
import TeamSection from "./TeamSection";
import ServicesSection from "./ServicesSection";
import MemberDetailView from "./MemberDetailView";

function AboutPage() {
  const [currentView, setCurrentView] = useState("main");
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: "shounak",
      name: "Ar. Shounak Joshi",
      position: "Client Relation & Execution Head",
      image: "https://ik.imagekit.io/2ssa5wpda/paperspace/about/Shounak.webp?updatedAt=1764268201734",
      quote:
        '"For me, architecture begins with understanding people. Translating a client\'s vision into built form is where our journey truly begins."',
    },
    {
      id: "pratik",
      name: "Ar. Pratik Bhende",
      position: "Design Head",
      image: "https://ik.imagekit.io/2ssa5wpda/paperspace/about/Pratik.webp?updatedAt=1764268201882",
      quote:
        '"Design is more than aesthetics; it\'s about purpose, context, and experience. I believe in crafting spaces that speak to the soul."',
    },
    {
      id: "sushant",
      name: "Ar. Sushant Bhujbal",
      position: "Execution, Legal & Liasoning Head",
      image: "https://ik.imagekit.io/2ssa5wpda/paperspace/about/Sushant.webp?updatedAt=1764268201776",
      quote:
        '"Bridging the gap between vision and reality requires not just design, but precision, process, and policy. I ensure ideas stand on solid ground."',
    },
  ];

  const handleTeamMemberClick = (member) => {
    setSelectedMember(selectedMember?.id === member.id ? null : member);
  };

  return currentView === "main" ? (
    <div className="about-container">

      <HeroSection CollabAbout="https://ik.imagekit.io/2ssa5wpda/paperspace/about/CollabAbout.webp?updatedAt=1764268201851" />

      <ValuesSection />

      <section className="tagline-section">
        <div className="tagline-content">
          <h2 className="main-tagline">
            Precision on Paper. <br /> Power in Space.
          </h2>
          <p className="tagline-subtext">
            A philosophy we live by. A promise we build with.
          </p>
          <div className="studio-quote">
            "At Studio PaperSpace, we design with intent, build with integrity,
            and collaborate with passion. Every line we draw shapes a story
            worth telling."
          </div>
        </div>
      </section>

      <TeamSection
        teamMembers={teamMembers}
        selectedMember={selectedMember}
        onMemberClick={handleTeamMemberClick}
        onOpenDetail={() => setCurrentView("detail")}
      />

      <ServicesSection />

    </div>
  ) : (
    <MemberDetailView
      selectedMember={selectedMember}
      onBack={() => {
        setCurrentView("main");
        setSelectedMember(null);
      }}
    />
  );
}

export default AboutPage;
