import React from "react"

export default function Joke(props) {

    const [isShown, setIsShown] = React.useState(false)

    function toggleShown() {
        setIsShown(prevShown => !prevShown)
    }
    return (
        <div>
            {props.setup && <h3>Setup: {props.setup}</h3>}
            {isShown && <p>Punchline: {props.punchline}</p>}        
            <hr />
            {/* {isShown && <button onClick = {toggleShown}>  Hide Punchline</button>}
            {!isShown && <button onClick={toggleShown}> Show Punchline</button>} */}
            <button onClick = {toggleShown}> {isShown ? "Hide" : "Show"} Punchline</button>
        </div>
    )
}