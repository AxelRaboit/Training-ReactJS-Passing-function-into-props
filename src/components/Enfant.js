import React from 'react'

const Enfant = (props) => {

    console.log(props)

    const childAnswerButton = props.theState.messageMaman !== null 
        ? (<button onClick={props.childReponse}>Réponse</button>)
        : (<button disabled>Réponse</button>)

    return (
        <div>
            <h2>{props.name}</h2>
            {childAnswerButton}
            <p>{props.theState.messageEnfant}</p>
        </div>
    )
}

export default Enfant;
