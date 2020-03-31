import React, { Component } from 'react';
import Piano from './piano.jpg';
import Code from './code.jpg';
import Cooking from './cooking.jpg';
import Fitness from './fitness.jpg';
import Writing from './writing.jpg';
import Other from './other.jpg';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Collapse from '@material-ui/core/Collapse';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        fontFamily: '"Playfair Display", "Helvetica", "Arial", sans-serif',
    }
});

const styles = {
    columnFlex: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'cover'
    },
    fullHeight: {
        height: '100%'
    },
    fillFlex: {
        flex: '1'
    },
    overlay: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        color: '#FFFFFF',
        padding: '1rem'
    },
    overlayCard: {
        position: 'relative',
        cursor: 'pointer'
    },
    marginTop: {
        marginTop: '1rem'
    },
    marginBottom: {
        marginBottom: '1rem'
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: 'intro'
        }
    }

    nextQuestion = (questionName) => {
        this.setState({ question: questionName });
    }

    render() {
        const image_paths = [Piano, Code, Cooking, Fitness, Writing, Other];
        const image_titles = [
            'Learn an Instrument', 'Build an App', 'Learn to Cook', 'Get Healthier', 'Write a Novel', 'Other Goals'
        ];
        const { classes } = this.props;
        return (
            <ThemeProvider theme={theme}>
                <Container className={`${classes.columnFlex} ${classes.fullHeight}`}>
                    <Container>
                        <Typography variant='h2'>
                            Minymal
                        </Typography>
                    </Container>
                    <Collapse in={this.state.question === 'intro'} timeout={1500}>
                        <Container>
                            <Typography variant='body1'>
                                Minimalist-minded planning for all goals, small and large.
                            </Typography>
                            <Button onClick={() => this.nextQuestion('goals')} variant='contained' color='primary' className={classes.marginTop}>
                                Let's Get Started
                            </Button>
                        </Container>
                    </Collapse>
                    <Collapse 
                        in={this.state.question === 'name'}
                        timeout={1500}
                        classes={{
                            container: classes.fillFlex
                        }}
                        mountOnEnter
                        unmountOnExit
                    >
                        <Container>
                            <Typography className={`${classes.marginBottom}`} variant="h5">
                                Let's get accquainted, what can I call you?
                            </Typography>
                            <TextField style={{'display': 'block'}} id="outlined-basic" label="Name" variant="outlined" />
                            <Button onClick={() => this.nextQuestion('goals')} className={classes.marginTop} variant="contained" color="primary">
                                Next
                            </Button>
                        </Container>
                    </Collapse>
                    <Collapse 
                        in={this.state.question === 'goals'} 
                        timeout={1500}
                        classes={{
                            container: classes.fillFlex,
                            wrapper: classes.fullHeight,
                            wrapperInner: classes.fullHeight
                        }}
                        mountOnEnter
                        unmountOnExit
                    >
                        <Container className={`${classes.fullHeight} ${classes.columnFlex}`}>
                            <Typography variant="h3">
                                What are your goals?
                            </Typography>
                            <Grid spacing={3} container style={{margin: '0rem', padding: '0.75rem'}} className={`${classes.fullHeight} ${classes.fillFlex}`}>
                                {image_paths.map((image, i) => (
                                    <Grid item xs={6}>
                                        <Card className={`${classes.fullHeight} ${classes.overlayCard}`}>
                                            <CardActionArea className={classes.fullHeight}>
                                                <CardMedia
                                                    image={image}
                                                    title={image_titles[i]}
                                                    className={classes.image}
                                                />
                                            </CardActionArea>
                                            <div className={classes.overlay}>
                                                <Typography variant="h4">
                                                    <strong>{image_titles[i]}</strong>
                                                </Typography>
                                            </div>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Container>
                    </Collapse>
                </Container>
            </ThemeProvider>
        )
    }
}

export default withStyles(styles)(App);
