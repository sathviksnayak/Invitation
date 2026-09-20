import React, { useState, useEffect } from 'react';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHomeClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: scrolled ? 'rgba(247, 232, 230, 0.92)' : 'rgba(247, 232, 230, 0.85)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(154, 167, 159, 0.2)',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.05)' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <nav style={{ display: 'flex', gap: '48px', alignItems: 'center' }}>
        <a
          href="#home"
          onClick={handleHomeClick}
          style={{
            fontFamily: "'Alex Brush', 'Dancing Script', cursive",
            fontSize: '28px',
            color: '#9AA79F',
            fontWeight: '700',
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'transform 0.2s ease',
            display: 'inline-block'
          }}
          onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
        >
          Home
        </a>
        <a
          href="#gallery"
          onClick={(e) => e.preventDefault()}
          style={{
            fontFamily: "'Alex Brush', 'Dancing Script', cursive",
            fontSize: '28px',
            color: '#B5C0B9',
            fontWeight: '500',
            textDecoration: 'none',
            cursor: 'default',
            opacity: 0.8
          }}
        >
          Gallery
        </a>
      </nav>
    </header>
  );
};
