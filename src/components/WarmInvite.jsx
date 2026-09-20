import React from 'react';
import { invitationData } from '../data/invitationData';
import { ScrollReveal } from './ScrollReveal';

export const WarmInvite = () => {
  return (
    <section
      id="warm-invite"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '620px',
        backgroundColor: '#F7E8E6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '90px 20px',
        overflow: 'hidden'
      }}
    >
      {/* External Edge Decorations */}
      <div className="decor idle-float-1" style={{ top: '-10px', left: '-20px', width: '240px', opacity: 0.85, transform: 'rotate(25deg)', zIndex: 1 }}>
        <img src="/assets/leaf.svg" alt="" />
      </div>

      <div className="decor idle-star" style={{ top: '48%', left: '3%', width: '38px', zIndex: 1 }}>
        <img src="/assets/star.svg" alt="" />
      </div>

      <div className="decor idle-float-2" style={{ bottom: '50px', left: '100px', width: '80px', opacity: 0.9, zIndex: 1 }}>
        <img src="/assets/flowers.svg" alt="" />
      </div>

      <div className="decor idle-star" style={{ bottom: '120px', right: '22%', width: '32px', zIndex: 1 }}>
        <img src="/assets/star.svg" alt="" />
      </div>

      <div className="decor idle-float-1" style={{ bottom: '140px', right: '90px', width: '76px', opacity: 0.9, zIndex: 1 }}>
        <img src="/assets/flowers.svg" alt="" />
      </div>

      <div className="decor idle-float-2" style={{ bottom: '-30px', right: '-20px', width: '260px', opacity: 0.85, transform: 'rotate(-20deg)', zIndex: 1 }}>
        <img src="/assets/leaf.svg" alt="" />
      </div>

      {/* Central Sage Green Card Reveal */}
      <ScrollReveal duration={850} translateY={20} style={{ width: '100%', maxWidth: '920px', zIndex: 2 }}>
        <div
          style={{
            position: 'relative',
            width: '100%',
            backgroundColor: '#9AA79F',
            borderRadius: '28px',
            padding: '75px 60px',
            boxShadow: '0 16px 40px rgba(0, 0, 0, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          {/* Pink Flower on Top-Left Corner of Card */}
          <div className="decor idle-float-1" style={{ top: '20px', left: '24px', width: '70px', filter: 'brightness(1.1) drop-shadow(0 4px 6px rgba(0,0,0,0.1))', zIndex: 3 }}>
            <img src="/assets/flowers.svg" alt="" />
          </div>

          {/* Star on Top-Right Corner of Card */}
          <div className="decor idle-star" style={{ top: '32px', right: '36px', width: '36px', filter: 'brightness(1.2)', zIndex: 3 }}>
            <img src="/assets/star.svg" alt="" />
          </div>

          {/* Star on Bottom-Left Corner of Card */}
          <div className="decor idle-star" style={{ bottom: '40px', left: '44px', width: '34px', filter: 'brightness(1.2)', zIndex: 3, animationDelay: '1.5s' }}>
            <img src="/assets/star.svg" alt="" />
          </div>

          {/* Heading Reveal */}
          <ScrollReveal delay={120} duration={700} translateY={12}>
            <h2
              style={{
                fontFamily: "'Alex Brush', 'Dancing Script', cursive",
                fontSize: '56px',
                color: '#FFFFFF',
                fontWeight: '700',
                marginBottom: '36px',
                textShadow: '0 2px 4px rgba(0,0,0,0.05)'
              }}
            >
              Warm Invite
            </h2>
          </ScrollReveal>

          {/* Body Paragraph Reveal */}
          <ScrollReveal delay={250} duration={750} translateY={15}>
            <p
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: '20px',
                color: '#FFFFFF',
                fontWeight: '400',
                lineHeight: '1.85',
                maxWidth: '760px',
                letterSpacing: '0.2px'
              }}
            >
              {invitationData.warmInviteText}
            </p>
          </ScrollReveal>
        </div>
      </ScrollReveal>
    </section>
  );
};
