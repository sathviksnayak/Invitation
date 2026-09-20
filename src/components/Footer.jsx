import React from 'react';
import { AlertCircle, Mail, Shield } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Footer = () => {
  return (
    <footer
      style={{
        width: '100%',
        backgroundColor: '#FFFFFF',
        padding: '50px 20px 40px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        borderTop: '1px solid rgba(0, 0, 0, 0.05)'
      }}
    >
      <ScrollReveal duration={700} translateY={10}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Brand Title */}
          <h3
            style={{
              fontFamily: "'Manrope', 'Quicksand', sans-serif",
              fontSize: '22px',
              fontWeight: '400',
              color: '#333333',
              marginBottom: '16px'
            }}
          >
            Naming_ceremony Invitation website by{' '}
            <span
              style={{
                fontWeight: '700',
                color: '#4A154B',
                letterSpacing: '0.5px'
              }}
            >
              INVITATIONNATION
            </span>
          </h3>

          {/* Mascot / Logo Icon */}
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              overflow: 'hidden',
              marginBottom: '32px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#4A154B'
            }}
          >
            <img
              src="/assets/ANlogo-vxj4_BdA.png"
              alt="Invitation Nation"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>

          {/* Footer Navigation Links */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '24px',
              flexWrap: 'wrap',
              marginBottom: '20px'
            }}
          >
            <a
              href="#report"
              onClick={(e) => e.preventDefault()}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#718096',
                fontFamily: "'Manrope', sans-serif",
                fontSize: '14px',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}
            >
              <AlertCircle size={15} />
              Report a Problem
            </a>

            <a
              href="#support"
              onClick={(e) => e.preventDefault()}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#718096',
                fontFamily: "'Manrope', sans-serif",
                fontSize: '14px',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}
            >
              <Mail size={15} />
              Contact Support
            </a>

            <a
              href="#privacy"
              onClick={(e) => e.preventDefault()}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#718096',
                fontFamily: "'Manrope', sans-serif",
                fontSize: '14px',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}
            >
              <Shield size={15} />
              Privacy Policy
            </a>
          </div>

          {/* Powered By Line */}
          <div
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: '12px',
              fontWeight: '600',
              color: '#A0AEC0',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              marginBottom: '24px'
            }}
          >
            POWERED BY{' '}
            <span style={{ color: '#4A154B', fontWeight: '700' }}>
              INVITATION NATION
            </span>
          </div>

          {/* Copyright */}
          <p
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: '12px',
              color: '#A0AEC0',
              fontWeight: '400'
            }}
          >
            © 2026 Invitation Nation. All rights reserved. Crafted with care for you forever.
          </p>
        </div>
      </ScrollReveal>
    </footer>
  );
};
