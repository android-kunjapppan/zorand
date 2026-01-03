import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (options = { threshold: 0.15 }) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options]);

  return [
    (node) => { ref.current = node; }, // callback ref
    isIntersecting
  ];
};

export default useIntersectionObserver;