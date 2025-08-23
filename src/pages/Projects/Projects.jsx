import { useState } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import BHK1 from '../../assets/1.5bhk/BHK1.png'
import BHK2 from '../../assets/1.5bhk/BHK2.png'
import BHK3 from '../../assets/1.5bhk/BHK3.png'
import B1 from '../../assets/2bhk/B1.png'
import B2 from '../../assets/2bhk/B2.png'
import B3 from '../../assets/2bhk/B3.png'
import B4 from '../../assets/2bhk/B4.png'
import B5 from '../../assets/2bhk/B5.png'
import B6 from '../../assets/2bhk/B6.png'
import B7 from '../../assets/2bhk/B7.png'
import B8 from '../../assets/2bhk/B8.png'
import B9 from '../../assets/2bhk/B9.png'
import B10 from '../../assets/2bhk/B10.png'
import B11 from '../../assets/2bhk/B11.png'
import B12 from '../../assets/2bhk/B12.png'
import B13 from '../../assets/2bhk/B13.png'
import B14 from '../../assets/2bhk/B14.png'
import B15 from '../../assets/2bhk/B15.png'
import B16 from '../../assets/2bhk/B16.png'
import B17 from '../../assets/2bhk/B17.png'
import B18 from '../../assets/2bhk/B18.png'
import B19 from '../../assets/2bhk/B19.png'
import AB1 from '../../assets/archb/AB1.png'
import AWA1 from '../../assets/awa/AWA1.png'
import AWA2 from '../../assets/awa/AWA2.png'
import AWA3 from '../../assets/awa/AWA3.png'
import AWA4 from '../../assets/awa/AWA4.png'
import AWA5 from '../../assets/awa/AWA5.png'
import AWA6 from '../../assets/awa/AWA6.png'
import AWA7 from '../../assets/awa/AWA7.png'
import DB1 from '../../assets/db/DB1.png'
import DB2 from '../../assets/db/DB2.png'
import Hospital1 from '../../assets/inthospital/Hospital1.png'
import Hospital2 from '../../assets/inthospital/Hospital2.png'
import Hospital3 from '../../assets/inthospital/Hospital3.png'
import Hospital4 from '../../assets/inthospital/Hospital4.png'
import Hospital5 from '../../assets/inthospital/Hospital5.png'
import Hospital6 from '../../assets/inthospital/Hospital6.png'
import Hospital7 from '../../assets/inthospital/Hospital7.png'
import Hospital8 from '../../assets/inthospital/Hospital8.png'
import Jayanti1 from '../../assets/shivjayanti/Jayanti1.png'
import Jayanti2 from '../../assets/shivjayanti/Jayanti2.png'

