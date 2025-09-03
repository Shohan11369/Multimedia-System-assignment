import React from "react";

function CarboPage() {
  const carbs = [
    {
      name: "Rice",
      emoji: "🍚",
      img: "/rice.jpg",
      benefits: [
        "Main source of energy",
        "Rich in carbohydrates for brain and body function",
        "Contains some vitamins and minerals",
      ],
    },
    {
      name: "Bread",
      emoji: "🍞",
      img: "/bread.jpg",
      benefits: [
        "Provides quick energy",
        "Good source of fiber if whole grain",
        "Supports digestion and satiety",
      ],
    },
    {
      name: "Potatoes",
      emoji: "🥔",
      img: "/potatoes.jpg",
      benefits: [
        "Rich in carbs and potassium",
        "Good for energy and muscle function",
        "Contains vitamins C and B6",
      ],
    },
    {
      name: "Oats",
      emoji: "🥣",
      img: "/oats.jpg",
      benefits: [
        "High in fiber, supports digestion",
        "Provides slow-releasing energy",
        "Helps in maintaining healthy cholesterol levels",
      ],
    },
    {
      name: "Pasta",
      emoji: "🍝",
      img: "/pasta.jpg",
      benefits: [
        "Good source of carbohydrates",
        "Provides energy for physical activity",
        "Easy to digest and versatile in meals",
      ],
    },
  ];

  return (
    <div className="p-8 bg-gradient-to-b from-yellow-50 to-white min-h-screen">
      <h1 className="text-4xl font-bold text-yellow-600 text-center mb-10">
        Carbohydrates
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {carbs.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-2xl transition p-5"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-60 object-cover rounded-lg mb-5 hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-4 text-slate-900">
              <span className="text-4xl">{item.emoji}</span> {item.name}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-xl text-gray-700">
              {item.benefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-yellow-50 p-6 rounded-xl shadow-inner">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">
          🍞 Daily Consumption Tips
        </h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-3 text-2xl">
          <li>
            Include whole grains like brown rice, oats, and whole wheat bread
            for better fiber intake.
          </li>
          <li>
            Avoid excessive intake of refined carbs (white bread, sugary
            pastries) to prevent blood sugar spikes.
          </li>
          <li>
            Combine carbs with protein and healthy fats for balanced meals.
          </li>
          <li>
            Carbs are essential for energy, especially before physical activity
            or study.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CarboPage;
