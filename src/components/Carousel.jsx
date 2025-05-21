import "./Carousel.css";
import { useRef } from "react";

export function ItemCard({itemsource, name}) {

  
  
  return (
    <li className="item-card">
    <button>
      <img src={itemsource} alt={name}/>
    </button>
    </li>
  );
}

export function CarouselButton({clickAction}){
  const scrollRef = useRef(null);
  
   const scroll = (direction) => {
   const container = scrollRef.current;
   const itemWidth = container.querySelector('.item-card').offsetWidth;
   if (direction === 'left') {
     container.scrollLeft -= itemWidth;
   } else {
     container.scrollLeft += itemWidth;
   }
  };
  return(
    <li className="arrow">
    <button onClick={ () => scroll ({clickAction})}>
      <img src="/arrow_back_ios_new_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="navigation arrow image" />
    </button>
    </li>
  )
}

export function Randomize(){
  return(
    <li className="randomize">
      <button >
        Randomize🎲
      </button>
    </li>
  )
}