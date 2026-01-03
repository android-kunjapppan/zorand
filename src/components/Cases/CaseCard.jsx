import React, { useRef } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const CaseCard = ({ img, title, stat, index }) => {
  const cardRef = useRef(null);
  const isOdd = (index + 1) % 2 !== 0;
  const [ref, isInView] = useIntersectionObserver();

  const handleMouseEnter = () => {
    const c = cardRef.current;
    if(!c) return;
    
    c.classList.remove('arc-out-odd', 'arc-out-even', 'arc-in-odd', 'arc-in-even', 'tilted', 'bobbing');
    c.classList.add(isOdd ? 'arc-in-odd' : 'arc-in-even', 'tilted', 'bobbing');
  };

  const handleMouseLeave = () => {
    const c = cardRef.current;
    if(!c) return;

    c.classList.remove('arc-in-odd', 'arc-in-even', 'tilted', 'bobbing');
    const outClass = isOdd ? 'arc-out-odd' : 'arc-out-even';
    c.classList.add(outClass);
    
    const onEnd = () => {
      c.classList.remove(outClass);
      c.removeEventListener('animationend', onEnd);
    };
    c.addEventListener('animationend', onEnd, { once: true });
  };

  return (
    <div
      ref={(el) => {
        ref(el);
        cardRef.current = el;
      }}
      className={`case fade-in-section ${isInView ? 'in-view' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="case-inner">
        <img src={img} alt={title} />
        <div className="case-body">
          <h3>{title}</h3>
          <p>{stat}</p>
        </div>
      </div>
    </div>
  );
};

export default CaseCard;