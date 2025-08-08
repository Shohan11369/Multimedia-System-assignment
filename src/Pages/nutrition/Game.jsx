import React, { useState } from "react";

function Game() {
  const allFoods = [
    { emoji: "🍎", name: "Apple", healthy: true },
    { emoji: "🍌", name: "Banana", healthy: true },
    { emoji: "🥦", name: "Broccoli", healthy: true },
    { emoji: "🥕", name: "Carrot", healthy: true },
    { emoji: "🍗", name: "Chicken", healthy: true },
    { emoji: "🥚", name: "Egg", healthy: true },
    { emoji: "🍕", name: "Pizza", healthy: false },
    { emoji: "🍔", name: "Burger", healthy: false },
    { emoji: "🍟", name: "Fries", healthy: false },
    { emoji: "🍰", name: "Cake", healthy: false },
    { emoji: "🥤", name: "Soda", healthy: false },
    { emoji: "🍩", name: "Donut", healthy: false },
    { emoji: "🍇", name: "Grapes", healthy: true },
    { emoji: "🍉", name: "Watermelon", healthy: true },
    { emoji: "🥑", name: "Avocado", healthy: true },
    { emoji: "🍫", name: "Chocolate", healthy: false },
  ];

  const [foods] = useState(allFoods);
  const [plate, setPlate] = useState([]);
  const [result, setResult] = useState(null);

  const handleDragStart = (e, food) => {
    e.dataTransfer.setData("text/plain", JSON.stringify(food));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFood = JSON.parse(e.dataTransfer.getData("text/plain"));
    if (!plate.find((item) => item.name === droppedFood.name)) {
      setPlate([...plate, droppedFood]);
    }
  };

  const handleSubmit = () => {
    const total = plate.length;
    const healthyCount = plate.filter((item) => item.healthy).length;
    const score = total > 0 ? Math.round((healthyCount / total) * 100) : 0;

    let tips = "";

    if (score === 100) {
      tips = "🔥 Excellent! All your choices were healthy!";
    } else if (score >= 70) {
      tips = "✅ Good job! Try adding more fruits or veggies next time.";
    } else {
      tips = "😬 You missed some healthy options. Try again!";
    }

    setResult({ score, tips });
  };

  const handleReset = () => {
    setPlate([]);
    setResult(null);
  };

  const handleRemoveFromPlate = (name) => {
    const updatedPlate = plate.filter((item) => item.name !== name);
    setPlate(updatedPlate);
  };

  return (
    <div className="min-h-screen bg-[#DBE4C9] p-6 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-pink-800">
        🍽️ Healthy Food Picker
      </h1>

      <div className="grid grid-cols-2 rounded-lg sm:grid-cols-4 gap-4 mb-8 w-full max-w-4xl">
        {foods.map((food) => (
          <div
            key={food.name}
            draggable
            onDragStart={(e) => handleDragStart(e, food)}
            onClick={() => {
              if (!plate.find((item) => item.name === food.name)) {
                setPlate([...plate, food]);
              }
            }}
            className="text-center p-4 border rounded-[100%] shadow bg-white  cursor-pointer hover:bg-lime-100 transition"
          >
            <div className="text-4xl">{food.emoji}</div>
            <div className="mt-2 text-sm font-medium">{food.name}</div>
          </div>
        ))}
      </div>

      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="w-full max-w-2xl min-h-[150px] border-4 border-dashed border-pink-400 p-6 rounded-[100%] mb-6 bg-white transition"
      >
        <h2 className="text-xl font-semibold text-center text-indigo-700 mb-4">
          🥣 Your Plate
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {plate.map((item) => (
            <div
              key={item.name}
              onClick={() => handleRemoveFromPlate(item.name)}
              className="text-center text-3xl bg-lime-100 p-2 rounded-full cursor-pointer hover:bg-red-200 transition"
              title="Click to remove"
            >
              {item.emoji}
            </div>
          ))}
        </div>
      </div>

      {!result ? (
        <button
          onClick={handleSubmit}
          className="bg-orange-400 text-white font-bold px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          ✅ Submit
        </button>
      ) : (
        <div className="text-center mt-4">
          <p className="text-xl font-bold text-blue-800 mb-2">
            🎯 Your Score: {result.score}%
          </p>
          <p className="text-lg text-gray-700 mb-4">{result.tips}</p>

          {result.score < 100 && (
            <div className="bg-white border border-yellow-300 p-4 rounded-lg text-left text-sm text-gray-800 max-w-md mx-auto">
              <p className="font-semibold text-yellow-700 mb-2">
                💡 Tips to improve:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>🍎 Include more fruits like Apple, Banana, Grapes</li>
                <li>🥦 Add vegetables such as Broccoli and Carrot</li>
                <li>🥚 Add protein like Egg and Chicken</li>
                <li>🚫 Avoid junk food like Pizza, Donut, Soda</li>
              </ul>
            </div>
          )}

          <button
            onClick={handleReset}
            className="mt-6 bg-lime-400 text-black font-bold px-6 py-2 rounded hover:bg-red-300 transition"
          >
            🔁 Play Again
          </button>
        </div>
      )}
    </div>
  );
}

export default Game;
