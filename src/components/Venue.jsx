import React from 'react';
import { MapPin } from 'lucide-react';
import { invitationData } from '../data/invitationData';
import { ScrollReveal } from './ScrollReveal';

export const Venue = () => {
  return (
    <section
      id="venue"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '640px',
        backgroundColor: '#9AA79F',
        display: 'flex',
        alignItems: 'stretch',
        overflow: 'hidden'
      }}
    >
      {/* Left Side Container (Sage Green) */}
      <div
        style={{
          flex: '1',
          padding: '100px 60px 100px 120px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          zIndex: 2,
          position: 'relative'
        }}
      >
        {/* Star on Upper Right of Left Side */}
        <div className="decor idle-star" style={{ top: '70px', right: '80px', width: '42px', zIndex: 1 }}>
          <img src="/assets/star.svg" alt="" style={{ filter: 'brightness(1.2)' }} />
        </div>

        {/* Pink Flower on Lower Left */}
        <div className="decor idle-float-1" style={{ bottom: '80px', left: '45px', width: '84px', opacity: 0.95, zIndex: 1 }}>
          <img src="/assets/flowers.svg" alt="" />
        </div>

        {/* Text Content Reveal */}
        <ScrollReveal duration={800} translateY={15}>
          <h2
            style={{
              fontFamily: "'Alex Brush', 'Dancing Script', cursive",
              fontSize: '52px',
              color: '#FFFFFF',
              fontWeight: '700',
              marginBottom: '20px'
            }}
          >
            {invitationData.venueName}
          </h2>

          <p
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: '18px',
              color: '#FFFFFF',
              fontWeight: '400',
              lineHeight: '1.65',
              maxWidth: '480px',
              marginBottom: '36px',
              letterSpacing: '0.2px'
            }}
          >
            {invitationData.venueAddress}
          </p>

          <a
            href={invitationData.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 30px',
              borderRadius: '30px',
              border: '2px solid #FFFFFF',
              backgroundColor: 'transparent',
              color: '#FFFFFF',
              fontFamily: "'Alex Brush', 'Dancing Script', cursive",
              fontSize: '24px',
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 14px rgba(0,0,0,0.05)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.color = '#9AA79F';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <MapPin size={22} fill="#FFFFFF" color="#9AA79F" />
            Open in Maps
          </a>
        </ScrollReveal>
      </div>

      {/* Right Side Container (Pale Blush Curved Arch Area) */}
      <div
        style={{
          flex: '1',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {/* Pale Blush Arch Panel extending from top - Stationary */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: '40px',
            left: '20px',
            bottom: '20px',
            backgroundColor: '#F7E8E6',
            borderRadius: '0 0 340px 340px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '-8px 12px 30px rgba(0, 0, 0, 0.05)',
            zIndex: 1
          }}
        >
          {/* Circular Venue Photograph Reveal */}
          <ScrollReveal delay={200} duration={800} scale={0.97} translateY={0}>
            <div
              style={{
                width: '340px',
                height: '340px',
                borderRadius: '50%',
                overflow: 'hidden',
                boxShadow: '0 12px 32px rgba(0, 0, 0, 0.18)',
                marginTop: '40px'
              }}
            >
              <img
                src="/assets/venue.jpg"
                alt="Venue Hall Interior"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Transparent Blue & White Watercolor Floral Cluster at Bottom Right Corner */}
        <div
          className="decor idle-float-1"
          style={{
            position: 'absolute',
            bottom: '-35px',
            right: '-35px',
            width: '320px',
            zIndex: 3
          }}
        >
          <img
            src="/assets/blue-flowers.png"
            alt=""
            style={{
              display: 'block',
              width: '100%',
              height: 'auto',
              background: 'transparent',
              border: 'none',
              boxShadow: 'none',
              filter: 'drop-shadow(0 6px 14px rgba(0, 0, 0, 0.12))'
            }}
          />
        </div>

        {/* Top Right Star on Sage Area */}
        <div className="decor idle-star" style={{ top: '30px', right: '25px', width: '38px', zIndex: 2 }}>
          <img src="/assets/star.svg" alt="" style={{ filter: 'brightness(1.2)' }} />
        </div>
      </div>
    </section>
  );
};
