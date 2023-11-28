import React from "react";
import AboutBackground from "../assets/about-background.png";
import AboutBackgroundImage from "../assets/OIP (1).jpeg";

const Home = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Home</p>
        <h1 className="primary-heading">
          Book
        </h1>
        <p className="primary-text">
        WebA book is a medium for recording information in the form of writing or images, typically composed of many pages bound together.
        </p>
        <p className="primary-text">
        A dictionary is a book. A book is a set of printed sheets of paper held together between two covers
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Home;