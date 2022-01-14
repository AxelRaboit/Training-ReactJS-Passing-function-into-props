import React from 'react';

const Enfant = (props) => {

    console.log(props)

    const childAnswerButton = props.parentState.messageMaman !== null 
        ? (<button onClick={props.childAns}>Répondre</button>)
        : (<button disabled>Répondre</button>)

    return (
        <div>
            <h2>{props.name}</h2>
            {childAnswerButton}
            <p>{props.parentState.messageEnfant}</p>
        </div>
    );
}

export default Enfant;

