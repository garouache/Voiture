import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Bienvenue from "./Components/Bienvenue";
import Footer from "./Components/Footer";
import NavigationBar from "./Components/NavigationBar";
import Voiture from "./Components/Voiture";
import VoitureListe from "./Components/VoitureListe";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Bienvenue />} />
        <Route path="/add" element={<Voiture />} />
        <Route path="/list" element={<VoitureListe />} />
        <Route path="/edit/:id" element={<Voiture />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
