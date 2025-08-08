import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-[#EAF4F4] flex flex-col">
      <div className="p-10 max-w-4xl mx-auto flex-grow">
        <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">
          📘 About Us / আমাদের সম্পর্কে
        </h1>

        {/* English Box */}
        <div className="bg-green-50 border border-yellow-300 rounded-lg shadow-md p-6 mb-8">
          <p className="mb-4 text-gray-900 text-base md:text-[18px]">
            In Bangladesh, many school-going children suffer from poor nutrition
            due to lack of awareness about healthy food habits. Many children
            prefer junk food over nutritious local foods and don’t understand
            the importance of a balanced diet.
          </p>

          <p className="mb-4 text-gray-800 text-base md:text-[18px]">
            This website is specially designed for children aged 6 to 11 in
            Bangladesh to raise awareness about healthy eating habits. Through
            interactive videos, games, audio storytelling, and animations, we
            aim to make nutrition education fun and engaging.
          </p>

          <p className="text-gray-800 text-base md:text-[18px]">
            We hope this bilingual (Bangla & English) multimedia platform will
            help children learn about local foods, balanced diets, and healthy
            lifestyle choices — empowering a healthier next generation in
            Bangladesh.
          </p>
        </div>

        {/* Bangla Box */}
        <div className="bg-white border border-yellow-300 rounded-lg shadow-md p-6">
          <p className="mb-4 text-gray-800">
            বাংলাদেশের অনেক স্কুলজীবী শিশু খাদ্য সম্পর্কিত সঠিক তথ্য ও
            স্বাস্থ্যসম্মত খাদ্যাভ্যাসের অভাবে ভুগছে। অনেক শিশুরা অপ্রয়োজনীয়
            জাঙ্কফুড বেশি খায় এবং সুষম খাদ্যের গুরুত্ব বুঝতে পারে না।
          </p>

          <p className="mb-4 text-gray-800">
            এই ওয়েবসাইটটি বিশেষভাবে বাংলাদেশের ৬ থেকে ১১ বছর বয়সী শিশুদের জন্য
            তৈরি করা হয়েছে। আমাদের উদ্দেশ্য হচ্ছে শিশুদের মাঝে স্বাস্থ্যকর
            খাদ্যাভ্যাস সম্পর্কে সচেতনতা বৃদ্ধি করা, যাতে তারা স্থানীয় এবং
            পুষ্টিকর খাবার সম্পর্কে জানতে পারে এবং সুস্থভাবে বৃদ্ধি পেতে পারে।
          </p>

          <p className="text-gray-800">
            আমাদের আশা, এই দ্বিভাষিক (বাংলা ও ইংরেজি) ডিজিটাল শিক্ষামূলক
            প্ল্যাটফর্ম শিশুদের সঠিক খাদ্যাভ্যাস গড়ে তুলতে সাহায্য করবে এবং
            বাংলাদেশের শিশুদের স্বাস্থ্য সচেতনতার নতুন দিগন্ত উন্মোচন করবে।
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
