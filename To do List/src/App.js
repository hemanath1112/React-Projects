import "./App.css";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const [name, setNmae] = useState([
    { id: 1, checked: true, item: "Complect React" },
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
    <div className="App">
      <Header />
      <Main name={name} handleChange={handleChange} deletedItem={deletedItem} />
      <Footer length={name.length} />
    </div>
  );
}

export default App;
