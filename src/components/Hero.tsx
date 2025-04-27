import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedText from './ui/AnimatedText';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of background images
  const backgroundImages = [
    { url: '/images/bg-image.avif', alt: 'Majestic mountain range' },
    { url: '/images/bg2.jpeg', alt: 'Tropical beach paradise' },
    { url: '/images/dubai.webp', alt: 'Ancient ruins at sunset' },
    { url: '/images/bg5.jpeg', alt: 'Vibrant city skyline' },
    { url: '/images/plane.webp', alt: 'Serengeti plains' },
  ];

  useEffect(() => {
    setLoaded(true);

    // Preload all images
    backgroundImages.forEach((image) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = image.url;
      link.as = 'image';
      document.head.appendChild(link);
    });

    // Slideshow interval
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative h-screen md:h-screen pt-20 md:pt-0 overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        {backgroundImages.map((image, index) => (
          <img
            key={image.url}
            src={image.url}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            alt={image.alt}
            loading="lazy"
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 md:px-6 relative z-20 py-20 mt-20 text-center">
        <div className={`transition-all duration-1000 ease-out md:pt-10 transform ${
          loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <AnimatedText 
            text='<h1 class="text-4xl md:text-5xl mt-10 md:mt-20 lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight ">
              Explore the world with <span class="text-orange-500"> Locus Tours</span>
            </h1>'
            delay={300}
          />
          
          <AnimatedText 
            text='<p class="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto font-light">
              Curated, adventurous, and unforgettable travel experiences across the globe.
            </p>'
            delay={600}
          />
          
          <div className={`transition-all duration-1000 delay-[900ms] ease-out transform md:pt-0 ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <a 
              href="#experiences"
              className="inline-flex items-center scroll-smooth bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
            >
              Start Your Journey
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className={`mt-10 pb-20  mx-auto hidden md:block text-center transform ${
            loaded ? 'translate-y-0 opacity-100 ' : 'translate-y-10 opacity-0'
          }`}>
            <a 
              href="#experiences"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-white/50 text-white hover:bg-white/20 transition-colors duration-300"
              aria-label="Scroll down"
            >
              <svg width="18" height="28" viewBox="0 0 18 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 2L9 26M9 26L16 19M9 26L2 19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
    </section>
  );
};

export default Hero;