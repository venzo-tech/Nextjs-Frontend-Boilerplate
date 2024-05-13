// components/Navbar.tsx
import React from "react";

const Header = () => {
  return (
    <nav className="bg-gray-800 text-white h-screen">
      <div className="flex items-center space-x-4">
        <span className="text-xl font-semibold">Dashboard</span>
        <div className="space-y-2">
          <a href="#" className="text-white">
            Profile
          </a>
          <a href="#" className="text-white">
            Settings
          </a>
          <a href="#" className="text-white">
            Sign Out
          </a>
          {/* Add more links as needed */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
