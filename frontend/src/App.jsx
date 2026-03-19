import React from 'react';
import { Box } from '@mui/material';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

/**
 * RecipeOrganizerLanding - Main landing page component
 * 
 * Composition of all sections
 */
const App = () => {
  return (
    <Box sx={{ bgcolor: '#fff', overflow: 'hidden' }}>
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </Box>
  );
};

export default App;