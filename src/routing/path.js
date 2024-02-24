import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "../pages/contact/contact";
import HomeMain from "../pages/app";

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
}

export default Routing;
