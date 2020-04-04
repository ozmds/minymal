import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import PropTypes from 'prop-types';

const styles = {
    root: {
        marginTop: '2rem'
    },
    heading: {
        marginBottom: '1rem'
    },
    input: {
        marginTop: '1rem',
        marginBottom: '1rem',
        padding: '0rem',
        display: 'flex',
        flexDirection: 'row'
    },
    icon: {
        width: '2rem',
        height: '100%'
    }
};

function ConfirmOptions(props) {
    const { classes } = props;
    return (
        <Collapse
            in={props.question === 'textgoals'}
            timeout={1500}
            mountOnEnter
            unmountOnExit
        >
            <Container className={classes.root}>
                <Typography className={classes.heading} variant='h5'>
                    {"Are there any other goals you'd like to add?"}
                </Typography>
                {props.goals.map((goal, i) => (
                    <TextField
                        className={classes.input}
                        id='outlined-basic'
                        key={goal}
                        label={`Goal ${i + 1}`}
                        variant='outlined'
                        value={goal}
                    />
                ))}
                <Container className={classes.input}>
                    <TextField
                        id='outlined-basic'
                        label={'Goal X'}
                        variant='outlined'
                        placeholder='Add Another Goal'
                    />
                    <IconButton color='primary' size='large'>
                        <PhotoCamera className={classes.icon} />
                    </IconButton>
                </Container>
                <Button
                    onClick={() => props.onClick('goals')}
                    variant='contained'
                    color='primary'
                >
                    {'Next'}
                </Button>
            </Container>
        </Collapse>
    );
}

ConfirmOptions.propTypes = {
    question: PropTypes.string,
    goals: PropTypes.array,
    onClick: PropTypes.func,
    classes: PropTypes.object
};

export default withStyles(styles)(ConfirmOptions);
