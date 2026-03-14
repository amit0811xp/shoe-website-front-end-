import { useState, useEffect } from 'react'

function App() {
  const [selectedColor, setSelectedColor] = useState('white')
  const [email, setEmail] = useState('')
  const [timeLeft, setTimeLeft] = useState({ days: 5, hours: 12, minutes: 30, seconds: 45 })
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const [selectedSize, setSelectedSize] = useState('9')
  const [cartCount, setCartCount] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [activeSection, setActiveSection] = useState('home')

  // Track active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      
      const sections = ['home', 'collection', 'features', 'gallery', 'about']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (current) setActiveSection(current)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 }
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        return prev
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Toast notification effect
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [showToast])

  // Add to cart with toast
  const handleAddToCart = (productName) => {
    setCartCount(cartCount + 1)
    setToastMessage(`${productName} added to cart!`)
    setShowToast(true)
  }

  const sneakerImages = {
    white: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    red: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80',
    blue: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80',
    black: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80'
  }

  const products = [
    {
      name: 'STRIDE RUNNER PRO',
      price: 1,
      oldPrice: 249,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
      tag: 'BEST SELLER',
      colors: ['white', 'black', 'blue']
    },
    {
      name: 'STRIDE URBAN X',
      price: 219,
      oldPrice: 289,
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80',
      tag: 'NEW',
      colors: ['red', 'black', 'white']
    },
    {
      name: 'STRIDE CLASSIC',
      price: 159,
      oldPrice: 199,
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80',
      tag: 'TRENDING',
      colors: ['black', 'white']
    },
    {
      name: 'STRIDE ELITE',
      price: 279,
      oldPrice: 349,
      image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&q=80',
      tag: 'PREMIUM',
      colors: ['blue', 'red', 'black']
    }
  ]

  const testimonials = [
    {
      name: 'Marcus Johnson',
      role: 'Professional Athlete',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
      text: 'These sneakers changed my game completely. The comfort and support are unmatched. I\'ve never felt this confident on the court!',
      rating: 5
    },
    {
      name: 'Sarah Chen',
      role: 'Fitness Influencer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
      text: 'Absolutely love the design and quality! Perfect for my daily workouts and they look amazing with any outfit. Worth every penny!',
      rating: 5
    },
    {
      name: 'David Martinez',
      role: 'Sneaker Collector',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
      text: 'As a collector, I\'m extremely picky. STRIDE delivers on every level - craftsmanship, style, and innovation. My new favorite brand!',
      rating: 5
    }
  ]

  const athletes = [
    { name: 'Nike', logo: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&q=80' },
    { name: 'Adidas', logo: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&q=80' },
    { name: 'Puma', logo: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=100&q=80' },
    { name: 'Reebok', logo: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=100&q=80' }
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-24 right-4 z-50 animate-slide-in-right">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3">
            <span className="text-2xl">✓</span>
            <span className="font-bold">{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrollY > 50 
          ? 'bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="#home" className="group flex items-center gap-2">
              <div className="text-3xl font-black tracking-tighter transform group-hover:scale-110 transition">
                <span className="text-white">STRIDE</span>
                <span className="text-orange-500">.</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {[
                { name: 'Home', href: '#home', id: 'home' },
                { name: 'Collection', href: '#collection', id: 'collection' },
                { name: 'Technology', href: '#features', id: 'features' },
                { name: 'Gallery', href: '#gallery', id: 'gallery' },
                { name: 'About', href: '#about', id: 'about' }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 font-semibold transition group ${
                    activeSection === link.id 
                      ? 'text-orange-500' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-300 ${
                    activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </a>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              {/* Search */}
              <button className="hidden md:flex w-10 h-10 items-center justify-center rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Wishlist */}
              <button className="hidden md:flex w-10 h-10 items-center justify-center rounded-full hover:bg-white/10 text-gray-400 hover:text-orange-500 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>

              {/* Cart */}
              <button className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 text-gray-400 hover:text-orange-500 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 rounded-full text-xs font-bold flex items-center justify-center animate-pulse">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* CTA Button */}
              <button className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-full font-bold transition transform hover:scale-105 shadow-lg shadow-orange-500/50">
                Shop Now
              </button>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 text-white transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/98 backdrop-blur-xl border-b border-white/10 animate-fade-in">
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
              {[
                { name: 'Home', href: '#home', id: 'home' },
                { name: 'Collection', href: '#collection', id: 'collection' },
                { name: 'Technology', href: '#features', id: 'features' },
                { name: 'Gallery', href: '#gallery', id: 'gallery' },
                { name: 'About', href: '#about', id: 'about' }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-lg font-semibold transition py-2 ${
                    activeSection === link.id 
                      ? 'text-orange-500' 
                      : 'text-gray-300 hover:text-orange-500'
                  }`}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <span className="ml-2 text-orange-500">●</span>
                  )}
                </a>
              ))}
              <button className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full font-bold transition transform hover:scale-105 mt-4">
                Shop Now
              </button>
            </div>
          </div>
        )}

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-300" 
             style={{ width: `${Math.min((scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)}%` }}>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-black to-blue-500/20"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=1920&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 backdrop-blur-lg rounded-full text-sm font-bold border border-orange-500/50">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              ✨ NEW COLLECTION 2026
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black leading-none">
              STEP INTO
              <br />
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                GREATNESS
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
              Experience the perfect fusion of cutting-edge technology and timeless design. 
              Engineered for champions, styled for legends.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="group px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition transform hover:scale-105 flex items-center gap-2">
                Explore Collection
                <span className="group-hover:translate-x-1 transition">→</span>
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-lg text-white font-bold rounded-full transition flex items-center gap-2">
                <span className="text-2xl">▶</span>
                Watch Video
              </button>
            </div>

            <div className="flex gap-12 pt-8 border-t border-white/10">
              <div className="group cursor-pointer">
                <div className="text-4xl font-black text-orange-500 group-hover:scale-110 transition">50K+</div>
                <div className="text-sm text-gray-500">Happy Customers</div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-4xl font-black text-orange-500 group-hover:scale-110 transition">4.9★</div>
                <div className="text-sm text-gray-500">Average Rating</div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-4xl font-black text-orange-500 group-hover:scale-110 transition">100+</div>
                <div className="text-sm text-gray-500">Unique Styles</div>
              </div>
            </div>
          </div>

            <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="relative z-10 animate-float">
              <img 
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80" 
                alt="Hero Sneaker"
                loading="lazy"
                className="w-full transform hover:scale-110 hover:rotate-6 transition duration-500 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-sm text-gray-500 mb-2">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto flex justify-center">
            <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-500 text-sm font-semibold tracking-wider">TRUSTED BY ATHLETES WORLDWIDE</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-50">
            {athletes.map((brand, i) => (
              <div key={i} className="flex items-center justify-center grayscale hover:grayscale-0 transition">
                <div className="text-2xl font-black text-white">{brand.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section id="collection" className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              Featured <span className="text-orange-500">Collection</span>
            </h2>
            <p className="text-gray-400 text-lg">Discover our most iconic designs</p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 border border-white/10">
                <img 
                  src={sneakerImages[selectedColor]}
                  alt="Featured Sneaker"
                  className="w-full transform hover:scale-110 transition duration-500"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <div className="text-sm text-orange-500 font-bold mb-2">SIGNATURE SERIES</div>
                <h3 className="text-4xl md:text-5xl font-black mb-4">STRIDE AIR ELITE</h3>
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="text-4xl font-black text-orange-500">$249</span>
                  <span className="text-xl text-gray-500 line-through">$349</span>
                  <span className="px-3 py-1 bg-red-500 text-white text-sm font-bold rounded-full">30% OFF</span>
                </div>
              </div>

              <p className="text-gray-400 text-lg leading-relaxed">
                Revolutionary air cushioning technology combined with premium materials. 
                Designed for peak performance and unmatched style. Features advanced breathability 
                and superior grip for any terrain.
              </p>

              <div>
                <div className="text-sm font-bold mb-4 flex items-center gap-2">
                  <span>SELECT SIZE</span>
                  <button className="text-orange-500 text-xs underline">Size Guide</button>
                </div>
                <div className="grid grid-cols-5 gap-2 mb-6">
                  {['7', '8', '9', '10', '11'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 rounded-lg border-2 font-bold transition transform hover:scale-105 ${
                        selectedSize === size 
                          ? 'border-orange-500 bg-orange-500 text-white' 
                          : 'border-gray-700 hover:border-orange-500'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-sm font-bold mb-4">SELECT COLOR</div>
                <div className="flex gap-4">
                  {Object.keys(sneakerImages).map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`relative w-14 h-14 rounded-full border-4 transition transform hover:scale-110 ${
                        selectedColor === color ? 'border-orange-500 scale-110' : 'border-gray-700'
                      } ${
                        color === 'white' ? 'bg-white' :
                        color === 'red' ? 'bg-red-500' :
                        color === 'blue' ? 'bg-blue-500' :
                        'bg-black'
                      }`}
                    >
                      {selectedColor === color && (
                        <span className="absolute inset-0 flex items-center justify-center text-2xl">
                          ✓
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={() => handleAddToCart('STRIDE AIR ELITE')}
                  className="flex-1 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <span>🛒</span>
                  Add to Cart
                </button>
                <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-lg text-white font-bold rounded-full transition transform hover:scale-105">
                  ♥
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                <div className="text-center">
                  <div className="text-2xl mb-1">🚚</div>
                  <div className="text-xs text-gray-400">Free Shipping</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-1">↩️</div>
                  <div className="text-xs text-gray-400">30-Day Returns</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-1">🔒</div>
                  <div className="text-xs text-gray-400">Secure Payment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-32 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              Premium <span className="text-orange-500">Technology</span>
            </h2>
            <p className="text-gray-400 text-lg">Engineered for excellence</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: '⚡', 
                title: 'Lightweight Design', 
                desc: 'Ultra-light construction without compromising durability',
                image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&q=80'
              },
              { 
                icon: '💨', 
                title: 'Breathable Mesh', 
                desc: 'Advanced ventilation system keeps your feet cool',
                image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400&q=80'
              },
              { 
                icon: '🛡️', 
                title: 'Maximum Durability', 
                desc: 'Premium materials built to withstand anything',
                image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=400&q=80'
              }
            ].map((feature, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition"
                />
                <div className="relative bg-gradient-to-b from-black/50 to-black/90 p-8 h-full backdrop-blur-sm border border-white/10 hover:border-orange-500/50 transition">
                  <div className="text-6xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              Lifestyle <span className="text-orange-500">Gallery</span>
            </h2>
            <p className="text-gray-400 text-lg">See our sneakers in action</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&q=80',
              'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&q=80',
              'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&q=80',
              'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&q=80',
              'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&q=80',
              'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&q=80',
              'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400&q=80',
              'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=400&q=80'
            ].map((img, i) => (
              <div key={i} className="relative group overflow-hidden rounded-xl aspect-square">
                <img 
                  src={img} 
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              Explore Our <span className="text-orange-500">Collection</span>
            </h2>
            <p className="text-gray-400 text-lg">Discover the perfect pair for your style</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, i) => (
              <div key={i} className="group relative bg-gradient-to-b from-gray-900 to-black rounded-2xl overflow-hidden border border-white/10 hover:border-orange-500/50 transition hover-lift">
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
                    {product.tag}
                  </span>
                </div>
                <button className="absolute top-4 left-4 z-10 w-10 h-10 bg-black/50 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-orange-500 transition">
                  ♥
                </button>
                <div className="relative overflow-hidden bg-gray-800 p-8 aspect-square flex items-center justify-center">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full transform group-hover:scale-110 group-hover:rotate-12 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition">{product.name}</h3>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black text-orange-500">${product.price}</span>
                      <span className="text-sm text-gray-500 line-through">${product.oldPrice}</span>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-sm">★</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2 mb-4">
                    {product.colors.map((color, idx) => (
                      <div
                        key={idx}
                        className={`w-6 h-6 rounded-full border-2 border-gray-700 ${
                          color === 'white' ? 'bg-white' :
                          color === 'red' ? 'bg-red-500' :
                          color === 'blue' ? 'bg-blue-500' :
                          'bg-black'
                        }`}
                      />
                    ))}
                  </div>
                  <button className="w-full px-6 py-3 bg-white/10 hover:bg-orange-500 text-white font-bold rounded-full transition transform hover:scale-105">
                    Quick Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Limited Edition Countdown */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-pink-900 to-orange-900"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1920&q=80')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-lg rounded-full text-sm font-bold border border-white/50">
                🔥 LIMITED EDITION DROP
              </div>
              
              <h2 className="text-5xl md:text-6xl font-black">
                EXCLUSIVE
                <br />
                <span className="text-yellow-400">GOLD EDITION</span>
              </h2>
              
              <p className="text-xl text-gray-200">
                Only 500 pairs worldwide. Premium gold-plated details with hand-stitched leather. 
                Don't miss your chance to own a piece of sneaker history.
              </p>

              <div className="grid grid-cols-4 gap-4">
                {[
                  { label: 'DAYS', value: timeLeft.days },
                  { label: 'HOURS', value: timeLeft.hours },
                  { label: 'MINS', value: timeLeft.minutes },
                  { label: 'SECS', value: timeLeft.seconds }
                ].map((item, i) => (
                  <div key={i} className="bg-black/50 backdrop-blur-lg rounded-2xl p-4 text-center border border-white/20">
                    <div className="text-4xl font-black text-yellow-400">{item.value}</div>
                    <div className="text-xs text-gray-400 mt-1">{item.label}</div>
                  </div>
                ))}
              </div>

              <button className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-black font-black rounded-full transition transform hover:scale-105">
                NOTIFY ME WHEN AVAILABLE
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-3xl opacity-50 animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80"
                alt="Limited Edition"
                className="relative z-10 w-full transform hover:scale-110 transition duration-500 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              What Our <span className="text-orange-500">Customers Say</span>
            </h2>
            <p className="text-gray-400 text-lg">Join thousands of satisfied sneaker enthusiasts</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              {testimonials.map((testimonial, i) => (
                <div
                  key={i}
                  className={`transition-all duration-500 ${
                    i === activeTestimonial ? 'opacity-100 block' : 'opacity-0 hidden'
                  }`}
                >
                  <div className="bg-gradient-to-br from-gray-800 to-black rounded-3xl p-12 border border-white/10">
                    <div className="flex items-center gap-6 mb-6">
                      <img 
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-orange-500"
                      />
                      <div>
                        <h4 className="text-2xl font-bold">{testimonial.name}</h4>
                        <p className="text-gray-400">{testimonial.role}</p>
                        <div className="flex gap-1 mt-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="text-yellow-400 text-xl">★</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-xl text-gray-300 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`w-3 h-3 rounded-full transition ${
                    i === activeTestimonial ? 'bg-orange-500 w-8' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section id="about" className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&q=80"
                alt="Our Story"
                className="rounded-3xl shadow-2xl transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl -z-10 blur-2xl opacity-50"></div>
              <div className="absolute top-8 left-8 bg-black/80 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <div className="text-4xl font-black text-orange-500 mb-1">4+</div>
                <div className="text-sm text-gray-400">Years of Excellence</div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-orange-500/20 backdrop-blur-lg rounded-full text-sm font-bold border border-orange-500/50">
                OUR STORY
              </div>
              <h2 className="text-5xl md:text-6xl font-black leading-tight">
                Crafted for
                <br />
                <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                  Champions
                </span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                Since 2020, STRIDE has been pushing the boundaries of sneaker innovation. 
                We believe that great shoes aren't just worn—they're experienced. Every pair 
                is meticulously designed by athletes, for athletes.
              </p>
              <p className="text-xl text-gray-400 leading-relaxed">
                Our mission is simple: create footwear that empowers you to reach new heights, 
                whether you're on the court, in the gym, or on the streets. We combine cutting-edge 
                technology with timeless design to deliver sneakers that perform as good as they look.
              </p>
              
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
                <div className="group cursor-pointer">
                  <div className="text-4xl font-black text-orange-500 group-hover:scale-110 transition">500K+</div>
                  <div className="text-sm text-gray-500">Pairs Sold</div>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-4xl font-black text-orange-500 group-hover:scale-110 transition">50+</div>
                  <div className="text-sm text-gray-500">Countries</div>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-4xl font-black text-orange-500 group-hover:scale-110 transition">98%</div>
                  <div className="text-sm text-gray-500">Satisfaction</div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition transform hover:scale-105">
                  Learn More
                </button>
                <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-lg text-white font-bold rounded-full transition">
                  Our Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Join the <span className="text-white">STRIDE</span> Family
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get exclusive access to new drops, special offers, and sneaker culture news
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-black font-semibold focus:outline-none focus:ring-4 ring-white/50"
            />
            <button className="px-8 py-4 bg-black hover:bg-gray-900 text-white font-bold rounded-full transition transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="text-4xl font-black mb-4">
                STRIDE<span className="text-orange-500">.</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Premium sneakers engineered for champions. Experience unparalleled comfort, 
                cutting-edge technology, and timeless design.
              </p>
              <div className="flex gap-3">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center cursor-pointer transition transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center cursor-pointer transition transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center cursor-pointer transition transform hover:scale-110"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center cursor-pointer transition transform hover:scale-110"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Shop Links */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-white">Shop</h4>
              <ul className="space-y-3">
                <li><a href="#collection" className="text-gray-400 hover:text-orange-500 transition">New Arrivals</a></li>
                <li><a href="#collection" className="text-gray-400 hover:text-orange-500 transition">Best Sellers</a></li>
                <li><a href="#collection" className="text-gray-400 hover:text-orange-500 transition">Limited Edition</a></li>
                <li><a href="#collection" className="text-gray-400 hover:text-orange-500 transition">Sale</a></li>
                <li><a href="#collection" className="text-gray-400 hover:text-orange-500 transition">Collections</a></li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-white">Support</h4>
              <ul className="space-y-3">
                <li><a href="#about" className="text-gray-400 hover:text-orange-500 transition">Contact Us</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-orange-500 transition">FAQs</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-orange-500 transition">Shipping Info</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-orange-500 transition">Returns & Exchanges</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-orange-500 transition">Size Guide</a></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-white">Company</h4>
              <ul className="space-y-3">
                <li><a href="#about" className="text-gray-400 hover:text-orange-500 transition">About Us</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-orange-500 transition">Our Story</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-orange-500 transition">Careers</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-orange-500 transition">Press</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-orange-500 transition">Sustainability</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
              <div className="text-center md:text-left text-gray-400 text-sm">
                © 2026 STRIDE. All rights reserved. Built with passion for sneaker culture.
              </div>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-orange-500 transition">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition">Cookie Policy</a>
              </div>
            </div>
            
            {/* Beautiful Credit Section */}
            <div className="flex items-center justify-center gap-2 text-sm pt-4 border-t border-white/5">
              <span className="text-gray-500">Made with</span>
              <span className="text-red-500 animate-pulse text-lg">❤️</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-400">Crafted by</span>
              <span className="font-bold bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                Amit
              </span>
              <span className="text-orange-500">✨</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {scrollY > 500 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-40 w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-full flex items-center justify-center shadow-2xl shadow-orange-500/50 transition transform hover:scale-110 animate-fade-in"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  )
}

export default App
