import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Collapse from '../Collapse/Collapse';
import { getTotalTimeSpent } from './TimeSelectHelper';

const styles = () => ({
    root: {
        marginTop: '2rem'
    },
    gridItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        flex: 1,
        margin: '0.75rem'
    },
    icon: {
        width: '2rem',
        height: '100%'
    },
    button: {
        display: 'block',
        width: '100%',
        marginTop: '1rem',
        color: 'red',
        borderColor: 'red'
    },
    card: {
        marginTop: '1rem',
        marginBottom: '1rem',
        border: '1px solid rgba(0, 0, 0, 0.23)',
        backgroundColor: 'inherit',
        padding: '1rem'
    },
    errorText: {
        color: 'red'
    }
});

function TimeSelectDisplay(props) {
    const { classes } = props;
    return (
        <Container className={classes.root}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Fragment>
                    <Typography variant='h5' id={'spent-allocate-question'}>
                        {'When are you doing these activities?'}
                    </Typography>
                    <Typography className={classes.errorText} variant='subtitle1' id={'time-spent-allocate-global-error'}>
                        {'Insert Error Text Here'}
                    </Typography>
                    {props.selectedTime.map((x) => x.name).map((timeSpender, i) => (
                        <Fragment key={i}>
                            <Button
                                className={classes.button}
                                size='large'
                                variant='outlined'
                                onClick={() => props.changeOpen(i)}
                                id={`time-spent-tab-${i + 1}`}
                            >
                                {timeSpender}
                            </Button>
                            <Collapse condition={i === props.openIndex}>
                                <Paper variant='outlined' className={classes.card}>
                                    <Grid
                                        spacing={0}
                                        container
                                    >
                                        <Typography className={classes.errorText} variant='subtitle1' id={`time-spent-allocate-error-${i + 1}`}>
                                            {'Insert Error Text Here'}
                                        </Typography>
                                        {props.selectedTime[i].times.map((timesSelected, j) => (
                                            <Grid key={j} item xs={12} className={classes.gridItem}>
                                                <FormControl style={{ flex: '2' }} variant='outlined' className={classes.input} error={true}>
                                                    <InputLabel id='demo-simple-select-outlined-label'>{'Days of the Week'}</InputLabel>
                                                    <Select
                                                        labelId='demo-simple-select-outlined-label'
                                                        id={`time-spent-tab-${i + 1}-day-select-${j + 1}`}
                                                        label='Days of the Week'
                                                        multiple
                                                        value={timesSelected.days}
                                                        onChange={
                                                            (e) => props.onChange(e.target.value, i, j, 'days')
                                                        }
                                                    >
                                                        {props.weekdays.map((day) => (
                                                            <MenuItem
                                                                key={day}
                                                                value={day}
                                                                id={`time-spent-tab-${i + 1}-day-select-${j + 1}-option-${day}`}
                                                            >
                                                                {day}
                                                            </MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                                <TimePicker
                                                    ampm={true}
                                                    variant='inline'
                                                    inputVariant='outlined'
                                                    label='Start Time'
                                                    className={classes.input}
                                                    value={timesSelected.startTime}
                                                    onChange={(e) => props.onChange(e, i, j, 'startTime')}
                                                    id={`time-spent-tab-${i + 1}-start-time-${j + 1}`}
                                                    error={true}
                                                />
                                                <TimePicker
                                                    ampm={true}
                                                    variant='inline'
                                                    inputVariant='outlined'
                                                    label='End Time'
                                                    className={classes.input}
                                                    value={timesSelected.endTime}
                                                    onChange={(e) => props.onChange(e, i, j, 'endTime')}
                                                    id={`time-spent-tab-${i + 1}-end-time-${j + 1}`}
                                                    error={true}
                                                />
                                                <Typography variant='body1' id={`time-spent-tab-${i + 1}-time-diff-${j + 1}`}>
                                                    {`Time Spent: ${timesSelected.difference.hours}h, ${timesSelected.difference.minutes}m`}
                                                </Typography>
                                                <IconButton onClick={() => props.removeField(i, j)} id={`time-spent-tab-${i + 1}-remove-${j + 1}`}>
                                                    <DeleteIcon />
                                                </IconButton>
                                            </Grid>
                                        ))}
                                        <Grid style={{ margin: '1rem' }} item xs={12} className={classes.gridItem}>
                                            <Button
                                                style={{ width: '90%', height: '100%' }}
                                                variant='outlined'
                                                onClick={() => props.addField(i)}
                                                id={`add-time-period-${i + 1}`}
                                            >
                                                <AddIcon />
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Collapse>
                        </Fragment>
                    ))}
                    <Typography variant='h5' id={'total-time-spent'}>
                        {`Total Time Spent: ${getTotalTimeSpent(props.selectedTime)}/168 hours in a week.`}
                    </Typography>
                    <Button
                        onClick={props.onSubmit}
                        className={classes.button}
                        variant='contained'
                        color='primary'
                        size='large'
                        id={'time-spent-allocate-submit'}
                    >
                        {'Continue'}
                    </Button>
                </Fragment>
            </MuiPickersUtilsProvider>
        </Container>
    );
}

TimeSelectDisplay.propTypes = {
    weekdays: PropTypes.array,
    changeOpen: PropTypes.func,
    openIndex: PropTypes.number,
    selectedTime: PropTypes.array,
    onChange: PropTypes.func,
    addField: PropTypes.func,
    removeField: PropTypes.func,
    onSubmit: PropTypes.func,
    classes: PropTypes.object
};

export default withStyles(styles)(TimeSelectDisplay);
