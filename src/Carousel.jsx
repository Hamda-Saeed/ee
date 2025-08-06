import { useState, useRef } from "react";
import { slides } from "./constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useGSAP(() => {
    // Smooth filmstrip animation
    gsap.to(".filmstrip", {
      x: `-${currentSlide * 100}%`,
      duration: 1.0,
      ease: "power2.out"
    });

    // Reset all polaroids
    gsap.set(".polaroid", { 
      scale: 0.85, 
      opacity: 0.6, 
      zIndex: 1,
      rotationY: 12,
      rotationX: 3,
      x: 0,
      y: 0
    });
    
    // Current slide - centered and properly sized for screen
    gsap.to(`.polaroid:nth-child(${currentSlide + 1})`, { 
      scale: 0.95,
      opacity: 1,
      zIndex: 15,
      rotationY: 0,
      rotationX: 0,
      x: 0,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    });

    // Previous slide peek
    if (currentSlide > 0) {
      gsap.to(`.polaroid:nth-child(${currentSlide})`, {
        scale: 0.8,
        opacity: 0.7,
        rotationY: 20,
        rotationX: 2,
        x: "10%",
        y: "2%",
        zIndex: 8,
        duration: 0.6
      });
    }
    
    // Next slide peek
    if (currentSlide < slides.length - 1) {
      gsap.to(`.polaroid:nth-child(${currentSlide + 2})`, {
        scale: 0.8,
        opacity: 0.7,
        rotationY: -20,
        rotationX: 2,
        x: "-10%",
        y: "2%",
        zIndex: 8,
        duration: 0.6
      });
    }

  }, [currentSlide]);

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden py-6">
      {/* Background matching website theme - REMOVED */}

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
        {/* Properly Sized Polaroid Carousel */}
        <div className="relative w-full h-[55vh] mb-10 perspective-600">
          <div className="filmstrip flex h-full relative preserve-3d justify-center items-center">
            {slides.map((slide, index) => (
              <div 
                key={index}
                className="polaroid absolute w-full h-full flex items-center justify-center px-4 transform-gpu"
                style={{ left: `${index * 100}%` }}
              >
                <div className="relative w-full h-full max-w-sm bg-white p-5 shadow-lg transform rotate-1 hover:rotate-0 transition-all duration-400 rounded-sm border border-gray-100">
                  {/* Authentic Polaroid tape */}
                  <div className="absolute -top-1 left-1/2 w-12 h-3 bg-yellow-200/60 transform -translate-x-1/2 rotate-12 rounded-sm shadow-sm"></div>
                  <div className="absolute -top-0.5 right-6 w-8 h-2 bg-yellow-100/50 transform rotate-45 rounded-sm shadow-sm"></div>
                  
                  {/* Image container with classic proportions */}
                  <div className="w-full h-[75%] overflow-hidden rounded-sm shadow-inner relative bg-gray-50 border border-gray-100">
                    <img
                      src={slide.img}
                      alt={slide.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-102"
                    />
                    
                    {/* Subtle vintage overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/20 via-transparent to-orange-50/15 pointer-events-none"></div>
                    
                    {/* Subtle film grain */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none vintage-grain"></div>
                    
                    {/* Aesthetic hover overlay with buttons */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
                      {slide.github && (
                        <a 
                          href={slide.github} 
                          target="_blank" 
                          rel="noreferrer"
                          className="group relative px-4 py-2 rounded-full text-white text-sm font-semibold overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105
                          before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent before:animate-shine before:opacity-0 group-hover:before:opacity-100"
                        >
                          <span className="relative flex items-center gap-2 z-10">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                            </svg>
                            GitHub
                          </span>
                        </a>
                      )}
                      {slide.demo && (
                        <a 
                          href={slide.demo} 
                          target="_blank" 
                          rel="noreferrer"
                          className="group relative px-4 py-2 rounded-full text-white text-sm font-semibold overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105
                          before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent before:animate-shine before:opacity-0 group-hover:before:opacity-100"
                        >
                          <span className="relative flex items-center gap-2 z-10">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
                            </svg>
                            Demo
                          </span>
                        </a>
                      )}
                    </div>
                  </div>
                  
                  {/* Classic Polaroid info section */}
                  <div className="mt-3 space-y-1">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <p className="text-xs text-gray-500 font-mono tracking-wide">PROJECT {String(index + 1).padStart(2, '0')}</p>
                        <h3 className="text-base font-semibold text-gray-800 mt-0.5">{slide.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">{slide.description}</p>
                    
                    {/* Compact action buttons - REMOVED */}
                    <div className="flex gap-1.5 pt-1">
                    </div>
                  </div>
                  
                  {/* Authentic Polaroid shadow */}
                  <div className="absolute inset-0 -z-10 bg-black/15 transform translate-x-1 translate-y-1 rounded-sm"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clean, Minimal Navigation */}
        <div className="flex items-center justify-center gap-6">
          <button 
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 flex items-center justify-center hover:bg-white hover:border-gray-300 transition-all duration-200 shadow-sm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-600">
              <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <div className="flex gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 shadow-sm">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-200 rounded-full ${
                  currentSlide === index 
                    ? 'w-6 h-1.5 bg-gradient-to-r from-purple-600 to-pink-600' 
                    : 'w-1.5 h-1.5 bg-gray-400 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
          
          <button 
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 flex items-center justify-center hover:bg-white hover:border-gray-300 transition-all duration-200 shadow-sm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-600">
              <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Minimal CSS Animations */}
      <style jsx>{`
        .perspective-600 {
          perspective: 600px;
        }
        
        .preserve-3d {
          transform-style: preserve-3d;
        }
        
        .vintage-grain {
          background-image: 
            radial-gradient(circle at 20% 30%, rgba(139,69,19,0.08) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(160,82,45,0.06) 0%, transparent 40%),
            radial-gradient(circle at 40% 60%, rgba(210,180,140,0.04) 0%, transparent 40%);
          background-size: 15px 15px, 20px 20px, 10px 10px;
          animation: vintage-drift 25s linear infinite;
        }
        
        @keyframes vintage-drift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(15px, 15px); }
        }
        
        @keyframes dust-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.2; }
          50% { transform: translateY(-10px) rotate(180deg); opacity: 0.4; }
        }
        
        .animate-dust-float {
          animation: dust-float 20s ease-in-out infinite;
        }
        
        .bg-radial-gradient {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-30deg);
          }
          100% {
            transform: translateX(200%) skewX(-30deg);
          }
        }

        .animate-shine {
          animation: shine 1.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default Carousel;
