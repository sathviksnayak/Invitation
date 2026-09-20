import React from 'react';
import { invitationData } from '../data/invitationData';
import { ScrollReveal } from './ScrollReveal';

export const Hero = () => {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#F7E8E6',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',

        // Start the hero immediately after the navbar area.
        paddingTop: '60px',
        paddingBottom: '60px',

        overflow: 'hidden',
      }}
    >
      {/* =========================
          BOTANICAL DECORATIONS
      ========================== */}

      {/* Upper-left leaf */}
      <div
        className="decor idle-float-1"
        style={{
          top: '-20px',
          left: '-20px',
          width: '280px',
          opacity: 0.88,
          transform: 'rotate(15deg)',
          zIndex: 1,
        }}
      >
        <img src="/assets/leaf.svg" alt="" />
      </div>

      {/* Lower-left leaf */}
      <div
        className="decor idle-float-2"
        style={{
          bottom: '20px',
          left: '-30px',
          width: '260px',
          opacity: 0.88,
          transform: 'rotate(-45deg)',
          zIndex: 1,
        }}
      >
        <img src="/assets/leaf.svg" alt="" />
      </div>

      {/* Right-side leaf */}
      <div
        className="decor idle-float-1"
        style={{
          top: '30%',
          right: '-40px',
          width: '320px',
          opacity: 0.88,
          transform: 'scaleX(-1) rotate(10deg)',
          zIndex: 1,
        }}
      >
        <img src="/assets/leaf.svg" alt="" />
      </div>

      {/* =========================
          CREAM STARS
      ========================== */}

      <div
        className="decor idle-star"
        style={{
          top: '120px',
          left: '22%',
          width: '42px',
          zIndex: 1,
        }}
      >
        <img src="/assets/star.svg" alt="" />
      </div>

      <div
        className="decor idle-star"
        style={{
          top: '100px',
          right: '24%',
          width: '54px',
          zIndex: 1,
          animationDelay: '1s',
        }}
      >
        <img src="/assets/star.svg" alt="" />
      </div>

      <div
        className="decor idle-star"
        style={{
          bottom: '180px',
          right: '18%',
          width: '38px',
          zIndex: 1,
          animationDelay: '2s',
        }}
      >
        <img src="/assets/star.svg" alt="" />
      </div>

      {/* =========================
          MAIN HERO ARCH
      ========================== */}

      <ScrollReveal
        duration={1100}
        translateY={8}
        style={{
          width: '100%',
          maxWidth: '680px',

          // Keep the arch directly attached to the hero start.
          marginTop: '60px',

          marginBottom: '60px',
          zIndex: 2,
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',

            /*
             * Keep the arch content-sized.
             * Do NOT add a huge minHeight here.
             */
            backgroundColor: '#9AA79F',

            // Smooth top arch, square bottom.
            borderRadius: '340px 340px 0 0',

            boxShadow: '0 16px 40px rgba(0, 0, 0, 0.08)',

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',

            padding: '245px 40px 40px 40px',
            boxSizing: 'border-box',
          }}
        >
          {/* =========================
              BABY PHOTO
          ========================== */}

          <div
            style={{
              position: 'absolute',
              top: '12px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '215px',
              height: '215px',
              zIndex: 3,
            }}
          >
            {/* Circular baby image */}
            <ScrollReveal
              delay={150}
              duration={700}
              translateY={0}
            >
              <div
                style={{
                  width: '215px',
                  height: '215px',
                  borderRadius: '50%',
                  border: '5px solid #FFFFFF',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                  overflow: 'hidden',
                  backgroundColor: '#FFFFFF',
                }}
              >
                <img
                  src="/assets/baby.jpg"
                  alt="Baby Vihaan"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
            </ScrollReveal>

            {/* =========================
                PINK BOW
            ========================== */}

            <div
              className="decor idle-float-1"
              style={{
                top: '-18px',
                left: '-24px',
                width: '105px',
                zIndex: 4,
              }}
            >
              <ScrollReveal
                delay={300}
                duration={700}
                scale={0.96}
                translateY={0}
              >
                <img
                  src="/assets/pink-bow.png"
                  alt=""
                  style={{
                    filter:
                      'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15))',
                  }}
                />
              </ScrollReveal>
            </div>
          </div>

          {/* =========================
              TEXT CONTENT
          ========================== */}

          <ScrollReveal
            delay={350}
            duration={700}
            translateY={15}
          >
            {/* Intro */}
            <p
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: '18px',
                color: '#FFFFFF',
                fontWeight: '400',
                letterSpacing: '0.2px',
                marginTop: '10px',
                marginBottom: '6px',
              }}
            >
              {invitationData.parents} warmly invite you to the
            </p>

            {/* Event title */}
            <h1
              style={{
                fontFamily:
                  "'Alex Brush', 'Dancing Script', cursive",
                fontSize: '56px',
                color: '#FFFFFF',
                fontWeight: '700',
                lineHeight: '1.2',
                margin: '6px 0 10px 0',
                textShadow: '0 2px 4px rgba(0,0,0,0.05)',
              }}
            >
              {invitationData.eventTitle}
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: '17px',
                color: '#FFFFFF',
                fontWeight: '400',
                marginBottom: '32px',
              }}
            >
              {invitationData.subTitle}
            </p>

            {/* Event date */}
            <div
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: '24px',
                fontWeight: '700',
                color: '#FFFFFF',
                letterSpacing: '0.5px',
                marginBottom: '32px',
              }}
            >
              {invitationData.eventDate}
            </div>

            {/* Venue */}
            <h2
              style={{
                fontFamily:
                  "'Alex Brush', 'Dancing Script', cursive",
                fontSize: '38px',
                color: '#FFFFFF',
                fontWeight: '600',
                marginBottom: '24px',
              }}
            >
              {invitationData.venueName}
            </h2>
          </ScrollReveal>

          {/* =========================
              OPEN IN MAPS
          ========================== */}

          <ScrollReveal
            delay={500}
            duration={700}
            translateY={8}
          >
            <a
              href={invitationData.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 28px',
                borderRadius: '30px',
                border: '2px solid #FFFFFF',
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                fontFamily:
                  "'Alex Brush', 'Dancing Script', cursive",
                fontSize: '22px',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                boxShadow:
                  '0 4px 12px rgba(0,0,0,0.05)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  '#FFFFFF';
                e.currentTarget.style.color = '#9AA79F';
                e.currentTarget.style.transform =
                  'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  'transparent';
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.transform =
                  'translateY(0)';
              }}
            >
              Open in Maps
            </a>
          </ScrollReveal>
        </div>
      </ScrollReveal>
    </section>
  );
};