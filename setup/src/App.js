import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import CardsMapping from "./CardMap.js";
import Menus from "./data.js";

import "./Apps.css";
function App() {
  const [pictures, setPicture] = useState(Menus);

  return (
    <>
      <div className="ClassMenu">
        <h2 id="Menu">Our Menu</h2>
        <div className="line"></div>
      </div>
      <Menu setPicture={setPicture} />
      <Categories pictures={pictures} />
    </>
  );
}

export default App;
