import React from "react";
// import GridGallery from "./pages/GridGallery";
import Navbar from "./components/Navbar";
import PhotoGallery from "./components/PhotoGallery";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <main className="Main">
      <Navbar />
      <PhotoGallery />
      <Footer />
    </main>
  );
}
export default App;
