import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProductShowcase from './components/ProductShowcase'
import FeaturesSection from './components/FeaturesSection'
import SneakerGallery from './components/SneakerGallery'
import CountdownDrop from './components/CountdownDrop'
import TestimonialSection from './components/TestimonialSection'
import EmailSignup from './components/EmailSignup'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-light dark:bg-dark transition-colors duration-300">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <HeroSection />
        <ProductShowcase />
        <FeaturesSection />
        <SneakerGallery />
        <CountdownDrop />
        <TestimonialSection />
        <EmailSignup />
        <Footer />
      </div>
    </div>
  )
}

export default App
