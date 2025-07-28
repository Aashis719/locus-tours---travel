
import React from 'react';
import AnimatedText from './ui/AnimatedText';

const services = [
  { 
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    ),
    title: 'Custom Tours',
    description: 'Tailor-made journeys designed around your interests, schedule, and travel style.'
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    title: 'Group Travel',
    description: 'Expertly guided small-group tours that foster connection while exploring remarkable destinations.'
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
      </svg>
    ),
    title: 'Solo Escapes',
    description: 'Thoughtfully designed journeys for independent travelers with built-in support and social opportunities.'
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    ),
    title: 'Corporate Retreats',
    description: 'Productive team-building experiences that combine business objectives with memorable adventures.'
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="pt-20  md:pt-25 pb-10 bg-gray-50">
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
          {/* <AnimatedText 
            text='<p class="text-lg text-gray-600">From personalized itineraries to expertly guided adventures, we deliver travel experiences that exceed expectations.</p>'
            delay={500}
          /> */}
        </div>
        
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <AnimatedText 
              key={index}
              text={`<div class="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 group">
                <h3 class="text-xl font-bold mb-4 text-gray-900">${service.title}</h3>
                <p class="text-gray-600">${service.description}</p>
              </div>`}
              delay={300 + (index * 100)}
              threshold={0.1}
            />
          ))}
        </div> */}
        
       
      </div>
    </section>
  );
};

export default ServicesSection;
