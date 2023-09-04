import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import "./Main.css";

const Main = () => {
  const [name, setNmae] = useState([
    { id: 1, checked: true, item: "Today Complect React" },
    { id: 2, checked: false, item: "This Good Day" },
    { id: 3, checked: false, item: "This Bad Day" },
  ]);

  function handleChange(id) {
    const newItem = name.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setNmae(newItem);
    localStorage.setItem("too__list", JSON.stringify(newItem));
  }

  function deletedItem(id) {
    const newItem = name.filter((item) => item.id !== id);
    setNmae(newItem);
    localStorage.setItem("too__list", JSON.stringify(newItem));
  }
  return (
    <div className="main">
      {name.length ? (
        <ul>
          {name.map((item) => (
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
          ))}
        </ul>
      ) : (
        <p className="main__empty">Your list is empty</p>
      )}
    </div>
  );
};

export default Main;
