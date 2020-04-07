import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';


const styles = {
    root: {
        marginTop: '2rem'
    },
    grid: {
        width: '70%'
    },
    gridItem: {
        display: 'flex'
    },
    heading: {
        marginBottom: '1.5rem'
    },
    input: {
        flex: 1
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
                {props.options.map((goal, i) => (
                    <Grid key={i} item xs={6} className={classes.gridItem}>
                        <TextField
                            className={classes.input}
                            id='outlined-basic'
                            label={`${props.label} ${i + 1}`}
                            variant='outlined'
                            value={goal}
                            onChange={(e) => props.onChange(e, i)}
                        />
                        <IconButton onClick={() => props.removeField(i)}>
                            <DeleteIcon />
                        </IconButton>
                    </Grid>
                ))}
                {props.options.length < props.maxFields
                    && <Grid item xs={12}>
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
                onClick={props.onSubmit}
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
    maxFields: PropTypes.number,
    label: PropTypes.string,
    options: PropTypes.array,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    addField: PropTypes.func,
    removeField: PropTypes.func,
    classes: PropTypes.object
};

export default withStyles(styles)(ConfirmOptionsDisplay);
