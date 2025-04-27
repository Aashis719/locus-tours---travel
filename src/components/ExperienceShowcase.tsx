
import React, { useRef } from 'react';
import AnimatedText from './ui/AnimatedText';

const experiences = [
  {
    id: 1,
    title: 'Discover Nepal',
    location: 'Kathmandu, Pokhara & Beyond',
    description: 'Book your flights to the heart of Nepal and explore ancient temples, serene lakes, and majestic mountains with ease and comfort.',
    image: 'https://images.pexels.com/photos/31761382/pexels-photo-31761382/free-photo-of-colorful-boats-on-lake-in-pokhara-nepal.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    title: 'Global Getaways',
    location: 'Dubai, Bangkok, Singapore',
    description: 'From the golden deserts of Dubai to the vibrant streets of Bangkok and futuristic Singapore — we make flying to your dream destinations effortless.',
    image: 'https://images.pexels.com/photos/3243025/pexels-photo-3243025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    title: 'Seamless Business Travel',
    location: 'Worldwide',
    description: 'Whether it’s a quick meeting or an important conference, our flight booking services ensure smooth, reliable, and stress-free business travel around the world.',
    image: 'https://images.pexels.com/photos/7412001/pexels-photo-7412001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];


const ExperienceShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div id="experiences" className="py-20 pb-0 md:py-32 md:pb-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6" ref={sectionRef}>
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
            <AnimatedText 
              text="<span class='text-sm uppercase tracking-wider font-medium text-orange-500'>Unforgettable destinations</span>"
              delay={100}
            />
            <AnimatedText 
              text="<h2 class='text-4xl md:text-5xl font-bold mt-3 mb-6 text-[#0C0C0C]'>Signature Experiences</h2>"
              delay={300}
            />
            <AnimatedText 
              text="<p class='text-lg text-gray-600'>Embark on carefully crafted journeys designed to immerse you in the world's most extraordinary places and cultures.</p>"
              delay={500}
            />
          </div>

          <div className=" space-y-20   md:space-y-32">
            {experiences.map((experience, index) => (
              <div 
                key={experience.id} 
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center bg-white shadow-sm p-2 py-4 md:p-0 md:py-0 md:bg-transparent md:shadow-none rounded-xl`}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative overflow-hidden rounded-2xl group">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10 opacity-70 group-hover:opacity-90 transition-opacity" />
                    <img 
                      src={experience.image} 
                      alt={experience.title} 
                      className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                      <span className="text-sm text-orange-300 font-medium uppercase tracking-wider">{experience.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-1/2">
                  <AnimatedText
                    text={`<h3 class="text-3xl md:text-4xl font-bold mb-4 text-[#0C0C0C]">${experience.title}</h3>`}
                    delay={index * 100 + 100}
                    threshold={0.2}
                  />
                  <AnimatedText
                    text={`<p class="text-lg text-gray-600 mb-6">${experience.description}</p>`}
                    delay={index * 100 + 300}
                    threshold={0.2}
                  />
                  <AnimatedText
                    text='<a href="#" class="inline-flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors group ml-3 md:ml-0">Explore this journey <svg class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></a>'
                    delay={index * 100 + 500}
                    threshold={0.2}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceShowcase;
