import React from "react";
import image from '../assets/H5.jpg'
import StarIcon from "@mui/icons-material/Star";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>n
        <p className="primary-text">
        Characters in literature are the people, animals, or beings that are part of a story. They can be fictional or based on real-life people. 
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img className="profile" src={image} alt="" />
        <p>
        There’s nothing like the feel-good story of a romance novel. There’s a “happy ever after” for most of the characters involved and the reader gets to translate that type of ending to their own life.
        </p>
        <div className="testimonials-stars-container">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
        
      </div>
    </div>
  );
};

export default Testimonial;
