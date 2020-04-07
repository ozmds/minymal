import React from 'react';
import PropTypes from 'prop-types';
import TimeSpendOther from '../../static/timespendother.jpg';
import School from '../../static/school.jpg';
import ScreenTime from '../../static/screentime.jpg';
import Sleep from '../../static/sleep.jpg';
import Transit from '../../static/transit.jpg';
import Work from '../../static/work.jpg';
import CardOptions from '../logic/CardOptions';

const imagePaths = [Sleep, Work, School, Transit, ScreenTime, TimeSpendOther];
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
            nextScreen={'texttimespenders'}
            question={'How do you spend most of your time?'}
            setQuestion={props.setQuestion}
            submitSelection={props.setTimeSpenders}
        />
    );
}

TimeSpendCardQuestion.propTypes = {
    setQuestion: PropTypes.func,
    setTimeSpenders: PropTypes.func
};

export default TimeSpendCardQuestion;
