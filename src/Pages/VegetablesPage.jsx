import React from "react";

const vegetables = [
  {
    name: "Spinach (পালং শাক)",
    image: "/vegi1.jpg",
    benefits:
      "Spinach is packed with iron, calcium, and essential vitamins like A, C, and K. It boosts blood circulation, strengthens bones, improves eyesight, supports digestion, and helps in keeping skin and hair healthy. Regular consumption also enhances immunity and reduces fatigue.",
  },
  {
    name: "Carrot (গাজর)",
    image: "/vegi2.jpg",
    benefits:
      "Carrots are an excellent source of Vitamin A, beta-carotene, and antioxidants. They greatly improve eyesight and protect vision, especially at night. Carrots also keep the skin glowing and healthy, support the immune system, improve digestion, and reduce the risk of chronic diseases by fighting harmful free radicals.",
  },
  {
    name: "Cabbage (বাঁধাকপি)",
    image: "/Cabbage.jpg",
    benefits:
      "Cabbage is a powerhouse of Vitamin C, Vitamin K, and dietary fiber. It improves digestion by keeping the stomach healthy and preventing constipation. The high Vitamin C content strengthens immunity, while Vitamin K supports bone health and proper blood clotting. Its antioxidants help detoxify the body and may reduce the risk of heart disease and cancer.",
  },
  {
    name: "Beans (বরবটি)",
    image: "/Beans.jpg",
    benefits:
      "Beans are an excellent source of fiber and plant-based protein. The high fiber content improves digestion, prevents constipation, and supports gut health. They help regulate blood sugar levels, making them beneficial for people with diabetes. Beans are also rich in vitamins, minerals, and antioxidants that boost immunity, support heart health, and keep the body energetic.",
  },
  {
    name: "Tomato (টমেটো)",
    image: "/Tomato.jpg",
    benefits:
      "Tomatoes are rich in powerful antioxidants, especially lycopene, which helps fight harmful free radicals in the body. They support healthy and glowing skin, reduce the risk of heart diseases, and strengthen the immune system. Tomatoes are also a good source of Vitamin C, potassium, and folate, which promote digestion, improve vision, and maintain overall body health.",
  },
  {
    name: "Potato (আলু)",
    image: "/Potato.jpg",
    benefits:
      "Potatoes are a rich source of healthy carbohydrates that provide the body with instant energy. They also contain essential nutrients like potassium, Vitamin B6, and Vitamin C, which help in maintaining nerve function, improving heart health, and boosting immunity. The fiber in potatoes supports digestion, while antioxidants protect the body from cell damage and promote overall wellness.",
  },
  {
    name: "Cauliflower (ফুলকপি)",
    image: "/Cauliflower.jpg",
    benefits:
      "Oranges are an excellent source of Vitamin C and dietary fiber. They strengthen the immune system, improve skin health, and help the body fight infections. The natural fiber supports healthy digestion and prevents constipation, while antioxidants in oranges protect against cell damage and promote overall heart health. Regular consumption also keeps you refreshed and hydrated.",
  },
  {
    name: "Brinjal (বেগুন)",
    image: "/Brinjal.jpg",
    benefits:
      "Rich in powerful antioxidants and dietary fiber, it helps in effective weight management by keeping you full for longer and reducing unnecessary cravings. The soluble fiber works to lower bad cholesterol (LDL), supports heart health, and improves digestion. Regular consumption also helps in balancing blood sugar levels and boosting overall metabolism.",
  },
  {
    name: "Pumpkin (কুমড়া)",
    image: "/Pumpkin.jpg",
    benefits:
      "Packed with Vitamin A and essential carotenoids, it plays a vital role in improving eyesight and preventing night blindness. Regular consumption strengthens the immune system, supports healthy skin, and promotes proper growth and development in children. It also works as an antioxidant, protecting the body from harmful free radicals.",
  },
  {
    name: "Onion (পেঁয়াজ)",
    image: "/Onion.jpg",
    benefits:
      "Rich in powerful antioxidants that protect the body from oxidative stress. Helps regulate blood sugar levels naturally, making it beneficial for people with diabetes. Regular consumption supports heart health by improving blood circulation, reducing bad cholesterol, and lowering the risk of cardiovascular diseases.",
  },
  {
    name: "Garlic (রসুন)",
    image: "/Garlic.jpg",
    benefits:
      "Strengthens the immune system with essential vitamins and minerals, helping the body fight infections. Naturally reduces bad cholesterol levels, supporting heart health. Rich in dietary fiber, which improves digestion, prevents constipation, and promotes overall gut health.",
  },
  {
    name: "Chili (লংকা)",
    image: "/chilli.jpg",
    benefits:
      "Packed with Vitamin C, which helps improve metabolism and keeps the body energetic. Strengthens the immune system to fight infections and supports faster recovery. Also promotes healthy skin and overall well-being.",
  },
  {
    name: "Cucumber (শসা)",
    image: "/cucumber.jpg",
    benefits:
      "Contains over 90% water, which keeps the body hydrated and refreshed. Promotes healthy, glowing skin and aids in smooth digestion. Also helps regulate body temperature and flush out toxins.",
  },
  {
    name: "Bottle Gourd (লাউ)",
    image: "/Bottle Gourd.jpg",
    benefits:
      "Low in calories and high in water content, making it excellent for weight loss. Provides a natural cooling effect on the body, especially in summer. Rich in fiber, which improves digestion and keeps the stomach healthy.",
  },
  {
    name: "Bitter Gourd (করলা)",
    image: "/Bitter Gourd.jpg",
    benefits:
      "Helps regulate blood sugar levels, making it beneficial for diabetic patients. Supports liver health by detoxifying the body. Rich in fiber, which aids digestion and promotes a healthy gut.",
  },
  {
    name: "Lady's Finger (ঢেঁড়স)",
    image: "/Lady's Finger.jpg",
    benefits:
      "Packed with fiber and Vitamin C, it helps regulate blood sugar levels, strengthens the immune system, and improves digestion for overall wellness.",
  },
  {
    name: "Radish (মূলা)",
    image: "/Radish.jpg",
    benefits:
      "Rich in fiber, Vitamin C, and essential minerals. Radish improves liver and kidney function, supports digestion, boosts immunity, and helps detoxify the body. It also controls blood sugar levels and keeps the skin healthy.",
  },
  {
    name: "Drumstick (সজনে ডাঁটা)",
    image: "/Drumstick .jpg",
    benefits:
      "Packed with iron, calcium, and Vitamin C. Drumstick strengthens bones, boosts immunity, improves blood circulation, supports digestion, and helps control blood sugar. It is also good for skin and joint health.",
  },
  {
    name: "Turnip (শালগম)",
    image: "/Turnip.jpg",
    benefits:
      "A great source of Vitamin C, fiber, and antioxidants. Turnip supports digestion, enhances immunity, promotes heart health, and helps in maintaining healthy skin. It also reduces inflammation and improves metabolism.",
  },
  {
    name: "Capsicum (ক্যাপসিকাম)",
    image: "/capsicum.jpg",
    benefits:
      "Rich in Vitamin A, C, and antioxidants. Capsicum improves eyesight, boosts immunity, supports skin health, and protects against free radicals. It also helps in weight management and improves digestion.",
  },
  {
    name: "Mushroom (মাশরুম)",
    image: "/mushroom.jpg",
    benefits:
      "Low in calories but high in protein, Vitamin D, and antioxidants. Mushroom boosts immunity, provides energy, supports heart health, improves brain function, and helps in weight management.",
  },
  {
    name: "Coriander Leaves (ধনেপাতা)",
    image: "/coriander.jpg",
    benefits:
      "Rich in Vitamin C, K, and antioxidants. Coriander improves digestion, detoxifies the body, supports heart health, lowers cholesterol, and boosts immunity. It also has antibacterial and anti-inflammatory properties.",
  },
  {
    name: "Mint Leaves (পুদিনা পাতা)",
    image: "mint.jpg",
    benefits:
      "Contains essential oils and antioxidants. Mint soothes the stomach, improves digestion, refreshes breath, provides a cooling effect, and reduces stress. It also supports skin health and relieves headaches.",
  },
  {
    name: "Green Peas (মটরশুঁটি)",
    image: "/peas.jpg",
    benefits:
      "High in protein, fiber, and Vitamin K. Green peas improve digestion, control blood sugar, support bone health, boost immunity, and provide long-lasting energy. They also help in weight management.",
  },
  {
    name: "Sweet Potato (মিষ্টি আলু)",
    image: "/sweet-potatoes.jpg",
    benefits:
      "Rich in Vitamin A, C, and dietary fiber. Sweet potato provides instant energy, improves digestion, boosts immunity, supports healthy vision, and maintains blood sugar balance. It is also good for skin and heart health.",
  },
  {
    name: "Snake Gourd (চিচিঙ্গা)",
    image: "/snake-gourd.jpg",
    benefits:
      "Low in calories and high in fiber. Snake gourd aids digestion, helps in weight loss, cools the body, controls blood sugar, and removes toxins. It also supports liver health and boosts hydration.",
  },
  {
    name: "Ridge Gourd (ঝিঙে)",
    image: "/ridge-gourd.jpg",
    benefits:
      "Packed with dietary fiber, Vitamin C, and iron. Ridge gourd improves digestion, supports weight loss, boosts immunity, purifies blood, and reduces cholesterol. It also keeps skin healthy and glowing.",
  },
  {
    name: "Pointed Gourd (পটল)",
    image: "/pointed-gourd.jpg",
    benefits:
      "A good source of fiber, Vitamin A, and antioxidants. Pointed gourd improves digestion, supports liver function, controls cholesterol, enhances immunity, and helps in weight management.",
  },
  {
    name: "Ash Gourd (কুমড়ো শাক)",
    image: "/ash-gourd.jpg",
    benefits:
      "Low in calories and rich in minerals. Ash gourd cools the body, improves digestion, boosts immunity, supports weight loss, and helps in detoxification. It also promotes heart health and mental calmness.",
  },
  //   more vegetables
  {
    name: "Red Amaranth (লাল শাক)",
    image: "/red-amaranth.jpg",
    benefits:
      "Rich in iron, calcium, and Vitamin A. Red amaranth improves blood circulation, strengthens bones, enhances eyesight, boosts immunity, and prevents anemia. It also supports skin health and digestion.",
  },
  {
    name: "Malabar Spinach (পুঁই শাক)",
    image: "/malabar-spinach.jpg",
    benefits:
      "High in Vitamin A, Vitamin C, and calcium. Malabar spinach supports bone health, improves eyesight, enhances skin glow, boosts immunity, and helps in digestion. It also provides cooling effects to the body.",
  },
  {
    name: "Data Shak (ডাটা শাক)",
    image: "/data-shak.jpg",
    benefits:
      "Rich in fiber, Vitamin C, and calcium. Data shak helps in digestion, reduces constipation, strengthens bones, and improves immunity. It is also beneficial for maintaining a healthy weight.",
  },
  {
    name: "Taro Leaves (কচু শাক)",
    image: "/taro-leaves.jpg",
    benefits:
      "Rich in iron, Vitamin C, and fiber. Taro leaves prevent anemia, improve digestion, boost immunity, and help in detoxification. It is also good for skin and hair health.",
  },
  {
    name: "Water Spinach (কলমি শাক)",
    image: "/water-spinach.jpg",
    benefits:
      "Rich in fiber, calcium, and Vitamin A. Water spinach improves digestion, reduces blood sugar, supports heart health, boosts immunity, and enhances eyesight. It also helps in calming the mind.",
  },

  {
    name: "Radish Leaves (মুলা শাক)",
    image: "/radish-leaves.jpg",
    benefits:
      "Rich in Vitamin C, calcium, and fiber. Radish leaves help in digestion, improve immunity, detoxify the body, strengthen bones, and promote healthy skin. They also support liver function.",
  },
  {
    name: "Hyacinth Bean Leaves (শিম শাক)",
    image: "/hyacinth-bean-leaves.jpg",
    benefits:
      "Packed with antioxidants, Vitamin A, and fiber. Hyacinth bean leaves improve digestion, support eye health, strengthen bones, boost immunity, and help in controlling cholesterol levels.",
  },
  {
    name: "Fenugreek Leaves (মেথি শাক)",
    image: "/fenugreek-leaves.jpg",
    benefits:
      "Rich in iron, magnesium, and fiber. Fenugreek leaves control blood sugar, improve digestion, boost immunity, and reduce cholesterol. They also promote hair growth and skin health.",
  },
  {
    name: "Taro Stems (কচুর লতি)",
    image: "/taro-stems.jpg",
    benefits:
      "High in fiber, calcium, and Vitamin C. Taro stems improve digestion, prevent constipation, support bone strength, boost immunity, and help in detoxification. They are also good for weight management.",
  },
];

