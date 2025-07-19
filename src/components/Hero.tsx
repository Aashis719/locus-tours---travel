import React, { useEffect, useState, useMemo, useRef } from 'react';
import AnimatedText from './ui/AnimatedText';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import { Link } from "react-router-dom";
// import { ArrowRight } from 'lucide-react'; // Uncomment if  you want to use the arrow icon
const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [tripType, setTripType] = useState('one-way'); // Default to 'one-way'
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [nationality, setNationality] = useState('');
  const [passengers, setPassengers] = useState<number>(1);
  const fromInputRef = useRef<HTMLInputElement>(null);

  // Get today's date in YYYY-MM-DD format for input restriction
  const today = new Date().toISOString().split('T')[0];

  // Array of background images
  const backgroundImages = useMemo(() => [
    { url: '/images/bg-image.avif', alt: 'Majestic mountain range' },
    { url: '/images/bg2.jpeg', alt: 'Tropical beach paradise' },
    { url: '/images/dubai.webp', alt: 'Ancient ruins at sunset' },
    { url: '/images/bg5.jpeg', alt: 'Vibrant city skyline' },
    { url: '/images/plane.webp', alt: 'Serengeti plains' },
  ], []);

  useEffect(() => {
    setLoaded(true);

    // Preload only the first image
    if (backgroundImages.length > 0) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = backgroundImages[0].url;
      link.as = 'image';
      document.head.appendChild(link);
    }

    // Slideshow interval
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages]);

  const handleTripTypeChange = (type: 'one-way' | 'round-trip') => {
    setTripType(type);
    if (type === 'one-way') {
      setReturnDate('');
    }
  };

  const handleSearch = async () => {
    const serviceId = 'service_ah6q4pb';
    const templateId = 'template_odz8wsa';
    const publicKey = 'PjuDu9oreE6lgFGqI';

    const templateParams = {
      tripType,
      departure,
      arrival,
      departureDate,
      returnDate: tripType === 'round-trip' ? returnDate : 'N/A',
      mobileNumber,
      passengers,
      nationality
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      toast.success('Flight details sent successfully!');
      setDeparture('');
      setArrival('');
      setDepartureDate('');
      setReturnDate('');
      setMobileNumber('');
      setNationality('');
      setTripType('one-way');
    } catch (error: unknown) {
      console.error('Failed to send email:', error);
      toast.error('Failed to send flight details.');
    }
  };

  return (
    <section id="hero" className="relative min-h-screen md:h-screen pt-20 md:pt-0 overflow-hidden">
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
      <div className={`container mx-auto px-4 md:px-6 relative z-20 pb-2 md:pb-10 md:pt-10 text-center ${
        !loaded ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0 transition-all duration-1000 ease-out md:pt-10'
      }`}>
        <AnimatedText
          text='<h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl md:mt-20 lg:mt-24 font-bold text-white mb-2 leading-tight ">
                    Explore the world with <span class="text-orange-500"> Locus Tours</span>
                  </h1>'
          delay={300}
        />

        <AnimatedText
          text='<p class="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto hidden xl:hidden   font-light">
                    Curated, adventurous, and unforgettable travel experiences across the globe.
                  </p>'
          delay={600}
        />
        <AnimatedText
          text='<p class="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl hidden md:block   mx-auto font-light">
                    Your trusted partner for domestic and international travel.
                  </p>'
          delay={600}
        />

        <div className=' px-2 md:px-10'>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 md:p-6 mb-4 md:mb-8">
            <div className="flex space-x-2 mb-4   justify-center md:justify-start rounded-full overflow-hidden">
              <button
                className={`px-4 py-2 text-sm md:text-base font-medium text-white transition-colors duration-300 rounded-xl ${
                  tripType === 'one-way' ? 'bg-orange-500' : 'hover:bg-white/30'
                }`}
                onClick={() => handleTripTypeChange('one-way')}
              >
                One Way
              </button>
              <button
                className={`px-4 py-2 text-sm md:text-base font-medium text-white transition-colors duration-300 rounded-xl ${
                  tripType === 'round-trip' ? 'bg-orange-500' : 'hover:bg-white/30'
                }`}
                onClick={() => handleTripTypeChange('round-trip')}
              >
                Round Trip
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left md:text-center mobile-grid-adjust">
              <div className="relative">
                <input
                  type="text"
                  id="from"
                  ref={fromInputRef}
                  className="block w-full   p-3 md:p-4 text-white bg-transparent border border-white/30 rounded-md focus:outline-none focus:border-orange-500 peer"
                  placeholder=" "
                  value={departure}
                  onChange={(e) => setDeparture(e.target.value)}
                />
                <label
                  htmlFor="from"
                  className="absolute text-sm   text-white   duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 transition-all"
                >
                  From
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="to"
                  ref={fromInputRef}
                  className="block w-full p-3 md:p-4 text-white bg-transparent border border-white/30 rounded-md focus:outline-none focus:border-orange-500 peer"
                  placeholder=" "
                  value={arrival}
                  onChange={(e) => setArrival(e.target.value)}
                />
                <label
                  htmlFor="to"
                  className="absolute text-sm md:text-base text-white duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 transition-all"
                >
                  To
                </label>
              </div>

              <div className="relative">
                <select
                  id="passengers"
                  className="block w-full p-3 md:p-4 group text-white bg-transparent border peer border-white/30 rounded-md focus:outline-none focus:border-orange-500"
                  value={passengers}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setPassengers(Number(e.target.value))}
                >
                  {[...Array(6)].map((_, i) => (
                    <option
                      key={i + 1}
                      value={i + 1}
                      className="text-white bg-orange-500/90  "
                    >
                      {i + 1} {i === 0 ? 'Passenger' : 'Passengers'}
                    </option>
                  ))}
                </select>
                <label
                  htmlFor="passengers"
                  className="absolute text-sm md:text-base  focus:text-orange-500 text-white duration-300 transform -translate-y-4 scale-75 top-2  md:top-8 z-10 origin-[0]   px-2 peer-focus:px-2 peer-focus:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 transition-all"
                >
                  Passengers
                </label>
              </div>

              <div className="relative">
                <input
                  type="date"
                  id="departureDate"
                  className="block w-full p-3 md:p-4 text-white bg-transparent  border border-white/30 rounded-md focus:outline-none focus:border-orange-500 peer"
                  placeholder=" "
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  min={today}
                />
                <label
                  htmlFor="departureDate"
                  className="absolute text-sm md:text-base text-white duration-300 transform -translate-y-4 scale-75 top-2 md:top-8 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 transition-all"
                >
                  Departure Date
                </label>
              </div>
              {tripType === 'round-trip' && (
                <div className="relative">
                  <input
                    type="date"
                    id="returnDate"
                    className="block w-full p-3 md:p-4 text-white bg-transparent border border-white/30 rounded-md focus:outline-none focus:border-orange-500 peer"
                    placeholder=" "
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    min={departureDate || today} // Ensure return date is not before departure
                  />
                  <label
                    htmlFor="returnDate"
                    className="absolute text-sm md:text-base text-white duration-300 transform -translate-y-4 scale-75 top-2 md:top-8 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 transition-all"
                  >
                    Return Date
                  </label>
                </div>
              )}
              <div className='flex gap-2'>
                <div className="relative">
                  <input
                    type="tel"
                    id="mobileNumber"
                    className="block w-full p-3 md:p-4 text-white bg-transparent border border-white/30 rounded-md focus:outline-none focus:border-orange-500 peer"
                    placeholder=" "
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                  />
                  <label
                    htmlFor="mobileNumber"
                    className="absolute text-sm md:text-base md:text-left text-white duration-300 transform -translate-y-4 scale-75 top-2 md:left-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-orange-500 focus:bg-transparent peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 transition-all"
                  >
                    Mobile Number
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    id="Nationality"
                    className="block w-full p-3 md:p-4 text-white bg-transparent border border-white/30 rounded-md focus:outline-none focus:border-orange-500 peer"
                    placeholder=" "
                    value={nationality}
                    onChange={(e) => setNationality(e.target.value)}
                  />
                  <label
                    htmlFor="Nationality"
                    className="absolute text-sm md:text-base   text-white duration-300 transform -translate-y-4 scale-75 top-2 md:left-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 transition-all"
                  >
                    Nationality
                  </label>
                </div>
              </div>
              <div className="md:col-span-1 lg:col-span-1">
                <button
                  onClick={handleSearch}
                  className="inline-flex items-center justify-center w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 md:py-4 rounded-md text-lg font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
                >
                  Send Enquiry
                  {/* <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} /> */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={` pb-20   mx-auto   text-center transform ${
        loaded ? 'translate-y-0 opacity-100 ' : 'translate-y-10 opacity-0'
      }`}>
        <Link
          to="/destinations"
          className="inline-flex items-center justify-center w-72 h-12 rounded-full border-2    border-white/50    bg-white/20 text-white hover:bg-white/30 transition-colors duration-300"
          aria-label="Scroll to Destinations"
        >
          Explore Packages &nbsp;
          <div>
            <svg width="24" height="18" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 9H26M26 9L19 2M26 9L19 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;