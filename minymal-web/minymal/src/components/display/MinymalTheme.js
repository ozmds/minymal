import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const theme = createMuiTheme({
    typography: {
        fontFamily: '"Playfair Display", "Helvetica", "Arial", sans-serif'
    }
});

function MinymalTheme(props) {
    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    );
}

MinymalTheme.propTypes = {
    children: PropTypes.node
};

export default MinymalTheme;
