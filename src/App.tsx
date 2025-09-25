// import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ImpactStats from './components/ImpactStats';
import ProgramsSection from './components/ProgramsSection';
import EcosystemSection from './components/EcosystemSection';
import AboutSection from './components/AboutSection';
import PartnersSection from './components/PartnersSection';
import TeamSection from './components/TeamSection';
import ResourcesSection from './components/ResourcesSection';
import InnovationProjects from './components/InnovationProjects';
import CTASection from './components/CTASection';
import Testimonials from './components/Testimonials';
import DonationSection from './components/DonationSection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Preloader from './components/Preloader';

const App: React.FC = () => {
  return (
    <Router>
      <div className="pt-20">
        <Navbar /> {/* Removed isScrolled prop */}
        <AnimatePresence>
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <HeroSection />
                    <ImpactStats />
                    <ProgramsSection />
                    <EcosystemSection />
                    <AboutSection />
                    <PartnersSection />
                    <TeamSection />
                    <ResourcesSection />
                    <InnovationProjects />
                    <CTASection />
                    <Testimonials />
                    <DonationSection />
                    <Newsletter />
                    <Footer />
                  </>
                }
              />
            </Routes>
          </motion.main>
        </AnimatePresence>
        <BackToTop />
        <Preloader />
      </div>
    </Router>
  );
};

export default App;
