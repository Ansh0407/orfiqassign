import React from "react";
import { FiHome, FiFolder, FiFile, FiSettings, FiStar } from "react-icons/fi";

const CompactSidebar = () => {
  return (
    <div className="w-18 bg-white text-gray-400 h-screen flex flex-col items-center py-4">
      <div className="mb-8">
        <div className="text-blue-500 font-bold text-xl">QRFIQ </div>
      </div>
      
      <nav className="flex flex-col space-y-6 items-center">
        <a 
          href="#" 
          className="p-2 rounded-md hover:bg-gray-800 hover:text-white transition-colors"
          title="Home"
        >
          <FiHome className="w-5 h-5" />
        </a>
        
        <a 
          href="#" 
          className="p-2 rounded-md hover:bg-gray-800 hover:text-white transition-colors"
          title="Folders"
        >
          <FiFolder className="w-5 h-5" />
        </a>
        
        <a 
          href="#" 
          className="p-2 rounded-md hover:bg-gray-800 hover:text-white transition-colors"
          title="Files"
        >
          <FiFile className="w-5 h-5" />
        </a>
        
        <a 
          href="#" 
          className="p-2 rounded-md hover:bg-gray-800 hover:text-white transition-colors"
          title="Favorites"
        >
          <FiStar className="w-5 h-5" />
        </a>
        
        <div className="flex-grow"></div>
        
        <a 
          href="#" 
          className="p-2 rounded-md hover:bg-gray-800 hover:text-white transition-colors mt-auto"
          title="Settings"
        >
          <FiSettings className="w-5 h-5" />
        </a>
      </nav>
    </div>
  );
};

export default CompactSidebar;