import "./Carousel.css";
import { GoogleGenAI } from "@google/genai";
import { useCallback, useEffect } from "react";

// ItemCard no longer needs its own local selected state; it derives from parent
export function ItemCard({ itemsource, name, desc, setSelect_item, selectedItems, random, setRandom }) {
  const selected = selectedItems.includes(name);

  const addItem = useCallback(
    (newItem) =>
      setSelect_item((prev) =>
        prev.includes(newItem) ? prev : [...prev, newItem]
      ),
    [setSelect_item]
  );

  const removeItem = useCallback(
    (itemToRemove) =>
      setSelect_item((prev) => prev.filter((item) => item !== itemToRemove)),
    [setSelect_item]
  );

  // only run this block once when `random` flips true
  useEffect(() => {
    if (!random) return;
    if (Math.random() < 0.5) addItem(name);
    else removeItem(name);
    setRandom(false)
  }, [random, name, addItem, removeItem, setRandom]);

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

export function Randomize({setRandom, loadState }) {
  const handleClick = useCallback(async () => {
    setRandom(true);
  }, [setRandom]);

  return (
    <li className={loadState ? "randomize disable" : "randomize"}>
      <button onClick={handleClick}>Randomize🎲</button>
    </li>
  );
}

export default function Carousel({ items, setSelect_item, selectedItems }) {
  return (
    <ul className="carousel">
      {items.map((item) => (
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