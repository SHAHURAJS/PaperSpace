import React from 'react';
import { Users, Briefcase } from 'lucide-react';

function ServicesSection() {
  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">
          Why Choose StudioPaperSpace
        </h2>

        <div className="services-grid">
          <div className="service-item">
            <div className="service-icon">
              <Users size={40} />
            </div>
            <h3 className="service-title">Expert Team</h3>
            <p className="service-description">
              Our team of experienced architects and designers brings creativity, technical expertise, and passion to every project we undertake.
            </p>
          </div>

          <div className="service-item">
            <div className="service-icon">
              <Briefcase size={40} />
            </div>
            <h3 className="service-title">Full-Service Solutions</h3>
            <p className="service-description">
              From initial concept to final completion, we provide comprehensive architectural and design services tailored to your vision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
