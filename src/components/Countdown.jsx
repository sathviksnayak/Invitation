import React, { useState, useEffect } from 'react';
import { invitationData } from '../data/invitationData';
import { ScrollReveal } from './ScrollReveal';

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date(invitationData.targetDateTime).getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, []);

  const counters = [
    { label: 'DAYS', value: timeLeft.days, circleDelay: 280, labelDelay: 320 },
    { label: 'HRS', value: timeLeft.hours, circleDelay: 340, labelDelay: 380 },
    { label: 'MINS', value: timeLeft.minutes, circleDelay: 400, labelDelay: 440 },
    { label: 'SECS', value: timeLeft.seconds, circleDelay: 460, labelDelay: 500 }
  ];

  return (
    <section
      id="countdown"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '520px',
        backgroundColor: '#9AA79F',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 20px',
        overflow: 'hidden'
      }}
    >
      {/* Ambient Pulsing Stars */}
      <div className="decor idle-star" style={{ top: '40px', left: '42%', width: '36px', zIndex: 1 }}>
        <img src="/assets/star.svg" alt="" style={{ filter: 'brightness(1.2)' }} />
      </div>
      <div className="decor idle-star" style={{ top: '120px', right: '12%', width: '44px', zIndex: 1, animationDelay: '1.2s' }}>
        <img src="/assets/star.svg" alt="" style={{ filter: 'brightness(1.2)' }} />
      </div>
      <div className="decor idle-star" style={{ bottom: '160px', left: '11%', width: '34px', zIndex: 1, animationDelay: '0.6s' }}>
        <img src="/assets/star.svg" alt="" style={{ filter: 'brightness(1.2)' }} />
      </div>
      <div className="decor idle-star" style={{ bottom: '180px', left: '30%', width: '38px', zIndex: 1, animationDelay: '2.1s' }}>
        <img src="/assets/star.svg" alt="" style={{ filter: 'brightness(1.2)' }} />
      </div>
      <div className="decor idle-star" style={{ bottom: '140px', right: '9%', width: '40px', zIndex: 1, animationDelay: '1.8s' }}>
        <img src="/assets/star.svg" alt="" style={{ filter: 'brightness(1.2)' }} />
      </div>

      {/* Edge Flowers & Leaves */}
      <div className="decor idle-float-1" style={{ bottom: '40px', left: '35px', width: '85px', opacity: 0.9, zIndex: 1, animationDelay: '1.5s' }}>
        <img src="/assets/flowers.svg" alt="" />
      </div>

      <div className="decor idle-float-2" style={{ bottom: '-30px', right: '-20px', width: '240px', opacity: 0.85, transform: 'rotate(-30deg)', zIndex: 1, animationDelay: '0.8s' }}>
        <img src="/assets/leaf.svg" alt="" />
      </div>

      <div className="decor idle-float-1" style={{ bottom: '-50px', left: '-40px', width: '220px', opacity: 0.85, transform: 'rotate(70deg)', zIndex: 1, animationDelay: '2.2s' }}>
        <img src="/assets/leaf.svg" alt="" />
      </div>

      {/* Central Pale Blush Card Reveal (opacity: 0->1, translateY: 32px->0, scale: 0.98->1, 850ms) */}
      <ScrollReveal duration={850} translateY={32} scale={0.98} style={{ width: '100%', maxWidth: '780px', zIndex: 2 }}>
        <div
          style={{
            position: 'relative',
            width: '100%',
            backgroundColor: '#F7E8E6',
            borderRadius: '28px',
            padding: '50px 40px',
            boxShadow: '0 16px 36px rgba(0, 0, 0, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          {/* Overlapping Soft Pink Bow (opacity: 0->1, translateY: 10px->0, scale: 0.95->1, 750ms, delay: 100ms) */}
          <div className="decor idle-float-1" style={{ top: '-48px', left: '-42px', width: '150px', zIndex: 3 }}>
            <ScrollReveal delay={100} duration={750} translateY={10} scale={0.95}>
              <img src="/assets/pink-bow.png" alt="" style={{ filter: 'drop-shadow(0 6px 12px rgba(0, 0, 0, 0.12))' }} />
            </ScrollReveal>
          </div>

          {/* Heading ("Let the countdown begin", delay 180ms, duration 650ms, translateY 10px) */}
          <ScrollReveal delay={180} duration={650} translateY={10}>
            <h2
              style={{
                fontFamily: "'Alex Brush', 'Dancing Script', cursive",
                fontSize: '44px',
                color: '#9AA79F',
                fontWeight: '700',
                marginBottom: '40px'
              }}
            >
              Let the countdown begin
            </h2>
          </ScrollReveal>

          {/* Counter Grid */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '44px',
              flexWrap: 'wrap'
            }}
          >
            {counters.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '14px'
                }}
              >
                {/* Circle (staggered delay: 280, 340, 400, 460ms, duration 600ms, translateY 10px, scale 0.95) */}
                <ScrollReveal delay={item.circleDelay} duration={600} translateY={10} scale={0.95}>
                  <div
                    style={{
                      width: '110px',
                      height: '110px',
                      borderRadius: '50%',
                      backgroundColor: '#9AA79F',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 6px 18px rgba(0, 0, 0, 0.08)',
                      overflow: 'hidden'
                    }}
                  >
                    {/* Real-time Number Update Transition */}
                    <span
                      key={item.value}
                      style={{
                        fontSize: '34px',
                        fontFamily: "'Manrope', sans-serif",
                        fontWeight: '700',
                        animation: 'numFade 200ms ease-out'
                      }}
                    >
                      {item.value}
                    </span>
                  </div>
                </ScrollReveal>

                {/* Label (staggered delay: 320, 380, 440, 500ms, duration 400ms, translateY 4px) */}
                <ScrollReveal delay={item.labelDelay} duration={400} translateY={4}>
                  <span
                    style={{
                      fontFamily: "'Marcellus', 'Playfair Display', serif",
                      fontSize: '15px',
                      fontWeight: '700',
                      color: '#9AA79F',
                      letterSpacing: '2px'
                    }}
                  >
                    {item.label}
                  </span>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Number Fade Keyframe */}
      <style>{`
        @keyframes numFade {
          from { opacity: 0.6; transform: translateY(2px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};
