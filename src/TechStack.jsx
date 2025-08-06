import { motion } from "framer-motion";
import TechIcon from "./TechIcon";
import TitleHeader from "./TitleHeader";
import { iconsList } from "./constants";
import GradientSpheres from "./GradientSpheres";
const TechStack = () => {
  return (
    <section className="w-full py-20 relative z-10 overflow-hidden">
      <div className="container mx-auto md:p-0 px-5">
        <TitleHeader
          title="TECH STACK"
          number="02"
          text="My Go-To Tools for Crafting Solutions"
        />
      </div>
       <GradientSpheres
        sphere1Class="projects-gradient-sphere projects-sphere-1"
        sphere2Class="projects-gradient-sphere projects-sphere-2"
      />
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-900/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-blue-900/10 blur-3xl"></div>
      </div>

      
      {/* Animated Marquee */}
      <div className="mt-16 relative">
        {/* Gradient Fades */}
        <div className="absolute inset-y-0 left-0 w-36 bg-gradient-to-r from-black to-transparent z-20"></div>
        <div className="absolute inset-y-0 right-0 w-36 bg-gradient-to-l from-black to-transparent z-20"></div>
        
        {/* Marquee Animation */}
        <motion.div 
          className="flex gap-12 py-8 items-center"
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
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
              className="p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all"
            >
              <TechIcon 
                icon={icon} 
                className="text-white hover:text-purple-300 transition-colors w-10 h-10"
              />
            </motion.div>
          ))}
        </motion.div>
        {/* Category Cards */}
<div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-5 mt-12">
  {[
    {
      title: "Frontend",
      description: "Modern UI/UX development",
      color: "from-purple-600/20 to-purple-900/10",
      hoverGlow: "hover:shadow-[0_0_30px_5px_rgba(168,85,247,0.2)]",
      icons: iconsList.filter(icon => icon.category === 'frontend'),
      floatClass: "animate-float-slow"
    },
    {
      title: "Backend",
      description: "Server-side architecture",
      color: "from-blue-600/20 to-blue-900/10",
      hoverGlow: "hover:shadow-[0_0_30px_5px_rgba(59,130,246,0.2)]",
      icons: iconsList.filter(icon => icon.category === 'backend'),
      floatClass: "animate-float-medium"
    },
    {
      title: "Tools",
      description: "Development workflow",
      color: "from-emerald-600/20 to-emerald-900/10",
      hoverGlow: "hover:shadow-[0_0_30px_5px_rgba(16,185,129,0.2)]",
      icons: iconsList.filter(icon => icon.category === 'tool'),
      floatClass: "animate-float-fast"
    }
  ].map((category, index) => (
    <motion.div 
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -8,
        transition: { 
          type: "spring",
          stiffness: 200,
          damping: 10
        }
      }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
      }}
      viewport={{ once: true }}
      className={`relative bg-gradient-to-br ${category.color} backdrop-blur-sm rounded-xl border border-white/10 p-6 shadow-lg ${category.hoverGlow} transition-all duration-300 group overflow-hidden ${category.floatClass}`}
    >
      {/* Floating shine effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.15)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute -inset-10 bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,rgba(255,255,255,0.1)_20%,transparent_40%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2 relative z-10">{category.title}</h3>
      <p className="text-sm text-white/70 mb-4 relative z-10">{category.description}</p>
      
      <div className="flex flex-wrap gap-4 relative z-10">
        {category.icons.map((icon, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -5, 0],
              transition: {
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            whileHover={{ 
              y: -8,
              scale: 1.15,
              transition: { 
                type: "spring",
                stiffness: 300
              }
            }}
            className="relative p-2 bg-white/5 rounded-lg backdrop-blur-sm border border-white/5 hover:border-white/20 transition-all hover:shadow-[0_5px_15px_rgba(255,255,255,0.1)]"
          >
            {/* Icon shine effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2)_0%,_transparent_70%)] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            <TechIcon 
              icon={icon} 
              className="relative z-10 text-white hover:text-purple-300 transition-colors w-8 h-8"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  ))}
</div>

{/* Add these global styles */}
<style jsx global>{`
  @keyframes float-slow {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
  }
  @keyframes float-medium {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  @keyframes float-fast {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
  }
  .animate-float-slow {
    animation: float-slow 6s ease-in-out infinite;
  }
  .animate-float-medium {
    animation: float-medium 5s ease-in-out infinite;
  }
  .animate-float-fast {
    animation: float-fast 4s ease-in-out infinite;
  }
`}</style>
      </div>
    </section>
  );
};

export default TechStack;