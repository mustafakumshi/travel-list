import { useState } from "react";

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

  export default Form;