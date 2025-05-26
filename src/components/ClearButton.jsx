import "./ClearButton.css"

export function ClearButton({setList, loadState}){

    function handleClick(){
        setList([]);
    }

    return(
        <button className={loadState ? "clear disable": "clear"} onClick={handleClick}>
            Clear ❌
        </button>
    )
}