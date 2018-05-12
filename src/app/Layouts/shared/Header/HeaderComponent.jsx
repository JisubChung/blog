import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import logo from './logo';

const styles = {
    Header: {
        textAlign: 'center',
        backgroundColor: '#222',
        height: '150px',
        padding: '20px',
        color: 'white'
    },
    Logo: {
        animation: 'App-logo-spin infinite 20s linear',
        height: '80px'
    },
    Title: {
        fontSize: '1.5em'
    }
};

@injectSheet(styles)
export default class HeaderComponent extends React.Component {
    static propTypes = {
        classes: PropTypes.object
    };

    render() {
        const { classes } = this.props;
        return (
            <header className={classes.Header}>
                <img src={logo} className={classes.Logo} alt="logo" />
                <h1 className={classes.Title}>Welcome to React</h1>
            </header>
        );
    }
}
