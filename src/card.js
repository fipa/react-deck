import React from 'react';
import './card.css';

export default class Card extends React.Component {
    render() {
        let imageFile = "imgs/";
        if (this.props.visible) {
            imageFile += this.props.value;
        } else {
            imageFile += "coveredCard";
        }
        return (<img className="card" alt={imageFile} src={imageFile + ".png"} />);
    }

}
