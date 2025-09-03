import React from "react";

function Video() {
  return (
    <div className="p-10 space-y-10">
      {/* Section 1: Watch & Learn */}
      <div>
        <h1 className="text-3xl font-bold text-red-600 mb-2">
          📺 Watch & Learn
        </h1>
        <p className="mb-6 text-gray-700">
          Watch educational videos about food and healthy habits.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Video 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 w-full">
            <h2 className="font-semibold text-2xl mb-6">
              🍎 What is Healthy Food?
            </h2>
            <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/64Th4wLVp3A?si=hkJTWJRqn-PuT3XR"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          </div>

          {/* Video 2 */}
          <div className="bg-white rounded-xl shadow-md p-4 w-full">
            <h2 className="font-semibold text-2xl mb-4">
              🥦 Benefits of Local Foods
            </h2>
            <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/a-084pqI05U?si=DBVstvR02TZ0NLZs"
                title="Benefits of Local Foods"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          </div>

          {/* Video 3 */}
          <div className="bg-white rounded-xl shadow-md p-4 w-full">
            <h2 className="font-semibold text-2xl mb-4">
              🚫 Avoiding Junk Food
            </h2>
            <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/lZp6Ntomljc?si=szXdv0L9f4di-7mD"
                title="Avoiding Junk Food"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* New: Instruction / Quiz prompt */}
      <div className="bg-yellow-50 p-6 rounded-xl shadow-md border border-yellow-200">
        <h2 className="text-2xl font-semibold text-yellow-700 mb-2">
          📝 Check Your Knowledge
        </h2>
        <p className="text-gray-800 text-xl mb-4">
          After watching the videos and playing the game, if you want to check
          your knowledge, you need to <strong>Sign Up</strong> or{" "}
          <strong>Log In</strong>. Then you can take a short exam / quiz to test
          what you've learned.
        </p>

        <p className="text-lg text-gray-600 mt-3">
          (Note: Quiz access may require an account — implement auth flow so
          only logged-in users can start the exam.)
        </p>
      </div>

      {/* Section 2: Parents Helpful Tips (2-column grid cards) */}
      <div>
        <h1 className="text-3xl font-bold text-green-600 mb-6">
          👨‍👩‍👧 Parents Helpful Tips
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Tip 1 */}
          <div className="bg-green-50 p-6 rounded-xl shadow-md border border-green-200">
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              🍽 Daily Eating Habits
            </h2>
            <ul className="list-disc pl-5 text-xl space-y-1 text-gray-800">
              <li>Offer a variety of colorful fruits and vegetables daily.</li>
              <li>
                Serve balanced meals that include protein, healthy fats, and
                whole grains.
              </li>
              <li>
                Ensure children drink enough water instead of sugary drinks.
              </li>
              <li>
                Make breakfast a regular habit for better energy and focus.
              </li>
            </ul>
          </div>

          {/* Tip 2 */}
          <div className="bg-green-50 p-6 rounded-xl shadow-md border border-green-200">
            <h2 className="text-2xl font-semibold text-orange-700 mb-2">
              🛒 Shopping & Cooking
            </h2>
            <ul className="list-disc pl-5 text-xl space-y-1 text-gray-800">
              <li>
                Involve kids in grocery shopping and teach them to read
                nutrition labels.
              </li>
              <li>
                Buy local and seasonal produce for fresher and more affordable
                meals.
              </li>
              <li>
                Cook together as a family to make healthy eating fun and
                engaging.
              </li>
              <li>
                Prepare snacks in advance—cut fruits, boiled eggs, veggie
                sticks, etc.
              </li>
            </ul>
          </div>

          {/* Tip 3 */}
          <div className="bg-green-50 p-6 rounded-xl shadow-md border border-green-200">
            <h2 className="text-2xl font-semibold text-lime-600 mb-2">
              📱 Limiting Junk Food & Screen Time
            </h2>
            <ul className="list-disc pl-5 text-xl space-y-1 text-gray-800">
              <li>
                Limit fast food and processed snacks to occasional treats.
              </li>
              <li>
                Teach kids the difference between “everyday foods” and
                “sometimes foods.”
              </li>
              <li>
                Encourage outdoor play and physical activities instead of screen
                time.
              </li>
              <li>Avoid eating meals in front of the TV or devices.</li>
            </ul>
          </div>

          {/* Tip 4 */}
          <div className="bg-green-50 p-6 rounded-xl shadow-md border border-green-200">
            <h2 className="text-2xl font-semibold text-pink-500 mb-2">
              ❤️ Creating a Healthy Mindset
            </h2>
            <ul className="list-disc pl-5 text-xl space-y-1 text-gray-800">
              <li>
                Be a role model—eat healthy yourself to inspire your children.
              </li>
              <li>
                Don’t force kids to finish their plate; let them listen to their
                hunger cues.
              </li>
              <li>Encourage positive talk about food and body image.</li>
              <li>
                Celebrate small healthy choices instead of focusing only on
                restrictions.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
