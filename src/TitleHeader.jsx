import React from 'react';

const TitleHeader = ({ title, number, text }) => {
  return (
    <div className="relative flex justify-between items-center py-4 px-4 overflow-hidden">
      {/* Subtle floating elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute w-1 h-1 bg-purple-400 rounded-full animate-float-1" style={{ top: '10%', left: '5%' }}></div>
        <div className="absolute w-1.5 h-1.5 bg-pink-400 rounded-full animate-float-2" style={{ top: '30%', left: '90%' }}></div>
        <div className="absolute w-1 h-1 bg-amber-300 rounded-full animate-float-3" style={{ top: '70%', left: '15%' }}></div>
        <div className="absolute w-2 h-2 bg-blue-400 rounded-full animate-float-4" style={{ top: '50%', left: '70%' }}></div>
        <div className="absolute w-1.5 h-1.5 bg-green-400 rounded-full animate-float-5" style={{ top: '5%', right: '30%' }}></div>
      </div>

      <div className="relative z-10 flex-1">
        <h1 className="text-white font-['Montserrat'] md:text-4xl text-2xl uppercase tracking-widest leading-tight animate-fade-in-up">
          {title}
        </h1>
        <p className="text-gray-400 font-['Lato'] md:text-lg md:mt-2 mt-1 font-light animate-fade-in-up delay-200">
          {text}
        </p>
      </div>

      <div className="items-center gap-4 hidden md:flex relative z-10">
        <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
        <p className="text-white font-['Roboto_Mono'] text-4xl animate-fade-in-up delay-400">
          {number}
        </p>
        <div className="w-20 h-0.5 bg-gradient-to-l from-transparent via-gray-600 to-transparent"></div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Lato:wght@300&family=Roboto+Mono:wght@500&display=swap' );

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 0.1s;
        }

        .delay-400 {
          animation-delay: 0.2s;
        }

        @keyframes float-animation-1 {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          25% { transform: translateY(-5px) translateX(2px) rotate(5deg); }
          50% { transform: translateY(0px) translateX(4px) rotate(0deg); }
          75% { transform: translateY(5px) translateX(2px) rotate(-5deg); }
        }
        @keyframes float-animation-2 {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          25% { transform: translateY(5px) translateX(-2px) rotate(-5deg); }
          50% { transform: translateY(0px) translateX(-4px) rotate(0deg); }
          75% { transform: translateY(-5px) translateX(-2px) rotate(5deg); }
        }
        @keyframes float-animation-3 {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          25% { transform: translateY(-2px) translateX(-4px) rotate(2deg); }
          50% { transform: translateY(0px) translateX(-2px) rotate(0deg); }
          75% { transform: translateY(2px) translateX(-4px) rotate(-2deg); }
        }
        @keyframes float-animation-4 {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          25% { transform: translateY(2px) translateX(4px) rotate(-2deg); }
          50% { transform: translateY(0px) translateX(2px) rotate(0deg); }
          75% { transform: translateY(-2px) translateX(4px) rotate(2deg); }
        }
        @keyframes float-animation-5 {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          25% { transform: translateY(-3px) translateX(3px) rotate(3deg); }
          50% { transform: translateY(0px) translateX(6px) rotate(0deg); }
          75% { transform: translateY(3px) translateX(3px) rotate(-3deg); }
        }

        .animate-float-1 { animation: float-animation-1 12s ease-in-out infinite alternate; }
        .animate-float-2 { animation: float-animation-2 15s ease-in-out infinite alternate; }
        .animate-float-3 { animation: float-animation-3 10s ease-in-out infinite alternate; }
        .animate-float-4 { animation: float-animation-4 13s ease-in-out infinite alternate; }
        .animate-float-5 { animation: float-animation-5 11s ease-in-out infinite alternate; }
      `}</style>
    </div>
  );
};

export default TitleHeader;
