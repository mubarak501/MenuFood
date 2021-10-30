import React from "react";
import Menus from "./data.js";
import "./Menus.css";

function Menuss(props) {
  const { setPicture } = props;

  const handleClick = (dog) => {
    const update = Menus.filter((cat) => {
      return cat.category === dog;
    });

    setPicture(update);
  };
  const handleLunch = (dogg) => {
    const update = Menus.filter((catt) => {
      return catt.category === dogg;
    });

    setPicture(update);
  };
  const handleShake = (doggg) => {
    const update = Menus.filter((cattt) => {
      return cattt.category === doggg;
    });

    setPicture(update);
  };

  return (
    <div className="Btn-container">
      <button
        onClick={() => {
          setPicture(Menus);
        }}
        type="button"
        id="MenuBtns"
      >
        All
      </button>
      <button
        onClick={() => {
          handleClick("breakfast");
        }}
        type="button"
        id="MenuBtns"
      >
        Breakfast
      </button>
      <button
        onClick={() => {
          handleLunch("lunch");
        }}
        type="button"
        id="MenuBtns"
      >
        Lunch
      </button>
      <button
        onClick={() => {
          handleShake("shakes");
        }}
        type="button"
        id="MenuBtns"
      >
        Shakes
      </button>
    </div>
  );
}

export default Menuss;
