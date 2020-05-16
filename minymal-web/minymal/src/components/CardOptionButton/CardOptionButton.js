import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { withStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import PropTypes from 'prop-types';

const styles = (theme) => ({
    card: {
        [theme.breakpoints.down('md')]: {
            height: '15rem'
        },
        position: 'relative',
        cursor: 'pointer',
        height: '100%'
    },
    fullContainer: {
        height: '100%'
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    overlay: {
        position: 'absolute',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        color: '#FFFFFF',
        padding: '1rem'
    },
    checkOverlay: {
        width: '100%',
        height: '100%'
    }
});

function CardOptionButton(props) {
    const { classes } = props;
    return (
        <Card className={classes.card} id={`card-option-${props.index + 1}`}>
            <CardActionArea
                className={classes.fullContainer}
            >
                <CardMedia
                    image={props.image}
                    title={props.imageTitle}
                    className={classes.image}
                />
            </CardActionArea>
            <Slide
                mountOnEnter
                unmountOnExit
                in={!props.selected.includes(props.index)}
                timeout={{ enter: 1500, exit: 1500 }}
            >
                <Container
                    className={classes.overlay}
                    onClick={() => props.manageSelection(props.index)}
                >
                    <Typography id={`card-option-${props.index + 1}-text`} variant='h4'>
                        <strong>{props.imageTitle}</strong>
                    </Typography>
                </Container>
            </Slide>
            <Slide
                mountOnEnter
                unmountOnExit
                in={props.selected.includes(props.index)}
                timeout={1500}
            >
                <Container
                    className={classes.overlay}
                    onClick={() => props.manageSelection(props.index)}
                >
                    <CheckBoxIcon id={`checkbox-icon-${props.index + 1}`} className={classes.checkOverlay} />
                </Container>
            </Slide>
        </Card>
    );
}

CardOptionButton.propTypes = {
    image: PropTypes.string,
    imageTitle: PropTypes.string,
    manageSelection: PropTypes.func,
    index: PropTypes.number,
    selected: PropTypes.array,
    classes: PropTypes.object
};

export default withStyles(styles)(CardOptionButton);
