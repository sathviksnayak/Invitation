import React, { useState } from 'react';
import { Header } from './components/Header';
import { FloatingActions } from './components/FloatingActions';
import { Hero } from './components/Hero';
import { Countdown } from './components/Countdown';
import { WarmInvite } from './components/WarmInvite';
import { Venue } from './components/Venue';
import { Wishes } from './components/Wishes';
import { SendWishes } from './components/SendWishes';
import { Schedule } from './components/Schedule';
import { VideoSection } from './components/VideoSection';
import { Footer } from './components/Footer';

import { invitationData } from './data/invitationData';

export function App() {
  const [wishesList, setWishesList] = useState(invitationData.wishes);

  const handleAddWish = (newWish) => {
    setWishesList((prev) => [newWish, ...prev]);
  };

  return (
    <div className="app-container" style={{ width: '100%', minHeight: '100vh', backgroundColor: '#F7E8E6' }}>
      {/* Fixed Top Navigation Bar */}
      <Header />

      {/* Floating Action Buttons (Phone & Music Toggle) */}
      <FloatingActions />

      {/* Main Single Page Invitation Flow */}
      <main>
        {/* 1. Hero Cover Section */}
        <Hero />

        {/* 2. Live Countdown Timer Section */}
        <Countdown />

        {/* 3. Warm Invite Section */}
        <WarmInvite />

        {/* 4. Venue & Map Location Section */}
        <Venue />

        {/* 5. Wishes for the Baby Section */}
        <Wishes wishesList={wishesList} />

        {/* 6. Send Your Wishes Form Section */}
        <SendWishes onAddWish={handleAddWish} />

        {/* 7. Schedule Carousel Section */}
        <Schedule />

        {/* 8. Video Trailer Section */}
        <VideoSection />
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}

export default App;
