import React from 'react';
import styles from './styles';

import {Navbar, Billing, Card, Business, Clients, CTA, Stats, Footer, Testimonials, HeroSection} from './components';


const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className="max-w-[1500px] mx-auto">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <HeroSection />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <Card /> 
          <Testimonials /> 
          <Clients /> 
          <CTA /> 
          <Footer /> 
        </div>
      </div>
    </div>
    
  </div>
);

export default App