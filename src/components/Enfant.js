import React from 'react'

const Enfant = (props) => {

    console.log(props)

    const answerButton = props.parentState.MomMessage !== null 
        ? (<button onClick={props.giveAnswer}>Answer</button>)
        : (<button disabled>Answer</button>)

    /* const answerButton = (() => {
        if (props.parentState.MomMessage !== null)
            return <button onClick={props.giveAnswer}>Answer</button>;
        else
            return <button disabled>Answer</button>;
    })(); */

    return (
        <div>
            <h2>{props.parentState.ChildTitle}: {props.name}</h2>
            {answerButton}
            <p>{props.parentState.ChildMessage}</p>
        </div>
    )
}

export default Enfant;


