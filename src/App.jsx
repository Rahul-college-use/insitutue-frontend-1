import React from 'react';
import Navbar from './components/common/Navbar';
import HeroSection from './components/home/HeroSection';
import StatsTracker from './components/home/StatsTracker';
import About from './components/home/About';
import Instructors from './components/home/Instructors';
import CourseExplorer from './components/home/CourseExplorer';
import Testimonials from './components/home/Testimonials';
import FAQ from './components/home/FAQ';
import BenefitsGrid from './components/home/BenefitsGrid';
import Contact from './components/home/Contact';
import Footer from './components/common/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navbar />
      <HeroSection />
      <StatsTracker />
      <About />
      <CourseExplorer />
      <Instructors />
      <Testimonials />
      <BenefitsGrid />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;