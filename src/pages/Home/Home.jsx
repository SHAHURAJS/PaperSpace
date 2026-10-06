
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
      location: "Maharashtra",
      slug: "weddingavenue"
    },
    {
      title: "Shendge Residence",
      subtitle: "Interior",
      description: "Modern, cozy, and practical home design featuring smart storage, convertible dining areas, and wooden finishes that make compact spaces feel spacious and warm.",
      image: "https://ik.imagekit.io/2ssa5wpda/paperspace/1.5bhk/BHK1.webp?updatedAt=1764268201587",
      year: "2024",
      location: "Mumbai",
      slug: "int-1-5-bhk"
    },
    {
      title: "Kadam's Retreat",
      subtitle: "Architecture",
      description: "Elegant bungalow reflecting simplicity and sophistication with clean lines, natural textures, and green planters that blend architecture with nature.",
      image: "https://ik.imagekit.io/2ssa5wpda/paperspace/archb/AB1.webp?updatedAt=1764268201945",
      year: "2023",
      location: "Lonavala",
      slug: "arch-bungalow"
    },
    {
      title: "Konha's Villa",
      subtitle: "Architecture",
      description: "Classical elegance meets modern sophistication with tall windows, detailed columns, and a breathtaking double-height lobby featuring a sweeping staircase.",
      image: "https://ik.imagekit.io/2ssa5wpda/paperspace/db/DB1.webp?updatedAt=1764268201991",
      year: "2022",
      location: "Pune",
      slug: "doctor-bungalow"
    },
    {
      title: "Ek Gaon Ek Shivjayanti",
      subtitle: "Urban",
      description: "Thoughtful balance between tradition and functionality with ornate arches, carved columns, and cultural significance for community gatherings and seminars.",
      image: "https://ik.imagekit.io/2ssa5wpda/paperspace/shivjayanti/Jayanti1.webp?updatedAt=1764268201915",
      year: "2023",
      location: "Rural Maharashtra",
      slug: "int-ek-gaon-ek-shivjayanti"
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
