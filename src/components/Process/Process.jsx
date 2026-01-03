import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import './Process.scss';

const Step = ({ title, desc }) => {
  const [ref, isInView] = useIntersectionObserver();
  return (
    <div ref={ref} className={`step fade-in-section ${isInView ? 'in-view' : ''}`}>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
};

const Process = () => {
  return (
    <section id="process" className="section-padding">
      <div className="process-inner max-width">
        <div>
          <h2>How We Work Our Magic</h2>
          <p style={{ color: 'var(--text-muted)' }}>A proven methodology that delivers extraordinary results every time.</p>
        </div>
        <div>
          <Step title="Step 1 – Discovery" desc="Understanding your brand and goals." />
          <Step title="Step 2 – Launch" desc="Executing with precision." />
          <Step title="Step 3 – Optimize" desc="Continuous improvements." />
          <Step title="Step 4 – Scale" desc="Expand what works." />
        </div>
      </div>
    </section>
  );
};

export default Process;