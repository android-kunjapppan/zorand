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
          <Step title="Step 1 – Discover & Diagnose" desc="Understand your market, audience, and current performance." />
          <Step title="Step 2 – Tracking & Analytics Foundation" desc="Set up Google analytics, pixels, and conversion tracking for clear attribution." />
          <Step title="Step 3 – Strategy & Growth Blueprint" desc="Define KPIs, channel strategy, budget, and testing plan." />
          <Step title="Step 4 – Build & Launch" desc="Execute PPC, SEO, and social with a scalable structure." />
          <Step title="Step 5 – Content & Creative Engine" desc="Produce high-converting creatives, copy, and posts." />
          <Step title="Step 6 – Optimize & Scale" desc="Weekly improvements, reporting, and scaling what works." />
        </div>
      </div>
    </section>
  );
};

export default Process;