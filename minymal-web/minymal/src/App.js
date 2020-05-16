import React, { Component } from 'react';
import MinymalTheme from './components/MinymalTheme/MinymalTheme';
import Questionnaire from './components/Questionnaire/Questionnaire';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: 'intro',
            goals: [],
            timespent: []
        };
    }

    setQuestion = (question) => {
        this.setState({ question });
    }

    setGoals = (goals) => {
        this.setState({ goals });
    }

    setTimeSpent = (timespent) => {
        this.setState({ timespent });
    }

    onBackClick = () => {
        if (['timespenders', 'texttimespenders'].includes(this.state.question)) {
            this.setState({ question: 'textgoals' });
        }
    }

    render() {
        return (
            <MinymalTheme>
                <Questionnaire
                    question={this.state.question}
                    goals={this.state.goals}
                    timeSpent={this.state.timespent}
                    setQuestion={this.setQuestion}
                    setGoals={this.setGoals}
                    setTimeSpent={this.setTimeSpent}
                    onBackClick={this.onBackClick}
                />
            </MinymalTheme>
        );
    }
}

export default App;
