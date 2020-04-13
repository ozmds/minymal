import React from 'react';
import PropTypes from 'prop-types';
import TimeSelect from '../logic/TimeSelect';

const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
/* const currentTime = new Date().toString(); */
const currentTime = new Date();
currentTime.setSeconds(0);
currentTime.setMilliseconds(0);

function TimeSpendSelectQuestion(props) {
    return (
        <TimeSelect
            timeSpenders={props.timeSpenders}
            weekdays={weekdays}
            currentTime={currentTime}
            setQuestion={props.setQuestion}
            submitSelection={props.setSelectedTime}
            nextScreen={'intro'}
        />
    );
}

TimeSpendSelectQuestion.propTypes = {
    timeSpenders: PropTypes.array,
    setSelectedTime: PropTypes.func,
    setQuestion: PropTypes.func
};

export default TimeSpendSelectQuestion;
