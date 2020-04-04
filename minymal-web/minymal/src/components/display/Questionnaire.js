import React from 'react';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

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
            {props.children}
        </Container>
    );
}

Questionnaire.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object
};

export default withStyles(styles)(Questionnaire);
