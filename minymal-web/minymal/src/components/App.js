import React, { Component } from 'react';
import MinymalTheme from './display/MinymalTheme';
import Questionnaire from './screens/Questionnaire';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: 'intro',
            goals: [],
            timespenders: []
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

    render() {
        return (
            <MinymalTheme>
                <Questionnaire
                    question={this.state.question}
                    goals={this.state.goals}
                    setQuestion={this.setQuestion}
                    setGoals={this.setGoals}
                    setTimeSpenders={this.setTimeSpenders}
                />
            </MinymalTheme>
        );
    }
}

export default App;
