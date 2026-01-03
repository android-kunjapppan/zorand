import React, { useRef, useState, useEffect } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const ServiceCard = ({ icon, title, text, index }) => {
  const cardRef = useRef(null);
  const isOdd = (index + 1) % 2 !== 0;
  const [ref, isInView] = useIntersectionObserver();

  const handleMouseEnter = () => {
    const card = cardRef.current;
    if (!card) return;

    card.classList.add('hovering');
    
    // Remove old classes
    card.classList.remove('arc-out-odd', 'arc-out-even', 'arc-in-odd', 'arc-in-even');
    
    // Add new animation class
    card.classList.add(isOdd ? 'arc-in-odd' : 'arc-in-even');
    card.style.setProperty('--rot', '0deg');

    // Cleanup helper
    const onInEnd = () => {
      card.classList.remove('arc-in-odd', 'arc-in-even');
      card.removeEventListener('animationend', onInEnd);
    };
    card.addEventListener('animationend', onInEnd, { once: true });
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    card.classList.remove('hovering');
    card.style.setProperty('--rot', isOdd ? '-3deg' : '3deg');

    card.classList.remove('arc-in-odd', 'arc-in-even', 'arc-out-odd', 'arc-out-even');
    const outClass = isOdd ? 'arc-out-odd' : 'arc-out-even';
    card.classList.add(outClass);

    const onOutEnd = () => {
      card.classList.remove(outClass);
      card.removeEventListener('animationend', onOutEnd);
    };
    card.addEventListener('animationend', onOutEnd, { once: true });
  };

  return (
    <div 
      ref={(el) => {
        ref(el);
        cardRef.current = el;
      }}
      className={`service-card ${isOdd ? 'odd' : 'even'} fade-in-section ${isInView ? 'in-view' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default ServiceCard;