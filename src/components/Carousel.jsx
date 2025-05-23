import "./Carousel.css";

// ItemCard no longer needs its own local selected state; it derives from parent
export function ItemCard({ itemsource, name, desc, setSelect_item, selectedItems }) {
  const selected = selectedItems.includes(name);

  const addItem = newItem =>
    setSelect_item(prev => (prev.includes(newItem) ? prev : [...prev, newItem]));

  const removeItem = itemToRemove =>
    setSelect_item(prev => prev.filter(item => item !== itemToRemove));

  const toggleSelected = () => {
    if (selected) removeItem(name);
    else addItem(name);
  };

  return (
    <li className="item-card">
      <button onClick={toggleSelected} className={selected ? "selected" : ""}>
        <img src={itemsource} alt={name} />
        {desc}
        <div className="overlay">{name}</div>
      </button>
    </li>
  );
}

export function CarouselButton({ clickAction }) {
  return (
    <li className="arrow" onClick={clickAction}>
      <button>
        <img
          src="/arrow_back_ios_new_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
          alt="navigation arrow"
        />
      </button>
    </li>
  );
}

export function Randomize() {
  return (
    <li className="randomize">
      <button>Randomize🎲</button>
    </li>
  );
}

export default function Carousel({ items, setSelect_item, selectedItems }) {
  return (
    <ul className="carousel">
      {items.map(item => (
        <ItemCard
          key={item.name}
          itemsource={item.location}
          name={item.description}
          desc={item.description}
          setSelect_item={setSelect_item}
          selectedItems={selectedItems}
        />
      ))}
    </ul>
  );
}
