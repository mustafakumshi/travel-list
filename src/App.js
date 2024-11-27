import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 12, packed: true },
];

const Logo = () => {
  return <h1>🌴Far Away🎒</h1>;
};

const Form = ({ onAddItems }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    setDescription("");
    setQuantity(1);
    console.log(newItem);

    onAddItems(newItem);
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip ?</h3>
      <select
        name=""
        id=""
        value={quantity}
        onChange={(e) => {
          setQuantity(Number(e.target.value));
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
          return <option key={num}>{num}</option>;
        })}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
};

const Item = ({ item, handleDeleteItem, handlePackedItem }) => {
  const { id, description, quantity, packed } = item;
  return (
    <li key={id}>
      <input
        type="checkbox"
        value={packed}
        onChange={() => handlePackedItem(id)}
      />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => handleDeleteItem(id)}>❌</button>
    </li>
  );
};

const PackingList = ({ items, handleDeleteItem, handlePackedItem }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            handleDeleteItem={handleDeleteItem}
            handlePackedItem={handlePackedItem}
          />
        ))}
      </ul>
    </div>
  );
};

const Stats = ({items}) => {

  if (!items.length) {
    return (
      <footer className="stats">
      <em>Start Adding Items to your Packing List !</em>
    </footer>
    )
  }

  const totalItems = items.length;
  const packedItems = items.filter(item => item.packed).length;
  const packedPercent = totalItems > 0 ? Math.round((packedItems/totalItems) * 100) : 0;

  return (
    <footer className="stats">
      <em>{packedPercent === 100 ? `You got everything ! Ready to go ✈️`: `You have ${totalItems} items on your list, and you already packed ${packedItems}(${packedPercent}%)`}</em>
    </footer>
  );
};

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

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={onAddItems} />
      <PackingList
        items={items}
        handleDeleteItem={handleDeleteItem}
        handlePackedItem={handlePackedItem}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
