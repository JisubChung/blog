import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
    Header: {
        textAlign: 'center',
        backgroundColor: '#222',
        // height: '10px',
        padding: '5px',
        color: 'red'
    },
    Title: {
        fontSize: '1.5em'
    }
};

@injectSheet(styles)
export default class FooterComponent extends React.Component {
    static propTypes = {
        classes: PropTypes.object
    };

    render() {
        const { classes } = this.props;
        return (
            <footer className={classes.Header}>
                <h1 className={classes.Title}>Footer</h1>
            </footer>
        );
    }
}
