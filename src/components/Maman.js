import React, { Component } from 'react'
import Enfant from './Enfant'

class Maman extends Component {

    state = {
        messageMaman: null,
        messageEnfant: null
    }

    momsOrder = () => {
        this.setState({
            messageMaman: 'Va ranger ta chambre'
        })
    }

    childAnswer = () => {
        this.setState({
            messageEnfant: "D'accord maman !"
        })
    }

    render() {
        return (
            <div>
                <h1>Maman</h1>
                <button onClick={this.momsOrder}>Ordre de la maman</button>
                <p>{this.state.messageMaman}</p>
                <hr />
                <Enfant name="Axel" childAns={this.childAnswer} parentState={this.state} />
            </div>
        )
    }
}

export default Maman;