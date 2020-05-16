import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import CardOptionButton from '../CardOptionButton/CardOptionButton';

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
    button: {
        marginBottom: '1rem'
    }
});

function CardOptionsDisplay(props) {
    const { classes } = props;
    return (
        <Container className={classes.root} id={props.id}>
            <Typography id={'card-question-text'} variant='h4'>{props.content.question}</Typography>
            <Grid
                spacing={3}
                container
                className={classes.grid}
            >
                {props.content.images.map((image, i) => (
                    <Grid key={`card-option-${i + 1}`} item xs={12} lg={6}>
                        <CardOptionButton
                            image={image.image}
                            imageTitle={image.name}
                            manageSelection={props.manageSelection}
                            index={i}
                            selected={props.selected}
                        />
                    </Grid>
                ))}
            </Grid>
            <Button
                onClick={props.onSubmit}
                className={classes.button}
                variant='contained'
                color='primary'
                size='large'
                id={'card-submit-button'}
            >
                {'Continue'}
            </Button>
        </Container>
    );
}

CardOptionsDisplay.propTypes = {
    id: PropTypes.string,
    content: PropTypes.object,
    onSubmit: PropTypes.func,
    manageSelection: PropTypes.func,
    selected: PropTypes.array,
    classes: PropTypes.object
};

export default withStyles(styles)(CardOptionsDisplay);
