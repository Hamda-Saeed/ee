import { motion } from "framer-motion";
import TechIcon from "./TechIcon";
import TitleHeader from "./TitleHeader";
import { iconsList } from "./constants";

const TechStack = () => {
  return (
    <section className="w-full py-20 relative z-10">
      <div className="container mx-auto md:p-0 px-5">
        <TitleHeader
          title="TECH STACK"
          number="02"
          text="My Go-To Tools for Crafting Solutions"
        />
      </div>

      {/* Marquee Container */}
      <div className="mt-16 relative">
        {/* Gradient Fades */}
        <div className="absolute inset-y-0 left-0 w-36 bg-gradient-to-r from-black to-transparent z-20"></div>
        <div className="absolute inset-y-0 right-0 w-36 bg-gradient-to-l from-black to-transparent z-20"></div>
        
        {/* Animated Marquee */}
        <motion.div 
          className="flex gap-12 py-6 items-center"
          animate={{
            x: ["0%", "-100%"]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {[...iconsList, ...iconsList].map((icon, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
              className="p-3"
            >
              <TechIcon 
                icon={icon} 
                className="text-white hover:text-purple-400 transition-colors"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;