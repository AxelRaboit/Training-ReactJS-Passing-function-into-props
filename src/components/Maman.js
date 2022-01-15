import React, { Component } from 'react'
import Enfant from './Enfant'


class Maman extends Component {

    state = {
        MomTitle: 'Maman',
        ChildTitle: 'Enfant',
        MomMessage: null,
        ChildMessage: null,

    }

    MomGiveOrder = () => {
        this.setState({
            MomMessage: 'Va ranger ta chambre !'
        })
    }

    ChildGiveAnswer = () => {
        this.setState({
            ChildMessage: 'Oui Maman !'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.MomTitle}</h1>
                <button onClick={this.MomGiveOrder}>Donner un ordre</button>
                <p>{this.state.MomMessage}</p>
                <hr />
                <Enfant name="Axel" parentState={this.state} giveAnswer={this.ChildGiveAnswer}/>
            </div>
        )
    }
}

export default Maman;