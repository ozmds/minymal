import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardOptions from '../display/CardOptions';
import Other from '../../static/other.jpg';
import Writing from '../../static/writing.jpg';
import Fitness from '../../static/fitness.jpg';
import Cooking from '../../static/cooking.jpg';
import Code from '../../static/code.jpg';
import Piano from '../../static/piano.jpg';

const imagePaths = [Piano, Code, Cooking, Fitness, Writing, Other];
const imageTitles = [
    'Learn an Instrument',
    'Build an App',
    'Learn to Cook',
    'Get Healthier',
    'Write a Novel',
    'Other Goals'
];

class GoalsCardQuestion extends Component {
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
    };

    onSubmit = () => {
        const sortedIndex = [...this.state.selected].sort((a, b) => a - b);
        const goalList = sortedIndex.map((x) => imageTitles[x]).filter((x) => x !== 'Other Goals');
        this.props.onSubmit(goalList);
        this.props.onClick('textgoals');
    }

    render() {
        return (
            <CardOptions
                imagePaths={imagePaths}
                imageTitles={imageTitles}
                question={this.props.question}
                onSubmit={this.onSubmit}
                manageSelection={this.manageSelection}
                selected={this.state.selected}
            />
        );
    }
}

GoalsCardQuestion.propTypes = {
    question: PropTypes.string,
    onClick: PropTypes.func,
    onSubmit: PropTypes.func
};

export default GoalsCardQuestion;
