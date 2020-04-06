import React, { Component } from 'react';
import Collapse from '@material-ui/core/Collapse';
import MinymalTheme from './display/MinymalTheme';
import Questionnaire from './screens/Questionnaire';
import Header from './screens/Header';
import Intro from './screens/Intro';
import GoalsCardQuestion from './screens/GoalsCardQuestion';
import GoalsConfirmQuestion from './screens/GoalsConfirmQuestion';

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
                    <Header />
                    <Collapse
                        in={this.state.question === 'intro'}
                        timeout={1500}
                        mountOnEnter
                        unmountOnExit
                    >
                        <Intro
                            onClick={this.nextQuestion}
                        />
                    </Collapse>
                    <Collapse
                        in={this.state.question === 'goals'}
                        timeout={1500}
                        mountOnEnter
                        unmountOnExit
                    >
                        <GoalsCardQuestion
                            onClick={this.nextQuestion}
                            onSubmit={this.submitGoals}
                        />
                    </Collapse>
                    <Collapse
                        in={this.state.question === 'textgoals'}
                        timeout={1500}
                        mountOnEnter
                        unmountOnExit
                    >
                        <GoalsConfirmQuestion
                            onClick={this.nextQuestion}
                            goals={this.state.goals}
                            onSubmit={this.submitGoals}
                        />
                    </Collapse>
                </Questionnaire>
            </MinymalTheme>
        );
    }
}

export default App;
