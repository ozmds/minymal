import React from 'react';
import PropTypes from 'prop-types';
import MaterialCollapse from '@material-ui/core/Collapse';

function Collapse(props) {
    return (
        <MaterialCollapse
            in={props.condition}
            timeout={1500}
            mountOnEnter
            unmountOnExit
        >
            {props.children}
        </MaterialCollapse>
    );
}

Collapse.propTypes = {
    condition: PropTypes.bool,
    children: PropTypes.node
};

export default Collapse;
