import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ConfirmOptionsDisplay from '../display/ConfirmOptionsDisplay';

class ConfirmOptions extends Component {
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
        this.props.onClick(this.props.nextScreen);
    }

    addField = () => {
        this.setState({ goals: [...this.state.goals, ''] });
    }

    render() {
        return (
            <ConfirmOptionsDisplay
                question={this.props.question}
                subtitle={this.props.subtitle}
                onClick={this.onSubmit}
                onChange={this.onChange}
                goals={this.state.goals}
                addField={this.addField}
            />
        );
    }
}

ConfirmOptions.propTypes = {
    question: PropTypes.string,
    subtitle: PropTypes.string,
    nextScreen: PropTypes.string,
    goals: PropTypes.array,
    onClick: PropTypes.func,
    onSubmit: PropTypes.func
};

export default ConfirmOptions;
