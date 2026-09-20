import React, { useEffect, useRef, useState } from 'react';

export const ScrollReveal = ({
  children,
  delay = 0,
  duration = 800,
  translateY = 15,
  translateX = 0,
  scale = 1,
  threshold = 0.15,
  style = {},
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold]);

  const transformInitial = scale !== 1
    ? `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`
    : `translate3d(${translateX}px, ${translateY}px, 0)`;

  const transformFinal = 'translate3d(0, 0, 0) scale(1)';

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? transformFinal : transformInitial,
        transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        willChange: 'opacity, transform',
        ...style
      }}
    >
      {children}
    </div>
  );
};
