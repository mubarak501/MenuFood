import React from "react";
import FoodCards from "./Cards.js";

function CardsMapping(props) {
  let Value = props.Picture;

  return (
    <div>
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
