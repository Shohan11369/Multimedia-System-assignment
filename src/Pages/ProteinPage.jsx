import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

function ProteinPage() {
  const proteins = [
    {
      name: "Fish",
      emoji: "🐟",
      img: "/fish.jpg",
      benefits: [
        "High-quality protein for muscle growth and repair",
        "Rich in Omega-3 fatty acids for heart and brain health",
        "Supports immune system and overall body strength",
      ],
    },
    {
      name: "Meat",
      emoji: "🥩",
      img: "/meat.jpg",
      benefits: [
        "Excellent source of complete protein",
        "Supports muscle mass and recovery",
        "Contains essential vitamins like B12 and iron",
      ],
    },
    {
      name: "Egg",
      emoji: "🥚",
      img: "/egg.jpg",
      benefits: [
        "High in protein and amino acids",
        "Promotes muscle repair and growth",
        "Rich in vitamins D, B6, B12 and minerals",
      ],
    },
    {
      name: "Lentils",
      emoji: "🌱",
      img: "/lentils.jpg",
      benefits: [
        "Plant-based protein for vegetarians",
        "Rich in fiber and essential minerals",
        "Supports digestion and overall health",
      ],
    },
    {
      name: "Chicken",
      emoji: "🍗",
      img: "/chicken.jpg",
      benefits: [
        "Lean protein source for muscle building",
        "Rich in Vitamin B6 and niacin",
        "Supports weight management and metabolism",
      ],
    },
    {
      name: "Paneer (Cottage Cheese)",
      emoji: "🧀",
      img: "/paneer.jpg",
      benefits: [
        "Good source of vegetarian protein",
        "Rich in calcium for bone health",
        "Supports muscle growth and repair",
      ],
    },
    {
      name: "Yogurt",
      emoji: "🥛",
      img: "/yogurt.jpg",
      benefits: [
        "Contains high-quality protein",
        "Probiotics support gut health",
        "Good for bones due to calcium and vitamin D",
      ],
    },
    {
      name: "Tofu",
      emoji: "🟦",
      img: "/tofu.jpg",
      benefits: [
        "Excellent plant-based protein",
        "Contains all essential amino acids",
        "Low in calories and supports heart health",
      ],
    },
    {
      name: "Almonds",
      emoji: "🌰",
      img: "/almonds.jpg",
      benefits: [
        "High in protein and healthy fats",
        "Supports brain and heart health",
        "Rich in Vitamin E and antioxidants",
      ],
    },
    {
      name: "Peanut Butter",
      emoji: "🥜",
      img: "/peanut-butter.jpg",
      benefits: [
        "Rich in protein and healthy fats",
        "Good for muscle building",
        "Supports energy levels and heart health",
      ],
    },
    {
      name: "Soybeans",
      emoji: "🟢",
      img: "/soybeans.jpg",
      benefits: [
        "High in plant-based protein",
        "Contains essential amino acids",
        "Helps lower cholesterol and supports heart health",
      ],
    },
  ];

  return (
    <div className="p-8 bg-gradient-to-b from-red-50 to-yellow-50 min-h-screen">
      <Typography
        variant="h3"
        className="text-center text-red-800 font-bold mb-12"
      >
        Protein Foods & Benefits (প্রোটিন)
      </Typography>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20">
        {proteins.map((protein, index) => (
          <Card
            key={index}
            className="hover:shadow-2xl transition-transform duration-300 shadow-md bg-white"
          >
            <img
              src={protein.img}
              alt={protein.name}
              className="w-full h-70 object-cover rounded-t-md"
            />
            <CardContent className="p-4">
              <Typography variant="h5" className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{protein.emoji}</span> {protein.name}
              </Typography>
              <ul className="list-disc list-inside text-xl space-y-1 text-gray-700">
                {protein.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Note Section */}
      <div className="mt-20 bg-gray-100 p-6 rounded-lg shadow-md ">
        <Typography
          variant="h5"
          className="text-red-500 !text-5xl font-bold mb-6"
        >
          Protein Intake Guidance
        </Typography>
        <ul className="mt-4 list-disc list-inside space-y-2 text-2xl text-gray-800">
          <li>
            ⚠️ Eating too much protein may put extra strain on kidneys and
            liver, and can lead to digestive issues.
          </li>
          <li>
            🥗 For most adults, around{" "}
            <strong>
              0.8 to 1.2 grams of protein per kg body weight per day
            </strong>{" "}
            is sufficient.
          </li>
          <li>
            🍳 Include a variety of protein sources: fish, meat, eggs, dairy,
            legumes, nuts, and seeds.
          </li>
          <li>
            💧 Drink enough water when consuming high protein foods to help
            kidney function.
          </li>
          <li>
            ⚖️ Balance protein with carbohydrates, healthy fats, and vegetables
            for overall health.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProteinPage;
