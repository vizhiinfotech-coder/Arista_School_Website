import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AdmissionModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal shortly after user enters the website
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
        style={{ animation: "fadeIn 0.3s ease-out" }}
      >
        <div className="absolute top-3 right-3 z-20">
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-800 bg-white/80 hover:bg-gray-100 rounded-full p-2 transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="bg-gradient-to-br from-purple-800 to-indigo-900 p-8 text-center relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full translate-x-1/4 translate-y-1/4"></div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight z-10 relative drop-shadow-md">
            Admissions Open
          </h2>
          <div className="relative z-10 flex justify-center mb-5 w-full">
            <img 
              src="/Admission_Poster_2026.png" 
              alt="Admission Poster" 
              className="w-auto h-auto max-h-[50vh] object-contain rounded-xl shadow-lg border border-white/20"
            />
          </div>
          <p className="text-purple-100 text-base md:text-lg mb-8 leading-relaxed z-10 relative">
            Secure your child's future with world-class education and holistic development. Limited seats available!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 z-10 relative">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full sm:w-auto bg-white text-purple-800 hover:bg-purple-50 font-bold py-3 px-8 rounded-full shadow-xl transition-transform transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-purple-300"
            >
              Apply Now
            </Link>
            {/* <button
              onClick={() => setIsOpen(false)}
              className="w-full sm:w-auto bg-purple-700 border border-purple-400 text-white hover:bg-purple-600 font-medium py-3 px-8 rounded-full transition-colors shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-300"
            >
              Maybe Later
            </button> */}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default AdmissionModal;
