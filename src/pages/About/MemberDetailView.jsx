import { ArrowLeft } from "lucide-react";

function MemberDetailView({ selectedMember, onBack }) {
  return (
    <div className="member-detail-container">
      <div className="member-detail-content">
        <button className="back-button" onClick={onBack}>
          <ArrowLeft size={20} />
          Back to About
        </button>

        <div className="member-detail-grid">
          <div
            className="member-image-large"
            style={{ backgroundImage: `url(${selectedMember?.image})` }}
          />

          <div className="member-info">
            <h1 className="member-name-large">{selectedMember?.name}</h1>
            <p className="member-position-large">{selectedMember?.position}</p>
            <div className="member-quote-large">{selectedMember?.quote}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberDetailView;
