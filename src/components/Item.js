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

  export default Item;