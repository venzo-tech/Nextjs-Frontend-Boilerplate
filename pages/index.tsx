import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Navbar />
      <div className="flex flex-col items-center justify-center py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">Welcome to My App</h1>
          <p className="mt-3 text-2xl">Login or Register to get started.</p>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
