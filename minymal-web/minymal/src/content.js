/* eslint-disable global-require */

const content = {
    questionnaire: {
        heading: 'Minymal',
        welcome: {
            intro: 'Minimalist-minded planning for all goals, small and large.',
            button: "Let's Get Started"
        },
        goalsCard: {
            question: 'What are your goals?',
            button: 'Continue',
            images: [
                {
                    name: 'Learn an Instrument',
                    image: require('./static/piano.jpg')
                },
                {
                    name: 'Build an App',
                    image: require('./static/code.jpg')
                },
                {
                    name: 'Learn to Cook',
                    image: require('./static/cooking.jpg')
                },
                {
                    name: 'Get Healthier',
                    image: require('./static/fitness.jpg')
                },
                {
                    name: 'Write a Novel',
                    image: require('./static/writing.jpg')
                },
                {
                    name: 'Other Goals',
                    image: require('./static/other.jpg')
                }
            ]
        },
        goalsConfirm: {
            question: "Are there any other goals you'd like to add?",
            additionalText: "(If you'd like to edit any existing goals, let's do that too.)",
            fieldLabel: 'Goal',
            maxFields: 6,
            error: {
                atLeastOne: 'You must add at least one goal.',
                tooMany: 'Currently you can only add up to 6 goals, more will be available later.'
            }
        },
        timeSpentCard: {
            question: 'How do you spend most of your time?',
            button: 'Continue',
            images: [
                {
                    name: 'Sleep',
                    image: require('./static/sleep.jpg')
                },
                {
                    name: 'Work',
                    image: require('./static/work.jpg')
                },
                {
                    name: 'School',
                    image: require('./static/school.jpg')
                },
                {
                    name: 'Transit',
                    image: require('./static/transit.jpg')
                },
                {
                    name: 'Screen Time',
                    image: require('./static/screentime.jpg')
                },
                {
                    name: 'Other',
                    image: require('./static/timespendother.jpg')
                }
            ]
        },
        timeSpentConfirm: {
            question: "Are there any other time spenders you'd like to add?",
            additionalText: "(If you'd like to edit any existing time spenders, let's do that too.)",
            fieldLabel: 'Time Spender',
            maxFields: 10,
            error: {
                atLeastOne: 'You must add at least one time spender.',
                tooMany: 'Currently you can only add up to 10 time spenders, more will be available later.'
            }
        }
    }
};

export default content;
