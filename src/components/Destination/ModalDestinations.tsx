// ModalDestinations.tsx
import React, { useRef, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

interface ModalDestinationsProps {
  isOpen: boolean;
  onClose: () => void;
  destination: {
    city: string;
    country: string;
    image: string;
    price: number;
  } | null;
}

const ModalDestinations: React.FC<ModalDestinationsProps> = ({ isOpen, onClose, destination }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [nationality, setNationality] = useState('Nepali');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = 'var(--scrollbar-width, 0)';
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    const calculateScrollbarWidth = () => {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
    };

    calculateScrollbarWidth();
    window.addEventListener('resize', calculateScrollbarWidth);

    return () => {
      window.removeEventListener('resize', calculateScrollbarWidth);
    };
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!destination) return;

    setIsSubmitting(true);

    const enquiryData = {
      name,
      contactNumber,
      numberOfPeople,
      fromDate,
      nationality,
      destinationCity: destination.city,
      destinationCountry: destination.country,
      destinationPrice: destination.price,
    };

    try {
      const result = await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        enquiryData,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );
      console.log('Email sent successfully:', result);
      toast.success('Enquiry submitted successfully! We will get back to you soon.');
      setName('');
      setContactNumber('');
      setNumberOfPeople('');
      setFromDate('');
      setNationality('Nepali');
      onClose();
    } catch (error: unknown) {
      console.error('Failed to send email:', error);
      toast.error('Failed to submit enquiry. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen || !destination) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center">
      <div ref={modalRef} className="bg-white rounded-lg shadow-xl overflow-hidden max-w-lg w-full m-2 max-h-[82vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img src={destination.image} alt={destination.city} className="w-full h-32 object-cover" /> {/* Shorter image */}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Enquiry for {destination.city}, <span className="text-gray-600">{destination.country}</span>
          </h3>
          <p className="text-lg font-bold text-orange-500 mb-4">${destination.price}</p>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Name:
              </label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-orange-500 focus:shadow-outline"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="contactNumber" className="block text-gray-700 text-sm font-bold mb-2">
                  Contact Number:
                </label>
                <input
                  type="tel"
                  id="contactNumber"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-orange-500 focus:shadow-outline"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="numberOfPeople" className="block text-gray-700 text-sm font-bold mb-2">
                  No. of People:
                </label>
                <input
                  type="number"
                  id="numberOfPeople"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-orange-500 focus:shadow-outline"
                  value={numberOfPeople}
                  onChange={(e) => setNumberOfPeople(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="fromDate" className="block text-gray-700 text-sm font-bold mb-2">
                From Date:
              </label>
              <input
                type="date"
                id="fromDate"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-orange-500 focus:shadow-outline"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                min={today}
                required
              />
            </div>

            <div>
              <label htmlFor="nationality" className="block text-gray-700 text-sm font-bold mb-2">
                Nationality:
              </label>
              <select
                id="nationality"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-orange-500 focus:shadow-outline"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
              >
                <option>Nepali</option>
                <option>Asian</option>
                <option>Other Country</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ModalDestinations;