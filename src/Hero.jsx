import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GradientSpheres from "./GradientSpheres";
import HeroExperience from "./HeroExperience";

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roles = [
     {first: "STUDENT@", second:"FAST NUCES"},
    { first: "MERN STACK", second: "DEVELOPER" },
    { first: "UI/UX", second: "DESIGNER" },
    { first: "ML/AI", second: "EXPLORER" },
    { first: "CREATIVE", second: "DEVELOPER" },
    { first: "Innovation  ", second: "ENGINEER" },
   
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="w-screen h-dvh overflow-hidden relative text-white-50 md:p-0 px-5"
    >
      {/* Centered animated background line with full width */}
      <div className="absolute top-1/6 left-0 w-[200%] overflow-hidden opacity-20 z-0 ">
        <motion.div 
          className="whitespace-nowrap text-7xl font-thin italic"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          INNOVATE • CREATE • DEVELOP • INNOVATE • CREATE • DEVELOP •
        </motion.div>
      </div>
      <div className="absolute top-5/6 left-0 w-[200%] overflow-hidden opacity-20 z-0">
        <motion.div 
          className="whitespace-nowrap text-6xl font-black italic"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          CREATIVE • DEVELOPER • CREATIVE • DEVELOPER •
        </motion.div>
      </div>
      <div className="gradient-box w-full h-96 absolute bottom-0 left-0 z-20"></div>
      <GradientSpheres
        sphere1Class="gradient-sphere sphere-1"
        sphere2Class="gradient-sphere sphere-2"
      />
      
      <div className="w-full h-full flex-center">
        <div className="relative w-full h-full max-w-[90%] mx-auto"> {/* Changed container width */}
          <div className="md:mt-40 mt-20 w-full">
            <p className="font md:text-2xl text-base text-center md:text-left">
               Hey There, I&apos;m 
            </p>
            
            <h1 className="font-bold md:text-9xl  z-30 text-5xl text-center md:text-left">Hamda</h1>
            
            {/* First role word with full width container */}
            <div className="h-20 md:h-24 w-full  z-30 overflow-visible relative  ml-18 mt-8"> {/* Changed to overflow-visible */}
              <AnimatePresence mode="wait">
                <motion.h1
                  key={`first-${currentRoleIndex}`}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="font-bold md:text-7xl text-4xl italic w-full text-center md:text-left"
                >
                  {roles[currentRoleIndex].first}
                </motion.h1>
              </AnimatePresence>
            </div>
          </div>

          <div className="absolute w-full z-30 bottom-20 left-0 right-0 px-4"> {/* Added horizontal padding */}
            <div className="flex justify-between items-end w-full">
              <div className="flex flex-col items-center md:gap-5 gap-1">
                <p className="md:text-base text-xs"></p>
                <img
                  src="images/arrowdown.svg"
                  alt="arrowdown"
                  className="size-7 animate-bounce"
                />
              </div>
              
              {/* Second role word with full width container */}
              <div className="flex flex-col items-end w-full max-w-[50%] mr-18 mt-8" > {/* Added max-width */}
                
                <div className="h-20 md:h-24 w-full overflow-visible relative"> {/* Changed to overflow-visible */}
                  <AnimatePresence mode="wait">
                    <motion.h1
                      key={`second-${currentRoleIndex}`}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -30, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="font-bold md:text-7xl text-4xl italic w-full text-right pr-4" 
                    >
                      {roles[currentRoleIndex].second}
                    </motion.h1>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3D Character */}
      <div className="w-full h-full absolute top-0 left-0 z-10">
        <HeroExperience />
      </div>
    </section>
  );
};

export default Hero;