import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Dashboard({ isLoggedIn }: any) {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (!isLoggedIn) {
    return (
      <div className="h-screen p-4 text-[18px] text-red-500">
        Please log in to view this page.
      </div>
    );
  }

  const handleSignOut = () => {
    // Implement sign out logic here
    router.push('/login');
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`bg-green-800 text-white fixed h-full transition-all duration-300 ${
          sidebarOpen ? 'w-64' : 'w-20'
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <span className={`font-bold transition-all duration-300 ${sidebarOpen ? 'block' : 'hidden'}`}>
            My App
          </span>
          <button
            className="focus:outline-none"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <svg
              className={`w-6 h-6 transition-all duration-300 ${sidebarOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>
        <nav>
            <Link
                href="/dashboard"
                className="flex items-center py-2 px-4 hover:bg-gray-700 transition-colors duration-300"
                >
                <svg
                    className="w-6 h-6 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* SVG path */}
                </svg>
                <span className={`transition-all duration-300 ${sidebarOpen ? 'block' : 'hidden'}`}>
                    Dashboard
                </span>
            </Link>
          {/* Add more sidebar links here */}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-grow ml-20 md:ml-64 p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl">Dashboard</h2>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
        <p>Welcome to your dashboard!</p>
        {/* Dashboard content goes here */}
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  // Implement your authentication check here
  const isLoggedIn = true;
  return { props: { isLoggedIn } };
}