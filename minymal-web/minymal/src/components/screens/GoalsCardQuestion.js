import React from 'react';
import PropTypes from 'prop-types';
import Other from '../../static/other.jpg';
import Writing from '../../static/writing.jpg';
import Fitness from '../../static/fitness.jpg';
import Cooking from '../../static/cooking.jpg';
import Code from '../../static/code.jpg';
import Piano from '../../static/piano.jpg';
import CardOptions from '../logic/CardOptions';

const imagePaths = [Piano, Code, Cooking, Fitness, Writing, Other];
const imageTitles = [
    'Learn an Instrument',
    'Build an App',
    'Learn to Cook',
    'Get Healthier',
    'Write a Novel',
    'Other Goals'
];

function GoalsCardQuestion(props) {
    return (
        <CardOptions
            imagePaths={imagePaths}
            imageTitles={imageTitles}
            nextScreen={'textgoals'}
            question={'What are your goals?'}
            onClick={props.onClick}
            onSubmit={props.onSubmit}
        />
    );
}

GoalsCardQuestion.propTypes = {
    onClick: PropTypes.func,
    onSubmit: PropTypes.func
};

export default GoalsCardQuestion;
