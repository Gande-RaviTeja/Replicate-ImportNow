import React from 'react';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import Hero from './components/sections/Hero.jsx';
import Marquee from './components/sections/Marquee.jsx';
import Services from './components/sections/Services.jsx';
import Journey from './components/sections/Journey.jsx';
import ShipmentTracker from './components/sections/ShipmentTracker.jsx';
import Calculator from './components/sections/Calculator.jsx';
import Products from './components/sections/Products.jsx';
import Shanghai from './components/sections/Shanghai.jsx';
import Trips from './components/sections/Trips.jsx';
import Work from './components/sections/Work.jsx';
import Stories from './components/sections/Stories.jsx';
import Guides from './components/sections/Guides.jsx';
import FAQ from './components/sections/FAQ.jsx';
import Contact from './components/sections/Contact.jsx';
import WhatsAppFAB from './components/ui/WhatsAppFAB.jsx';
import { useSiteInteractions } from './hooks/useSiteInteractions.js';

export default function App() {
  useSiteInteractions();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Journey />
        <ShipmentTracker />
        <Calculator />
        <Products />
        <Shanghai />
        <Trips />
        <Work />
        <Stories />
        <Guides />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
