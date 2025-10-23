// ============================================
// src/components/Banner/Banner.jsx
// ============================================
import React from 'react';

const Banner = () => {
  return (
    <section className="relative h-96 bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      {/* Banner Content */}
      <div className="relative container mx-auto h-full flex items-center">
        <div className="max-w-2xl px-6">
          <h2 className="text-5xl font-serif text-white mb-4 leading-tight">
            Pakteachers<br />Eductional Network
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-green-600 mb-6"></div>
          <p className="text-white text-lg opacity-90">
            Deals all kinds of educational services and solutions for students worldwide.
          </p>
        </div>

        {/* 50 Years Badge */}
        <div className="absolute bottom-8 right-8">
          <div className="w-32 h-32 rounded-full bg-white border-8 border-yellow-400 flex flex-col items-center justify-center shadow-lg">
            <div className="text-5xl font-bold text-gray-800">50</div>
            <div className="text-sm font-semibold text-gray-600 tracking-wider">YEARS</div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 border-4 border-white rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 border-4 border-white rounded-full"></div>
      </div>
    </section>
  );
};

export default Banner;
