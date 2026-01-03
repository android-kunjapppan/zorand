import React from 'react';
import ServiceCard from './ServiceCard';
import './Services.scss';

const servicesData = [
  { icon: '🎯', title: 'PPC Advertising', text: 'Maximize ROI with targeted campaigns.' },
  { icon: '🔍', title: 'SEO Optimization', text: 'Boost rankings and organic traffic.' },
  { icon: '💬', title: 'Social Media', text: 'Engage your audience and build a strong brand.' },
  { icon: '🎨', title: 'Content Creation', text: 'Compelling content that drives engagement.' },
  { icon: '📈', title: 'Growth Strategy', text: 'Strategies designed to scale exponentially.' },
  { icon: '📊', title: 'Analytics', text: 'Data‑driven insights to optimize performance.' },
];

const Services = () => {
  return (
    <section id="services" className="services section-padding">
      <div className="max-width">
        <h2>Everything You Need <span>To Dominate Digital</span></h2>
        <p className="subtitle">Comprehensive marketing solutions designed to elevate your brand and crush your goals.</p>

        <div className="service-grid">
          {servicesData.map((s, i) => (
            <ServiceCard key={i} index={i} {...s} />
          ))}
        </div>

        <p className="cta-text">Can't find what you're looking for?</p>
        <a className="btn cta-btn" href="#contact">Let's Create a Custom Solution</a>
      </div>
    </section>
  );
};

export default Services;