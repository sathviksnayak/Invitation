import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const SendWishes = ({ onAddWish }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    if (onAddWish) {
      onAddWish({
        id: Date.now(),
        author: name.trim(),
        message: message.trim()
      });
    }

    setSubmitted(true);
    setName('');
    setMessage('');

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section
      id="send-wishes"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '620px',
        backgroundColor: '#9AA79F',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 40px',
        overflow: 'hidden'
      }}
    >
      {/* Decorative Assets on Sage Background */}
      <div className="decor idle-star" style={{ top: '120px', left: '60px', width: '44px', zIndex: 1 }}>
        <img src="/assets/star.svg" alt="" style={{ filter: 'brightness(1.2)' }} />
      </div>

      <div className="decor idle-float-1" style={{ bottom: '70px', left: '110px', width: '84px', opacity: 0.95, zIndex: 1 }}>
        <img src="/assets/flowers.svg" alt="" />
      </div>

      <div className="decor idle-star" style={{ bottom: '25px', left: '42%', width: '38px', zIndex: 1, animationDelay: '1.1s' }}>
        <img src="/assets/star.svg" alt="" style={{ filter: 'brightness(1.2)' }} />
      </div>

      <div className="decor idle-star" style={{ bottom: '50px', right: '12%', width: '42px', zIndex: 1, animationDelay: '2.3s' }}>
        <img src="/assets/star.svg" alt="" style={{ filter: 'brightness(1.2)' }} />
      </div>

      {/* Content Container */}
      <div
        style={{
          width: '100%',
          maxWidth: '1100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '60px',
          zIndex: 2
        }}
      >
        {/* Left Column: Heading Reveal */}
        <div style={{ flex: '1', maxWidth: '500px' }}>
          <ScrollReveal duration={800} translateX={-15} translateY={0}>
            <h2
              style={{
                fontFamily: "'Alex Brush', 'Dancing Script', cursive",
                fontSize: '56px',
                color: '#FFFFFF',
                fontWeight: '700',
                lineHeight: '1.2'
              }}
            >
              Send your wishes
            </h2>
          </ScrollReveal>
        </div>

        {/* Right Column: Pale Blush Arch Form Container Reveal */}
        <div style={{ width: '100%', maxWidth: '460px' }}>
          <ScrollReveal delay={150} duration={850} translateY={15}>
            <div
              style={{
                width: '100%',
                backgroundColor: '#F7E8E6',
                borderRadius: '200px 200px 0 0',
                padding: '75px 42px 60px 42px',
                boxShadow: '0 16px 40px rgba(0, 0, 0, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              {submitted ? (
                <div
                  style={{
                    textAlign: 'center',
                    padding: '40px 10px'
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Alex Brush', 'Dancing Script', cursive",
                      fontSize: '38px',
                      color: '#9AA79F',
                      marginBottom: '14px'
                    }}
                  >
                    Thank You!
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: '16px',
                      color: '#666666'
                    }}
                  >
                    Your warm blessing for baby Vihaan has been added.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '22px'
                  }}
                >
                  {/* Name Input */}
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={{
                      width: '100%',
                      padding: '16px 24px',
                      borderRadius: '30px',
                      border: 'none',
                      backgroundColor: '#FFFFFF',
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: '16px',
                      color: '#333333',
                      outline: 'none',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
                    }}
                  />

                  {/* Wishes Textarea with Sparkle Button */}
                  <div style={{ position: 'relative', width: '100%' }}>
                    <textarea
                      placeholder="Your Wishes"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={5}
                      style={{
                        width: '100%',
                        padding: '18px 24px',
                        borderRadius: '24px',
                        border: 'none',
                        backgroundColor: '#FFFFFF',
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: '16px',
                        color: '#333333',
                        outline: 'none',
                        resize: 'none',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
                      }}
                    />

                    {/* Sparkle AI Icon inside Textarea */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '16px',
                        right: '16px',
                        width: '34px',
                        height: '34px',
                        borderRadius: '50%',
                        backgroundColor: '#9AA79F',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        pointerEvents: 'none'
                      }}
                    >
                      <Sparkles size={18} />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      padding: '12px 0',
                      borderRadius: '30px',
                      border: 'none',
                      backgroundColor: '#9AA79F',
                      color: '#FFFFFF',
                      fontFamily: "'Alex Brush', 'Dancing Script', cursive",
                      fontSize: '26px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 6px 16px rgba(0,0,0,0.08)',
                      marginTop: '10px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#86948B';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#9AA79F';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
