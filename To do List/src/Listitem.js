import React from "react";

import "./Listitem.css";
import Lists from "./Lists";

const Listitem = ({ name, handleChange, deletedItem }) => {
  return (
    <ul>
      {name.map((item) => (
        <Lists
          item={item}
          handleChange={handleChange}
          deletedItem={deletedItem}
        />
      ))}
    </ul>
  );
};

export default Listitem;
