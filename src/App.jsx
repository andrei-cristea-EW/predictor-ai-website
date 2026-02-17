import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ShowcaseSection from './components/ShowcaseSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import JoinModal from './components/JoinModal';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="app">
      <Navbar onJoinClick={() => setIsModalOpen(true)} />
      <HeroSection onJoinClick={() => setIsModalOpen(true)} />
      <FeaturesSection />
      <ShowcaseSection />
      <CTASection onJoinClick={() => setIsModalOpen(true)} />
      <Footer />
      {isModalOpen && <JoinModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default App;
