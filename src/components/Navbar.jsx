import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [showNutritionMenu, setShowNutritionMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const nutritionRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        nutritionRef.current &&
        !nutritionRef.current.contains(event.target)
      ) {
        setShowNutritionMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Nutrition click then auto close after short delay
  const handleNutritionClick = () => {
    setShowNutritionMenu(true);
    setTimeout(() => {
      setShowNutritionMenu(false);
    }, 1500); // Dropdown will auto close after 1.5 seconds
  };

  return (
    <nav className="bg-[#EAF4F4]  shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center relative">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-pink-500">
          🥗 HealthyBite
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="!text-black text-2xl md:hidden ml-auto"
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-8 items-center">
          <Link
            to="/"
            className="bg-[#cae0e1] py-2 px-3 rounded-full text-black font-semibold hover:bg-blue-600 hover:text-white"
          >
            Home
          </Link>
          

          <div className="relative" ref={nutritionRef}>
            <button
              onClick={handleNutritionClick}
              className="bg-[#cae0e1] py-2 px-3 rounded-full text-black font-semibold hover:bg-blue-600 hover:text-white focus:outline-none"
            >
              Nutrition
            </button>
            {showNutritionMenu && (
              <div className="absolute top-12 left-0 mt-2 w-40 bg-white border border-gray-200 rounded-xl shadow-md z-50">
                <Link
                  to="/nutrition/food"
                  className="block px-4 py-2 text-black font-semibold rounded-xl hover:bg-blue-100"
                >
                  Food
                </Link>
                <Link
                  to="/nutrition/game"
                  className="block px-4 py-2 text-black font-semibold rounded-xl hover:bg-blue-100"
                >
                  Game
                </Link>
                <Link
                  to="/nutrition/video"
                  className="block px-4 py-2 text-black font-semibold rounded-xl hover:bg-blue-100"
                >
                  Video
                </Link>
              </div>
            )}
          </div>
          
          <Link
            to="/about"
            className="bg-[#cae0e1] py-2 px-3 rounded-full text-black font-semibold hover:bg-blue-600 hover:text-white"
          >
            About Us
          </Link>

          <Link
            to="/contact"
            className="bg-[#cae0e1] py-2 px-3 rounded-full text-black font-semibold hover:bg-blue-600 hover:text-white"
          >
            Contact
          </Link>
        </div>

        {/* Login / Signup Right Aligned */}
        <div className="hidden md:flex absolute right-4 space-x-2">
          <Link
            to="/login"
            className="bg-[#cae0e1] px-4 py-2 rounded-full text-black font-semibold hover:bg-blue-600 hover:text-white transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-[#cae0e1] px-4 py-2 rounded-full text-black font-semibold hover:bg-blue-600 hover:text-white transition"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col space-y-2 bg-[#07292F]">
          <Link
            to="/"
            className="bg-indigo-200 text-center py-2 px-3 rounded-full text-black font-semibold hover:bg-blue-600 hover:text-white"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="bg-indigo-200 text-center py-2 px-3 rounded-full text-black font-semibold hover:bg-blue-600 hover:text-white"
          >
            About Us
          </Link>
          <div className="relative" ref={nutritionRef}>
            <button
              onClick={() => setShowNutritionMenu(!showNutritionMenu)}
              className="bg-indigo-200 w-full text-center py-2 px-3 rounded-full text-black font-semibold hover:bg-blue-600 hover:text-white focus:outline-none"
            >
              Nutrition
            </button>
            {showNutritionMenu && (
              <div className="mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-md z-50">
                <Link
                  to="/nutrition/food"
                  className="block px-4 py-2 text-black font-semibold rounded-xl hover:bg-blue-100"
                >
                  Food
                </Link>
                <Link
                  to="/nutrition/game"
                  className="block px-4 py-2 text-black font-semibold rounded-xl hover:bg-blue-100"
                >
                  Game
                </Link>
                <Link
                  to="/nutrition/video"
                  className="block px-4 py-2 text-black font-semibold rounded-xl hover:bg-blue-100"
                >
                  Video
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className="bg-indigo-200 text-center py-2 px-3 rounded-full text-black font-semibold hover:bg-blue-600 hover:text-white"
          >
            Contact
          </Link>
          <Link
            to="/login"
            className="bg-indigo-200 text-center py-2 px-3 rounded-full text-black font-semibold hover:bg-blue-600 hover:text-white"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-indigo-200 text-center py-2 px-3 rounded-full text-black font-semibold hover:bg-blue-600 hover:text-white"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
