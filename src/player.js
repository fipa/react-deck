import React from 'react';
import {UncoveredDeck} from './decks.js'

export default class Player extends React.Component {
    render() {
        return(
            <div width="50%" id={"player " + this.props.name}>
                <p>{this.props.name}</p>
                <UncoveredDeck cards={this.props.cards}/>
            </div>
        )
    }

}