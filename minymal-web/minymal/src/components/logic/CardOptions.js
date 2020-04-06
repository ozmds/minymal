import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardOptionsDisplay from '../display/CardOptionsDisplay';

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
        const goalsList = sortedIndex.map((x) => this.props.imageTitles[x]);
        const otherText = this.props.imageTitles[this.props.imageTitles.length - 1];
        const otherIndex = goalsList.indexOf(otherText);
        if (otherIndex !== -1) {
            goalsList.splice(otherIndex, 1, '');
        }
        this.props.onSubmit(goalsList);
        this.props.onClick(this.props.nextScreen);
    }

    render() {
        return (
            <CardOptionsDisplay
                question={this.props.question}
                imagePaths={this.props.imagePaths}
                imageTitles={this.props.imageTitles}
                onSubmit={this.onSubmit}
                manageSelection={this.manageSelection}
                selected={this.state.selected}
            />
        );
    }
}

CardOptions.propTypes = {
    imagePaths: PropTypes.array,
    imageTitles: PropTypes.array,
    nextScreen: PropTypes.string,
    question: PropTypes.string,
    onClick: PropTypes.func,
    onSubmit: PropTypes.func
};

export default CardOptions;
