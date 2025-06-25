import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Destinations.css';
import EnquiryForm from './EnquiryForm'; 
import ModalDestinations from './Destination/ModalDestinations'; 
// Import the new modal component
interface Flight {
  city: string;
  country: string;
  image: string;
  price: number;
  details: string[];
}

const NepalDestinations = [
    {
      city: 'Kathmandu Valley Cultural Tour',
      country: 'Nepal',
      image: 'https://images.pexels.com/photos/28867843/pexels-photo-28867843/free-photo-of-kathmandu-durbar-square-temple-on-a-sunny-day.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: 999,
      details: ['Explore Patan & Bhaktapur too.', 'Visit ancient Durbar Squares.', 'Experience heritage & culture.'],
    },
    {
      city: 'Pokhara Adventure Retreat',
      country: 'Nepal',
      image: 'https://images.pexels.com/photos/31761382/pexels-photo-31761382/free-photo-of-colorful-boats-on-lake-in-pokhara-nepal.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: 899,
      details: ['Scenic Pokhara exploration.', 'Boating on Phewa Lake.', 'Sunrise view from Sarangkot.'],
    },
    {
      city: 'Chitwan Wildlife Safari',
      country: 'Nepal',
      image: 'https://images.pexels.com/photos/9206628/pexels-photo-9206628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: 1199,
      details: ['Experience the Terai wilderness.', 'Jeep & elephant safaris.', 'Bird watching & nature walks.'],
    },
    {
      city: 'Lumbini Spiritual Journey',
      country: 'Nepal',
      image: 'https://images.pexels.com/photos/7331531/pexels-photo-7331531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: 799,
      details: ['Discover birthplace of Buddha.', 'Explore sacred monasteries.', 'Peaceful & reflective experience.'],
    },
    {
      city: 'Annapurna Foothills Trek',
      country: 'Nepal',
      image: 'https://www.muchbetteradventures.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Fm5us57n7qfgl%2F37z7JL9wpDc9PLEClk23Qt%2Fad2a26cb1f812b07b70ae8b51a1d90a3%2FGettyImages-1149200669.jpg&w=2048&q=50',
      price: 1299,
      details: ['Short and scenic trek in Annapurna.', 'Experience Gurung culture.', 'Breathtaking mountain vistas.'],
    },
    {
      city: 'Kathmandu Explorer',
      country: 'Nepal',
      image: 'https://images.pexels.com/photos/1706205/pexels-photo-1706205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: 1599,
      details: ['Best of both worlds: culture & nature.', 'Explore Kathmandu\'s heritage.', 'Enjoy Pokhara\'s beauty.'],
    },
    {
      city: 'Everest Region Scenic Flight',
      country: 'Nepal',
      image: 'https://images.pexels.com/photos/28625167/pexels-photo-28625167/free-photo-of-majestic-mount-everest-through-vibrant-prayer-flags.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: 499,
      details: ['Breathtaking aerial views of Everest.', 'See the world\'s highest peaks.', 'A memorable experience.'],
    },
    {
      city: 'Glimpse of Nepal Tour',
      country: 'Nepal',
      image: 'https://images.pexels.com/photos/28387044/pexels-photo-28387044/free-photo-of-majestic-himalayan-mountain-range-in-nepal.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: 1099,
      details: ['Highlights of Whole Nepal.', 'Cultural immersion and natural beauty.', 'Perfect for first-time visitors.'],
    },
  ];

const ForeignDestinationCard: React.FC<{ DiscoverNepal: Flight; onEnquiryClick: (DiscoverNepal: Flight) => void }> = ({ DiscoverNepal, onEnquiryClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={DiscoverNepal.image} alt={DiscoverNepal.city} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {DiscoverNepal.city}, <span className="text-gray-600">{DiscoverNepal.country}</span>
        </h3>
        <div className="flex items-center justify-between mb-3">
          <span className="text-lg font-bold text-orange-500">${DiscoverNepal.price}</span>
        </div>
        <div>
          <h4 className="text-md font-semibold text-gray-700 mb-1">Highlights:</h4>
          <ul className="list-disc list-inside text-gray-600 text-sm">
            {DiscoverNepal.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <p className="text-gray-700 text-sm italic">Interested in visiting {DiscoverNepal.city}?</p>
          <button
            className="mt-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            onClick={() => onEnquiryClick(DiscoverNepal)}
          >
            Send Enquiry
          </button>
        </div>
      </div>
    </div>
  );
};

const DiscoverNepal: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<Flight | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const filteredDestinations = NepalDestinations.filter((DiscoverNepal) =>
    DiscoverNepal.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    DiscoverNepal.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEnquiryClick = (destination: Flight) => {
    setSelectedDestination(destination);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDestination(null);
  };

  if (loading) {
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-gray-100 flex justify-center items-center z-50">
        {/* <div className="takeoff-container">
          <div className="plane"></div>
          <div className="smoke"></div>
        </div> */}
        <p className="mt-4 text-lg text-gray-600">Travel with <span className='text-orange-500'>Locus...</span></p>
      </div>
    );
  }

  return (
    <div className="py-2 pb-12 md:py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <div className="text-gray-600 text-sm mb-2">
            <Link to="/" className=" hover:text-orange-500 ">
              Home
            </Link>
            <span className="mx-2">&gt;</span>
            <span className='text-orange-500 font-semibold'>Destinations in Nepal</span>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Locus <span className="text-orange-500">Tours and Travels</span>
          </h2>
          <p className="mt-2 text-lg text-gray-500">
            Discover exciting cities around the world for your next journey.
          </p>
        </div>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search for a city or country"
            className="w-full px-4 py-2 border border-gray-300 focus:outline-none rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredDestinations.map((destination) => (
            <ForeignDestinationCard
              key={destination.city}
              DiscoverNepal={destination}
              onEnquiryClick={handleEnquiryClick}
            />
          ))}
        </div>
        {filteredDestinations.length === 0 && searchTerm && (
          <div className="text-center mt-6 text-gray-500">
            No destinations found matching your search term.
          </div>
        )}

        {/* Modal */}
        <ModalDestinations
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          destination={selectedDestination}
        />

        <EnquiryForm />
      </div>
    </div>
  );
};

export default DiscoverNepal;