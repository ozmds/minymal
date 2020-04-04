import React, { Component } from 'react';
import MinymalTheme from './display/MinymalTheme';
import Questionnaire from './display/Questionnaire';
import Header from './display/Header';
import Intro from './display/Intro';
import GoalsCardQuestion from './logic/GoalsCardQuestion';
import ConfirmOptions from './display/ConfirmOptions';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: 'intro',
            goals: []
        };
    }

    nextQuestion = (questionName) => {
        this.setState({ question: questionName });
    };

    submitGoals = (goalList) => {
        this.setState({ goals: goalList });
    }

    render() {
        return (
            <MinymalTheme>
                <Questionnaire>
                    <Header value={'Minymal'} />
                    <Intro
                        introText={'Minimalist-minded planning for all goals, small and large.'}
                        buttonText={"Let's Get Started"}
                        question={this.state.question}
                        onClick={this.nextQuestion}
                    />
                    <GoalsCardQuestion
                        question={this.state.question}
                        onClick={this.nextQuestion}
                        onSubmit={this.submitGoals}
                    />
                    <ConfirmOptions
                        question={this.state.question}
                        onClick={this.nextQuestion}
                        goals={this.state.goals}
                    />
                </Questionnaire>
            </MinymalTheme>
        );
    }
}

export default App;
