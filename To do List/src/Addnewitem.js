import React from "react";
import { FaPlus } from "react-icons/fa";
import "./Addnewitem.css";

const Addnewitem = ({ newItem, setNewitem, addnewitem }) => {
  return (
    <form className="from" onSubmit={addnewitem}>
      <label htmlFor="addnewitem">Add New Item</label>
      <input
        type="text"
        autoFocus
        required
        placeholder="Add New Item"
        id="addnewitem"
        value={newItem}
        onChange={(e) => setNewitem(e.target.value)}
      />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
};

export default Addnewitem;
