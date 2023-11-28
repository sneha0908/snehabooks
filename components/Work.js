import React from "react";
import PickMeals from "../assets/H1.jpeg";
import ChooseMeals from "../assets/H2.jpeg";
import DeliveryMeals from "../assets/H3.jpeg";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: " First choice",
      text: " A concise survey of the culture and civilization of mankind.",
    },
    {
      image: ChooseMeals,
      title: " Second choice",
      text: " Modern scholarship judges Herodotus to be a more complex writer than his past readers supposed.",
    },
    {
      image: DeliveryMeals,
      title: "All Time choice",
      text: "  Hinduism Ancient Sacred Texts Gods Beliefs Religion India Faith Customs Teachings Vedas Yoga.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Hello</p>
        <h1 className="primary-heading">Some Historic Books</h1>
        <p className="primary-text">
        The historical books are a category of books in the Bible that record the events of Israel's history from the entry into the Promised Land to the return from exile
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;