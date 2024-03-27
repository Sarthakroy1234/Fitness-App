import React from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs.jsx";
import Reasons from "./components/Reasons/Reasons";
import Plans from "./components/Plans/Plans";
import Testimonials from "./components/Testimonials/Testimonials";
import Join from "./components/Join/Join";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import GetStarted from "./components/GetStarted/Get.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/home" element={<Hero />} />
          <Route path="/program" element={<Programs />} />
          <Route path="/why" element={<Reasons />} />
          <Route path="/plan" element={<Plans />} />
          <Route path="/testi" element={<Testimonials />} />
          <Route path="/join" element={<Join />} />
          <Route path="/get" element={<GetStarted />} />

        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
