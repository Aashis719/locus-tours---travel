
import React, { useState } from 'react';
import AnimatedText from './ui/AnimatedText';

const testimonials = [
  {
    id: 1,
    quote: "When we had an emergency and needed to change our flight dates overseas, Locus Tours was incredibly responsive and helpful. Their quick action and professionalism were truly appreciated. We'll definitely book with them again.",
    author: "Suresh Bhattarai",
    location: "Travel - United States",
    image: "https://imgs.search.brave.com/gRXWnkunzTtP3UW5oFElEBtDSm2sxvnf6V4TYk9b-IY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/MzZiOTY4YWMzOGRk/MTQ5NWVjNGVkY2Qv/NjNjOTdmOWM4NmQx/MjY1MTBhYmVmNzhl/X2luLXRyZWVzX0Fu/ZHJpaSUyMEFJJTIw/cGhvdG8lMjBhdmF0/YXIlMjBEeXZvLndl/YnA"
  },

  {
    id: 2,
    quote: "We booked our family flights through Locus Tours and were so impressed with their customer service. They made the whole process easy and helped us find great deals. Highly recommend!",
    author: "Binod & Priya Rai",
    location: "Family Trip - Thailand",
    image: "https://imgs.search.brave.com/y7zS-gz8S_t6S7rjXQ2-aYxQP7ZbVRXbCsavuopk48g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by8z/ZC1wb3J0cmFpdC1o/YXBweS1jb3VwbGVf/MjMtMjE1MDc5Mzgx/My5qcGc_c2VtdD1h/aXNfaHlicmlkJnc9/NzQw"
  },
  {
    id: 3,
    quote: "The Japan cultural tour was amazing. When we needed to arrange our flights, Locus Tours was so helpful and efficient. Their customer service truly goes above and beyond.",
    author: "Ramesh Thapa",
    location: "Japan Cultural Tour",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 4,
    quote: "Our safari with Locus Tours was incredible! Booking our flights through them was also seamless. They handled everything with such care, making our entire trip stress-free.",
    author: "Prakash & Sita Sharma",
    location: "Kenya Safari",
    image: "https://imgs.search.brave.com/duELma47fjhsJJwga-H6hUXFMP6AYNb251o9LH5GNAQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjAw/Mzc4MDYwLTAwMS9w/aG90by9jb3VwbGUt/b24tc2FmYXJpLWlu/LTR4NC1ob2xkaW5n/LWJpbm9jdWxhcnMt/c21pbGluZy5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9ZHY2/WnJIWk1udEtXNGRV/b1E0bW82M3plREpN/eE1Jb1pORnYzeDdN/YXY3QT0"
  },
 
  {
    id: 5,
    quote: "As a solo traveler, I appreciated the security Locus Tours provided for my island hopping adventure. Booking my flights with them was also easy and they were always available to answer my questions.",
    author: "Aayush Bista",
    location: "Greece Island Hopping",
    image: "https://imgs.search.brave.com/Q-GxitYwi8fBxddXgvnDg7s0iA5fGCmVJuCjlcYYVXA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zb2xv/dHJhdmVsZXJ3b3Js/ZC5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjMvMDMvMi5q/cGc"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  const prev = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <AnimatedText 
            text='<span class="text-sm uppercase tracking-wider font-medium text-orange-500">Traveler Stories</span>'
            delay={100}
          />
          <AnimatedText 
            text='<h2 class="text-4xl md:text-5xl font-bold mt-3 mb-6 text-[#0C0C0C]">What Our <span class="text-orange-500">Clients</span> Say</h2>'
            delay={300}
          />
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-sm flex flex-col items-center text-center">
                    <svg className="w-12 h-12 text-orange-300 mb-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    
                    <p className="text-xl md:text-2xl text-gray-700 italic mb-8">{testimonial.quote}</p>
                    
                    <div className="mt-auto">
                      <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <h4 className="font-semibold text-[#0C0C0C]">{testimonial.author}</h4>
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-10 flex justify-center gap-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-orange-500' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#0C0C0C] hover:text-orange-500 transition-colors pointer-events-auto"
              aria-label="Previous testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#0C0C0C] hover:text-orange-500 transition-colors pointer-events-auto"
              aria-label="Next testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
