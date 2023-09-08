import "./App.css";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import Addnewitem from "./Addnewitem";
import { useState, useEffect } from "react";
import Search from "./Search";

function App() {
  const [name, setNmae] = useState(
    // [{ id: 1, checked: true, item: "Complect React" },
    // { id: 2, checked: false, item: "This Good Day" },
    // { id: 3, checked: false, item: "This Bad Day" },]

    JSON.parse(localStorage.getItem("too__list"))
  );

  // useEffect(() => {
  //   JSON.parse(localStorage.getItem("too__list"));
  // }, []);

  // New Item add to list
  const [newItem, setNewitem] = useState("");

  // search items
  const [search, setSearch] = useState("");

  // Input Checked true or false function
  function handleChange(id) {
    const newItem = name.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setNmae(newItem);
    localStorage.setItem("too__list", JSON.stringify(newItem));
  }

  // Remove the items function
  function deletedItem(id) {
    const newItem = name.filter((item) => item.id !== id);
    setNmae(newItem);
    localStorage.setItem("too__list", JSON.stringify(newItem));
  }

  // Addnewitems function
  function Additem(item) {
    const id = name.length ? name[name.length - 1].id + 1 : 1;
    const AddItem = { id, checked: false, item };
    const newItem = [...name, AddItem];
    setNmae(newItem);
    localStorage.setItem("too__list", JSON.stringify(newItem));
  }

  // New Item add to list
  function addnewitem(e) {
    e.preventDefault();
    if (!newItem) return;
    Additem(newItem);
    setNewitem("");
  }

  return (
    <div className="App">
      <Header />
      <Addnewitem
        newItem={newItem}
        setNewitem={setNewitem}
        addnewitem={addnewitem}
      />
      <Search search={search} setSearch={setSearch} />
      <Main
        name={name.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleChange={handleChange}
        deletedItem={deletedItem}
      />
      <Footer length={name.length} />
    </div>
  );
}

export default App;
