import React from 'react';
import PropTypes from 'prop-types';
import ConfirmOptions from '../logic/ConfirmOptions';

function GoalsConfirmQuestion(props) {
    return (
        <ConfirmOptions
            question={"Are there any other goals you'd like to add?"}
            subtitle={"(If you'd like to edit any existing goals, let's do that too.)"}
            nextScreen={'intro'}
            goals={props.goals}
            onClick={props.onClick}
            onSubmit={props.onSubmit}
        />
    );
}

GoalsConfirmQuestion.propTypes = {
    goals: PropTypes.array,
    onClick: PropTypes.func,
    onSubmit: PropTypes.func
};

export default GoalsConfirmQuestion;
