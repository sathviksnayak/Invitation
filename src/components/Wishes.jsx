import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { invitationData } from '../data/invitationData';
import { ScrollReveal } from './ScrollReveal';

export const Wishes = ({ wishesList = invitationData.wishes }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next');
  const [animating, setAnimating] = useState(false);

  const changeWish = (newIndex, dir) => {
    if (animating) return;
    setAnimating(true);
    setDirection(dir);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setAnimating(false);
    }, 180);
  };

  const handlePrev = () => {
    const newIdx = currentIndex === 0 ? wishesList.length - 1 : currentIndex - 1;
    changeWish(newIdx, 'prev');
  };

  const handleNext = () => {
    const newIdx = currentIndex === wishesList.length - 1 ? 0 : currentIndex + 1;
    changeWish(newIdx, 'next');
  };

  const currentWish = wishesList[currentIndex] || wishesList[0];

  return (
    <section
      id="wishes"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '680px',
        backgroundColor: '#F7E8E6',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '90px 20px',
        overflow: 'hidden'
      }}
    >
      {/* External Edge Decorations */}
      <div className="decor idle-float-1" style={{ top: '-10px', left: '-20px', width: '260px', opacity: 0.85, transform: 'rotate(20deg)', zIndex: 1 }}>
        <img src="/assets/leaf.svg" alt="" />
      </div>

      <div className="decor idle-star" style={{ top: '60px', right: '14%', width: '42px', zIndex: 1 }}>
        <img src="/assets/star.svg" alt="" />
      </div>

      <div className="decor idle-star" style={{ top: '42%', right: '4%', width: '38px', zIndex: 1, animationDelay: '1.2s' }}>
        <img src="/assets/star.svg" alt="" />
      </div>

      <div className="decor idle-float-2" style={{ bottom: '160px', left: '80px', width: '76px', opacity: 0.9, zIndex: 1 }}>
        <img src="/assets/flowers.svg" alt="" />
      </div>

      <div className="decor idle-float-1" style={{ bottom: '25px', left: '30%', width: '82px', opacity: 0.9, zIndex: 1 }}>
        <img src="/assets/flowers.svg" alt="" />
      </div>

      <div className="decor idle-float-2" style={{ bottom: '-30px', right: '-20px', width: '280px', opacity: 0.85, transform: 'rotate(-25deg)', zIndex: 1 }}>
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
          Wishes for the baby
        </h2>
      </ScrollReveal>

      {/* Main Sage Card - Completely Stationary Outer Shell */}
      <ScrollReveal delay={150} duration={850} translateY={20} style={{ width: '100%', maxWidth: '800px', zIndex: 2 }}>
        <div
          style={{
            position: 'relative',
            width: '100%',
            backgroundColor: '#9AA79F',
            borderRadius: '28px',
            padding: '65px 55px 50px 55px',
            boxShadow: '0 16px 40px rgba(0, 0, 0, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          {/* Overlapping Pink Bow on Top-Right Corner of Card */}
          <div className="decor idle-float-1" style={{ top: '-45px', right: '-35px', width: '150px', zIndex: 3 }}>
            <img src="/assets/pink-bow.png" alt="" style={{ filter: 'drop-shadow(0 6px 12px rgba(0, 0, 0, 0.12))' }} />
          </div>

          {/* Stars inside Card */}
          <div className="decor idle-star" style={{ top: '36px', left: '42px', width: '36px', filter: 'brightness(1.2)', zIndex: 3 }}>
            <img src="/assets/star.svg" alt="" />
          </div>
          <div className="decor idle-star" style={{ bottom: '40px', right: '48px', width: '34px', filter: 'brightness(1.2)', zIndex: 3, animationDelay: '1.4s' }}>
            <img src="/assets/star.svg" alt="" />
          </div>

          {/* Inner Content Slot - Transitions Only Text Content */}
          <div
            style={{
              opacity: animating ? 0 : 1,
              transform: animating
                ? `translateX(${direction === 'next' ? '-12px' : '12px'})`
                : 'translateX(0)',
              transition: 'opacity 220ms ease-out, transform 220ms ease-out',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%'
            }}
          >
            {/* Author Name */}
            <h3
              style={{
                fontFamily: "'Alex Brush', 'Dancing Script', cursive",
                fontSize: '44px',
                color: '#FFFFFF',
                fontWeight: '600',
                marginBottom: '20px'
              }}
            >
              {currentWish?.author}
            </h3>

            {/* Wish Message */}
            <p
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: '18px',
                color: '#FFFFFF',
                fontWeight: '400',
                lineHeight: '1.8',
                maxWidth: '660px',
                minHeight: '110px',
                marginBottom: '40px',
                letterSpacing: '0.2px'
              }}
            >
              {currentWish?.message}
            </p>
          </div>

          {/* Carousel Navigation - Stationary Controls */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '18px'
            }}
          >
            <button
              onClick={handlePrev}
              aria-label="Previous wish"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: '1.5px solid rgba(255, 255, 255, 0.7)',
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.transform = 'scale(1.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <ChevronLeft size={20} />
            </button>

            <span
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: '15px',
                color: '#FFFFFF',
                fontWeight: '500',
                letterSpacing: '1px'
              }}
            >
              {currentIndex + 1} / {wishesList.length}
            </span>

            <button
              onClick={handleNext}
              aria-label="Next wish"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: '1.5px solid rgba(255, 255, 255, 0.7)',
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.transform = 'scale(1.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
