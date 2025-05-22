import "./Carousel.css";
import { useState } from "react";

export function ItemCard({ itemsource, name, desc}) {

  const [selected,setSelected] = useState(false);

  return (
    <li className="item-card">
      <button onClick={() => setSelected((prev) => !prev)} className= {selected ? "selected" : ""}>
        <img src={itemsource} alt={name}>
        </img>
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