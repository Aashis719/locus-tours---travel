
import React from 'react';
 
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0C0C0C] text-white py-12 pb-8 md:py-20 md:pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ">
          <div>
            <a href="#" className="text-2xl font-bold mb-6 block">
              <span className="text-orange-500">Locus</span> <span >Tours & Travels</span>
            </a>
            <p className="text-gray-400 mb-6">
            
              Your trusted partner for domestic and international travel
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61554803972585" className="text-gray-400 hover:text-orange-500 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/kmlnp47/" className="text-gray-400 hover:text-orange-500 transition-colors" target="_blank">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-2a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"/>
                </svg>
              </a>

              <a href="https://x.com/" className="text-gray-400 hover:text-orange-500 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
             
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#hero" className="text-gray-400 hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#experiences" className="text-gray-400 hover:text-orange-500 transition-colors">Destinations</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-orange-500 transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-orange-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Popular Destinations</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Pokhara, Nepal</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Tokyo, Japan</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Dubai, UAE</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Singapore</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">California, USA</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6">Support & Policies </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Map</a></li>
              {/* <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Singapore</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">California, USA</a></li> */}
            </ul>
          </div>


          
          {/* <div>
            <h4 className="text-lg font-semibold mb-6">Stay Updated</h4>
            <p className="text-gray-400 mb-4">Subscribe for travel tips and exclusive offers.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-r-lg transition-colors"
                aria-label="Subscribe"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </div> */}
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0 ">
            © {currentYear} Locus Tours and Travel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
