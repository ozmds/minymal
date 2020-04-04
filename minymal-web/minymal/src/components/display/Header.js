import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';

function Header(props) {
    return (
        <Container>
            <Typography variant='h2'>{props.value}</Typography>
        </Container>
    );
}

Header.propTypes = {
    value: PropTypes.string
};

export default Header;
