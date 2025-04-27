import { FaPlaneDeparture, FaClock, FaMoneyBillWave, FaExchangeAlt } from 'react-icons/fa'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import AnimatedText from './ui/AnimatedText';


const FlightBookingSection = () => {
  return (
    <div className="bg-gray-50 pb-12 pt-20 md:pt-0" id='flights'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
           <div className='flex items-center justify-center gap-2 md:pt-5'>
           <span className='text-3xl  '><FaPlaneDeparture/></span>
        <AnimatedText
            text={`<h2 class="text-3xl font-bold flex justify-center text-orange-500 mb-2">
              <span class="mr-2 text-gray-800">
 </span>
              <span> <span class='text-gray-800'>Flight</span> Booking </span>
            </h2>`}
            delay={100}
          />

           </div>
          
          <p className="mt-1 text-lg text-gray-500 ">
          Seamless flight booking for domestic and international trips — best routes, best prices, hassle-free journeys.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-20 mt-10 md:p-2">
          <div className="flex flex-col items-center group cursor-pointer  ">
            <div className="rounded-full bg-gray-100 p-3 text-orange-500 mb-2 group-hover:bg-orange-500 group-hover:text-gray-100 group-hover:rotate-12 group-hover:scale-105 transition duration-300">
              <FaMoneyBillWave className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-1 text-center">Best Fare Guarantee</h3>
            <p className="text-gray-500 text-sm text-center">Get the most competitive fares across major airlines.</p>
          </div>

          <div className="flex flex-col items-center group cursor-pointer  ">
            <div className="rounded-full bg-gray-100 p-3 text-orange-500 mb-2 group-hover:bg-orange-500 group-hover:text-gray-100 group-hover:rotate-12 group-hover:scale-105 transition duration-300">
            <FontAwesomeIcon icon={faMapMarkedAlt} className="h-6 w-6" />            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-1 text-center">Custom Flight Plans</h3>
            <p className="text-gray-500 text-sm text-center">Tailored flight options that fit your travel plans perfectly.</p>
          </div>

          <div className="flex flex-col items-center group cursor-pointer  ">
            <div className="rounded-full bg-gray-100 p-3 text-orange-500 mb-2 group-hover:bg-orange-500 group-hover:text-gray-100 group-hover:rotate-12 group-hover:scale-105 transition duration-300">
              <FaClock className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-1 text-center ">24/7 Support</h3>
            <p className="text-gray-500 text-sm text-center">Round-the-clock assistance for all your flight needs.</p>
          </div>

          <div className="flex flex-col items-center group cursor-pointer  ">
            <div className="rounded-full bg-gray-100 p-3 text-orange-500 mb-2 group-hover:bg-orange-500 group-hover:text-gray-100 group-hover:rotate-12 group-hover:scale-105 transition duration-300">
              <FaExchangeAlt className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-1 text-center">Flexible Options</h3>
            <p className="text-gray-500 text-sm text-center">Easy changes, cancellations, and upgrades.</p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-2xl">
            <span className="mr-2">✈️</span> Explore Flight Services ➔
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightBookingSection;