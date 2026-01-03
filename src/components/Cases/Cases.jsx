import React from 'react';
import CaseCard from './CaseCard';
import './Cases.scss';

const Cases = () => {
  return (
    <section id="work" className="cases section-padding">
      <div className="max-width" style={{ textAlign: 'center' }}>
        <h2>Success Stories That <span style={{color: 'var(--orange)'}}>Speak Volumes</span></h2>
        <div className="case-grid">
          <CaseCard index={0} img="https://picsum.photos/600/400?1" title="E‑Commerce Growth" stat="Revenue +340%" />
          <CaseCard index={1} img="https://picsum.photos/600/400?2" title="Social Media" stat="Reach 2M+" />
          <CaseCard index={2} img="https://picsum.photos/600/400?3" title="Brand Reposition" stat="Engagement +180%" />
        </div>
      </div>
    </section>
  );
};

export default Cases;