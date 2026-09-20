import React, { useState } from 'react';
import { invitationData } from '../data/invitationData';
import { ScrollReveal } from './ScrollReveal';

export const VideoSection = () => {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <section
      id="video"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '600px',
        backgroundColor: '#9AA79F',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '90px 20px',
        overflow: 'hidden'
      }}
    >
      {/* Outer Corner Decorative Flowers - Layer 1 Behind Video Content */}
      {/* Bottom-Left Corner Blue Flower Cluster (Delay 180ms, opacity 0->1, scale 0.98->1) */}
      <div
        className="decor idle-float-1"
        style={{
          bottom: '20px',
          left: '20px',
          width: '210px',
          zIndex: 1,
          opacity: 0.9
        }}
      >
        <ScrollReveal delay={180} duration={800} scale={0.98} translateY={0}>
          <img
            src="/assets/blue-flowers.png"
            alt=""
            style={{
              display: 'block',
              width: '100%',
              height: 'auto',
              filter: 'drop-shadow(0 6px 14px rgba(0,0,0,0.1))'
            }}
          />
        </ScrollReveal>
      </div>

      {/* Top-Right Corner Blue Flower Cluster (Delay 220ms, opacity 0->1, scale 0.98->1) */}
      <div
        className="decor idle-float-2"
        style={{
          top: '20px',
          right: '20px',
          width: '210px',
          zIndex: 1,
          opacity: 0.9,
          transform: 'rotate(170deg) scaleY(-1)'
        }}
      >
        <ScrollReveal delay={220} duration={800} scale={0.98} translateY={0}>
          <img
            src="/assets/blue-flowers.png"
            alt=""
            style={{
              display: 'block',
              width: '100%',
              height: 'auto',
              filter: 'drop-shadow(0 6px 14px rgba(0,0,0,0.1))'
            }}
          />
        </ScrollReveal>
      </div>

      {/* Video Container Reveal - Layer 2 Main Focus (opacity 0->1, translateY 10px->0, duration 750ms) */}
      <ScrollReveal duration={750} translateY={10} style={{ width: '100%', maxWidth: '840px', zIndex: 2 }}>
        <div
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16 / 9',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 20px 48px rgba(0, 0, 0, 0.16)',
            backgroundColor: '#849289',
            backgroundImage: !iframeLoaded ? 'url(/assets/venue.jpg)' : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 2
          }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${invitationData.youtubeVideoId}?rel=0`}
            title="Baby Animals Video Teaser"
            onLoad={() => setIframeLoaded(true)}
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              display: 'block'
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </ScrollReveal>
    </section>
  );
};
