import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PhotoGallery from "./components/PhotoGallery";
import Grid from "./pages/Grid";
import Footer from "./components/Footer";

import "./App.css";
// import AddShots from "./pages/AddShots";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<PhotoGallery />} />
          <Route path="/grid" element={<Grid />} />
          {/* <Route path="/add" element={<AddShots />} /> */}
        </Routes>
      </Router>
      <Grid />
      {/* <AddShots /> */}
      <Footer />
    </>
  );
}
export default App;
