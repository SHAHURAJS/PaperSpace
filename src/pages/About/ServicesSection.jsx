import { Home, Palette, Hammer, FileCheck, TreePine } from "lucide-react";

function ServicesSection() {
  const services = [
    { icon: <Home size={24} color="white" />, title: "Architecture", description: "Creative designs blending function with timeless aesthetics." },
    { icon: <Palette size={24} color="white" />, title: "Interior", description: "Personalized interiors crafted for comfort and style." },
    { icon: <Hammer size={24} color="white" />, title: "Construction", description: "Reliable execution ensuring quality and timely delivery." },
    { icon: <FileCheck size={24} color="white" />, title: "Liasoning", description: "Hassle-free approvals with complete regulatory compliance." },
    { icon: <TreePine size={24} color="white" />, title: "Landscape", description: "Beautiful outdoor spaces harmonizing nature and design." },
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
