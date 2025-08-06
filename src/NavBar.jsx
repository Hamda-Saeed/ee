import { navItems } from "./constants";

const NavBar = () => {
  return (
    <div className="w-full fixed z-50 top-0 left-0 backdrop-blur-sm bg-white/5 border-b border-white/10">
      <div className="max-w-7xl w-full mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with signature */}
          <div className="flex items-center">
            <img
              src="/images/logo.png"
              alt="logo"
              className="h-12 w-12 object-contain transition-transform duration-300 hover:scale-110"
            />
            <span className="ml-3 text-white font-['Brush_Script_MT'] text-3xl italic hidden md:block">
              Hamda
            </span>
          </div>
          
          {/* Navigation with intensified hover gradient */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <a 
                  href={item.href}
                  className="relative z-10 px-5 py-3 text-white/90 font-medium text-lg
                    transition-all duration-300 group-hover:text-white"
                >
                  {item.name}
                </a>
                {/* Intensified gradient effect */}
                <div className="absolute inset-0 -z-10 rounded-full 
                  bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-amber-400/0
                  group-hover:from-purple-500/40 group-hover:via-pink-500/40 group-hover:to-amber-400/40
                  transition-all duration-300 transform scale-90 group-hover:scale-100
                  shadow-lg group-hover:shadow-purple-500/30" />
              </div>
            ))}
          </div>

          {/* Right side placeholder */}
          <div className="w-10 h-10"></div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;