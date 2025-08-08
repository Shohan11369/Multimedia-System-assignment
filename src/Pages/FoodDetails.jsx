import React from "react";
import { useParams } from "react-router-dom";

function FoodDetails() {
  const { id } = useParams();

  const data = {
    1: {
      title: "Bangladesh Dietary Guidelines (Children 6–11 years)",
      eng: [
        {
          text: "💧 Drink at least 5–6 glasses of clean water daily.",
          reason:
            "Keeps the body hydrated, helps digestion, and improves concentration in school.",
        },
        {
          text: "🍚 Breakfast: Rice or bread with egg/milk and fruit.",
          reason:
            "Provides energy for the morning and helps focus during class.",
        },
        {
          text: "🥗 Lunch: Rice, vegetables, fish or meat, and lentils.",
          reason: "Balanced nutrients for growth, strength, and immunity.",
        },
        {
          text: "🥪 Afternoon snack: Seasonal fruits or milk with light snacks.",
          reason:
            "Keeps energy levels steady until dinner and prevents overeating.",
        },
        {
          text: "🍛 Dinner: Rice or roti, vegetables, and fish/egg/meat.",
          reason: "Supports overnight growth and body repair.",
        },
        {
          text: "❌ Limit sugary drinks, chips, fried foods.",
          reason: "Prevents obesity, tooth decay, and poor health.",
        },
        {
          text: "🛌 Sleep 9–11 hours and play daily.",
          reason: "Supports brain development and strong muscles.",
        },
      ],
      bn: [
        {
          text: "💧 প্রতিদিন অন্তত ৫–৬ গ্লাস বিশুদ্ধ পানি পান করুন।",
          reason:
            "শরীর হাইড্রেটেড রাখে, হজমে সাহায্য করে এবং স্কুলে মনোযোগ বাড়ায়।",
        },
        {
          text: "🍚 নাস্তা: ভাত বা রুটি, ডিম/দুধ এবং ফল।",
          reason: "সকালের শক্তি জোগায় এবং পড়াশোনায় মনোযোগে সাহায্য করে।",
        },
        {
          text: "🥗 দুপুর: ভাত, শাকসবজি, মাছ বা মাংস এবং ডাল।",
          reason: "বৃদ্ধি, শক্তি এবং রোগ প্রতিরোধ ক্ষমতা বাড়ায়।",
        },
        {
          text: "🥪 বিকেলের নাস্তা: মৌসুমি ফল বা দুধের সাথে হালকা নাস্তা।",
          reason:
            "শক্তি বজায় রাখে এবং রাতের খাবারের আগে অতিরিক্ত খাওয়া রোধ করে।",
        },
        {
          text: "🍛 রাতের খাবার: ভাত বা রুটি, শাকসবজি এবং মাছ/ডিম/মাংস।",
          reason: "রাতের ঘুমের সময় শরীরের বৃদ্ধি ও মেরামত করে।",
        },
        {
          text: "❌ কোমল পানীয়, চিপস, ভাজা খাবার কম খান।",
          reason: "স্থূলতা, দাঁতের ক্ষতি ও অসুস্থতা রোধ করে।",
        },
        {
          text: "🛌 পর্যাপ্ত ঘুম (৯–১১ ঘণ্টা) এবং খেলাধুলা করুন।",
          reason: "মস্তিষ্কের বৃদ্ধি ও পেশি শক্ত করে।",
        },
      ],
    },
    2: {
      title: "Brochures, Posters and More",
      eng: [
        {
          text: "Use colorful posters with pictures of healthy foods.",
          reason: "Visual learning helps children remember better.",
        },
        {
          text: "Provide brochures to parents and teachers.",
          reason: "Guides them to prepare balanced meals at home and school.",
        },
      ],
      bn: [
        {
          text: "স্বাস্থ্যকর খাবারের ছবি সহ রঙিন পোস্টার ব্যবহার করুন।",
          reason: "দৃশ্যমান শিক্ষা শিশুদের মনে রাখতে সাহায্য করে।",
        },
        {
          text: "অভিভাবক ও শিক্ষকদের জন্য ব্রোশিওর দিন।",
          reason: "বাড়ি ও স্কুলে সুষম খাবার প্রস্তুত করতে সাহায্য করে।",
        },
      ],
    },
    3: {
      title: "Food Essentials",
      eng: [
        {
          text: "Ensure meals contain grains, vegetables, protein, and dairy.",
          reason: "Provides all necessary nutrients for growth and immunity.",
        },
        {
          text: "Include seasonal fruits daily.",
          reason: "Rich in vitamins and antioxidants.",
        },
      ],
      bn: [
        {
          text: "ভাত, শাকসবজি, প্রোটিন ও দুধ প্রতিদিন রাখুন।",
          reason: "বৃদ্ধি ও রোগ প্রতিরোধে সব পুষ্টি দেয়।",
        },
        {
          text: "প্রতিদিন মৌসুমি ফল রাখুন।",
          reason: "ভিটামিন ও অ্যান্টিঅক্সিডেন্ট সমৃদ্ধ।",
        },
      ],
    },
    4: {
      title: "Eating Well",
      eng: [
        {
          text: "Use less oil and salt while cooking.",
          reason: "Prevents high blood pressure and obesity.",
        },
        {
          text: "Cook fresh meals instead of packaged foods.",
          reason: "Keeps nutrients intact and avoids harmful preservatives.",
        },
      ],
      bn: [
        {
          text: "রান্নায় তেল ও লবণ কম ব্যবহার করুন।",
          reason: "উচ্চ রক্তচাপ ও স্থূলতা রোধ করে।",
        },
        {
          text: "প্যাকেটজাত খাবারের পরিবর্তে তাজা রান্না করুন।",
          reason: "পুষ্টি বজায় থাকে ও ক্ষতিকর সংরক্ষণকারী এড়ানো যায়।",
        },
      ],
    },
    5: {
      title: "Eat for Health Calculators",
      eng: [
        {
          text: "Calculate daily calorie needs based on age and activity.",
          reason: "Prevents under or overfeeding.",
        },
        {
          text: "Measure correct portion sizes.",
          reason: "Avoids overeating and ensures balance.",
        },
      ],
      bn: [
        {
          text: "বয়স ও কাজের ধরন অনুযায়ী ক্যালোরি হিসাব করুন।",
          reason: "অতিরিক্ত বা কম খাওয়া রোধ করে।",
        },
        {
          text: "সঠিক খাবারের পরিমাণ মাপুন।",
          reason: "অতিরিক্ত খাওয়া রোধ করে এবং ভারসাম্য রাখে।",
        },
      ],
    },
  };

  const item = data[id];
  if (!item) {
    return <p className="p-5">No details found.</p>;
  }

  return (
    <div className="p-5 space-y-6">
      <h1 className="text-4xl font-bold text-green-700">{item.title}</h1>

      {/* English Section */}
      <div className="bg-white border rounded-xl shadow p-5">
        <h2 className="text-4xl font-semibold text-blue-700 mb-3">English</h2>
        <ul className="space-y-3">
          {item.eng.map((point, i) => (
            <li
              key={i}
              className="bg-blue-50 p-3 rounded-lg border border-blue-200 mt-1"
            >
              <p className="font-medium text-xl">{point.text}</p>
              <p className="text-md font-semibold text-gray-600">
                {point.reason}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Bangla Section */}
      <div className="bg-white border rounded-xl shadow p-5">
        <h2 className="text-4xl font-bold text-green-700 mb-3">বাংলা</h2>
        <ul className="space-y-3">
          {item.bn.map((point, i) => (
            <li
              key={i}
              className="bg-green-50 p-3 rounded-lg border border-green-200"
            >
              <p className="font-medium mt-1">{point.text}</p>
              <p className="text-md text-gray-700 mt-1">{point.reason}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FoodDetails;
