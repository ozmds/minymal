import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ConfirmOptions from '../display/ConfirmOptions';

class GoalsConfirmQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goals: this.props.goals
        };
    }

    onChange = (e, index) => {
        const newState = [...this.state.goals];
        newState.splice(index, 1, e.target.value);
        this.setState({ goals: newState });
    }

    onSubmit = () => {
        const goalList = this.state.goals.filter((x) => x !== '');
        this.props.onSubmit(goalList);
        this.props.onClick('intro');
    }

    addField = () => {
        this.setState({ goals: [...this.state.goals, ''] });
    }

    render() {
        return (
            <ConfirmOptions
                onClick={this.onSubmit}
                onChange={this.onChange}
                goals={this.state.goals}
                addField={this.addField}
            />
        );
    }
}

GoalsConfirmQuestion.propTypes = {
    goals: PropTypes.array,
    onClick: PropTypes.func,
    onSubmit: PropTypes.func
};

export default GoalsConfirmQuestion;
