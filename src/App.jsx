import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import PartnerCrit from "./Components/Partners/PartnerCrit";
import { Achievements, Contact, Homepage, Partners, Teams } from "./pages";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/partners/criteria" element={<PartnerCrit />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
