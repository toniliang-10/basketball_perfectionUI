// Home.js
import React, { useState, useEffect, useRef } from 'react';
import '../css/Home.css';

const products = [
  { 
    name: 'Shot Analyzer Device', 
    price: '$149.99',
    description: 'One-time purchase for the physical device that captures and analyzes your shooting form',
    icon: '🏀',
    buttonText: 'Buy Device'
  },
  { 
    name: 'Pro Membership', 
    price: '$9.99 / month',
    description: 'Unlimited use of the device and analytics with personalized feedback and coaching',
    icon: '👑',
    buttonText: 'Subscribe'
  },
];

// Create a custom basketball loader component
const BasketballLoader = () => {
  return (
    <div className="basketball-loader">
      <div className="basketball">
        <div className="ball-lines"></div>
      </div>
    </div>
  );
};

// Simple arrow icon component
const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6"/>
  </svg>
);

const MotionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 22l10-10L7 2"/>
  </svg>
);

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const videoRef = useRef(null);
  
  // Video section animation on load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  // Add parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const header = document.querySelector('.hero-content');
      if (header) {
        header.style.transform = `translateY(${scrollPosition * 0.4}px)`;
        header.style.opacity = Math.max(1 - scrollPosition / 500, 0.2);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section with Video */}
      <section className="hero-section">
        <div className="video-background">
          <div className="overlay"></div>
          {!isLoaded && <BasketballLoader />}
          <video
            ref={videoRef}
            className={`background-video ${isLoaded ? 'loaded' : ''}`}
            autoPlay
            muted
            loop
            playsInline
            poster="/videos/poster.jpg"
          >
            {/* PLACEHOLDER: Replace with your actual hero video */}
            <source src="/videos/perfect-shot.mp4" type="video/mp4" />
            Your browser doesn't support video playback.
          </video>
        </div>
        
        <div className={`hero-content ${isLoaded ? 'fade-in' : ''}`}>
          <div className="logo-container">
            <img src="/raw.png" alt="Elbo Logo" className="brand-logo" />
          </div>
          <h1 className="main-title">Perfect Your Shot with Elbo</h1>
          <p className="subtitle">
            Advanced analytics and personalized training to elevate your basketball shooting performance
          </p>
          <button className="cta-button">
            Start Your Journey
            <ChevronRight />
          </button>
        </div>
        
        {/* Bouncing down arrow */}
        <div className="scroll-indicator">
          <svg className="down-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="before-after-section" id="results">
        <div className="container">
          <div className="section-header">
            <h2>Real Results</h2>
            <div className="divider"></div>
            <p>See the transformation with our shot analysis technology</p>
          </div>
          
          <div className="video-comparison">
            <div className="comparison-video">
              <h3>Before Training</h3>
              <div className="video-container">
                <video
                  controls
                  poster="/videos/before-poster.jpg"
                  className="comparison-player"
                >
                  {/* PLACEHOLDER: before video */}
                  <source src="/videos/missing_shot_badly.mp4" type="video/mp4"/>
                  Your browser doesn't support video.
                </video>
              </div>
              <p>Common shooting errors affecting accuracy</p>
            </div>
            
            <div className="comparison-separator">
              <div className="arrow-right"></div>
            </div>
            
            <div className="comparison-video">
              <h3>After 2 Weeks</h3>
              <div className="video-container">
                <video
                  controls
                  poster="/videos/after-poster.jpg"
                  className="comparison-player"
                >
                  {/* PLACEHOLDER: after video */}
                  <source src="/videos/nick_half_court_shot.mp4" type="video/mp4" />
                  Your browser doesn't support video.
                </video>
              </div>
              <p>Improved form, consistency and 24% better accuracy</p>
            </div>
          </div>
          
          <div className="improvements-summary">
            <div className="improvement-stat">
              <span className="stat-number">24%</span>
              <span className="stat-label">Accuracy Improvement</span>
            </div>
            <div className="improvement-stat">
              <span className="stat-number">2</span>
              <span className="stat-label">Weeks Training</span>
            </div>
            <div className="improvement-stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Higher Confidence</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section" id="buy">
        {/* Background basketball pattern */}
        <div className="background-pattern">
          <div className="ball-outline ball-1"></div>
          <div className="ball-outline ball-2"></div>
        </div>
        
        <div className="container">
          <div className="section-header">
            <h2>Elevate Your Game</h2>
            <div className="divider"></div>
            <p>Choose the tools that fit your journey to shooting perfection</p>
          </div>
          
          <div className="product-grid">
            {products.map((product, index) => (
              <div 
                key={product.name}
                className={`product-card ${index === 0 ? 'blue-card' : 'orange-card'} 
                  ${activeCard === index ? 'active' : ''}`}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="card-content">
                  <div className="card-header">
                    <div className="product-icon">
                      {product.icon}
                    </div>
                    <MotionIcon />
                  </div>
                  
                  <h3>{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  
                  <div className="card-footer">
                    <span className="price">{product.price}</span>
                    <button className="buy-button">
                      {product.buttonText}
                      <ChevronRight />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="container">
          <div className="testimonial-card">
            <div className="quote-mark">"</div>
            <p className="testimonial-text">
              The Shot Analyzer completely transformed my game. In just three weeks, my shooting percentage increased by 24%. The real-time feedback is a game-changer!
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">MB</div>
              <div className="author-details">
                <p className="author-name">Nicholas Stamatakis</p>
                <p className="author-title">College Basketball Player</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}