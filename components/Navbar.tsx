// components/Navbar.tsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <div className="flex items-center">
          <a href="/" className="text-xl font-semibold">
            MyApp
          </a>
        </div>
        <div>
          {/* Add links or buttons here */}
          <a href="/login" className="mx-2">
            Login
          </a>
          <a href="/register" className="mx-2">
            Register
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
