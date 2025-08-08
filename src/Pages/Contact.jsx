import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div className="min-h-screen bg-[#EAF4F4] flex justify-center items-start py-20 px-4">
      <div className="bg-white rounded-lg shadow-md p-10 max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold text-pink-600 mb-8">📞 Contact Us</h1>

        <div className="mb-6 text-gray-700 space-y-3 text-lg">
          <p>📍 Address: Dhaka, Bangladesh</p>
          <p>📞 Phone: +6011-26631075</p>
          <p>✉️ Email: shohansarker346@gmail.com</p>
        </div>

        <div className="flex justify-center space-x-8 text-blue-600 text-3xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-800 transition"
          >
            <FaFacebook />
          </a>

          <a
            href="https://www.linkedin.com/in/shohan-md-mizanur-rahman-21394027b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-800 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
