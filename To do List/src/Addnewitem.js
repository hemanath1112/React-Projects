import React from "react";
import { FaPlus } from "react-icons/fa";
import "./Addnewitem.css";
import { useRef } from "react";

const Addnewitem = ({ newItem, setNewitem, addnewitem }) => {
  const inputRef = useRef();
  return (
    <form className="from" onSubmit={addnewitem}>
      <label htmlFor="addnewitem">Add New Item</label>
      <input
        type="text"
        autoFocus
        ref={inputRef}
        required
        placeholder="Add New Item"
        id="addnewitem"
        value={newItem}
        onChange={(e) => setNewitem(e.target.value)}
      />
      <button type="submit" onClick={() => inputRef.current.focus()}>
        <FaPlus />
      </button>
    </form>
  );
};

export default Addnewitem;
