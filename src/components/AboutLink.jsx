import "./AboutLink.css"

export function AboutLink({text}){
    return(
        <button className="AboutLink" onClick={() => console.log('test')}>
            {text}
        </button>
    )
}