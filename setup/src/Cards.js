import React from "react";
import Menus from "./data";
import "./CardStyle.css";
function FoodCards(props) {
  return (
    <>
      <div className="main">
        <div className="content-container">
          <img className="imagesss" src={props.Imgesss} />

          <div className="dataDiv">
            <div className="titile">
              <h3 id="headings">{props.title}</h3>
              <h3 id="pricess">{props.pri}</h3>
            </div>
            <div className="description">
              <p>{props.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default FoodCards;
