import { Eye, Target, Lightbulb } from "lucide-react";

function ValuesSection() {
  return (
    <section className="values-section">
      <div className="values-container">
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">
              <Eye size={32} color="white" />
            </div>
            <div className="value-content">
              <h3 className="value-title">Vision</h3>
              <p className="value-text">
                To shape meaningful, timeless spaces that seamlessly blend design innovation, functional clarity, and contextual relevance—making architecture a catalyst for better living and lasting impact.
              </p>
            </div>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <Target size={32} color="white" />
            </div>
            <div className="value-content">
              <h3 className="value-title">Mission</h3>
              <p className="value-text">
                At Studio Paper Space, we aim to design thoughtful spaces that are functional, beautiful, and built to last. We work closely with our clients, combining creative ideas with practical solutions, and ensure every project is delivered with clarity, care, and precision.
              </p>
            </div>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <Lightbulb size={32} color="white" />
            </div>
            <div className="value-content">
              <h3 className="value-title">Ideology</h3>
              <p className="value-text">
               We believe that <strong>Design is dialogue </strong> – between ideas, users, environment, and culture. <strong>Execution is expression</strong> – where discipline and detail bring design to life. <strong>Every space holds power</strong> – when shaped with intention, sensitivity, and precision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ValuesSection;
