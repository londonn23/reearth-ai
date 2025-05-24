import "./SelectedItems.css";
import ReactMarkdown from 'react-markdown'

export function SelectedItems({ selectedItems }) {
  return (
    <>
      <h1 className="selected-text">Selected Items:</h1>
      <ul className="selected-container format">
        {selectedItems.length === 0
          ? <li></li>
          : selectedItems.map(name => <li key={name}>{name}</li>)
        }
      </ul>
    </>
  );
}

export function AiTextBar({reply}) {
  return (
    <div className="text-bar format">
      <p>
        <ReactMarkdown>
        {reply}
        </ReactMarkdown>
      </p>
    </div>
  );
}
