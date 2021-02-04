import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

// images
// import img9 from "../images/img-9.jpg";
// import img2 from "../images/img-2.jpg";
// import img3 from "../images/img-3.jpg";
// import img4 from "../images/img-4.jpg";
// import img8 from "../images/img-8.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Chcec out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              class="cards__item"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              class="cards__item2"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
