import React from 'react';
import Card from './card.js'

class CoveredDeck extends React.Component {
    render() {
        let cardsLeft = this.props.cards.length;
        if (cardsLeft > 0) {
            return(<Card value={this.props.cards[cardsLeft - 1]} visible={false}/>);
        } else {
            return <div />;
        }
        
    }
}

class UncoveredDeck extends React.Component {
    render() {
        return(
            this.props.cards.map((card, index) => (
                <Card key={index} value={card} visible={true}/>
            ))
        );
    }
}

function newDeck() {
    let deck = [];

    let numbers = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
    let suits = ["hearts", "clubs", "spades", "diamonds"];
    
    for (let i=0; i < 13; i++) {
        for(let j=0; j < 4; j++) {
            deck.push({number: i+1, suit: suits[j], card:numbers[i] + "_of_" + suits[j]});
        }
    }
    deck.push({number: 20, suit: null, card: "red_joker"});
    deck.push({number: 20, suit: null, card: "black_joker"});


    deck.sort(function(a, b){return 0.5 - Math.random()});
    return deck;
}

export {CoveredDeck, UncoveredDeck, newDeck}