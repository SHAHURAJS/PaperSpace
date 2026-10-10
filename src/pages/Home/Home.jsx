
import React, { useState, useEffect } from 'react';
import './home.css';

import PaperSpaceHome2 from '../../assets/home/PaperSpaceHome2.mp4';

import HeroSection from './components/HeroSection';
import CarouselSection from './components/CarouselSection';
import ServicesSection from './components/ServicesSection';

function HomePage({ onNavigate }) {
  const [activeProperty, setActiveProperty] = useState(0);

  const properties = [
    {
      title: "Vistara Yeravale",
      subtitle: "Hospitality",
      description: "Set against a scenic mountain backdrop, this wedding destination offers a complete experience with grand halls, dining spaces, guest cottages, and landscaped areas.",
      image: "https://ik.imagekit.io/2ssa5wpda/paperspace/awa/AWA1.webp?updatedAt=1764268202024",
      year: "2024",
      location: "Satara",
      slug: "weddingavenue"
    },
    {
      title: "TriAxis Commercial",
      subtitle: "Commercial",
      description: "A unified commercial development in Pune, combining contemporary architecture, intelligent planning, efficient circulation, and a distinctive urban presence for Anadi Anant & PBA PMC.",
      image: "https://ik.imagekit.io/j6tljyacz/continental/continent2%20(1).mp4",
      year: "2026",
      location: "Pune",
      slug: "triaxis"
    },
    {
      title: "सहवास",
      subtitle: "Bunglow",
      description: "Contemporary architecture with clean geometry, refined materials, spacious balconies, naturally lit interiors, and elegant outdoor living spaces.",
      image: "https://ik.imagekit.io/2ssa5wpda/paperspace/archb/AB1.webp?updatedAt=1764268201945",
      year: "2025",
      location: "Pune",
      slug: "arch-apex-residence"
    },
    {
      title: "Vishwakarma Co-operative",
      subtitle: "Residential",
      description: "Conceptual master planning for a 6-acre redevelopment, integrating site utilization, building configuration, circulation, feasibility representation, and architectural presentation.",
      image: "https://ik.imagekit.io/j6tljyacz/vishwakarma/vishwakarma_walkthrough.mp4",
      year: "2026",
      location: "Pune",
      slug: "vishwakarma"
    },
    {
      title: "Revive 47",
      subtitle: "Commercial - Interior",
      description: "Renovation of a 1947 stone heritage building into a four-storey commercial space, blending historic character with contemporary architecture and functional interiors.",
      image: "https://ik.imagekit.io/2ssa5wpda/paperspace/shivjayanti/Jayanti1.webp?updatedAt=1764268201915",
      year: "2026",
      location: "Karad",
      slug: "revive-47"
    },
    {
      title: "The Calm House",
      subtitle: "Residential - Interior",
      description: "Contemporary 3 BHK residence in Baner, Pune, featuring elegant interiors, thoughtful lighting, refined finishes, and functional design with warm ambience.",
      image: "https://ik.imagekit.io/2ssa5wpda/paperspace/shivjayanti/Jayanti1.webp?updatedAt=1764268201915",
      year: "2026",
      location: "Pune",
      slug: "the-calm-house"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProperty(prev => (prev + 1) % properties.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [properties.length]);

  return (
    <>
      <HeroSection onNavigate={onNavigate} video={PaperSpaceHome2} />
      <CarouselSection 
        properties={properties} 
        activeProperty={activeProperty} 
        setActiveProperty={setActiveProperty} 
        onNavigate={onNavigate}
      />
      <ServicesSection />
    </>
  );
}

export default HomePage;
