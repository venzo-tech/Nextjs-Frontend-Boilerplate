import React from 'react';
import { useRouter } from 'next/router';

const Sidebar = ({ isOpen, toggleSidebar }:any) => {
  const router = useRouter();

  const handleLinkClick = (e:any) => {
    e.preventDefault();
    toggleSidebar();
    router.push(e.target.getAttribute('href'));
  };

  return (
    <div
      className={`fixed inset-y-0 left-0 transform transition-transform duration-200 ease-in-out ${
        isOpen? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex flex-col space-y-6 p-6">
        <a href="#profile" onClick={handleLinkClick} className="text-white">Profile</a>
        <a href="#settings" onClick={handleLinkClick} className="text-white">Settings</a>
        <a href="#signout" onClick={handleLinkClick} className="text-white">Sign Out</a>
        {/* Add more links as needed */}
      </div>
    </div>
  );
};

export default Sidebar;
