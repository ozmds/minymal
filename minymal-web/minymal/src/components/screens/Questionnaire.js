import React from 'react';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Collapse from '../display/Collapse';
import Header from './Header';
import Intro from './Intro';
import GoalsCardQuestion from './GoalsCardQuestion';
import GoalsConfirmQuestion from './GoalsConfirmQuestion';
import TimeSpendCardQuestion from './TimeSpendCardQuestion';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%'
    }
};

function Questionnaire(props) {
    const { classes } = props;
    return (
        <Container className={classes.container}>
            <Header />
            <Collapse condition={props.question === 'intro'}>
                <Intro
                    setQuestion={props.setQuestion}
                />
            </Collapse>
            <Collapse condition={props.question === 'goals'}>
                <GoalsCardQuestion
                    setQuestion={props.setQuestion}
                    setGoals={props.setGoals}
                />
            </Collapse>
            <Collapse condition={props.question === 'textgoals'}>
                <GoalsConfirmQuestion
                    setQuestion={props.setQuestion}
                    setGoals={props.setGoals}
                    goals={props.goals}
                />
            </Collapse>
            <Collapse condition={props.question === 'timespenders'}>
                <TimeSpendCardQuestion
                    setQuestion={props.setQuestion}
                    setTimeSpenders={props.setTimeSpenders}
                />
            </Collapse>
        </Container>
    );
}

Questionnaire.propTypes = {
    question: PropTypes.string,
    goals: PropTypes.array,
    setQuestion: PropTypes.func,
    setGoals: PropTypes.func,
    setTimeSpenders: PropTypes.func,
    classes: PropTypes.object
};

export default withStyles(styles)(Questionnaire);
