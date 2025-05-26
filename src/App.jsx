import "./App.css";
import { useRef, useState, useMemo } from "react";
import { AboutLink } from "./components/AboutLink";
import { SideText } from "./components/SideText";
import Carousel, { CarouselButton, Randomize, ItemCard } from "./components/Carousel";
import { GenerateButton } from "./components/GenerateButton";
import { SelectedItems as SelectedItemsDisplay, AiTextBar } from "./components/SelectedItems";
import React from "react";

function App() {
  const scrollRef = useRef(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [reply, setReply] = useState("Awaiting Generation...");
  const [loading, setLoading] = useState(false);
  const [random, setRandom] = useState(false);

  // Highlighted: using useMemo to optimize promptText
  const promptText = useMemo(() => {
    return (
      "List out the ways on what can i do with these items below (all of these items are used items):\n" +
      selectedItems.join("\n")
    );
  }, [selectedItems]);  // <-- changed: memorize prompt generation

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.querySelector(".item-card");
    if (!card) return;
    const itemWidth = card.offsetWidth;
    container.scrollLeft += direction === "left" ? -itemWidth : itemWidth;
  };

  const items = [
    {
      name: "aluminium can",
      location: "/items/aluminium can.jpg",
      description: "aluminium can",
    },
    {
      name: "aluminium foil",
      location: "/items/aluminium foil.jpg",
      description: "aluminium foil",
    },
    { name: "books", location: "/items/books.jpg", description: "books" },
    {
      name: "bubble wrap",
      location: "/items/bubble wrap.jpg",
      description: "bubble wrap",
    },
    {
      name: "cardboard",
      location: "/items/cardboard.jpg",
      description: "cardboard",
    },
    { name: "carpet", location: "/items/carpet.jpg", description: "carpet" },
    { name: "cloth", location: "/items/cloth.jpg", description: "cloth" },
    { name: "clothes", location: "/items/clothes.jpg", description: "clothes" },
    {
      name: "egg carton",
      location: "/items/egg carton.jpg",
      description: "egg carton",
    },
    {
      name: "food waste",
      location: "/items/food waste.jpg",
      description: "food waste",
    },
    {
      name: "glass bottle",
      location: "/items/glass bottle.jpg",
      description: "glass bottle",
    },
    {
      name: "metal clip",
      location: "/items/metal clip.jpg",
      description: "metal clip",
    },
    {
      name: "newspaper",
      location: "/items/newspaper.jpg",
      description: "newspaper",
    },
    {
      name: "paper bag",
      location: "/items/paper bag.jpg",
      description: "paper bag",
    },
    {
      name: "paper clip",
      location: "/items/paper clip.jpg",
      description: "paper clip",
    },
    { name: "paper", location: "/items/paper.jpg", description: "paper" },
    { name: "pencil", location: "/items/pencil.jpg", description: "pencil" },
    {
      name: "plant pot",
      location: "/items/plant pot.jpg",
      description: "plant pot",
    },
    {
      name: "plastic bag",
      location: "/items/plastic bag.jpg",
      description: "plastic bag",
    },
    {
      name: "plastic bottle",
      location: "/items/plastic bottle.jpg",
      description: "plastic bottle",
    },
    {
      name: "plastic bucket",
      location: "/items/plastic bucket.jpg",
      description: "plastic bucket",
    },
    {
      name: "plastic container",
      location: "/items/plastic container.jpg",
      description: "plastic container",
    },
    {
      name: "rubber band",
      location: "/items/rubber band.jpg",
      description: "rubber band",
    },
    {
      name: "school bag",
      location: "/items/school bag.jpg",
      description: "school bag",
    },
    { name: "shoes", location: "/items/shoes.jpg", description: "shoes" },
    { name: "tin can", location: "/items/tin can.jpg", description: "tin can" },
    {
      name: "toothpaste tube",
      location: "/items/toothpaste tube.jpg",
      description: "toothpaste tube",
    },
    { name: "tumbler", location: "/items/tumbler.jpg", description: "tumbler" },
    {
      name: "Used Pet Iitter sand",
      location: "/items/Used Pet Iitter sand.jpg",
      description: "Used Pet Iitter sand",
    },
    {
      name: "wood board",
      location: "/items/wood board.jpg",
      description: "wood board",
    },
  ];

  return (
    <>
      <header>
        <div className="header-left">
          <img src="/ReEarth Logo.png" alt="ReEarth logo" className="logo" />
          <div>
            <div className="site-title">
              <h1>Re</h1>
              <h1>Earth</h1>
            </div>
            <h2>Revolutionizing Recycling</h2>
          </div>
        </div>
        <div className="header-right">
        </div>
      </header>

      <div className="below-header">
        <SideText text="Select Recyclable Items:" />
      </div>

      <ul className="item-container">
        <CarouselButton clickAction={() => scroll("left")} />
        <li className="item-list" ref={scrollRef}>
          {items.map((item) => (
            <ItemCard
              key={item.name}
              itemsource={item.location}
              name={item.description}
              desc={item.description}
              setSelect_item={setSelectedItems}
              selectedItems={selectedItems}
              random={random}
            />
          ))}
        </li>
        <div className="button-right">
          <CarouselButton clickAction={() => scroll("right")} />
        </div>
        <Randomize 
        setReply={setReply}
        setLoadState={setLoading}
        prompt={promptText}
        setRandom={setRandom}
        loadState={loading}
        />
      </ul>

      <div className="other-sidetext">
        <SideText text="What you can do:" />
      </div>

      <div className="ai-container">
        <div className="left-container">
          {/* Highlighted: pass setReply to GenerateButton */}
          <GenerateButton prompt={promptText} setReply={setReply} loadState={loading} setLoadState={setLoading}/> 
          <SelectedItemsDisplay selectedItems={selectedItems} />
        </div>
        {/* Highlighted: pass reply to AiTextBar */}
        <AiTextBar reply={reply} />
      </div>
    </>
  );
}

export default App;