function TeamSection({ teamMembers, selectedMember, onMemberClick }) {
  return (
    <section className="team-section">
      <div className="team-container">
        <h2 className="team-title">Meet Our Team</h2>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className={`team-card ${
                selectedMember?.id === member.id ? "show-quote" : ""
              }`}
              onClick={() => onMemberClick(member)}
            >
              <div
                className="team-image"
                style={{ backgroundImage: `url(${member.image})` }}
              />
              <div className="team-content">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-position">{member.position}</p>
                <p className="team-quote">{member.quote}</p>
                <div className="quote-indicator"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
