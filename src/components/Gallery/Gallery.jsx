import React, { useEffect, useRef } from "react";
import "./Gallery.css";
import galleryData from "../../data.json";
import { Link } from "react-router-dom";

const Gallery = () => {
  const galleryRef = useRef(null);

  

  return (
    <main>
      <div className="gallery" ref={galleryRef}>
        {galleryData.map((item) => (
          <Link
            className="galleryItem"
            to={`/slideshow/${item.id}`}
            key={item.name}
            
          >
            <div className="gradientWrapper"></div>
            <img src={item.images.thumbnail} alt={item.name} />
            <div className="textContainer">
              <h2>{item.name}</h2>
              <p>{item.artist.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Gallery;
