import React from "react";
import "./carda-mapp.css";
import FoodCards from "./Cards.js";

function CardsMapping(props) {
  let Value = props.Picture;

  return (
    <div className="main-section">
      {Value.map((Source) => {
        return (
          <FoodCards
            Imgesss={Source.img}
            title={Source.title}
            pri={Source.price}
            description={Source.desc}
          />
        );
      })}
    </div>
  );
}
export default CardsMapping;
