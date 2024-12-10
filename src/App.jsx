import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import "./App.css";
import Gallery from "./components/Gallery/Gallery";
import Slideshow from "./components/Slideshow/Slideshow";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Gallery />} />
          <Route path="/slideshow/:id" element={<Slideshow />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
