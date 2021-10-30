import React from "react";
import Menus from "./data";
import Menuss from "./Menu.js";
import { useState } from "react";
import CardsMapping from "./CardMap";

const Categories = ({ pictures }) => {
  return <CardsMapping Picture={pictures} />;
};

export default Categories;
