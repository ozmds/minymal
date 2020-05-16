import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

/* fontFamily: '"Playfair Display", "Helvetica", "Arial", sans-serif' */
/* fontFamily: '"Jost", "Arial", sans-serif' */


const theme = createMuiTheme({
    typography: {
        fontFamily: '"Didact Gothic", sans-serif'
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
