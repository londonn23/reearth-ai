import "./SideText.css"

export function SideText({text}){
    return (
        <h1 className="SideText">
            <div className="text">
            {text}
            </div>
        </h1>
    )
}