import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
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
        <Container>
            <Typography variant='body1'>
                {'Minimalist-minded planning for all goals, small and large.'}
            </Typography>
            <Button
                onClick={() => props.onClick('goals')}
                variant='contained'
                color='primary'
                className={classes.button}
            >
                {"Let's Get Started"}
            </Button>
        </Container>
    );
}

Intro.propTypes = {
    onClick: PropTypes.func,
    classes: PropTypes.object
};

export default withStyles(styles)(Intro);
