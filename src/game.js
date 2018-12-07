import React from 'react';
import {CoveredDeck, newDeck} from './decks.js'
import Player from './player'

const numPlayers = 2;
const maxCardsPerPlayer = 5;

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            turn: 0, 
            coveredDeck: newDeck(),
            cardsPlayerOne: [],
            cardsPlayerTwo: [],
            gameOver: false
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

        let newGameOver = (newCoveredDeck.length === 0 || newCardsPlayerTwo.length === maxCardsPerPlayer );

        this.setState({
            coveredDeck: newGameOver ? [] : newCoveredDeck,
            turn : turn%numPlayers,
            cardsPlayerOne: newCardsPlayerOne,
            cardsPlayerTwo: newCardsPlayerTwo,
            gameOver: newGameOver
        })

    }

    newGame() {
        this.setState({
            coveredDeck: newDeck(),
            cardsPlayerOne: [],
            cardsPlayerTwo: [],
            turn: 0,
            gameOver: false
        });
    }

    render() {
        return (
            <div>
                <GameStatus game={this}/>
                <NewGame onClick={() => this.newGame()}/>
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

function GameStatus(props) {
    if (props.game.state.gameOver) {
        return (<h2>Game Over</h2>)
    } else {
        return (<h2>Cards left: {props.game.state.coveredDeck.length}</h2>)        
    }
    
}