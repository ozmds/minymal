import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ConfirmOptionsDisplay from './ConfirmOptionsDisplay';

class ConfirmOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: this.props.options,
            error: null
        };
    }

    onChange = (e, index) => {
        const newState = [...this.state.options];
        const newOption = { name: e.target.value, times: [] };
        newState.splice(index, 1, newOption);
        this.setState({ options: newState });
    }

    onSubmit = () => {
        const error = this.updateError('submit');
        if (!error) {
            const goalList = this.state.options.filter((x) => x.name !== '');
            this.props.submitSelection(goalList);
            this.props.setQuestion(this.props.nextScreen);
        }
    }

    addField = () => {
        const error = this.updateError('add');
        if (!error) {
            this.setState({ options: [...this.state.options, { name: '', times: [] }] });
        }
    }

    removeField = (fieldIndex) => {
        const error = this.updateError('remove');
        if (!error) {
            const newState = [...this.state.options];
            newState.splice(fieldIndex, 1);
            this.setState({ options: newState });
        }
    }

    updateError = (op) => {
        if (op === 'add' && this.state.options.length >= this.props.content.maxFields) {
            this.setState({ error: this.props.content.error.tooMany });
            return true;
        }
        if (op === 'remove' && this.state.options.length === 1) {
            this.setState({ error: this.props.content.error.atLeastOne });
            return true;
        }
        if (op === 'submit' && this.state.options.filter((x) => x.name !== '').length === 0) {
            this.setState({ error: this.props.content.error.atLeastOne });
            return true;
        }
        this.setState({ error: null });
        return false;
    }

    render() {
        return (
            <ConfirmOptionsDisplay
                content={this.props.content}
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                options={this.state.options.map((x) => x.name)}
                addField={this.addField}
                removeField={this.removeField}
                error={this.state.error}
                id={this.props.id}
            />
        );
    }
}

ConfirmOptions.propTypes = {
    id: PropTypes.string,
    content: PropTypes.object,
    nextScreen: PropTypes.string,
    options: PropTypes.array,
    setQuestion: PropTypes.func,
    submitSelection: PropTypes.func
};

export default ConfirmOptions;
