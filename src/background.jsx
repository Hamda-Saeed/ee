//BackgroundWrapper.jsx
const BackgroundWrapper = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Gradient Spheres (Background) */}
      <div className="fixed inset-0 -z-50">
        {/* Purple sphere (top-left) */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-purple-900/10 blur-[100px]"></div>
        {/* Pink sphere (bottom-right) */}
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-pink-900/10 blur-[100px]"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
export default BackgroundWrapper;