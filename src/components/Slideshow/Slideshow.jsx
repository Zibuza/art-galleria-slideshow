import { useParams } from "react-router-dom";
import galleryData from "../../data.json";
import "./Slideshow.css";
import React, { useState, useRef } from "react";
import enlargeIcon from "/shared/icon-view-image.svg";
import { CSSTransition } from "react-transition-group";
import NavigationContainer from "../NavigationContainer/NavigationContainer";

const Slideshow = () => {
  const [showModal, setShowModal] = useState(false);
  const nodeRef = useRef(null);
  
  const { id } = useParams();
  const image = galleryData.find((item) => item.id === parseInt(id));

  if (!image) {
    return <div>Image not found</div>;
  }

  
  const images = galleryData.filter((item) => item.gallery === image.gallery);

  
  const [currentImageIndex, setCurrentImageIndex] = useState(
    images.findIndex((item) => item.id === image.id)
  );

  
  const prevImage = () =>
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length
    );
  
  const nextImage = () =>
    setCurrentImageIndex((currentImageIndex + 1) % images.length);

  return (
    <div className="slideShow">
      <div className="desktopWrapper">
        <div className="heroTitleWrapper">
          <img
            src={images[currentImageIndex].images.hero.small}
            alt={images[currentImageIndex].name}
            className="hero"
          ></img>
          <img
            src={images[currentImageIndex].images.hero.large}
            alt={images[currentImageIndex].name}
            className="heroLarge"
          ></img>

          <div className="heroBtnWrapper">
            <button
              className="modalBtn"
              type="button"
              onClick={() => setShowModal(true)}
            >
              <img src={enlargeIcon} alt="View image icon" />
              view image
            </button>
          </div>
          <div className="artistLabel">
            <h1>{images[currentImageIndex].name}</h1>
            <p>{images[currentImageIndex].artist.name}</p>
          </div>
          <img
            src={images[currentImageIndex].artist.image}
            alt={images[currentImageIndex].artist.name}
            className="portrait"
          />
        </div>

        <div className="rightContainer">
          <div className="descripWrapper">
            <p className="descrip">{images[currentImageIndex].description}</p>
            <p className="bigText">{images[currentImageIndex].year}</p>
          </div>
          <a className="sourceLink" href={images[currentImageIndex].source}>
            Go to source
          </a>
        </div>
      </div>

      <CSSTransition
        in={showModal}
        nodeRef={nodeRef}
        timeout={200}
        classNames="fade"
        unmountOnExit
      >
        <div
          className="modal"
          ref={nodeRef}
          onClick={() => setShowModal(false)}
        >
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[currentImageIndex].images.gallery}
              alt={images[currentImageIndex].name}
            />
            <button
              className="closeBtn"
              type="button"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      </CSSTransition>

      <NavigationContainer
        images={images}
        currentImageIndex={currentImageIndex}
        onPrevImage={prevImage}
        onNextImage={nextImage}
      />
    </div>
  );
};

export default Slideshow;
