import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Destinations.css'; // Import CSS for animation
import EnquiryForm from './EnquiryForm'; // Import the EnquiryForm component
import ModalDestinations from './Destination/ModalDestinations'; // Import the new modal component

interface Flight {
  city: string;
  country: string;
  image: string;
  price: number;
  details: string[];
}
// Sample data for foreign destinations 
const foreignDestinationsData: Flight[] = [
  {
    city: 'New York',
    country: 'United States',
    image: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 799,
    details: ['Iconic skyline.', 'World-class museums.', 'Vibrant Broadway.'],
  },
  {
    city: 'Paris',
    country: 'France',
    image: 'https://images.pexels.com/photos/460740/pexels-photo-460740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 849,
    details: ['Eiffel Tower.', 'Artistic heritage.', 'Charming cafes.'],
  },
  {
    city: 'London',
    country: 'United Kingdom',
    image: 'https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 749,
    details: ['Historic landmarks.', 'World-renowned museums.', 'West End theatre.'],
  },
  
  {
    city: 'Rome',
    country: 'Italy',
    image: 'https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 779,
    details: ['Ancient wonders.', 'Vatican City.', 'Delicious food.'],
  },
  {
    city: 'Bangkok',
    country: 'Thailand',
    image: 'https://images.pexels.com/photos/3538236/pexels-photo-3538236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 649,
    details: ['Temples and palaces.', 'Bustling markets.', 'Vibrant nightlife.'],
  },
  {
    city: 'Singapore',
    country: 'Singapore',
    image: 'https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 899,
    details: ['Gardens by the Bay.', 'Diverse cuisine.', 'Modern architecture.'],
  },
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
    city: 'Chitwan Wildlife ',
    country: 'Nepal',
    image: 'https://images.pexels.com/photos/9206628/pexels-photo-9206628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 1199,
    details: ['Experience the Terai wilderness.', 'Jeep & elephant safaris.', 'Bird watching & nature walks.'],
  },
  {
    city: 'Amsterdam',
    country: 'Netherlands',
    image: 'https://images.pexels.com/photos/967292/pexels-photo-967292.jpeg?auto=compress&cs=tinysrgb&w=1200',
    price: 729,
    details: ['Canals and bridges.', 'Art museums.', 'Charming architecture.'],
  },
  {
    city: 'Dubai',
    country: 'United Arab Emirates',
    image: 'https://images.pexels.com/photos/325193/pexels-photo-325193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 699,
    details: ['Modern skyscrapers.', 'Luxury shopping.', 'Desert adventures.'],
  },
  {
    city: 'Kuala Lumpur',
    country: 'Malaysia',
    image: 'https://images.pexels.com/photos/22804/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 599,
    details: ['Petronas Twin Towers.', 'Diverse culture.', 'Delicious food.'],
  },
];

const ForeignDestinationCard: React.FC<{ destination: Flight; onEnquiryClick: (destination: Flight) => void }> = ({ destination, onEnquiryClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={destination.image} alt={destination.city} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {destination.city}, <span className="text-gray-600">{destination.country}</span>
        </h3>
        <div className="flex items-center justify-between mb-3">
          <span className="text-lg font-bold text-orange-500">${destination.price}</span>
        </div>
        <div>
          <h4 className="text-md font-semibold text-gray-700 mb-1">Highlights:</h4>
          <ul className="list-disc list-inside text-gray-600 text-sm">
            {destination.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <p className="text-gray-700 text-sm italic">Interested in visiting {destination.city}?</p>
          <button
            className="mt-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            onClick={() => onEnquiryClick(destination)}
          >
            Send Enquiry
          </button>
        </div>
      </div>
    </div>
  );
};

const Destinations: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<Flight | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const filteredDestinations = foreignDestinationsData.filter((destination) =>
    destination.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    destination.country.toLowerCase().includes(searchTerm.toLowerCase())
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
            <span className='text-orange-500 font-semibold'>Destinations</span>
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
              destination={destination}
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

export default Destinations;