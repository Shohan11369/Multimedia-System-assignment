import React, { useState, useEffect } from "react";

// ===================== Game 1 =====================
function HealthyFoodPicker({ onBack }) {
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
    setPlate(plate.filter((item) => item.name !== name));
  };

  return (
    <div className="min-h-[400px] flex flex-col items-center">
      <button
        onClick={onBack}
        className="mb-4 bg-gray-700 text-white px-4 py-2 rounded"
      >
        ⬅️ Back to Hub
      </button>

      <h2 className="text-2xl font-bold mb-4 text-pink-600">
        🍽 Healthy Food Picker
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 w-full max-w-4xl">
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
            className="text-center p-4 border rounded-[100%] shadow bg-white cursor-pointer hover:bg-lime-100 transition"
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
          className="bg-white text-black font-bold px-6 py-2 rounded hover:bg-gray-200 transition"
        >
          ✅ Submit
        </button>
      ) : (
        <div className="text-center mt-4">
          <p className="text-xl font-bold text-blue-800 mb-2">
            🎯 Your Score: {result.score}%
          </p>
          <p className="text-2xl text-gray-700 mb-4">{result.tips}</p>
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

// ===================== Game 2 =====================
function FeedTheMonster({ onBack }) {
  const foods = [
    { emoji: "🍎", healthy: true },
    { emoji: "🍌", healthy: true },
    { emoji: "🥦", healthy: true },
    { emoji: "🍉", healthy: true },
    { emoji: "🍕", healthy: false },
    { emoji: "🍔", healthy: false },
    { emoji: "🍩", healthy: false },
    { emoji: "🍫", healthy: false },
    { emoji: "🥤", healthy: false },
  ];

  const [monsterMood, setMonsterMood] = useState("😀"); // happy / sad
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameOver, setGameOver] = useState(false);
  const [showTips, setShowTips] = useState(true); // 👈 Tips screen first

  // Timer
  useEffect(() => {
    if (showTips || gameOver) return; // গেম শুরুর আগে টাইমার চলবে না
    if (timeLeft <= 0) {
      setGameOver(true);
      return;
    }
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, showTips, gameOver]);

  const feedMonster = (food) => {
    if (food.healthy) {
      setScore((s) => s + 5);
      setMonsterMood("😋"); // happy face
    } else {
      setScore((s) => (s > 0 ? s - 3 : 0));
      setMonsterMood("🤢"); // yuck face
    }
    setTimeout(() => setMonsterMood("😀"), 1000); // reset mood
  };

  const resetGame = () => {
    setScore(0);
    setTimeLeft(30);
    setGameOver(false);
    setMonsterMood("😀");
    setShowTips(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[500px] bg-gray-200 p-6 rounded-xl shadow-lg relative">
      <button
        onClick={onBack}
        className="absolute top-2 left-2 bg-gray-700 text-white px-4 py-2 rounded"
      >
        ⬅️ Back
      </button>

      {showTips ? (
        // 📌 Tips Screen
        <div className="bg-white p-6 rounded-xl shadow-lg text-center max-w-md">
          <h2 className="text-3xl font-bold text-pink-600 mb-4">
            🎮 How to Play
          </h2>
          <ul className="text-left text-lg mb-6 space-y-2">
            <li>✅ Give healthy food (🍎, 🥦, 🍌, 🍉) to earn +5 points.</li>
            <li>
              ❌ Giving junk food (🍕, 🍔, 🍩, 🍫, 🥤) will reduce -3 points.
            </li>
            <li>⏳ Try to feed as many healthy foods before time runs out.</li>
            <li>⚡ Click fast, or you will miss the chance!</li>
          </ul>

          <button
            onClick={() => setShowTips(false)}
            className="bg-green-500 px-6 py-2 rounded text-white font-bold hover:bg-green-600"
          >
            ▶️ Start Game
          </button>
        </div>
      ) : (
        <>
          <h2 className="mt-6 text-xl md:text-2xl font-bold text-pink-600 mb-4">
            🍎 Feed the Monster Game
          </h2>

          <div className="text-8xl mb-6 animate-bounce">{monsterMood}</div>

          <p className="text-xl font-semibold mb-2">
            ⏳ Time Left: {timeLeft}s
          </p>
          <p className="text-xl font-semibold mb-4">⭐ Score: {score}</p>

          {!gameOver ? (
            <div className="grid grid-cols-3 gap-4">
              {foods.map((food, i) => (
                <button
                  key={i}
                  onClick={() => feedMonster(food)}
                  className="text-4xl bg-white p-4 rounded-full shadow hover:scale-110 transition"
                >
                  {food.emoji}
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center mt-6">
              <h3 className="text-2xl font-bold text-red-600 mb-4">
                🎉 Game Over!
              </h3>
              <p className="text-xl mb-4">Your Final Score: {score}</p>
              <button
                onClick={resetGame}
                className="bg-green-500 px-6 py-2 rounded text-white font-bold hover:bg-green-600"
              >
                🔁 Play Again
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

// ===================== Game 3 =====================
function CatchFoodGame({ onBack }) {
  const foods = [
    { emoji: "🍎", healthy: true },
    { emoji: "🥦", healthy: true },
    { emoji: "🥕", healthy: true },
    { emoji: "🍉", healthy: true },
    { emoji: "🍇", healthy: true },
    { emoji: "🍌", healthy: true },
    { emoji: "🥑", healthy: true },
    { emoji: "🌽", healthy: true },
    { emoji: "🍕", healthy: false },
    { emoji: "🍔", healthy: false },
    { emoji: "🍩", healthy: false },
    { emoji: "🥤", healthy: false },
    { emoji: "🍟", healthy: false },
    { emoji: "🍫", healthy: false },

    // 💣 দুই ধরনের বোমা
    { emoji: "💣", bomb: true },
    { emoji: "🧨", bomb: true },
  ];

  const [fallingFood, setFallingFood] = useState([]);
  const [basketPos, setBasketPos] = useState(50);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // food falling
  useEffect(() => {
    if (gameOver) return;
    const interval = setInterval(() => {
      let randomFood;
      const chance = Math.random();

      if (chance < 0.28) {
        const bombs = foods.filter((f) => f.bomb);
        randomFood = bombs[Math.floor(Math.random() * bombs.length)];
      } else {
        const others = foods.filter((f) => !f.bomb);
        randomFood = others[Math.floor(Math.random() * others.length)];
      }

      setFallingFood((prev) => [
        ...prev,
        { id: Date.now(), ...randomFood, left: Math.random() * 80, top: 0 },
      ]);
    }, 1000);
    return () => clearInterval(interval);
  }, [gameOver]);

  // falling animation
  useEffect(() => {
    if (gameOver) return;
    const interval = setInterval(() => {
      setFallingFood((prev) =>
        prev.map((f) => ({ ...f, top: f.top + 5 })).filter((f) => f.top < 100)
      );
    }, 200);
    return () => clearInterval(interval);
  }, [gameOver]);

  // collision detect
  useEffect(() => {
    fallingFood.forEach((f) => {
      if (f.top > 80 && f.top < 90) {
        if (Math.abs(f.left - basketPos) < 10) {
          if (f.bomb) {
            setGameOver(true);
          } else if (f.healthy) {
            setScore((s) => s + 10);
          } else {
            setScore((s) => (s > 0 ? s - 5 : 0));
          }
          setFallingFood((prev) => prev.filter((x) => x.id !== f.id));
        }
      }
    });
  }, [fallingFood, basketPos]);

  const resetGame = () => {
    setFallingFood([]);
    setScore(0);
    setGameOver(false);
  };

  // mobile touch control
  const handleTouch = (e) => {
    const screenWidth = window.innerWidth;
    const touchX = e.touches[0].clientX;
    if (touchX < screenWidth / 2) {
      setBasketPos((p) => Math.max(5, p - 10));
    } else {
      setBasketPos((p) => Math.min(95, p + 10));
    }
  };

  // desktop mouse click control
  const handleClick = (e) => {
    const screenWidth = window.innerWidth;
    const clickX = e.clientX;
    if (clickX < screenWidth / 2) {
      setBasketPos((p) => Math.max(5, p - 10));
    } else {
      setBasketPos((p) => Math.min(95, p + 10));
    }
  };

  return (
    <div
      className="relative w-full max-w-md h-[500px] bg-blue-100 rounded-lg overflow-hidden flex flex-col items-center justify-center"
      onTouchStart={handleTouch}
      onClick={handleClick} // ✅ Desktop এ click কাজ করবে
    >
      <button
        onClick={onBack}
        className="absolute top-2 left-2 bg-gray-700 text-white px-3 py-1 rounded"
      >
        ⬅️ Back
      </button>

      <h2 className="absolute top-2 text-sm md:text-lg font-bold text-pink-700 left-1/2 -translate-x-1/2">
        🍎 Catch the Healthy Food!
      </h2>
      <p className="absolute top-10 text-lg font-semibold">Score: {score}</p>

      {fallingFood.map((f) => (
        <div
          key={f.id}
          style={{
            position: "absolute",
            left: `${f.left}%`,
            top: `${f.top}%`,
            fontSize: f.bomb ? "2.7rem" : "2rem",
            transition: "top 0.2s linear",
          }}
        >
          {f.emoji}
        </div>
      ))}

      {/* Basket */}
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: `${basketPos}%`,
          transform: "translateX(-50%)",
          fontSize: "3rem",
        }}
      >
        🧺
      </div>

      {/* Game Over */}
      {gameOver && (
        <div className="absolute inset-0 bg-white bg-opacity-90 flex flex-col items-center justify-center">
          <h3 className="text-2xl font-bold text-red-600 mb-4">
            💥 Boom! Game Over
          </h3>
          <p className="text-xl mb-4">Final Score: {score}</p>
          <button
            onClick={resetGame}
            className="bg-pink-400 px-6 py-2 rounded text-white font-bold"
          >
            🔁 Play Again
          </button>
        </div>
      )}
    </div>
  );
}

// ===================== GameHub =====================
function GameHub() {
  const [selectedGame, setSelectedGame] = useState(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#EAF4F4] p-6">
      {!selectedGame ? (
        <div className="space-y-6 text-center">
          <h1 className="text-3xl font-bold mb-6 text-purple-700">
            🎮 Game Hub
          </h1>
          <button
            onClick={() => setSelectedGame("game1")}
            className="block w-60 bg-pink-400 text-white text-xl font-semibold px-6 py-3 rounded-2xl shadow hover:bg-pink-500 transition"
          >
            🍽 Play Game 1
          </button>
          <button
            onClick={() => setSelectedGame("game2")}
            className="block w-60 bg-green-400 text-white text-xl font-semibold px-6 py-3 rounded-2xl shadow hover:bg-green-500 transition"
          >
            🧠 Play Game 2
          </button>
          <button
            onClick={() => setSelectedGame("game3")}
            className="block w-60 bg-blue-400 text-white text-xl font-semibold px-6 py-3 rounded-2xl shadow hover:bg-blue-500 transition"
          >
            🍎 Play Game 3
          </button>
        </div>
      ) : (
        <div className="w-full flex justify-center">
          {selectedGame === "game1" && (
            <HealthyFoodPicker onBack={() => setSelectedGame(null)} />
          )}
          {selectedGame === "game2" && (
            <FeedTheMonster onBack={() => setSelectedGame(null)} />
          )}
          {selectedGame === "game3" && (
            <CatchFoodGame onBack={() => setSelectedGame(null)} />
          )}
        </div>
      )}
    </div>
  );
}

export default GameHub;
