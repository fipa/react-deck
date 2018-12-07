import React from 'react';
import {CoveredDeck, newDeck} from './decks.js'
import Player from './player'

const numPlayers = 2;

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            turn: 0, 
            coveredDeck: newDeck(),
            cardsPlayerOne: [],
            cardsPlayerTwo: []
        }
    }
    uncoverOneCard() {
        let newCoveredDeck = this.state.coveredDeck.slice()
        let oneCard = newCoveredDeck.pop();
        let newCardsPlayerOne = this.state.cardsPlayerOne.slice()
        let newCardsPlayerTwo = this.state.cardsPlayerTwo.slice()
        let turn = this.state.turn;

        if (turn %numPlayers === 0) {
            newCardsPlayerOne.push(oneCard);
        } else {
            newCardsPlayerTwo.push(oneCard);
        }

        turn =  turn + 1;
        this.setState({
            coveredDeck: newCoveredDeck,
            turn : turn%numPlayers,
            cardsPlayerOne: newCardsPlayerOne,
            cardsPlayerTwo: newCardsPlayerTwo
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
                <Player name="P1" cards={this.state.cardsPlayerOne} />
                <Player name="P2" cards={this.state.cardsPlayerTwo} />
            </div>
        );
    }
}

function NewGame(props) {
    return (
        <button onClick={props.onClick}>New Game</button>
    )
}
