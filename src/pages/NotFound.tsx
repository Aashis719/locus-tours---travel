import { useLocation } from "react-router-dom";
import { useEffect } from "react";
// Ensure you have the necessary packages installed: npm install react-router-dom
const NotFound = () => {
  const location = useLocation(); 

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="text-center relative z-10">
        {/* Floating Astronaut */}
        <div className="relative mb-6">
          <div className="animate-bounce-slow w-32 h-32 mx-auto">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="40" fill="#ffffff" />
              <circle cx="50" cy="50" r="30" fill="#e0e0e0" />
              <circle cx="50" cy="30" r="10" fill="#000000" />
              <path
                d="M35 50 Q50 60 65 50"
                stroke="#000000"
                strokeWidth="3"
                fill="none"
              />
            </svg>
          </div>
          {/* Floating Bubbles for Fun */}
          <div className="absolute top-0 left-1/2 w-4 h-4 bg-blue-400 rounded-full animate-float-slow"></div>
          <div className="absolute top-10 right-1/3 w-3 h-3 bg-blue-300 rounded-full animate-float-slow delay-500"></div>
        </div>

        {/* 404 Text */}
        <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-wider animate-pulse">
          404
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-6">
          Oops! This page is lost in space 🚀
        </p>
        <p className="text-md text-gray-400 mb-8 italic">
          "Houston, we have a problem... This route doesn’t exist!"
        </p>

        {/* Return Home Button */}
        <a
          href="/"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          Beam Me Back Home
        </a>
      </div>

      {/* Background Stars */}
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default NotFound;