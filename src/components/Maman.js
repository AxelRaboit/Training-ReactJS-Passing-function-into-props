import React, { Component } from 'react';
import Enfant from './Enfant';

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
            messageEnfant: "D'accord Maman"
        })
    }

    render() {
        return (
            <div>
                <h1>Maman</h1>
                <button onClick={this.momsOrder}>Ordre de la maman</button>
                <p>{this.state.messageMaman}</p>
                <hr />

                <h2>Enfant</h2>
                <Enfant name="Jean" childReponse={this.childAnswer} theState={this.state} />

            </div>
        );
    }
}

export default Maman;