function VegetablesPage() {
  return (
    <div className="p-6 bg-[#EAF4F4]">
      <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
        Vegetables (শাকসবজি)
      </h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {vegetables.map((veg, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-4 hover:shadow-2xl transition duration-300"
          >
            <img
              src={veg.image}
              alt={veg.name}
              className="w-full h-70 object-cover rounded-lg mb-3"
            />
            <h2 className="text-2xl font-semibold text-green-600">
              {veg.name}
            </h2>
            <p className="text-gray-700 text-xl mt-2">{veg.benefits}</p>
          </div>
        ))}
      </div>

      {/* Daily Consumption Tips Section */}
      <div className="mt-12 bg-gray-100 p-6 rounded-xl shadow-inner">
        <h2 className="text-4xl font-bold text-green-800 mb-4 text-center">
          🥗 Daily Consumption Tips
        </h2>
        <ul className="list-disc pl-5 space-y-3 text-gray-600 font-semibold text-xl md:text-2xl">
          <li>
            Include 2–3 different vegetables in your meals daily for balanced
            nutrition.
          </li>
          <li>
            Eat a variety of colors: green, red, orange, and leafy vegetables
            for different vitamins.
          </li>
          <li>
            Leafy greens like spinach, fenugreek, and coriander can be eaten raw
            or lightly cooked once a day.
          </li>
          <li>
            Root vegetables like carrots, radish, and sweet potato can be eaten
            once daily for fiber and energy.
          </li>
          <li>
            Cruciferous vegetables like cabbage, cauliflower, and broccoli are
            best eaten cooked 2–3 times a week.
          </li>
          <li>
            Include vegetables like beans, peas, and lentils for plant-based
            protein 2–3 times a week.
          </li>
          <li>Use minimal oil and salt to preserve nutrients while cooking.</li>
          <li>
            Drink plenty of water and include fresh vegetables in salads for
            hydration.
          </li>
          <li>
            Try to eat vegetables in different meals: breakfast, lunch, and
            dinner, rather than all at once.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default VegetablesPage;
