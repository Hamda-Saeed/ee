const TechIcon = ({ icon }) => {
  return (
    <div 
      // These classes control the overall size of the icon container
      // w-16 and h-16 for smaller screens, md:w-20 and md:h-20 for medium screens and up
      className="flex-none w-16 h-16 md:w-20 md:h-20 bg-black-300 flex-center gradient-border marquee-item hover:-translate-y-3 transition-all duration-700"
    >
      <img 
        src={icon.image} 
        alt={icon.name} 
        // These classes control the size of the image inside the container
        // size-8 for smaller screens, md:size-10 for medium screens and up
        className="size-8 md:size-10" 
      />
    </div>
  );
};

export default TechIcon;
