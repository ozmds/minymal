import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import PropTypes from 'prop-types';

const styles = (theme) => ({
    root: {
        [theme.breakpoints.up('lg')]: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '80vh'
        },
        marginTop: '2rem'
    },
    grid: {
        height: '100%',
        flex: '1',
        marginTop: '1.5rem',
        marginBottom: '1.5rem'
    },
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
    },
    button: {
        marginBottom: '1rem'
    }
});

function CardOptionsDisplay(props) {
    const { classes } = props;
    return (
        <Container className={classes.root}>
            <Typography variant='h4'>{props.question}</Typography>
            <Grid
                spacing={3}
                container
                className={classes.grid}
            >
                {props.imagePaths.map((image, i) => (
                    <Grid key={props.imageTitles[i]} item xs={12} lg={6}>
                        <Card className={classes.card}>
                            <CardActionArea
                                className={classes.fullContainer}
                            >
                                <CardMedia
                                    image={image}
                                    title={props.imageTitles[i]}
                                    className={classes.image}
                                />
                            </CardActionArea>
                            <Slide
                                mountOnEnter
                                unmountOnExit
                                in={!props.selected.includes(i)}
                                timeout={{ enter: 1500, exit: 1500 }}
                            >
                                <Container
                                    className={classes.overlay}
                                    onClick={() => props.manageSelection(i)}
                                >
                                    <Typography variant='h4'>
                                        <strong>{props.imageTitles[i]}</strong>
                                    </Typography>
                                </Container>
                            </Slide>
                            <Slide
                                mountOnEnter
                                unmountOnExit
                                in={props.selected.includes(i)}
                                timeout={1500}
                            >
                                <Container
                                    className={classes.overlay}
                                    onClick={() => props.manageSelection(i)}
                                >
                                    <CheckBoxIcon className={classes.checkOverlay} />
                                </Container>
                            </Slide>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Button
                onClick={props.onSubmit}
                className={classes.button}
                variant='contained'
                color='primary'
                size='large'
            >
                {'Continue'}
            </Button>
        </Container>
    );
}

CardOptionsDisplay.propTypes = {
    question: PropTypes.string,
    selected: PropTypes.array,
    imagePaths: PropTypes.array,
    imageTitles: PropTypes.array,
    onSubmit: PropTypes.func,
    manageSelection: PropTypes.func,
    classes: PropTypes.object
};

export default withStyles(styles)(CardOptionsDisplay);
