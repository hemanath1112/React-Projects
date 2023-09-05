import React from "react";
import "./Lists.css";
import { FaTrashAlt } from "react-icons/fa";

const Lists = ({ item, handleChange, deletedItem }) => {
  return (
    <li className="item" key={item.id}>
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => handleChange(item.id)}
      />
      <label
        onDoubleClick={() => handleChange(item.id)}
        style={item.checked ? { color: "#8e44ad" } : null}
      >
        {item.item}
      </label>
      <FaTrashAlt
        role="button"
        tabIndex={true}
        className="box"
        onClick={() => deletedItem(item.id)}
      />
    </li>
  );
};

export default Lists;
