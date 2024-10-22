import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Bienvenue from "./Components/Bienvenue";
import Footer from "./Components/Footer";
import NavigationBar from "./Components/NavigationBar";
import Voiture from "./Components/Voiture";
import VoitureListe from "./Components/VoitureListe";
import Proprietere from "./Components/Proprietere";
import ProprietereListe from "./Components/ProprietereListe";
import EditVoiture from "./Components/EditVoiture";
import EditProprietaire from "./Components/EditProprietaire";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Bienvenue />} />
        <Route path="/add" element={<Voiture />} />
        <Route path="/list" element={<VoitureListe />} />
        <Route path="/addprop" element={<Proprietere />} />
        <Route path="/listprop" element={<ProprietereListe />} />
        <Route path="/editvoiture/:id" element={<EditVoiture />} />
        <Route path="/editproprietaire/:id" element={<EditProprietaire />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
