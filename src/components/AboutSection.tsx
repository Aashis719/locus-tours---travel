
import React from 'react';
import AnimatedText from './ui/AnimatedText';
import { Globe } from 'lucide-react';

const AboutSection = () => {
  const milestones = [
    {
      year: '2022',
      title: 'Founded in Nepal',
      description: 'Started with a mission to simplify flight booking and support travelers. '
    },
    {
      year: '2023',
      title: 'Growing Trust',
      description: 'Served thousands with fast, reliable flight booking and customer care.'
    },
    {
      year: '2024',
      title: '24/7 Support',
      description: 'Launched round-the-clock service to assist travelers anytime, anywhere.'
    },
    {
      year: '2025',
      title: 'Smarter Travel',
      description: 'Introduced booking flights quicker and more personalized.'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <AnimatedText 
              text='<span class="text-sm uppercase tracking-wider font-medium text-orange-500"><span class="text-2xl">|</span> Our Story</span>'
              delay={50}
            />
            <AnimatedText 
              text='<h2 class="text-4xl md:text-5xl font-bold mt-3 mb-8 text-[#0C0C0C]">About Locus <span class="text-orange-500">Tours</span></h2>'
              delay={100}
            />
            <AnimatedText 
              text='<p class="text-lg text-gray-600 mb-6">Founded in 2022, Locus Tours and Travel is a Nepal-based flight booking agency focused on making travel simple and stress-free. We believe booking a trip should be easy, exciting, and accessible to everyone.

</p>'
              delay={200}
              threshold={0.1}
            />
            <AnimatedText 
              text='<p class="text-lg text-gray-600 mb-8">With fast online booking, 24/7 support, and a helpful team, we are here to make every flight smooth and reliable — whether you are traveling for business or adventure.</p>'
              delay={400}
              threshold={0.1}
            />
            
            <div className="mt-10 space-y-6">
              <AnimatedText 
                text='<div class="flex items-center gap-4">
                  <span class="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-500">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </span>
                  <div>
                    <h4 class="text-lg font-semibold text-[#0C0C0C]">50+ Global Destinations</h4>
                    <p class="text-gray-600">Spanning across six continents</p>
                  </div>
                </div>'
                delay={600}
                threshold={0.1}
              />
              
              <AnimatedText 
                text='<div class="flex items-center gap-4">
                  <span class="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-500">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </span>
                  <div>
                    <h4 class="text-lg font-semibold text-[#0C0C0C]">24/7 Dedicated Support</h4>
                    <p class="text-gray-600">Always at your service, anywhere you go</p>
                  </div>
                </div>'
                delay={800}
                threshold={0.1}
              />
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -left-10 -top-10 w-40 h-40 bg-orange-100 rounded-full opacity-60 filter blur-3xl"></div>
            <div className="relative z-10">
              <AnimatedText 
                text='<h3 class="text-2xl font-bold mb-8 text-[#0C0C0C]">Our Journey</h3>'
                delay={100}
                threshold={0.1}
              />
              
              <div className="space-y-8 relative">
                <div className="absolute left-[18px] top-[30px] bottom-0 w-[2px] bg-gray-200"></div>
                
                {milestones.map((milestone, index) => (
                  <AnimatedText 
                    key={index}
                    text={`<div class="relative flex gap-6">
                      <div class="flex-none">
                        <div class="w-10 h-10 rounded-full border-4 border-orange-500 bg-white flex items-center justify-center z-10 relative">
                        <div class="w-2 h-2 bg-orange-600/80  "> </div>  <Globe size={14} className="text-orange-500" />
                        </div>
                      </div>
                      <div class="flex-1">\
                        <span class="text-orange-500 font-semibold block mb-1">${milestone.year}</span>
                        <h4 class="text-lg font-semibold text-[#0C0C0C] mb-2">${milestone.title}</h4>
                        <p class="text-gray-600">${milestone.description}</p>
                      </div>
                    </div>`}
                    delay={300 + (index * 200)}
                    threshold={0.1}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
