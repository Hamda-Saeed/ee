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
    // Filmstrip animation
    gsap.to(".filmstrip", {
      x: `-${currentSlide * 100}%`,
      duration: 1.2,
      ease: "power3.out"
    });

    // Current slide highlight with enhanced 3D effect
    gsap.to(".polaroid", { 
      scale: 0.85, 
      opacity: 0.6, 
      zIndex: 1,
      rotationY: 15,
      rotationX: 5,
      duration: 0.8
    });
    
    gsap.to(`.polaroid:nth-child(${currentSlide + 1})`, { 
      scale: 1,
      opacity: 1,
      zIndex: 10,
      rotationY: 0,
      rotationX: 0,
      duration: 0.8,
      ease: "back.out(1.4)"
    });

    // Side cards peek effect
    if (currentSlide > 0) {
      gsap.to(`.polaroid:nth-child(${currentSlide})`, {
        scale: 0.9,
        opacity: 0.7,
        rotationY: 25,
        x: "20%",
        zIndex: 5,
        duration: 0.8
      });
    }
    
    if (currentSlide < slides.length - 1) {
      gsap.to(`.polaroid:nth-child(${currentSlide + 2})`, {
        scale: 0.9,
        opacity: 0.7,
        rotationY: -25,
        x: "-20%",
        zIndex: 5,
        duration: 0.8
      });
    }
  }, [currentSlide]);

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden py-10">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Polaroid Carousel with 3D perspective */}
        <div className="relative w-full h-[70vh] mb-16 perspective-1000">
          <div className="filmstrip flex h-full relative preserve-3d">
            {slides.map((slide, index) => (
              <div 
                key={index}
                className="polaroid absolute w-full h-full flex items-center justify-center px-4 transform-gpu"
                style={{ left: `${index * 100}%` }}
              >
                <div className="relative w-full h-full max-w-lg bg-white p-6 shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-500 rounded-lg">
                  {/* Polaroid tape effect */}
                  <div className="absolute -top-3 left-1/2 w-20 h-6 bg-yellow-200/80 transform -translate-x-1/2 rotate-12 rounded-sm shadow-sm"></div>
                  <div className="absolute -top-2 right-8 w-16 h-5 bg-yellow-200/60 transform rotate-45 rounded-sm shadow-sm"></div>
                  
                  {/* Image container with curved corners */}
                  <div className="w-full h-[70%] overflow-hidden rounded-xl shadow-inner relative bg-gray-100">
                    <img
                      src={slide.img}
                      alt={slide.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    
                    {/* Vintage film overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/10 via-transparent to-orange-300/10 pointer-events-none"></div>
                    
                    {/* Film grain effect */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none film-grain"></div>
                  </div>
                  
                  {/* Info section */}
                  <div className="mt-4 space-y-3">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <p className="text-xs text-gray-500 font-mono tracking-wider">PROJECT {String(index + 1).padStart(2, '0')}</p>
                        <h3 className="text-xl font-bold text-gray-800 mt-1">{slide.title}</h3>
                      </div>
                      
                      {/* Enhanced Action Buttons */}
                      <div className="flex gap-2 ml-4">
                        {slide.demo && (
                          <a 
                            href={slide.demo} 
                            target="_blank" 
                            rel="noreferrer"
                            className="group relative px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                          >
                            <span className="flex items-center gap-1">
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 12L8 10l5.5-5.5 1.5 1.5L10 12z"/>
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd"/>
                              </svg>
                              Demo
                            </span>
                          </a>
                        )}
                        {slide.github && (
                          <a 
                            href={slide.github} 
                            target="_blank" 
                            rel="noreferrer"
                            className="group relative px-4 py-2 bg-gray-900 text-white text-xs font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                          >
                            <span className="flex items-center gap-1">
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                              </svg>
                              GitHub
                            </span>
                          </a>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">{slide.description}</p>
                  </div>
                  
                  {/* Polaroid shadow */}
                  <div className="absolute inset-0 -z-10 bg-black/20 transform translate-x-2 translate-y-2 rounded-lg"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Navigation */}
        <div className="flex items-center justify-center gap-8">
          <button 
            onClick={prevSlide}
            className="group relative w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white group-hover:text-purple-200 transition-colors">
              <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
          
          <div className="flex gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`relative transition-all duration-300 rounded-full ${
                  currentSlide === index 
                    ? 'w-8 h-3 bg-gradient-to-r from-purple-400 to-blue-400' 
                    : 'w-3 h-3 bg-white/40 hover:bg-white/60'
                }`}
              >
                {currentSlide === index && (
                  <div className="absolute inset-0 rounded-full bg-white/30 animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
          
          <button 
            onClick={nextSlide}
            className="group relative w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white group-hover:text-purple-200 transition-colors">
              <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>
      </div>

      {/* Enhanced CSS Animations and Styles */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .preserve-3d {
          transform-style: preserve-3d;
        }
        
        .film-grain {
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(0,0,0,0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%);
          background-size: 4px 4px, 6px 6px, 3px 3px;
          animation: grain 8s steps(10) infinite;
        }
        
        @keyframes grain {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -10%); }
          20% { transform: translate(-15%, 5%); }
          30% { transform: translate(7%, -25%); }
          40% { transform: translate(-5%, 25%); }
          50% { transform: translate(-15%, 10%); }
          60% { transform: translate(15%, 0%); }
          70% { transform: translate(0%, 15%); }
          80% { transform: translate(3%, -5%); }
          90% { transform: translate(-10%, 10%); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Carousel;
