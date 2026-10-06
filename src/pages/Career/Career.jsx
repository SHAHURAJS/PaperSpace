import { Mail, MessageCircle } from "lucide-react";
import CareerHeader from "./components/CareerHeader";
import WhyJoinSection from "./components/WhyJoinSection";
import ContactSection from "./components/ContactSection";

function CareerPage() {
  const styles = {
    container: {
      minHeight: 'calc(100vh - 200px)',
      background: '#f5f5f4',
      padding: '120px 24px 80px',
      fontFamily: 'Jost, sans-serif'
    },
    maxWidth: {
      maxWidth: '1000px',
      margin: '0 auto',
      textAlign: 'center'
    }
  };

  const addHoverEffects = () => {
    return `
      @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&display=swap');
      
      * {
        font-family: 'Jost', sans-serif !important;
      }
      
      .contact-button:hover {
        transform: translateY(-3px);
        box-shadow: 0 20px 40px rgba(28, 25, 23, 0.3) !important;
      }
      
      .why-join-item:hover {
        background: rgba(28, 25, 23, 0.05) !important;
        transform: translateX(5px);
      }
      
      @media (max-width: 768px) {
        .contact-buttons {
          flex-direction: column !important;
          align-items: center !important;
        }
        
        .contact-button {
          width: 100% !important;
          max-width: 280px !important;
        }
        
        .why-join-list {
          text-align: center !important;
        }
        
        .why-join-item {
          text-align: left !important;
        }
      }
    `;
  };

  return (
    <>
      <style>{addHoverEffects()}</style>

      <div style={styles.container}>
        <div style={styles.maxWidth}>
          <CareerHeader />
          <WhyJoinSection />
          <ContactSection Mail={Mail} MessageCircle={MessageCircle} />
        </div>
      </div>
    </>
  );
}

export default CareerPage;
