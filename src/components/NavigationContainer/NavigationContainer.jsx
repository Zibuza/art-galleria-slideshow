import React from "react";
import backBtn from "/shared/icon-back-button.svg";
import fwdBtn from "/shared/icon-next-button.svg";
import "./NavigationContainer.css";
import "../Slideshow/Slideshow.css";

const NavigationContainer = ({
  images,
  currentImageIndex,
  onPrevImage,
  onNextImage,
}) => {
  return (
    <div className="navigationContainer">
      
      <div className="emptyBar"></div>
      <div className="navigationTitle">
        <h2>{images[currentImageIndex].name}</h2>
        <p>{images[currentImageIndex].artist.name}</p>
      </div>
      <div className="navigationButtons">
        <button onClick={onPrevImage}>
          <img src={backBtn} alt="back button"></img>
        </button>
        <button onClick={onNextImage}>
          <img src={fwdBtn} alt="next button"></img>
        </button>
      </div>
    </div>
  );
};

export default NavigationContainer;
