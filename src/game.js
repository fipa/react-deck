import React from 'react';
import {CoveredDeck, UncoveredDeck, newDeck} from './decks.js'

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coveredDeck: newDeck(),
            uncoveredDeck: []
        }
    }
    uncoverOneCard() {
        let newCoveredDeck = this.state.coveredDeck.slice()
        let oneCard = newCoveredDeck.pop();
        
        let newUncoveredDeck = this.state.uncoveredDeck.slice();
        newUncoveredDeck.push(oneCard);
        this.setState({
            coveredDeck: newCoveredDeck,
            uncoveredDeck: newUncoveredDeck
        })
    }

    newGame() {
        this.setState({
            coveredDeck: newDeck(),
            uncoveredDeck: []
        });
    }

    render() {
        return (
            <div>
                <p>
                    Cards left: {this.state.coveredDeck.length}
                    <NewGame onClick={() => this.newGame()}/>
                </p>
                <div id="coveredDeck" onClick={() => this.uncoverOneCard()}>
                    <CoveredDeck cards={this.state.coveredDeck}/>
                </div>
                <br/><br/><hr/>
                <div id="uncoveredDeck">
                    <UncoveredDeck cards={this.state.uncoveredDeck}/>
                </div>
            </div>
        );
    }
}

function NewGame(props) {
    return (
        <button onClick={props.onClick}>New Game</button>
    )
}
