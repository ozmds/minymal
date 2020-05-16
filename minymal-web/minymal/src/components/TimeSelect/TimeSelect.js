import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TimeSelectDisplay from './TimeSelectDisplay';
import { getTimeDifference } from './TimeSelectHelper';

class TimeSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openIndex: 0,
            selectedTime: this.props.timeSpent.map((timeSpent) => ({
                name: timeSpent.name,
                times: [{
                    days: this.props.weekdays,
                    startTime: this.props.currentTime,
                    endTime: this.props.currentTime,
                    difference: {
                        hours: 0,
                        minutes: 0
                    }
                }]
            })),
            error: {
                global: null,
                timeSpent: this.props.timeSpent.map(() => ({
                    tab: false,
                    message: null,
                    times: [{
                        days: false,
                        startTime: false,
                        endTime: false
                    }]
                }))
            }
        };
    }

    changeOpen = (index) => {
        if (index === this.state.openIndex) {
            this.setState({ openIndex: null });
        } else {
            this.setState({ openIndex: index });
        }
    };

    addField = (index) => {
        const newSelectedTime = [...this.state.selectedTime];
        const newError = { ...this.state.error };
        newSelectedTime[index].times.push({
            days: this.props.weekdays,
            startTime: this.props.currentTime,
            endTime: this.props.currentTime,
            difference: {
                hours: 0,
                minutes: 0
            }
        });
        newError.timeSpent[index].times.push({
            days: false,
            startTime: false,
            endTime: false
        });
        this.setState({
            selectedTime: newSelectedTime,
            error: newError
        });
    }

    removeField = (spenderIndex, timeIndex) => {
        const newSelectedTime = [...this.state.selectedTime];
        const newError = { ...this.state.error };
        newSelectedTime[spenderIndex].times.splice(timeIndex, 1);
        newError.timeSpent[spenderIndex].times.splice(timeIndex, 1);
        this.setState({
            selectedTime: newSelectedTime,
            error: newError
        });
    }

    onChange = (e, spenderIndex, timeIndex, field) => {
        const newSelectedTime = [...this.state.selectedTime];
        const time = newSelectedTime[spenderIndex].times[timeIndex];
        time[field] = e;
        time.difference = getTimeDifference(time.startTime, time.endTime, time.days.length);
        this.setState({ selectedTime: newSelectedTime });
    }

    onSubmit = () => {
        this.props.submitSelection(this.state.selectedTime);
        this.props.setQuestion(this.props.nextScreen);
    }

    render() {
        return (
            <TimeSelectDisplay
                changeOpen={this.changeOpen}
                openIndex={this.state.openIndex}
                weekdays={this.props.weekdays}
                addField={this.addField}
                removeField={this.removeField}
                onChange={this.onChange}
                selectedTime={this.state.selectedTime}
                onSubmit={this.onSubmit}
            />
        );
    }
}

TimeSelect.propTypes = {
    timeSpent: PropTypes.array,
    weekdays: PropTypes.array,
    currentTime: PropTypes.instanceOf(Date),
    setQuestion: PropTypes.func,
    submitSelection: PropTypes.func,
    nextScreen: PropTypes.string
};

export default TimeSelect;
