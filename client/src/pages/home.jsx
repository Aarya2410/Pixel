import React, { useState, useEffect } from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-600 text-white">
      {/* Header Section */}
      <header className="w-full py-10">
        <h1 className="text-5xl md:text-7xl font-extrabold text-center tracking-wider animate-fadeIn">
          AI Image Generator
        </h1>
        <p className="text-center mt-4 text-xl md:text-3xl opacity-80 animate-fadeIn delay-500">
          Unleash your imagination with AI-powered visuals
        </p>
      </header>

      {/* Main Content */}
      <main className="w-full flex-1 flex flex-col items-center justify-center px-4">
        <div className="bg-white text-gray-900 rounded-2xl shadow-2xl p-8 md:p-12 max-w-xl w-full text-center transition-all duration-300 hover:scale-105 hover:shadow-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600">
            Ready to Create Stunning Images?
          </h2>
          <p className="mb-8 text-lg md:text-xl text-gray-600">
            Describe your idea below and let the magic happen!
          </p>
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Describe your image idea..."
              className="w-full py-3 px-6 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-4 focus:ring-purple-300 transition duration-200"
            />
            <button className="absolute top-0 right-0 mt-2 mr-2 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-pink-500 hover:to-purple-600 text-white py-2 px-6 rounded-lg transition duration-300 transform hover:scale-105">
              Generate
            </button>
          </div>
        </div>
      </main>

      {/* Call to Action Section */}
      <section className="mt-16 w-full px-4">
        <div className="bg-purple-600 bg-opacity-80 text-white rounded-lg p-6 md:p-10 shadow-xl max-w-3xl mx-auto text-center transition-all duration-300 hover:bg-opacity-100">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Transform Words Into Art Instantly
          </h3>
          <p className="mb-6 text-lg">
            Let AI take your creativity to new heights. Start generating now!
          </p>
          <button className="bg-white text-purple-600 font-semibold py-3 px-8 rounded-lg transition duration-300 hover:bg-purple-700 hover:text-white">
            Get Started
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full py-8 text-center text-sm opacity-80">
        <p>&copy; 2024 AI Image Generator. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
