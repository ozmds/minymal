import React from 'react';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Collapse from '../Collapse/Collapse';
import CardOptions from '../CardOptions/CardOptions';
import ConfirmOptions from '../ConfirmOptions/ConfirmOptions';
import TimeSelect from '../TimeSelect/TimeSelect';
import content from '../../content';

const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const currentTime = new Date();
currentTime.setSeconds(0);
currentTime.setMilliseconds(0);

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%'
    },
    button: {
        marginTop: '1rem'
    }
};

function Questionnaire(props) {
    const { classes } = props;
    return (
        <Container className={classes.container}>
            <Collapse condition={['timespenders', 'texttimespenders', 'timeselect'].includes(props.question)}>
                <Button
                    variant='contained'
                    color='primary'
                    className={classes.button}
                    startIcon={<ArrowBackIcon /> }
                    id={'back-button'}
                    onClick={props.onBackClick}
                >
                    <b>{'Back to Change Goals'}</b>
                </Button>
            </Collapse>
            <Container>
                <Typography id={'heading-text'} variant='h2'>{'Minymal'}</Typography>
            </Container>
            <Collapse condition={props.question === 'intro'}>
                <Container>
                    <Typography variant='body1' id={'welcome-text'}>
                        {'Minimalist-minded planning for all goals, small and large.'}
                    </Typography>
                    <Button
                        onClick={() => props.setQuestion('goals')}
                        variant='contained'
                        color='primary'
                        className={classes.button}
                        id={'start-button'}
                    >
                        <b>{"Let's Get Started"}</b>
                    </Button>
                </Container>
            </Collapse>
            <Collapse condition={props.question === 'goals'}>
                <CardOptions
                    content={content.questionnaire.goalsCard}
                    setQuestion={props.setQuestion}
                    submitSelection={props.setGoals}
                    nextScreen={'textgoals'}
                    id={'goals-card'}
                />
            </Collapse>
            <Collapse condition={props.question === 'textgoals'}>
                <ConfirmOptions
                    content={content.questionnaire.goalsConfirm}
                    options={props.goals}
                    setQuestion={props.setQuestion}
                    submitSelection={props.setGoals}
                    nextScreen={'timespenders'}
                    id={'goals-confirm'}
                />
            </Collapse>
            <Collapse condition={props.question === 'timespenders'}>
                <CardOptions
                    content={content.questionnaire.timeSpentCard}
                    setQuestion={props.setQuestion}
                    submitSelection={props.setTimeSpent}
                    nextScreen={'texttimespenders'}
                    id={'time-spent-card'}
                />
            </Collapse>
            <Collapse condition={props.question === 'texttimespenders'}>
                <ConfirmOptions
                    content={content.questionnaire.timeSpentConfirm}
                    options={props.timeSpent}
                    setQuestion={props.setQuestion}
                    submitSelection={props.setTimeSpent}
                    nextScreen={'timeselect'}
                    id={'time-spent-confirm'}
                />
            </Collapse>
            <Collapse condition={props.question === 'timeselect'}>
                <TimeSelect
                    timeSpent={props.timeSpent}
                    weekdays={weekdays}
                    currentTime={currentTime}
                    setQuestion={props.setQuestion}
                    submitSelection={props.setTimeSpent}
                    nextScreen={'intro'}
                />
            </Collapse>
        </Container>
    );
}

Questionnaire.propTypes = {
    question: PropTypes.string,
    goals: PropTypes.array,
    timeSpent: PropTypes.array,
    setQuestion: PropTypes.func,
    setGoals: PropTypes.func,
    setTimeSpent: PropTypes.func,
    onBackClick: PropTypes.func,
    classes: PropTypes.object
};

export default withStyles(styles)(Questionnaire);
