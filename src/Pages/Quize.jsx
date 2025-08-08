import React, { useState } from "react";

function Quiz() {
  const originalQuestions = [
    {
      question: "What is the main source of Vitamin C?",
      options: ["Apple", "Orange", "Rice", "Milk"],
      answer: "Orange",
    },
    {
      question: "Which food is rich in protein?",
      options: ["Fish", "Sugar", "Oil", "Bread"],
      answer: "Fish",
    },
    {
      question: "Which is a junk food?",
      options: ["Burger", "Spinach", "Apple", "Carrot"],
      answer: "Burger",
    },
    {
      question: "Which is a healthy fat source?",
      options: ["Avocado", "Candy", "Cake", "Fries"],
      answer: "Avocado",
    },
    {
      question: "Which drink is healthiest?",
      options: ["Water", "Soda", "Energy Drink", "Alcohol"],
      answer: "Water",
    },
    {
      question: "Local fruits in Bangladesh?",
      options: ["Mango", "Pizza", "Burger", "Ice cream"],
      answer: "Mango",
    },
    {
      question: "Which is a leafy vegetable?",
      options: ["Spinach", "Cake", "Chicken", "Fries"],
      answer: "Spinach",
    },
    {
      question: "Best source of calcium?",
      options: ["Milk", "Cola", "Candy", "Burger"],
      answer: "Milk",
    },
    {
      question: "Avoid for healthy life?",
      options: ["Junk Food", "Fruits", "Veggies", "Water"],
      answer: "Junk Food",
    },
    {
      question: "Which is high in sugar?",
      options: ["Candy", "Rice", "Carrot", "Egg"],
      answer: "Candy",
    },
    {
      question: "Which is a local grain?",
      options: ["Rice", "Burger", "Pizza", "Cake"],
      answer: "Rice",
    },
    {
      question: "Good habit before eating?",
      options: ["Wash hands", "Eat fast", "Skip meals", "Drink soda"],
      answer: "Wash hands",
    },
    {
      question: "Rich source of Iron?",
      options: ["Spinach", "Sugar", "Cake", "Chips"],
      answer: "Spinach",
    },
    {
      question: "Best snack option?",
      options: ["Fruits", "Chocolate", "Chips", "Ice cream"],
      answer: "Fruits",
    },
    {
      question: "Good protein source?",
      options: ["Egg", "Candy", "Cake", "Soda"],
      answer: "Egg",
    },
    {
      question: "Healthy breakfast option?",
      options: ["Oats", "Chips", "Cake", "Burger"],
      answer: "Oats",
    },
    {
      question: "Avoid excess intake of?",
      options: ["Salt", "Fruits", "Veggies", "Water"],
      answer: "Salt",
    },
    {
      question: "What helps digestion?",
      options: ["Fiber", "Sugar", "Oil", "Soda"],
      answer: "Fiber",
    },
    {
      question: "Best source of Vitamin D?",
      options: ["Sunlight", "Candy", "Burger", "Cake"],
      answer: "Sunlight",
    },
    {
      question: "Which is an oily fish?",
      options: ["Salmon", "Ice cream", "Pizza", "Cake"],
      answer: "Salmon",
    },
    {
      question: "Healthy drink?",
      options: ["Lassi", "Soda", "Beer", "Cola"],
      answer: "Lassi",
    },
    {
      question: "Local leafy vegetable?",
      options: ["Spinach", "Burger", "Pizza", "Chips"],
      answer: "Spinach",
    },
    {
      question: "What builds muscles?",
      options: ["Protein", "Sugar", "Oil", "Soda"],
      answer: "Protein",
    },
    {
      question: "Which is high in sugar?",
      options: ["Soft drinks", "Egg", "Rice", "Fish"],
      answer: "Soft drinks",
    },
    {
      question: "What is rich in Omega-3?",
      options: ["Fish", "Candy", "Fries", "Cake"],
      answer: "Fish",
    },
    {
      question: "Which is a healthy dessert?",
      options: ["Fruit salad", "Ice cream", "Donut", "Cake"],
      answer: "Fruit salad",
    },
    {
      question: "Avoid to prevent obesity?",
      options: ["Junk food", "Fruits", "Veggies", "Water"],
      answer: "Junk food",
    },
    {
      question: "Best source of potassium?",
      options: ["Banana", "Burger", "Pizza", "Fries"],
      answer: "Banana",
    },
    {
      question: "Which is whole grain?",
      options: ["Brown rice", "White bread", "Cake", "Candy"],
      answer: "Brown rice",
    },
    {
      question: "Best habit after meals?",
      options: ["Brush teeth", "Sleep", "Drink soda", "Eat cake"],
      answer: "Brush teeth",
    },
  ];

  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const [questions, setQuestions] = useState(shuffleArray(originalQuestions));
  const questionsPerPart = 5;
  const totalParts = Math.ceil(questions.length / questionsPerPart);

  const [currentPart, setCurrentPart] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showAnswers, setShowAnswers] = useState(false);
  const [cumulativeScore, setCumulativeScore] = useState(0);

  const startIndex = currentPart * questionsPerPart;
  const currentQuestions = questions.slice(
    startIndex,
    startIndex + questionsPerPart
  );

  const handleSelect = (qGlobalIndex, option) => {
    if (showAnswers) return;
    setAnswers((prev) => ({ ...prev, [qGlobalIndex]: option }));
  };

  const handleSubmitPart = () => {
    const allAnswered = currentQuestions.every(
      (_, idx) => answers[startIndex + idx] !== undefined
    );
    if (!allAnswered) {
      alert("Please answer all questions in this part before submitting.");
      return;
    }
    let partScore = 0;
    currentQuestions.forEach((q, idx) => {
      const globalIdx = startIndex + idx;
      if (answers[globalIdx] === q.answer) partScore++;
    });
    setCumulativeScore((prev) => prev + partScore);
    setShowAnswers(true);
  };

  const handleNextPart = () => {
    if (!showAnswers) return;
    if (currentPart < totalParts - 1) {
      setCurrentPart((prev) => prev + 1);
      setShowAnswers(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleRestart = () => {
    if (
      !window.confirm(
        "Are you sure you want to restart the quiz? Your progress will be lost."
      )
    )
      return;
    setQuestions(shuffleArray(originalQuestions)); // Shuffle questions here
    setCurrentPart(0);
    setAnswers({});
    setShowAnswers(false);
    setCumulativeScore(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-green-100 p-6">
      <div className="w-full max-w-3xl">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-green-800">
            Quiz — Part {currentPart + 1} / {totalParts}
          </h1>
          <div className="text-right">
            <p className="text-sm text-gray-600">Cumulative score:</p>
            <p className="font-semibold text-green-700">{cumulativeScore}</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          {currentQuestions.map((q, idx) => {
            const globalIdx = startIndex + idx;
            const selected = answers[globalIdx];
            return (
              <div key={globalIdx} className="mb-5">
                <p className="font-medium mb-2">
                  {idx + 1}. {q.question}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {q.options.map((opt, oi) => {
                    let base = "p-2 rounded-md border text-left";
                    let extra =
                      " bg-gray-100 hover:bg-gray-200 border-gray-200";
                    if (!showAnswers) {
                      if (selected === opt)
                        extra = " bg-green-200 border-green-500";
                    } else {
                      if (opt === q.answer)
                        extra = " bg-green-100 border-green-500";
                      else if (selected === opt && opt !== q.answer)
                        extra = " bg-red-100 border-red-500";
                      else extra = " bg-gray-50 border-gray-200";
                    }
                    return (
                      <button
                        key={oi}
                        onClick={() => handleSelect(globalIdx, opt)}
                        className={`${base} ${extra}`}
                        disabled={showAnswers}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
                {showAnswers && (
                  <div className="mt-2 text-sm">
                    {selected === q.answer ? (
                      <p className="text-green-700 font-medium">✅ Correct</p>
                    ) : (
                      <p className="text-red-600 font-medium">
                        ❌ Wrong — Correct answer:{" "}
                        <span className="font-semibold">{q.answer}</span>
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}

          <div className="flex items-center justify-between mt-4">
            {!showAnswers ? (
              <button
                onClick={handleSubmitPart}
                className="px-4 py-2 bg-green-600 text-white rounded-md shadow"
              >
                Submit Part
              </button>
            ) : (
              <div className="flex items-center gap-3">
                <div className="px-4 py-2 bg-green-50 border border-green-200 rounded">
                  <p className="text-sm text-gray-600">This part score:</p>
                  <p className="font-semibold text-green-700">
                    {currentQuestions.reduce((acc, q, idx) => {
                      const globalIdx = startIndex + idx;
                      return acc + (answers[globalIdx] === q.answer ? 1 : 0);
                    }, 0)}
                  </p>
                </div>

                {currentPart < totalParts - 1 ? (
                  <button
                    onClick={handleNextPart}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md shadow"
                  >
                    Next Part
                  </button>
                ) : (
                  <div className="text-green-700 font-semibold">
                    🎉 Quiz Completed!
                  </div>
                )}
              </div>
            )}

            <div>
              <button
                onClick={handleRestart}
                className="px-3 py-2 bg-red-500 text-white rounded-md shadow ml-2"
              >
                Restart Quiz
              </button>
            </div>
          </div>
        </div>

        {currentPart === totalParts - 1 && showAnswers && (
          <div className="mt-6 bg-white rounded-xl shadow-md p-6 text-center">
            <h2 className="text-xl font-bold text-green-800 mb-2">
              Final Result
            </h2>
            <p className="text-gray-700 mb-3">
              Your final cumulative score:{" "}
              <span className="font-semibold text-green-700">
                {cumulativeScore}
              </span>
            </p>
            <p className="text-sm text-gray-600">
              Percentage:{" "}
              <span className="font-semibold">
                {Math.round((cumulativeScore / questions.length) * 100)}%
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
