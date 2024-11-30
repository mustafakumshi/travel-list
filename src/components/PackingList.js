import { useState } from "react";
import Item from "./Item";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: true },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 12, packed: true },
// ];

const PackingList = ({ items, handleDeleteItem, handlePackedItem, clearAllItems }) => {
    const [sortBy, setSortBy] = useState("input");
  
    let sortedItems;
  
    if(sortBy === "input"){
        sortedItems = items;
    } else if (sortBy === "description") {
      sortedItems = items.slice().sort((a,b) => a.description.localeCompare(b.description));
    } else if (sortBy === "packed") {
      sortedItems = items.slice().sort((a,b) => Number(a.packed) - Number(b.packed));
    }
    return (
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              item={item}
              handleDeleteItem={handleDeleteItem}
              handlePackedItem={handlePackedItem}
            />
          ))}
        </ul>
  
        <div className="actions">
          <select
            name=""
            id=""
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
          </select>
          <button onClick={clearAllItems}>Clear List</button>
        </div>
      </div>
    );
  };

  export default PackingList;