import React, { useState } from 'react';
import { invitationData } from '../data/invitationData';
import { ScrollReveal } from './ScrollReveal';

export const Schedule = ({ scheduleList = invitationData.schedule }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [animating, setAnimating] = useState(false);

  const changeSlide = (newIdx) => {
    if (newIdx === activeIdx || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveIdx(newIdx);
      setAnimating(false);
    }, 180);
  };

  return (
    <section
      id="schedule"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '600px',
        backgroundColor: '#F7E8E6',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 20px',
        overflow: 'hidden'
      }}
    >
      {/* External Corner Edge Decorations - Soft Watercolor Leaves & Flowers */}
      {/* Top Left Leaf */}
      <div className="decor idle-float-1" style={{ top: '-15px', left: '-20px', width: '240px', opacity: 0.85, transform: 'rotate(20deg)', zIndex: 1 }}>
        <img src="/assets/leaf.svg" alt="" />
      </div>

      {/* Top Left Star */}
      <div className="decor idle-star" style={{ top: '90px', left: '18%', width: '34px', zIndex: 1, animationDelay: '0.7s' }}>
        <img src="/assets/star.svg" alt="" />
      </div>

      {/* Top Right Flower */}
      <div className="decor idle-float-2" style={{ top: '60px', right: '160px', width: '70px', opacity: 0.9, zIndex: 1, animationDelay: '1.2s' }}>
        <img src="/assets/flowers.svg" alt="" />
      </div>

      {/* Bottom Left Flower */}
      <div className="decor idle-float-1" style={{ bottom: '70px', left: '80px', width: '76px', opacity: 0.9, zIndex: 1, animationDelay: '2.3s' }}>
        <img src="/assets/flowers.svg" alt="" />
      </div>

      {/* Bottom Right Star */}
      <div className="decor idle-star" style={{ bottom: '60px', right: '34%', width: '36px', zIndex: 1, animationDelay: '1.8s' }}>
        <img src="/assets/star.svg" alt="" />
      </div>

      {/* Bottom Right Flower */}
      <div className="decor idle-float-2" style={{ bottom: '50px', right: '220px', width: '72px', opacity: 0.9, zIndex: 1, animationDelay: '0.4s' }}>
        <img src="/assets/flowers.svg" alt="" />
      </div>

      {/* Bottom Right Leaf */}
      <div className="decor idle-float-1" style={{ bottom: '-25px', right: '-20px', width: '260px', opacity: 0.85, transform: 'rotate(-25deg)', zIndex: 1 }}>
        <img src="/assets/leaf.svg" alt="" />
      </div>

      {/* Section Title */}
      <ScrollReveal duration={800} translateY={15}>
        <h2
          style={{
            fontFamily: "'Alex Brush', 'Dancing Script', cursive",
            fontSize: '52px',
            color: '#9AA79F',
            fontWeight: '700',
            marginBottom: '36px',
            textAlign: 'center'
          }}
        >
          Schedule
        </h2>
      </ScrollReveal>

      {/* Main Schedule Container */}
      <ScrollReveal delay={150} duration={850} translateY={18} style={{ width: '100%', maxWidth: '720px', zIndex: 2 }}>
        <div
          style={{
            position: 'relative',
            width: '100%',
            backgroundColor: '#9AA79F',
            borderRadius: '28px',
            padding: '45px 35px',
            boxShadow: '0 16px 36px rgba(0, 0, 0, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
          }}
        >
          {/* Soft Watercolor Pink Bow Top Center */}
          <div className="decor idle-float-1" style={{ position: 'relative', width: '120px', marginBottom: '16px' }}>
            <img src="/assets/pink-bow.png" alt="" style={{ filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.12))' }} />
          </div>

          {/* Left Star inside Card */}
          <div className="decor idle-star" style={{ left: '40px', top: '50%', transform: 'translateY(-50%)', width: '32px', filter: 'brightness(1.2)' }}>
            <img src="/assets/star.svg" alt="" />
          </div>

          {/* Right Star inside Card */}
          <div className="decor idle-star" style={{ right: '40px', top: '50%', transform: 'translateY(-50%)', width: '32px', filter: 'brightness(1.2)', animationDelay: '1.2s' }}>
            <img src="/assets/star.svg" alt="" />
          </div>

          {/* Inner Content Slot - Transitions Only Text Content */}
          <div
            style={{
              opacity: animating ? 0 : 1,
              transform: animating ? 'translateY(6px)' : 'translateY(0)',
              transition: 'opacity 220ms ease-out, transform 220ms ease-out',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <h3
              style={{
                fontFamily: "'Alex Brush', 'Dancing Script', cursive",
                fontSize: '40px',
                color: '#FFFFFF',
                fontWeight: '600',
                marginBottom: '10px'
              }}
            >
              {scheduleList[activeIdx]?.eventName}
            </h3>

            <p
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: '18px',
                color: '#FFFFFF',
                fontWeight: '500',
                letterSpacing: '0.5px'
              }}
            >
              {scheduleList[activeIdx]?.eventTime}
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Pagination Dots */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          marginTop: '28px',
          zIndex: 2
        }}
      >
        {scheduleList.map((_, idx) => (
          <button
            key={idx}
            onClick={() => changeSlide(idx)}
            aria-label={`Go to schedule slide ${idx + 1}`}
            style={{
              width: idx === activeIdx ? '22px' : '9px',
              height: '9px',
              borderRadius: '6px',
              backgroundColor: idx === activeIdx ? '#9AA79F' : '#D0DAD3',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </div>
    </section>
  );
};
