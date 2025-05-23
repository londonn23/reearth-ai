import "./SelectedItems.css";

export function SelectedItems({ selectedItems }) {
  return (
    <>
      <h1 className="selected-text">Selected Items:</h1>
      <ul className="selected-container">
        {selectedItems.length === 0
          ? <li></li>
          : selectedItems.map(name => <li key={name}>{name}</li>)
        }
      </ul>
    </>
  );
}

export function AiTextBar() {
  return (
    <div className="text-bar">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
}
