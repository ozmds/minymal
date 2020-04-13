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
import Collapse from './Collapse';

const styles = (theme) => ({
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
        marginTop: '1rem'
    },
    card: {
        marginTop: '1rem',
        marginBottom: '1rem',
        border: '1px solid rgba(0, 0, 0, 0.23)',
        backgroundColor: 'inherit',
        padding: '1rem'
    }
});

function TimeSelectDisplay(props) {
    const { classes } = props;
    return (
        <Container className={classes.root}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Fragment>
                    <Typography variant='h5'>
                        {'When are you doing these activities?'}
                    </Typography>
                    {props.timeSpenders.map((timeSpender, i) => (
                        <Fragment key={i}>
                            <Button
                                className={classes.button}
                                size='large'
                                variant='outlined'
                                onClick={() => props.changeOpen(i)}
                            >
                                {timeSpender}
                            </Button>
                            <Collapse condition={i === props.openIndex}>
                                <Paper variant='outlined' className={classes.card}>
                                    <Grid
                                        spacing={0}
                                        container
                                    >
                                        {props.selectedTime[i].times.map((timesSelected, j) => (
                                            <Grid key={j} item xs={12} className={classes.gridItem}>
                                                <FormControl style={{ flex: '2' }} variant='outlined' className={classes.input}>
                                                    <InputLabel id='demo-simple-select-outlined-label'>{'Days of the Week'}</InputLabel>
                                                    <Select
                                                        labelId='demo-simple-select-outlined-label'
                                                        id='demo-simple-select-outlined'
                                                        label='Days of the Week'
                                                        multiple
                                                        value={timesSelected.days}
                                                        onChange={
                                                            (e) => props.onDaysChange(e, i, j)
                                                        }
                                                    >
                                                        {props.weekdays.map((day) => (
                                                            <MenuItem
                                                                key={day}
                                                                value={day}
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
                                                    onChange={(e) => props.onStartChange(e, i, j)}
                                                />
                                                <TimePicker
                                                    ampm={true}
                                                    variant='inline'
                                                    inputVariant='outlined'
                                                    label='End Time'
                                                    className={classes.input}
                                                    value={timesSelected.endTime}
                                                    onChange={(e) => props.onEndChange(e, i, j)}
                                                />
                                                <Typography variant='body1'>
                                                    {`Time Spent: ${timesSelected.difference.hours}h, ${timesSelected.difference.minutes}m`}
                                                </Typography>
                                                <IconButton onClick={() => props.removeField(i, j)}>
                                                    <DeleteIcon />
                                                </IconButton>
                                            </Grid>
                                        ))}
                                        <Grid style={{ margin: '1rem' }} item xs={12} className={classes.gridItem}>
                                            <Button
                                                style={{ width: '90%', height: '100%' }}
                                                variant='outlined'
                                                onClick={() => props.addField(i)}
                                            >
                                                <AddIcon />
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Collapse>
                        </Fragment>
                    ))}
                    <Typography variant='h5'>
                        {`Total Time Spent: ${0}/168 hours in a week.`}
                    </Typography>
                    <Button
                        onClick={props.onSubmit}
                        className={classes.button}
                        variant='contained'
                        color='primary'
                        size='large'
                    >
                        {'Continue'}
                    </Button>
                </Fragment>
            </MuiPickersUtilsProvider>
        </Container>
    );
}

TimeSelectDisplay.propTypes = {
    timeSpenders: PropTypes.array,
    weekdays: PropTypes.array,
    changeOpen: PropTypes.func,
    openIndex: PropTypes.number,
    selectedTime: PropTypes.array,
    onDaysChange: PropTypes.func,
    onStartChange: PropTypes.func,
    onEndChange: PropTypes.func,
    addField: PropTypes.func,
    removeField: PropTypes.func,
    onSubmit: PropTypes.func,
    classes: PropTypes.object
};

export default withStyles(styles)(TimeSelectDisplay);
