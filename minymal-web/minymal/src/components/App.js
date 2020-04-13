import React, { Component } from 'react';
import MinymalTheme from './display/MinymalTheme';
import Questionnaire from './screens/Questionnaire';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: 'intro',
            goals: [],
            timespenders: [],
            selectedtime: []
        };
    }

    setQuestion = (questionName) => {
        this.setState({ question: questionName });
    }

    setGoals = (goalList) => {
        this.setState({ goals: goalList });
    }

    setTimeSpenders = (timeSpenders) => {
        this.setState({ timespenders: timeSpenders });
    }

    setSelectedTime = (selectedTime) => {
        this.setState({ selectedtime: selectedTime });
    }

    render() {
        return (
            <MinymalTheme>
                <Questionnaire
                    question={this.state.question}
                    goals={this.state.goals}
                    timeSpenders={this.state.timespenders}
                    setQuestion={this.setQuestion}
                    setGoals={this.setGoals}
                    setTimeSpenders={this.setTimeSpenders}
                    setSelectedTime={this.setSelectedTime}
                />
            </MinymalTheme>
        );
    }
}

export default App;
