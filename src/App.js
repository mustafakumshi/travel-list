import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: true },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 12, packed: true },
// ];

const App = () => {
  const [items, setItems] = useState([]);

  const onAddItems = (newItem) => {
    setItems((items) => [...items, newItem]);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handlePackedItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }; 

  const clearAllItems = () => {

    const confirmed = window.confirm("Are you sure you want to delete all Items?")
    confirmed && setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={onAddItems} />
      <PackingList
        items={items}
        handleDeleteItem={handleDeleteItem}
        handlePackedItem={handlePackedItem}
        clearAllItems = {clearAllItems}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
