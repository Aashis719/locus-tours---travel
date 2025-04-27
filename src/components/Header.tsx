
import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Destinations', href: '#experiences' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  

  ];
  const mnavLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Destinations', href: '#experiences' },
    { name: 'Services', href: '#services' },
    { name: 'Flight Booking', href: '#flights' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  

  ];

  return (
    <header 
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white md:bg-transparent  ${
      isScrolled ? 'bg-white bg-opacity-90 shadow-sm backdrop-blur-sm py-2 md:py-4 md:bg-white' : 'bg-transparent  py-2 md:py-6'
    }`} >

      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-[#0C0C0C] md:ml-15">
          {/* <span className="text-orange-500">Locus</span> Tours */}
          <img src="/images/logo.png" alt="logo" width={80}/>
        </a>
        
        {/* Desktop Navigation */}
        <nav
         className={`hidden md:flex items-center space-x-8 transition-all duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
        
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className=" text-base font-medium hover:text-orange-500 transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-orange-500 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-colors">
            Book Now
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-[#0C0C0C]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white bg-opacity-95 backdrop-blur-sm shadow-lg">
          <nav className="container mx-auto px-4 pt-2 pb-6 flex flex-col space-y-4">
            {mnavLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-[#0C0C0C] text-lg font-medium hover:text-orange-500 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-colors w-full text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
