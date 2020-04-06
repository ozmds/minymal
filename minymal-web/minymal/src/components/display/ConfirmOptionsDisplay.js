import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';

const styles = {
    root: {
        marginTop: '2rem'
    },
    grid: {
        width: '70%'
    },
    heading: {
        marginBottom: '1.5rem'
    },
    input: {
        width: '100%'
    },
    icon: {
        width: '2rem',
        height: '100%'
    },
    button: {
        marginTop: '1.5rem'
    }
};

function ConfirmOptionsDisplay(props) {
    const { classes } = props;
    return (
        <Container className={classes.root}>
            <Typography variant='h5'>
                {props.question}
            </Typography>
            <Typography className={classes.heading} variant='subtitle1'>
                {props.subtitle}
            </Typography>
            <Grid
                spacing={3}
                container
                className={classes.grid}
            >
                {props.goals.map((goal, i) => (
                    <Grid key={i} item xs={6}>
                        <TextField
                            className={classes.input}
                            id='outlined-basic'
                            label={`Goal ${i + 1}`}
                            variant='outlined'
                            value={goal}
                            onChange={(e) => props.onChange(e, i)}
                        />
                    </Grid>
                ))}
                {props.goals.length < 6
                    && <Grid item xs={6}>
                        <Button
                            style={{ width: '100%', height: '100%' }}
                            variant='outlined'
                            onClick={props.addField}
                        >
                            <AddIcon />
                        </Button>
                    </Grid>
                }
            </Grid>
            <Button
                onClick={props.onClick}
                variant='contained'
                color='primary'
                size='large'
                className={classes.button}
            >
                {'Continue'}
            </Button>
        </Container>
    );
}

ConfirmOptionsDisplay.propTypes = {
    question: PropTypes.string,
    subtitle: PropTypes.string,
    goals: PropTypes.array,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    addField: PropTypes.func,
    classes: PropTypes.object
};

export default withStyles(styles)(ConfirmOptionsDisplay);
