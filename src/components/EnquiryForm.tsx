// EnquiryForm.tsx
import React, { useState, useEffect } from 'react';
import { format, addDays } from 'date-fns';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

interface EnquiryFormProps {} // eslint-disable-line @typescript-eslint/no-empty-object-type

const EnquiryForm: React.FC<EnquiryFormProps> = () => {
  const [name, setName] = useState('');
  const [preferredDestinations, setPreferredDestinations] = useState('');
  const [numberOfDays, setNumberOfDays] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [nationality, setNationality] = useState('Nepali');
  const [isSending, setIsSending] = useState(false);
  const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

  useEffect(() => {
    if (fromDate && numberOfDays) {
      const startDate = new Date(fromDate);
      const days = parseInt(numberOfDays, 10);
      if (!isNaN(days)) {
        const endDate = addDays(startDate, days - 1);
        setToDate(format(endDate, 'yyyy-MM-dd'));
      } else {
        setToDate('');
      }
    } else {
      setToDate('');
    }
  }, [fromDate, numberOfDays]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSending(true);

    const enquiryData = {
      name,
      preferredDestinations,
      numberOfDays,
      numberOfPeople,
      contactNumber,
      fromDate,
      toDate,
      nationality,
    };

    try {
      const result = await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          name: name,
          preferredDestinations: preferredDestinations,
          numberOfDays: numberOfDays,
          numberOfPeople: numberOfPeople,
          contactNumber: contactNumber,
          fromDate: fromDate,
          toDate: toDate,
          nationality: nationality,
        },
        'YOUR_PUBLIC_KEY'
      );
      console.log('Email sent successfully:', result);
      toast.success('Enquiry sent successfully! We will get back to you soon.');
      setName('');
      setPreferredDestinations('');
      setNumberOfDays('');
      setNumberOfPeople('');
      setContactNumber('');
      setFromDate('');
      setToDate('');
      setNationality('Nepali');
    } catch (error: unknown) {
      console.error('Failed to send email:', error);
      toast.error('Failed to send enquiry. Please try again later.');
    } finally {
      setIsSending(false);
    }
  };

  const handleFromDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFromDate(event.target.value);
  };

  const handleNumberOfDaysChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfDays(event.target.value);
  };

  const handleNumberOfPeopleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfPeople(event.target.value);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Can't find your perfect package?</h3>
      <p className="text-gray-600 mb-4">Tell us your preferences and we'll create a custom packages for you.</p>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="preferredDestinations" className="block text-gray-700 text-sm font-bold mb-2">
            Preferred Destinations:
          </label>
          <input
            type="text"
            id="preferredDestinations"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={preferredDestinations}
            onChange={(e) => setPreferredDestinations(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="numberOfDays" className="block text-gray-700 text-sm font-bold mb-2">
              Number of Days:
            </label>
            <input
              type="number"
              id="numberOfDays"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={numberOfDays}
              onChange={handleNumberOfDaysChange}
            />
          </div>
          <div>
            <label htmlFor="numberOfPeople" className="block text-gray-700 text-sm font-bold mb-2">
              No. of People:
            </label>
            <input
              type="number"
              id="numberOfPeople"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={numberOfPeople}
              onChange={handleNumberOfPeopleChange}
            />
          </div>
        </div>
        <div>
          <label htmlFor="contactNumber" className="block text-gray-700 text-sm font-bold mb-2">
            Contact Number:
          </label>
          <input
            type="tel"
            id="contactNumber"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="fromDate" className="block text-gray-700 text-sm font-bold mb-2">
            From :
          </label>
          <input
            type="date"
            id="fromDate"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={fromDate}
            onChange={handleFromDateChange}
            min={today} // Set the minimum date to today
          />
        </div>
        <div>
          <label htmlFor="toDate" className="block text-gray-700 text-sm font-bold mb-2">
            To :
          </label>
          <input
            type="date"
            id="toDate"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={toDate}
            readOnly
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="nationality" className="block text-gray-700 text-sm font-bold mb-2">
            Nationality:
          </label>
          <div className="flex items-center space-x-4">
            <label>
              <input
                type="radio"
                value="Nepali"
                checked={nationality === 'Nepali'}
                onChange={(e) => setNationality(e.target.value)}
                className="mr-2"
              />
              Nepali
            </label>
            <label>
              <input
                type="radio"
                value="Asian"
                checked={nationality === 'Asian'}
                onChange={(e) => setNationality(e.target.value)}
                className="mr-2"
              />
              Asian
            </label>
            <label>
              <input
                type="radio"
                value="Other Country"
                checked={nationality === 'Other Country'}
                onChange={(e) => setNationality(e.target.value)}
                className="mr-2"
              />
              Other Country
            </label>
          </div>
        </div>
        <div className="md:col-span-2 m-4 text-center">
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm md:text-base py-2 px-4 rounded focus:outline-none focus:shadow-outline text-center w-full lg:w-[25%]"
            disabled={isSending}
          >
            {isSending ? 'Sending...' : 'Send Custom Package Enquiry'}
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}; 

export default EnquiryForm;