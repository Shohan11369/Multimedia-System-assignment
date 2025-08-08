import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Nutrition from "./Pages/Nutrition";
import Contact from "./Pages/Contact";
import Signup from "./Pages/Sign";
import Login from "./Pages/Login";
import Quiz from "./Pages/Quize";
import Food from "./Pages/nutrition/Food";
import Game from "./Pages/nutrition/Game";
import Video from "./Pages/nutrition/Video";
import FoodDetails from "./Pages/FoodDetails";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/nutrition/food" element={<Food />} />
        <Route path="/nutrition/game" element={<Game />} />
        <Route path="/nutrition/video" element={<Video />} />
        <Route path="/nutrition/food/:id" element={<FoodDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
