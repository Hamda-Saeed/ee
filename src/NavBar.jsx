import { navItems } from "./constants";

const NavBar = () => {
  return (
    <div className="w-full fixed z-50 top-0 left-0 backdrop-blur-md bg-white/10 border-b border-white/20 shadow-lg">
      <div className="max-w-7xl w-full mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with signature */}
          <div className="flex items-center">
            <img
              src="/images/logo.png"
              alt="logo"
              className="h-14 w-14 object-contain transition-transform duration-300 hover:scale-110"
            />
            <span className="ml-4 text-white font-['Brush_Script_MT'] text-4xl italic hidden md:block tracking-wide">
              Hamda
            </span>
          </div>
          
          {/* Navigation with refined hover effect */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <a 
                  href={item.href}
                  className="relative z-10 px-4 py-2 text-white/80 font-medium text-lg
                    transition-all duration-300 group-hover:text-white group-hover:scale-105"
                >
                  {item.name}
                </a>
                {/* Subtle underline effect on hover */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400
                  transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            ))}
          </div>

          {/* Right side placeholder */}
          <div className="w-14 h-14"></div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
