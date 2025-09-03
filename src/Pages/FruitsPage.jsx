import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

function FruitsPage() {
  const fruits = [
    {
      name: "Mango",
      emoji: "🥭",
      benefits: [
        "Rich in Vitamin C & A",
        "Boosts immunity",
        "Good for eyes and skin",
        "Contains antioxidants for heart health",
        "Helps digestion due to dietary fiber",
      ],
      img: "/mango.jpg",
    },
    {
      name: "Banana",
      emoji: "🍌",
      benefits: [
        "High in potassium, regulates blood pressure",
        "Boosts energy instantly",
        "Good for skin and immunity",
        "Rich in vitamins B6 and C",
        "Supports digestive health",
      ],
      img: "/banana.jpg",
    },
    {
      name: "Apple",
      emoji: "🍎",
      benefits: [
        "Rich in vitamins and antioxidants",
        "Good for heart health",
        "Supports digestion with dietary fiber",
        "Helps control blood sugar levels",
        "Promotes weight management",
      ],
      img: "/apple.jpg",
    },
    {
      name: "Guava",
      emoji: "🍐",
      benefits: [
        "Rich in Vitamin C and antioxidants",
        "Supports immunity",
        "High fiber content aids digestion",
        "Helps maintain healthy skin",
        "Good for heart health and metabolism",
      ],
      img: "/guava.jpg",
    },
    {
      name: "Orange",
      emoji: "🍊",
      benefits: [
        "High in Vitamin C",
        "Boosts immunity",
        "Supports skin health and hydration",
        "Contains antioxidants for overall health",
        "Aids digestion and reduces inflammation",
      ],
      img: "/orange.jpg",
    },
    {
      name: "Strawberry",
      emoji: "🍓",
      benefits: [
        "Rich in antioxidants",
        "High in Vitamin C",
        "Improves skin health",
        "Supports heart health",
        "Aids in blood sugar regulation",
      ],
      img: "/strawberry.jpg",
    },
    {
      name: "Watermelon",
      emoji: "🍉",
      benefits: [
        "Hydrating fruit with high water content",
        "Rich in vitamins A & C",
        "Good for skin and digestion",
        "Contains antioxidants for heart health",
        "Helps in reducing inflammation",
      ],
      img: "/watermelon.jpg",
    },
    {
      name: "Pineapple",
      emoji: "🍍",
      benefits: [
        "Rich in Vitamin C",
        "Contains bromelain enzyme for digestion",
        "Supports immunity",
        "Anti-inflammatory properties",
        "Helps in wound healing and skin health",
      ],
      img: "/pineapple.jpg",
    },
    {
      name: "Papaya",
      emoji: "🥭",
      benefits: [
        "High in Vitamin C",
        "Contains digestive enzymes",
        "Good for skin and digestion",
        "Supports immunity",
        "Rich in antioxidants for overall health",
      ],
      img: "/papaya.jpg",
    },
    {
      name: "Grapes",
      emoji: "🍇",
      benefits: [
        "Rich in antioxidants",
        "Supports heart health",
        "Good for skin",
        "May improve brain function",
        "Helps in reducing blood pressure",
      ],
      img: "/grape.jpg",
    },
    {
      name: "Kiwi",
      emoji: "🥝",
      benefits: [
        "High in Vitamin C",
        "Boosts immunity",
        "Supports skin health",
        "Rich in fiber aids digestion",
        "Contains antioxidants for overall wellness",
      ],
      img: "/kiwi.jpg",
    },
    {
      name: "Litchi",
      emoji: "🍒",
      benefits: [
        "Rich in Vitamin C",
        "Boosts energy",
        "Good for skin and immunity",
        "Contains antioxidants",
        "Supports heart health and metabolism",
      ],
      img: "/litchi.jpg",
    },
    {
      name: "Indian Gooseberry (Amla)",
      emoji: "🫐",
      benefits: [
        "Very high in Vitamin C",
        "Boosts immunity",
        "Good for hair and skin",
        "Helps in digestion",
        "Supports liver health",
      ],
      img: "/amla.jpg",
    },
    {
      name: "Pear",
      emoji: "🍐",
      benefits: [
        "Rich in fiber and vitamins",
        "Helps in digestion",
        "Supports heart health",
        "Contains antioxidants",
        "May aid weight management",
      ],
      img: "/pear.jpg",
    },
    {
      name: "Jackfruit",
      emoji: "🍈",
      benefits: [
        "High in Vitamin A & C",
        "Boosts energy",
        "Good for digestion",
        "Supports immunity",
        "Contains antioxidants for overall health",
      ],
      img: "/jackfruit.jpg",
    },
    {
      name: "Starfruit",
      emoji: "⭐",
      benefits: [
        "Rich in Vitamin C",
        "Helps digestion",
        "Boosts immunity",
        "Low in calories",
        "Supports heart and skin health",
      ],
      img: "/starfruit.jpg",
    },
    {
      name: "Pomegranate",
      emoji: "🍎",
      benefits: [
        "Rich in antioxidants",
        "Good for heart health",
        "Supports skin health",
        "Helps reduce inflammation",
        "May improve digestion",
      ],
      img: "pomegranat.jpg",
    },
    {
      name: "Coconut",
      emoji: "🥥",
      benefits: [
        "Hydrating fruit",
        "Provides healthy fats",
        "Good for skin and energy",
        "Supports heart health",
        "May aid digestion",
      ],
      img: "/coconut.jpg",
    },
    {
      name: "Fig",
      emoji: "🍑",
      benefits: [
        "Rich in fiber",
        "Contains antioxidants",
        "Good for digestion and heart health",
        "Supports bone health",
        "Helps regulate blood sugar",
      ],
      img: "/fig.jpg",
    },
    {
      name: "Chikoo (Sapodilla)",
      emoji: "🍂",
      benefits: [
        "High in fiber",
        "Provides instant energy",
        "Good for digestion",
        "Contains vitamins and minerals",
        "Supports overall wellness",
      ],
      img: "/chikoo.jpg",
    },
  ];

  return (
    <div className="p-8 bg-green-50 min-h-screen">
      <Typography
        variant="h3"
        className="text-center text-indigo-400 font-bold mb-20"
      >
        Popular Fruits in Bangladesh with Images & Benefits
      </Typography>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20 mb-8">
        {fruits.map((fruit, index) => (
          <Card
            key={index}
            className="hover:shadow-2xl transition duration-300 shadow-md bg-white"
          >
            <img
              src={fruit.img}
              alt={fruit.name}
              className="w-full h-70 object-cover rounded-t-md mb-6"
            />
            <CardContent className="p-4">
              <Typography variant="h5" className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{fruit.emoji}</span> {fruit.name}
              </Typography>
              <ul className="list-disc list-inside text-xl space-y-1 text-gray-700">
                {fruit.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default FruitsPage;
