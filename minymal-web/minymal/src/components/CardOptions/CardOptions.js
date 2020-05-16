import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardOptionsDisplay from './CardOptionsDisplay';

class CardOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: []
        };
    }

    manageSelection = (cardIndex) => {
        if (!this.state.selected.includes(cardIndex)) {
            this.setState({ selected: [...this.state.selected, cardIndex] });
        } else {
            const newState = [...this.state.selected];
            const index = newState.indexOf(cardIndex);
            newState.splice(index, 1);
            this.setState({ selected: newState });
        }
    }

    onSubmit = () => {
        const sortedIndex = [...this.state.selected].sort((a, b) => a - b);
        const cardList = sortedIndex.map((x) => this.props.content.images[x].name);
        const otherText = this.props.content.images[this.props.content.images.length - 1].name;
        const otherIndex = cardList.indexOf(otherText);
        if (otherIndex !== -1) {
            cardList.splice(otherIndex, 1, '');
        }
        this.props.submitSelection(cardList.map((card) => ({ name: card, times: [] })));
        this.props.setQuestion(this.props.nextScreen);
    }

    render() {
        return (
            <CardOptionsDisplay
                id={this.props.id}
                content={this.props.content}
                onSubmit={this.onSubmit}
                manageSelection={this.manageSelection}
                selected={this.state.selected}
            />
        );
    }
}

CardOptions.propTypes = {
    id: PropTypes.string,
    content: PropTypes.object,
    setQuestion: PropTypes.func,
    submitSelection: PropTypes.func,
    nextScreen: PropTypes.string
};

export default CardOptions;
