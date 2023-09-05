import React from "react";
import "./Main.css";
import Listitem from "./Listitem";

const Main = ({ name, handleChange, deletedItem }) => {
  return (
    <div className="main">
      {name.length ? (
        <Listitem
          name={name}
          handleChange={handleChange}
          deletedItem={deletedItem}
        />
      ) : (
        <p className="main__empty">Your list is empty</p>
      )}
    </div>
  );
};

export default Main;
