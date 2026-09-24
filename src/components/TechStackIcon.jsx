import React from 'react';

const TechStackIcon = ({ TechStackIcon: Icon, Language }) => {
  const isComponent = typeof Icon === 'function' || (typeof Icon === 'object' && Icon !== null);

  return (
    <div className="group p-5 rounded-2xl bg-slate-800/40 hover:bg-slate-700/50 border border-white/5 hover:border-indigo-500/30 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-indigo-500/10">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-40 blur transition duration-300"></div>
        {isComponent ? (
          <div className="relative h-14 w-14 md:h-16 md:w-16 flex items-center justify-center text-indigo-400 group-hover:text-purple-300 transform transition-transform duration-300">
            <Icon className="w-10 h-10 md:w-12 md:h-12" />
          </div>
        ) : (
          <img 
            src={Icon} 
            alt={`${Language} icon`} 
            className="relative h-14 w-14 md:h-16 md:w-16 object-contain transform transition-transform duration-300"
          />
        )}
      </div>
      <span className="text-slate-300 font-medium text-xs md:text-sm tracking-wide group-hover:text-white transition-colors duration-300 text-center">
        {Language}
      </span>
    </div>
  );
};

export default TechStackIcon;