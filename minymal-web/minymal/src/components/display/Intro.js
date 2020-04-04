import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {
    button: {
        marginTop: '1rem'
    }
};

function Intro(props) {
    const { classes } = props;
    return (
        <Collapse in={props.question === 'intro'} timeout={1500}>
            <Container>
                <Typography variant='body1'>
                    {props.introText}
                </Typography>
                <Button
                    onClick={() => props.onClick('goals')}
                    variant='contained'
                    color='primary'
                    className={classes.button}
                >
                    {props.buttonText}
                </Button>
            </Container>
        </Collapse>
    );
}

Intro.propTypes = {
    buttonText: PropTypes.string,
    introText: PropTypes.string,
    question: PropTypes.string,
    onClick: PropTypes.func,
    classes: PropTypes.object
};

export default withStyles(styles)(Intro);
