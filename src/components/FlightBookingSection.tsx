import {  FaClock, FaMoneyBillWave, FaExchangeAlt } from 'react-icons/fa'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import AnimatedText from './ui/AnimatedText';
import { Link } from "react-router-dom";
//
const FlightBookingSection = () => {
  return (
    <div className="bg-gray-50 pb-12 pt-20  md:pt-40 " id='services'>
      <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-2">

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-4 md:mb-10">
          <AnimatedText 
            text='<span class="text-sm uppercase tracking-wider font-medium text-orange-500">What We Offer</span>'
            delay={100}
          />
          <AnimatedText 
            text='<h2 class="text-4xl md:text-5xl font-bold mt-3 mb-6 text-[#0C0C0C]">Our <span class="text-orange-500">Services</span></h2>'
            delay={300}
          />
         
        </div>
        
      
       
      </div>

        <div className="text-center mb-8">
        
          <p className="mt-1 text-lg text-gray-500 ">
          Seamless flight booking for domestic and international trips — best routes, best prices, hassle-free journeys.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-20 mt-10 md:py-6">
          <div className="flex flex-col items-center group cursor-pointer  ">
            <div className="rounded-full bg-gray-100 p-3 text-orange-500 mb-2 group-hover:bg-orange-500 group-hover:text-gray-100 group-hover:rotate-12 group-hover:scale-105 md:group-hover:scale-100 transition duration-300">
              <FaMoneyBillWave className="h-6 w-6 md:h-8 md:w-8" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-1 text-center">Best Fare Guarantee</h3>
            <p className="text-gray-500 text-sm text-center">Get the most competitive fares across major airlines.</p>
          </div>

          <div className="flex flex-col items-center group cursor-pointer  ">
            <div className="rounded-full bg-gray-100 p-3 text-orange-500 mb-2 group-hover:bg-orange-500 group-hover:text-gray-100 group-hover:rotate-12 group-hover:scale-105 md:group-hover:scale-100 transition duration-300">
            <FontAwesomeIcon icon={faMapMarkedAlt} className="h-6 w-6 md:h-8 md:w-8" />            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-1 text-center">Custom Flight Plans</h3>
            <p className="text-gray-500 text-sm text-center">Tailored flight options that fit your travel plans perfectly.</p>
          </div>

          <div className="flex flex-col items-center group cursor-pointer  ">
            <div className="rounded-full bg-gray-100 p-3 text-orange-500 mb-2 group-hover:bg-orange-500 group-hover:text-gray-100 group-hover:rotate-12 group-hover:scale-105md:group-hover:scale-100 transition duration-300">
              <FaClock className="h-6 w-6 md:h-8 md:w-8" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-1 text-center ">24/7 Support</h3>
            <p className="text-gray-500 text-sm text-center">Round-the-clock assistance for all your flight needs.</p>
          </div>

          <div className="flex flex-col items-center group cursor-pointer  ">
            <div className="rounded-full bg-gray-100 p-3 text-orange-500 mb-2 group-hover:bg-orange-500 group-hover:text-gray-100 group-hover:rotate-12 group-hover:scale-105 md:group-hover:scale-100 transition duration-300">
              <FaExchangeAlt className="h-6 w-6 md:h-8 md:w-8" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-1 text-center">Flexible Options</h3>
            <p className="text-gray-500 text-sm text-center">Easy changes, cancellations, and upgrades.</p>
          </div>
        </div>

        <div className="mt-10 md:mt-16 text-center ">
               <Link
           to="/destinations"
           className="inline-flex items-center justify-center w-72 h-12 rounded-full border-2 bg-orange-500 hover:bg-orange-700 text-white font-semibold py-3 px-6   border-none  transition-colors duration-300"
           aria-label="Scroll to Destinations"
         >
         Explore Packages &nbsp;
         <div>
         <svg width="24" height="18" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M2 9H26M26 9L19 2M26 9L19 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
         </svg>
         </div>
         
         </Link>
         
        </div>
      </div>
    </div>
  );
};

export default FlightBookingSection;