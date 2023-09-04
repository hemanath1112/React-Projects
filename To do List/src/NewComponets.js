import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import "./NewComponets.css";

const NewComponets = () => {
  const [name, setNmae] = useState([
    { id: 1, checked: true, item: "This is my day" },
    { id: 2, checked: false, item: "This good day" },
    { id: 3, checked: false, item: "This bad day" },
  ]);
  const add =() =>{
    
  }

  return (
    <div className="newcomponets">
      <ul>
        {name.map((item) => (
          <li className="item" key={item.id}>
            <input type="checkbox" checked={item.checked} />
            <label>{item.item}</label>

            <FaTrashAlt role="button" tabIndex={true} className="box" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewComponets;
