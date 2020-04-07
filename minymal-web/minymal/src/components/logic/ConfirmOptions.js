import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ConfirmOptionsDisplay from '../display/ConfirmOptionsDisplay';

class ConfirmOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: this.props.options
        };
    }

    onChange = (e, index) => {
        const newState = [...this.state.options];
        newState.splice(index, 1, e.target.value);
        this.setState({ options: newState });
    }

    onSubmit = () => {
        const goalList = this.state.options.filter((x) => x !== '');
        this.props.submitSelection(goalList);
        this.props.setQuestion(this.props.nextScreen);
    }

    addField = () => {
        this.setState({ options: [...this.state.options, ''] });
    }

    removeField = (fieldIndex) => {
        const newState = [...this.state.options];
        newState.splice(fieldIndex, 1);
        this.setState({ options: newState });
    }

    render() {
        return (
            <ConfirmOptionsDisplay
                question={this.props.question}
                subtitle={this.props.subtitle}
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                options={this.state.options}
                addField={this.addField}
                removeField={this.removeField}
                label={this.props.label}
                maxFields={this.props.maxFields}
            />
        );
    }
}

ConfirmOptions.propTypes = {
    question: PropTypes.string,
    subtitle: PropTypes.string,
    label: PropTypes.string,
    maxFields: PropTypes.number,
    nextScreen: PropTypes.string,
    options: PropTypes.array,
    setQuestion: PropTypes.func,
    submitSelection: PropTypes.func
};

export default ConfirmOptions;
