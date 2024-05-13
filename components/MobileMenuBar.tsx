// components/MobileMenuBar.tsx
import React from "react";

const MobileMenuBar = ({ toggleSidebar }:any) => {
  return (
    <div className="fixed top-0 left-0 w-full h-16 bg-gray-800 flex items-center justify-between p-4">
      <button onClick={toggleSidebar} className="text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  );
};

export default MobileMenuBar;
