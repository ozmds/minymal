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
    'Sleep',
    'Work',
    'School',
    'Transit',
    'Screen Time',
    'Other'
];

function TimeSpendCardQuestion(props) {
    return (
        <CardOptions
            imagePaths={imagePaths}
            imageTitles={imageTitles}
            nextScreen={'textgoals'}
            question={'What are your goals?'}
            setQuestion={props.setQuestion}
            submitSelection={props.setGoals}
        />
    );
}

TimeSpendCardQuestion.propTypes = {
    setQuestion: PropTypes.func,
    setGoals: PropTypes.func
};

export default TimeSpendCardQuestion;
