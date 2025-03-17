import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Contact, Home } from "./components/Pages";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-screen w-full flex items-center justify-center">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </main>
  );
}

export default App;
