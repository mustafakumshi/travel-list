const Stats = ({ items }) => {
    if (!items.length) {
      return (
        <footer className="stats">
          <em>Start Adding Items to your Packing List !</em>
        </footer>
      );
    }
  
    const totalItems = items.length;
    const packedItems = items.filter((item) => item.packed).length;
    const packedPercent =
      totalItems > 0 ? Math.round((packedItems / totalItems) * 100) : 0;
  
    return (
      <footer className="stats">
        <em>
          {packedPercent === 100
            ? `You got everything ! Ready to go ✈️`
            : `You have ${totalItems} items on your list, and you already packed ${packedItems}(${packedPercent}%)`}
        </em>
      </footer>
    );
  };

  export default Stats;