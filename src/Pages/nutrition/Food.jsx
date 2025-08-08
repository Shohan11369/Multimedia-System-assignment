import React from "react";

function Food() {
  return (
    <div className="bg-[#EAF4F4]  p-5 sm:p-10 space-y-10">
      {/* Header */}
      <div className="flex flex-col justify-center items-center mx-auto">
        <h1 className="text-4xl sm:text-4xl font-bold text-lime-600">
          🍎 Food Page
        </h1>
        <p className="text-gray-800 mt-2 text-base italic font-bold sm:text-lg">
          This is the food section where you explore various healthy foods.
        </p>
      </div>

      {/* Grid Section with 4 Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="border rounded-lg shadow-md p-4 hover:shadow-xl transition">
          <img
            src="/Vegetables.jpg"
            alt="vegetables"
            className="rounded-md mb-3 w-full h-100  object-cover flex mx-auto  transition-transform duration-300 ease-in-out hover:scale-95 hover:shadow-2xl "
          />
          <h2 className="text-2xl font-semibold text-green-700">
            🥦 Vegetables
          </h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Helps to fight diseases</li>
            <li>Full of vitamins and minerals</li>
            <li>Improves digestion</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="border rounded-lg shadow-md p-4 hover:shadow-xl transition">
          <img
            src="/Fruits.jpg"
            alt="Fruits"
            className="rounded-md mb-3 w-full h-100  object-cover flex mx-auto transition-transform duration-300 ease-in-out hover:scale-95 hover:shadow-2xl"
          />
          <h2 className="text-2xl font-semibold text-pink-600">🍉 Fruits</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Gives natural sugar and fiber</li>
            <li>Keeps your skin fresh</li>
            <li>Provides vitamins like A and C</li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="border rounded-lg shadow-md p-4 hover:shadow-xl transition-all duration-300">
          <img
            src="/protein.jpg"
            alt="Protein"
            className="rounded-md mb-3 w-full h-100  object-cover flex mx-auto transition-transform duration-300 ease-in-out hover:scale-95 hover:shadow-2xl"
          />
          <h2 className="text-2xl font-semibold text-blue-700">🥚 Protein</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Builds muscles</li>
            <li>Repairs body cells</li>
            <li>Makes you feel full for longer</li>
          </ul>
        </div>

        {/* Card 4 */}
        <div className="border rounded-lg shadow-md p-4 hover:shadow-xl transition">
          <img
            src="/Carbo.jpg"
            alt="Carbohydrates"
            className="rounded-md mb-3 w-full h-100  object-cover flex mx-auto transition-transform duration-300 ease-in-out hover:scale-95 hover:shadow-2xl"
          />
          <h2 className="text-2xl font-semibold text-yellow-600">
            🍞 Carbohydrates
          </h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Main source of energy</li>
            <li>Keeps body and brain active</li>
            <li>Gives quick energy</li>
          </ul>
        </div>
      </div>

      {/* Know Your Food Section */}
      <div className="mt-10 bg-green-50 p-6 rounded-lg">
        <h2 className="text-3xl font-bold text-green-800 mb-4">
          📚 Know Your Food
        </h2>
        <ul className="space-y-4 text-gray-700 text-lg md:text-xl list-disc pl-5">
          <li>
            <strong>🥚 Protein:</strong> Found in eggs, meat, fish, and lentils.
            Helps grow and repair the body.
          </li>
          <li>
            <strong>🥦 Vegetables:</strong> Like broccoli, spinach, and carrots.
            Fights diseases and helps clean your body.
          </li>
          <li>
            <strong>🍞 Carbohydrates:</strong> Found in rice, bread, and
            potatoes. Gives you the energy to study and play.
          </li>
          <li>
            <strong>🍉 Fruits:</strong> Like apples, bananas, and watermelon.
            Keeps you healthy and strong with natural nutrients.
          </li>
        </ul>
      </div>

      {/* 🎉 Fun Learn Zone Section */}
      <div className="bg-yellow-50 p-6 rounded-lg shadow-inner">
        <h2 className="text-3xl font-bold text-yellow-700 mb-3">
          🎉 Fun Learn Zone
        </h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-3 text-lg md:text-xl">
          <li>
            🧠 <strong>Quick Quiz:</strong> Which food gives the most energy?
            (Hint: 🍞)
          </li>
          <li>
            💡 <strong>Did You Know?</strong> One egg has 6g of protein and 13
            essential vitamins!
          </li>
          <li>
            🧃 <strong>Tip:</strong> Drink fruit juice without sugar — it keeps
            you hydrated and healthy.
          </li>
          <li>
            🍌 <strong>Fact:</strong> Bananas can help you feel happy. They
            boost serotonin levels in your brain!
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Food;
