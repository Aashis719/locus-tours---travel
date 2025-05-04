import React, { useRef } from 'react';
import AnimatedText from './ui/AnimatedText';
import { Mail, Phone, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';

const CtaSection = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .sendForm(
        'service_1js4n1i', 
        'template_dqtfgxc',
        formRef.current!,
        'Zpyv556tuOPUfuzDe'
      )
      .then(
        (result) => {
          toast.success('Message Sent successfully!✅', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          // Reset the form
          formRef.current?.reset();
        },
        (error) => {
          console.error('Email sending failed:', error.text);
          // Show error toast
          toast.error('Failed to Send Message', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      );
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <AnimatedText 
                text='<h2 class="text-3xl md:text-4xl font-bold mb-8 text-[#0C0C0C]">
                  <span class="text-orange-500">Where will your next story</span> take you?
                </h2>'
                delay={50}
              />
              
              <AnimatedText 
                text='<p class="text-lg text-gray-600 mb-8">Ready to embark on an unforgettable journey? Reach out to our travel experts today and start planning your next adventure.</p>'
                delay={200}
              />
              
              <div className="space-y-6 mb-8">
                <AnimatedText 
                  text='<div class="flex items-start gap-4">
                    <span class="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </span>
                    <div>
                      <h4 class="font-medium text-[#0C0C0C]">Call Us</h4>
                      <p class="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>'
                  delay={300}
                />
                
                <AnimatedText 
                  text='<div class="flex items-start gap-4">
                    <span class="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </span>
                    <div>
                      <h4 class="font-medium text-[#0C0C0C]">Email Us</h4>
                      <p class="text-gray-600">info@locustours.com</p>
                    </div>
                  </div>'
                  delay={400}
                />
              </div>
              
              <div className="flex space-x-4">
                <AnimatedText 
                  text='<a href="https://www.facebook.com/profile.php?id=61554803972585" target="_blank" class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-orange-500 hover:text-white transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>'
                  delay={500}
                />
                
                <AnimatedText 
                  text='<a href="https://www.instagram.com/kmlnp47/" target="_blank" class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-orange-500 hover:text-white transition-colors">
                     <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                       <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-2a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"/>
                     </svg>
                  </a>'
                   delay={600}
                  />

                
                <AnimatedText 
                  text='<a href="https://x.com/" target="_blank" class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-orange-500 hover:text-white transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>'
                  delay={700}
                />
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 md:p-12 lg:p-16">
              <AnimatedText 
                text='<h3 class="text-2xl font-bold mb-6 text-[#0C0C0C]">Plan My Trip</h3>'
                delay={100}
              />
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <AnimatedText 
                  text='<div>
                    <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your full name" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition" />
                  </div>'
                  delay={200}
                />
                
                <AnimatedText 
                  text='<div>
                    <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your email address" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition" />
                  </div>'
                  delay={300}
                />
                
                <AnimatedText 
                  text='<div>
                    <label for="destination" class="block text-sm font-medium text-gray-700 mb-1">Preferred Destination</label>
                    <select id="destination" name="destination" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition">
                      <option value="" selected disabled>Select destination</option>
                      <option value="europe">Europe</option>
                      <option value="asia">Asia</option>
                      <option value="africa">Africa</option>
                      <option value="northamerica">North America</option>
                      <option value="southamerica">South America</option>
                      <option value="oceania">Australia & Pacific</option>
                    </select>
                  </div>'
                  delay={400}
                />
                
                <AnimatedText 
                  text='<div>
                    <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea id="message" name="message" rows="4" placeholder="Tell us about your travel plans" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"></textarea>
                  </div>'
                  delay={500}
                />
                
                <AnimatedText 
                  text='<button type="submit" class="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-colors">
                    Send Inquiry
                    <svg class="ml-2 w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </button>'
                  delay={600}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default CtaSection;