import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TimeSelectDisplay from '../display/TimeSelectDisplay';

class TimeSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openIndex: 0,
            selectedTime: this.props.timeSpenders.map((timeSpender) => ({
                name: timeSpender,
                times: [{
                    days: this.props.weekdays,
                    startTime: this.props.currentTime,
                    endTime: this.props.currentTime,
                    difference: {
                        hours: 0,
                        minutes: 0
                    }
                }]
            }))
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
        newSelectedTime[index].times.push({
            days: this.props.weekdays,
            startTime: this.props.currentTime,
            endTime: this.props.currentTime,
            difference: {
                hours: 0,
                minutes: 0
            }
        });
        this.setState({ selectedTime: newSelectedTime });
    }

    getTimeDifference = (startDate, endDate, dayCount) => {
        let hourDifference = endDate.getHours() - startDate.getHours();
        if (hourDifference < 0) {
            hourDifference += 24;
        }
        let minuteDifference = endDate.getMinutes() - startDate.getMinutes();
        if (minuteDifference < 0) {
            if (hourDifference === 0) {
                hourDifference += 24;
            }
            minuteDifference += 60;
            hourDifference -= 1;
        }
        hourDifference *= dayCount;
        minuteDifference *= dayCount;
        if (minuteDifference >= 60) {
            hourDifference += Math.floor(minuteDifference / 60);
            minuteDifference %= 60;
        }
        return {
            hours: hourDifference,
            minutes: minuteDifference
        };
    }

    removeField = (spenderIndex, timeIndex) => {
        const newSelectedTime = [...this.state.selectedTime];
        newSelectedTime[spenderIndex].times.splice(timeIndex, 1);
        this.setState({ selectedTime: newSelectedTime });
    }

    onDaysChange = (e, spenderIndex, timeIndex) => {
        const newSelectedTime = [...this.state.selectedTime];
        const newTime = newSelectedTime[spenderIndex].times[timeIndex];
        newTime.days = e.target.value;
        newTime.difference = this.getTimeDifference(newTime.startTime, newTime.endTime, newTime.days.length);
        this.setState({ selectedTime: newSelectedTime });
    }

    onStartChange = (e, spenderIndex, timeIndex) => {
        const newSelectedTime = [...this.state.selectedTime];
        const newTime = newSelectedTime[spenderIndex].times[timeIndex];
        newTime.startTime = e;
        newTime.difference = this.getTimeDifference(newTime.startTime, newTime.endTime, newTime.days.length);
        this.setState({ selectedTime: newSelectedTime });
    }

    onEndChange = (e, spenderIndex, timeIndex) => {
        const newSelectedTime = [...this.state.selectedTime];
        const newTime = newSelectedTime[spenderIndex].times[timeIndex];
        newTime.endTime = e;
        newTime.difference = this.getTimeDifference(newTime.startTime, newTime.endTime, newTime.days.length);
        this.setState({ selectedTime: newSelectedTime });
    }

    onSubmit = () => {
        this.props.submitSelection(this.state.selectedTime);
        this.props.setQuestion(this.props.nextScreen);
    }

    render() {
        return (
            <TimeSelectDisplay
                timeSpenders={this.props.timeSpenders}
                changeOpen={this.changeOpen}
                openIndex={this.state.openIndex}
                weekdays={this.props.weekdays}
                addField={this.addField}
                removeField={this.removeField}
                onDaysChange={this.onDaysChange}
                onStartChange={this.onStartChange}
                onEndChange={this.onEndChange}
                selectedTime={this.state.selectedTime}
                onSubmit={this.onSubmit}
            />
        );
    }
}

TimeSelect.propTypes = {
    timeSpenders: PropTypes.array,
    weekdays: PropTypes.array,
    currentTime: PropTypes.instanceOf(Date),
    setQuestion: PropTypes.func,
    submitSelection: PropTypes.func,
    nextScreen: PropTypes.string
};

export default TimeSelect;
