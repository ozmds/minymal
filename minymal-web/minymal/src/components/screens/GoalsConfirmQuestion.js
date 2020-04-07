import React from 'react';
import PropTypes from 'prop-types';
import ConfirmOptions from '../logic/ConfirmOptions';

function GoalsConfirmQuestion(props) {
    return (
        <ConfirmOptions
            question={"Are there any other goals you'd like to add?"}
            subtitle={"(If you'd like to edit any existing goals, let's do that too.)"}
            nextScreen={'timespenders'}
            options={props.goals}
            setQuestion={props.setQuestion}
            submitSelection={props.setGoals}
            label={'Goal'}
            maxFields={6}
        />
    );
}

GoalsConfirmQuestion.propTypes = {
    goals: PropTypes.array,
    setQuestion: PropTypes.func,
    setGoals: PropTypes.func
};

export default GoalsConfirmQuestion;
