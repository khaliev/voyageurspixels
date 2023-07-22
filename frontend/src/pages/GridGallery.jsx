import { Gallery } from "react-grid-gallery";
import { useState, useEffect } from "react";

export default function GridGallery() {
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
    <>
      <h2>Select some shots</h2>
      <Gallery images={images} />
    </>
  );
}
