import React, { useState, useRef } from 'react';
import { Phone, Volume2, VolumeX } from 'lucide-react';

export const FloatingActions = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        right: '25px',
        bottom: '30px',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        alignItems: 'center'
      }}
    >
      {/* Background Audio */}
      <audio
        ref={audioRef}
        loop
        src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=soft-lullaby-ambient-112702.mp3"
      />

      {/* Phone Button */}
      <a
        href="tel:+919876543210"
        title="Call Support"
        style={{
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          backgroundColor: '#9AA79F',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)',
          textDecoration: 'none',
          transition: 'all 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.backgroundColor = '#88968E';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.backgroundColor = '#9AA79F';
        }}
      >
        <Phone size={20} strokeWidth={2.2} />
      </a>

      {/* Music Toggle Button */}
      <button
        onClick={toggleMusic}
        title={isPlaying ? 'Mute Music' : 'Play Music'}
        style={{
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          backgroundColor: '#9AA79F',
          color: '#FFFFFF',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)',
          transition: 'all 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.backgroundColor = '#88968E';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.backgroundColor = '#9AA79F';
        }}
      >
        {isPlaying ? (
          <Volume2 size={22} strokeWidth={2.2} className="animate-spin-slow" />
        ) : (
          <VolumeX size={22} strokeWidth={2.2} />
        )}
      </button>
    </div>
  );
};
