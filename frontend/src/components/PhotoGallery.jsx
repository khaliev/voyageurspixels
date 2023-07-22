import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import "./PhotoGallery.css";
import { useState, useEffect } from "react";

export default function PhotoGallery() {
  const [images, setImages] = useState([
    {
      id: 1,
      originalTitle: "",
      original: "",
    },
  ]);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:8000"}/shots`
    )
      .then((response) => response.json())
      .then((data) => setImages(data));
  }, []);

  return (
    <div className="Photogallery">
      <h1>Photos</h1>
      <h2>Select some shots</h2>
      <ImageGallery
        className="gallery"
        items={images}
        showPlayButton
        showFullscreenButton
        slideInterval={5000}
        slideOnThumbnailOver
        showIndex
        autoPlay
      />
    </div>
  );
}
