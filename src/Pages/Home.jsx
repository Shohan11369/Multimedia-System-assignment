import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const images = [
  "/Fruits.jpg",
  "/Home1.jpg",
  "/Food.jpg",
  "/Vege.jpg",
  "/Home.jpg",
  "/Vege.jpg",
  "/Home.jpg",
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* ✅ Hero Section */}
      <div className="relative bg-[#EAF4F4] pt-16 pb-12 overflow-hidden">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            ℋℯ𝒶𝓁𝓉𝒽𝓎 ℰ𝒶𝓉𝒾𝓃ℊ 𝒾𝓃 ℬ𝒶𝓃ℊ𝓁𝒶𝒹ℯ𝓈𝒽
          </h2>
          <h1 className="text-6xl md:text-7xl font-bold text-pink-500 italic mt-2">
            Delicious!
          </h1>
          <p className="text-gray-600 mt-4">
            Promoting balanced nutrition and healthy lifestyle choices for
            everyone in Bangladesh.
          </p>
        </div>

        {/* ✅ Image Row */}
        <div className="flex justify-center items-end gap-6 mt-10 px-4 flex-wrap">
          {images.map((img, index) => (
            <div
              key={index}
              className="w-32 md:w-40 h-56 md:h-64 bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200"
            >
              <img
                src={img}
                alt={`Food ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Text Content Section */}
      <div className="bg-gradient-to-b from-[#9ad9db] via-[#e5d8d9] to-[#eb96aa] px-6 py-10 md:py-14 flex justify-center items-center">
        <div className="max-w-6xl grid md:grid-cols-3 gap-6 w-full">
          {/* Column 1 - Main List */}
          <div className="space-y-6 col-span-2">
            {[
              {
                id: 1,
                title: "Bangladesh dietary guidelines",
                desc: "Detailed information about the national dietary guidelines for Bangladesh.",
              },
              {
                id: 2,
                title: "Brochures, posters and more...",
                desc: "Resources to support educators and communities in implementing the recommendations of the Bangladesh dietary guidelines.",
              },
              {
                id: 3,
                title: "Food essentials",
                desc: "Everything you need to know about applying the recommendations of the Bangladesh dietary guidelines in daily life.",
              },
              {
                id: 4,
                title: "Eating well",
                desc: "Advice and tips on eating well, choosing nutritious foods, and healthy Bangladeshi recipes.",
              },
              {
                id: 5,
                title: "Eat for health calculators",
                desc: "Tools to help you estimate your energy needs, nutrient requirements, and daily servings from each food group.",
              },
            ].map((item) => (
              <div
                key={item.id}
                className="bg-white p-5 rounded-lg font-semibold shadow-sm border-l-4 border-teal-600"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-1">{item.desc}</p>
                <Link
                  to={`/nutrition/food/${item.id}`}
                  className="text-blue-500 inline-flex py-2 px-4 bg-blue-100 hover:bg-yellow-100 rounded-full mt-2"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>

          {/* Column 2 - Side Cards */}
          <div className="space-y-6 ">
            {/* Morning */}
            <div className="bg-yellow-500 text-white p-6 rounded-lg relative">
              <h4 className="text-2xl font-bold">🌅 Morning (Breakfast)</h4>
              <p className="text-xl opacity-80 mt-1">🕗 7:00 AM – 8:00 AM</p>
              <p className="mt-2 text-md text-black opacity-90">
                Rice or bread with egg/milk and seasonal fruit. Provides energy
                for school and keeps children active.
              </p>
            </div>

            {/* Noon */}
            <div className="bg-green-600 text-white p-6 rounded-lg">
              <h4 className="text-2xl font-bold">🌞 Noon (Lunch)</h4>
              <p className="text-xl opacity-80 mt-1">🕛 12:30 PM – 1:30 PM</p>
              <p className="mt-2 text-md text-white opacity-90">
                Rice, vegetables, fish/meat, and lentils. Gives balanced
                nutrition for growth and strength.
              </p>
            </div>

            {/* Afternoon */}
            <div className="bg-orange-500 text-white p-6 rounded-lg">
              <h4 className="text-2xl font-bold">🍎 Afternoon Snack</h4>
              <p className="text-xl opacity-80 mt-1">🕒 4:00 PM – 4:30 PM</p>
              <p className="mt-2 text-md opacity-90">
                Seasonal fruits or milk with light snacks. Keeps energy levels
                steady until dinner.
              </p>
            </div>

            {/* Night */}
            <div className="bg-indigo-600 text-white p-6 rounded-lg">
              <h4 className="text-2xl font-bold">🌙 Night (Dinner)</h4>
              <p className="text-xl opacity-80 mt-1">🕗 8:00 PM – 9:00 PM</p>
              <p className="mt-2 text-md opacity-90">
                Rice or roti with vegetables and fish/egg/meat. Supports body
                repair and growth during sleep.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
