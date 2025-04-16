


import React from "react";
import { Link } from "react-router-dom";

const CollapsibleSidebar = ({ links, className = "" }) => {
  return (
    <div
      className={`group fixed top-0 left-0 h-screen w-16 hover:w-64 bg-gray-900 text-white transition-all duration-300 z-50 shadow-lg ${className}`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center h-16 border-b border-gray-800">
          <span className="text-xl font-bold transition-all duration-300 group-hover:block hidden">
        <img src="/Brandlogo.jpeg" alt="Logo" className="h-12 w-20 " />
          </span>
        </div>
        <nav className="flex-1 py-4 space-y-2">
          {links.map((link, idx) => (
            <Link
              key={idx}
              to={link.path}
              className="flex items-center space-x-4 px-4 py-2 hover:bg-gray-700 transition-all duration-200"
            >
              <div className="text-xl">{link.icon}</div>
              <span className="text-base font-medium hidden group-hover:block">
                {link.name}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default CollapsibleSidebar;
