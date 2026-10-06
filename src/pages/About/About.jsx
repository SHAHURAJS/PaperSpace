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