function ProjectsPage() {
  const [currentView, setCurrentView] = useState('main');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const projects = [
    { 
      id: 1, 
      title: "Wedding Avenue", 
      category: "Hospitality", 
      year: "2024",
      description: `Set against a scenic mountain backdrop, this wedding destination is designed to offer a complete and memorable experience. The venue features a grand indoor hall for 1500 guests, a comfortable indoor dining space for 500, and an open lawn area that can host 1500+ guests.

The layout includes well-appointed cottages for guests and a premium private cottage for the bride and groom, ensuring both luxury and privacy. A swimming pool and beautifully planned landscaped areas add charm, creating perfect spots for photos and peaceful moments.

Designed with a natural slope in mind, the venue blends beautifully with its surroundings—making it an ideal setting for weddings that feel grand, yet close to nature.`,
      media: [
        { type: 'image', src: AWA1, alt: 'Wedding Avenue Exterior' },
        { type: 'image', src: AWA2, alt: 'Grand Indoor Hall' },
        { type: 'image', src: AWA3, alt: 'Indoor Dining Area' },
        { type: 'image', src: AWA4, alt: 'Outdoor Lawn Area' },
        { type: 'image', src: AWA5, alt: 'Guest Cottages' },
        { type: 'image', src: AWA6, alt: 'Private Bride & Groom Cottage' },
        { type: 'image', src: AWA7, alt: 'Swimming Pool & Landscape' }
      ]
    },
    { 
      id: 2, 
      title: "INT 1.5 BHK", 
      category: "Residential Interior", 
      year: "2024",
      description: `This 1.5 BHK home has been designed to feel modern, cozy, and practical. The living room uses soft colors, warm lighting, and comfortable furniture to create a welcoming space for family time. The kitchen is smartly planned with neat storage, a stylish backsplash, and is combined with a compact Pooja ghar that blends beautifully into the design. The dining area is convertible, making it easy to use the space in different ways depending on the need. 

The bedroom is calm and comfortable, with smart storage and soothing décor, while the extra half-room works as a flexible space — perfect for a study, guest corner, or relaxation nook. Wooden finishes, greenery, and simple décor touches run through the whole home, making this compact 1.5 BHK apartment look spacious, functional, and warm.`,
      media: [
        { type: 'image', src: BHK1, alt: 'Living Room' },
        { type: 'image', src: BHK2, alt: 'Kitchen & Pooja Ghar' },
        { type: 'image', src: BHK3, alt: 'Half Room Study Area' }
      ]
    },
    { 
      id: 3, 
      title: "INT 2 BHK", 
      category: "Residential Interior", 
      year: "2024",
      description: `This 2BHK home is designed with a modern yet warm feel, creating a cozy and inviting space. The living room features a soft neutral sofa with a sleek TV unit, keeping the area clean and uncluttered. A simple ceiling design with soft lighting adds a calm glow. The dining area sits right beside, with a compact table and a stylish hanging light, while mirrors or textures on the wall make the space look bigger.

The kitchen continues the modern look with clean lines, smart storage, and fresh finishes that keep it both practical and stylish. The master bedroom focuses on comfort, with a plush headboard, calm neutral tones, and an accent wall for depth. Warm layered lighting makes it a perfect retreat. The second bedroom is versatile, designed to fit a queen or twin beds, with light shades that keep it bright and accents that make it suitable for kids, guests, or study use.

Across the home, furniture is simple and minimal, colors stay soft with gentle contrasts, and the design balances comfort with modern style—resulting in a home that feels elegant, functional, and timeless.`,
      media: [
        { type: 'image', src: B1, alt: 'Living & Dining Area' },
        { type: 'image', src: B2, alt: 'Modern Kitchen' },
        { type: 'image', src: B3, alt: 'Master Bedroom' },
        { type: 'image', src: B4, alt: 'Master Bedroom' },
        { type: 'image', src: B5, alt: 'Master Bedroom' },
        { type: 'image', src: B6, alt: 'Master Bedroom' },
        { type: 'image', src: B7, alt: 'Master Bedroom' },
        { type: 'image', src: B8, alt: 'Master Bedroom' },
        { type: 'image', src: B9, alt: 'Master Bedroom' },
        { type: 'image', src: B10, alt: 'Master Bedroom' },
        { type: 'image', src: B11, alt: 'Master Bedroom' },
        { type: 'image', src: B12, alt: 'Master Bedroom' },
        { type: 'image', src: B13, alt: 'Master Bedroom' },
        { type: 'image', src: B14, alt: 'Master Bedroom' },
        { type: 'image', src: B15, alt: 'Master Bedroom' },
        { type: 'image', src: B16, alt: 'Master Bedroom' },
        { type: 'image', src: B17, alt: 'Master Bedroom' },
        { type: 'image', src: B18, alt: 'Master Bedroom' },
        { type: 'image', src: B19, alt: 'Master Bedroom' },

      ]
    },
    { 
      id: 4, 
      title: "INT Clinic (Hospital)", 
      category: "Healthcare Interior", 
      year: "2023",
      description: `This clinic interior design project blends modern elegance with a calm, welcoming atmosphere. The reception is styled with a marble-finished desk and warm wooden accents, creating a professional yet inviting first impression. Neutral tones, soft Roman blinds, and abundant natural light enhance the sense of comfort, while seating combines upholstered benches and sleek chairs for patient ease. Thoughtful greenery and subtle décor elements add freshness and warmth.

A dedicated doctor's relaxation room provides a private retreat, designed with cozy lounge seating, soothing teal cabinetry, and natural accents that encourage rest between consultations. Across the clinic, textures of wood, marble, and fabric are balanced with soft lighting to create harmony. The result is a seamless, modern space that feels professional, comfortable, and healing.`,
      media: [
        { type: 'image', src: Hospital1, alt: 'Reception Area' },
        { type: 'image', src: Hospital2, alt: 'Waiting Area' },
        { type: 'image', src: Hospital3, alt: 'Doctor Relaxation Room' },
        { type: 'image', src: Hospital4, alt: 'Treatment Rooms' },
        { type: 'image', src: Hospital5, alt: 'Corridor View' },
        { type: 'image', src: Hospital6, alt: 'Reception Details' },
        { type: 'image', src: Hospital7, alt: 'Waiting Area Details' },
        { type: 'image', src: Hospital8, alt: 'Relaxation Room Details' }
      ]
    },
    { 
      id: 5, 
      title: "Arch Bungalow", 
      category: "Residential Architecture", 
      year: "2023",
      description: `This bungalow designed by our studio reflects a balance of simplicity and elegance. The clean, straight lines of the façade are softened with natural tones and textures, creating a warm and welcoming appearance. Large windows allow light to pour in, giving every space an airy and open feeling. Vertical wooden textures add depth to the design, while soft beige tones complement the natural surroundings. 

Each floor is framed with green planters, blending architecture with nature and bringing freshness to the overall look. The balconies provide cozy outdoor corners that connect the indoors to the landscape. Subtle details in the façade add character without overwhelming the design. The ground level maintains a strong, secure base, with patterned gates enhancing the entrance. The proportions are carefully balanced, making the structure feel modern yet timeless. With greenery flowing across the layers, the home feels alive and vibrant. The flat roofline adds to the contemporary style, while keeping the focus on simplicity. This design is both functional and beautiful, reflecting comfort in its true sense. It merges natural charm with modern design language, creating a home that feels stylish yet rooted.`,
      media: [
        { type: 'image', src:AB1, alt: 'Front Elevation' }
      ]
    },
    { 
      id: 6, 
      title: "Doctor Bungalow", 
      category: "Residential Architecture", 
      year: "2022",
      description: `This bungalow is a fine blend of classical elegance and modern sophistication. The exterior carries a timeless charm with tall windows, detailed columns, and graceful balconies that give the home a royal character. Its soft white façade contrasts beautifully with the dark window frames, while the sloping tiled roof adds a subtle traditional touch. The structure feels grand yet balanced, inviting yet private. Large windows flood the interiors with natural light, making the spaces warm and alive throughout the day.

Inside, the home opens into a breathtaking double-height lobby, where a sweeping staircase becomes the central highlight. The staircase, with its delicate wrought iron railing, curves upwards like a piece of art, complemented by the expansive glass wall that frames the outdoors. Natural light plays across the marble flooring, adding depth and elegance to the space. A grand piano and curated artworks enrich the atmosphere, making the interior both luxurious and soulful. The design combines scale with detail, where every corner feels refined and every element has a purpose. This bungalow celebrates both grandeur and comfort, creating a home that is as impressive as it is welcoming.`,
      media: [
        { type: 'image', src: DB1, alt: 'Classical Exterior' },
        { type: 'image', src: DB2, alt: 'Double-Height Lobby' }
      ]
    },
    { 
      id: 7, 
      title: "INT Ek Gaon Ek Shivjayanti", 
      category: "Cultural Interior", 
      year: "2023",
      description: `This interior was designed as a thoughtful balance between tradition and functionality. The space carries a cultural essence with its ornate arches, carved columns, and a central backdrop that proudly highlights the grand image of Chhatrapati Shivaji Maharaj as the main focal point. Warm wooden tones and soft lighting create a welcoming and dignified atmosphere, while the seating arrangement is planned for meaningful conversations and gatherings. The chandeliers above add a touch of elegance, blending modern lighting with classic charm. Large windows allow natural light to flow in, ensuring the space remains bright and connected to its surroundings.

More than just a meeting room, this hall holds cultural significance—it is a place where the local Gram Panchayat officials can host meetings, discussions, and cultural seminars. The project reflects how architecture can become a bridge between community needs and design sensibilities. It stands as an example of collaboration between architects and local authorities, creating a space that is not only functional but also rooted in cultural pride. The design nurtures dialogue, respect, and connection—making it both timeless and purposeful.`,
      media: [
        { type: 'image', src: Jayanti1, alt: 'Cultural Hall Overview' },
        { type: 'image', src: Jayanti2, alt: 'Chhatrapati Shivaji Maharaj Backdrop' }
      ]
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
    sectionTitle: {
      fontSize: '56px',
      fontWeight: '200',
      color: '#1e293b',
      marginBottom: '48px',
      textAlign: 'center',
      letterSpacing: '-0.02em',
      fontFamily: '"Playfair Display", serif'
    },
    gridThreeCol: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '40px'
    },
    projectCard: {
      background: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(226, 232, 240, 0.8)',
      borderRadius: '24px',
      overflow: 'hidden',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer'
    },
    projectImage: {
      backgroundColor: '#e2e8f0',
      height: '280px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#64748b',
      fontSize: '16px',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    projectContent: {
      padding: '32px'
    },
    projectTitle: {
      fontSize: '24px',
      fontWeight: '600',
      color: '#1e293b',
      marginBottom: '12px'
    },
    projectMeta: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '16px'
    },
    projectCategory: {
      color: '#64748b',
      fontSize: '14px',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      fontWeight: '500'
    },
    projectYear: {
      color: '#64748b',
      fontSize: '14px',
      fontWeight: '500'
    },
    projectDescription: {
      color: '#475569',
      lineHeight: '1.6',
      fontSize: '16px',
      display: '-webkit-box',
      WebkitLineClamp: 3,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    },
    // Detail View Styles
    detailContainer: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '80px',
      alignItems: 'start'
    },
    mediaContainer: {
      position: 'relative',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)'
    },
    mediaItem: {
      width: '100%',
      height: '500px',
      objectFit: 'cover',
      display: 'block'
    },
    videoContainer: {
      position: 'relative',
      width: '100%',
      height: '500px',
      backgroundColor: '#1e293b',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    },
    playButton: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderRadius: '50%',
      width: '80px',
      height: '80px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
    },
    navButton: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      border: 'none',
      borderRadius: '50%',
      width: '48px',
      height: '48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      transition: 'all 0.2s'
    },
    navButtonLeft: {
      left: '20px'
    },
    navButtonRight: {
      right: '20px'
    },
    mediaIndicators: {
      position: 'absolute',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: '8px'
    },
    indicator: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      cursor: 'pointer',
      transition: 'all 0.2s'
    },
    activeIndicator: {
      backgroundColor: 'white'
    },
    projectInfo: {
      paddingTop: '20px'
    },
    detailTitle: {
      fontSize: '48px',
      fontWeight: '300',
      color: '#1e293b',
      marginBottom: '8px',
      fontFamily: '"Playfair Display", serif'
    },
    detailMeta: {
      display: 'flex',
      gap: '32px',
      marginBottom: '32px'
    },
    detailCategory: {
      color: '#64748b',
      fontSize: '18px',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      fontWeight: '500'
    },
    detailYear: {
      color: '#64748b',
      fontSize: '18px',
      fontWeight: '500'
    },
    detailDescription: {
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
    @media (max-width: 768px) {
      .detail-container { grid-template-columns: 1fr !important; gap: 32px !important; }
      .media-item { height: 300px !important; }
      .video-container { height: 300px !important; }
    }
  `;

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setCurrentView('detail');
    setCurrentMediaIndex(0);
  };

  const handleBackClick = () => {
    setCurrentView('main');
    setSelectedProject(null);
    setCurrentMediaIndex(0);
  };

  const nextMedia = () => {
    setCurrentMediaIndex((prev) => 
      prev === selectedProject.media.length - 1 ? 0 : prev + 1
    );
  };

  const prevMedia = () => {
    setCurrentMediaIndex((prev) => 
      prev === 0 ? selectedProject.media.length - 1 : prev - 1
    );
  };

  const renderMediaCarousel = () => {
    const currentMedia = selectedProject.media[currentMediaIndex];
    
    return (
      <div style={styles.mediaContainer}>
        {currentMedia.type === 'image' ? (
          <img 
            src={currentMedia.src}
            alt={currentMedia.alt}
            style={styles.mediaItem}
          />
        ) : (
          <div style={styles.videoContainer}>
            <img 
              src={currentMedia.thumbnail}
              alt={currentMedia.alt}
              style={styles.mediaItem}
            />
            <div style={styles.playButton}>
              <Play size={32} color="#1e293b" />
            </div>
          </div>
        )}
        
        <button 
          style={{...styles.navButton, ...styles.navButtonLeft}}
          onClick={prevMedia}
          onMouseOver={(e) => e.target.style.backgroundColor = 'white'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'}
        >
          <ChevronLeft size={24} color="#1e293b" />
        </button>
        
        <button 
          style={{...styles.navButton, ...styles.navButtonRight}}
          onClick={nextMedia}
          onMouseOver={(e) => e.target.style.backgroundColor = 'white'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'}
        >
          <ChevronRight size={24} color="#1e293b" />
        </button>
        
        <div style={styles.mediaIndicators}>
          {selectedProject.media.map((_, index) => (
            <div
              key={index}
              style={{
                ...styles.indicator,
                ...(index === currentMediaIndex ? styles.activeIndicator : {})
              }}
              onClick={() => setCurrentMediaIndex(index)}
            />
          ))}
        </div>
      </div>
    );
  };

  const renderProjectDetail = () => (
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
          Back to Projects
        </button>
        
        <div className="detail-container" style={styles.detailContainer}>
          {renderMediaCarousel()}
          
          <div style={styles.projectInfo}>
            <h1 style={styles.detailTitle}>{selectedProject?.title}</h1>
            <div style={styles.detailMeta}>
              <span style={styles.detailCategory}>{selectedProject?.category}</span>
              <span style={styles.detailYear}>{selectedProject?.year}</span>
            </div>
            <p style={styles.detailDescription}>{selectedProject?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMainView = () => (
    <div style={styles.container}>
      <div style={styles.maxWidth}>
        <h1 style={styles.sectionTitle}>Our Projects</h1>
        <div style={styles.gridThreeCol}>
          {projects.map((project) => (
            <div 
              key={project.id} 
              style={styles.projectCard}
              onClick={() => handleProjectClick(project)}
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
                  ...styles.projectImage,
                  backgroundImage: `url(${project.media[0]?.src})`
                }}
              >
                <span>{project.title}</span>
              </div>
              <div style={styles.projectContent}>
                <h3 style={styles.projectTitle}>{project.title}</h3>
                <div style={styles.projectMeta}>
                  <span style={styles.projectCategory}>{project.category}</span>
                  <span style={styles.projectYear}>{project.year}</span>
                </div>
                <p style={styles.projectDescription}>
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <style>{mediaQueries}</style>
      {currentView === 'main' ? renderMainView() : renderProjectDetail()}
    </>
  );
}

export default ProjectsPage;