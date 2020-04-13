import React from 'react';
import PropTypes from 'prop-types';
import ConfirmOptions from '../logic/ConfirmOptions';

function TimeSpendConfirmQuestion(props) {
    return (
        <ConfirmOptions
            question={"Are there any other time-spenders you'd like to add?"}
            subtitle={"(If you'd like to edit any existing time-spenders, let's do that too.)"}
            nextScreen={'timeselect'}
            options={props.timeSpenders}
            setQuestion={props.setQuestion}
            submitSelection={props.setTimeSpenders}
            label={'Time Spender'}
            maxFields={10}
        />
    );
}

TimeSpendConfirmQuestion.propTypes = {
    timeSpenders: PropTypes.array,
    setQuestion: PropTypes.func,
    setTimeSpenders: PropTypes.func
};

export default TimeSpendConfirmQuestion;
