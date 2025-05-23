import "./Carousel.css";
import { useState } from "react";

export function ItemCard({ itemsource, name, desc }) {
  const [SelectedItems, setSelectedItems] = useState([]);
  const [selected, setSelected] = useState(false);

  const addItem = (newItem) => {
    setSelectedItems((prevItems) => [...prevItems, newItem]);
  };

  const removeItem = (itemToRemove) => {
    setSelectedItems((prevItems) =>
      prevItems.filter((item) => item !== itemToRemove)
    );
  };

  const toggleSelected = () => {
    setSelected((prev) => !prev);
    selected ? addItem(name) : removeItem(name);
  };

  return (
    <li className="item-card">
      <button onClick={toggleSelected} className={selected ? "selected" : ""}>
        <img src={itemsource} alt={name}></img>
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
          alt="navigation arrow image"
        />
      </button>
    </li>
  );
}

// ← untouched
export function Randomize() {
  return (
    <li className="randomize">
      <button>Randomize🎲</button>
    </li>
  );
}
