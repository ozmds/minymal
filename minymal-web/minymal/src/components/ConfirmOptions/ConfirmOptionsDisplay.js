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


const styles = (theme) => ({
    root: {
        marginTop: '2rem'
    },
    grid: {
        [theme.breakpoints.up('lg')]: {
            width: '70%'
        }
    },
    gridItem: {
        display: 'flex'
    },
    errorText: {
        color: 'red',
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
});

function ConfirmOptionsDisplay(props) {
    const { classes } = props;
    return (
        <Container className={classes.root} id={props.id}>
            <Typography variant='h5' id={'confirm-question-text'}>
                {props.content.question}
            </Typography>
            <Typography variant='subtitle1' id={'confirm-question-additional-text'}>
                {props.content.additionalText}
            </Typography>
            {props.error
                && <Typography className={classes.errorText} variant='subtitle1' id={'confirm-question-error-text'}>
                    {props.error}
                </Typography>
            }
            <Grid
                spacing={3}
                container
                className={classes.grid}
            >
                {props.options.map((goal, i) => (
                    <Grid key={i} item xs={12} lg={6} className={classes.gridItem}>
                        <TextField
                            className={classes.input}
                            id={`confirm-option-${i + 1}`}
                            label={`${props.content.fieldLabel} ${i + 1}`}
                            variant='outlined'
                            value={goal}
                            onChange={(e) => props.onChange(e, i)}
                        />
                        <IconButton onClick={() => props.removeField(i)} id={`remove-option-${i + 1}`}>
                            <DeleteIcon />
                        </IconButton>
                    </Grid>
                ))}
                <Grid item xs={12}>
                    <Button
                        style={{ width: '100%', height: '100%' }}
                        variant='outlined'
                        onClick={props.addField}
                        id={'add-option'}
                    >
                        <AddIcon />
                    </Button>
                </Grid>
            </Grid>
            <Button
                onClick={props.onSubmit}
                variant='contained'
                color='primary'
                size='large'
                className={classes.button}
                id={'confirm-submit-button'}
            >
                {'Continue'}
            </Button>
        </Container>
    );
}

ConfirmOptionsDisplay.propTypes = {
    id: PropTypes.string,
    content: PropTypes.object,
    options: PropTypes.array,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    addField: PropTypes.func,
    removeField: PropTypes.func,
    error: PropTypes.string,
    classes: PropTypes.object
};

export default withStyles(styles)(ConfirmOptionsDisplay);
