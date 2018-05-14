import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
    App: {
        backgroundColor: 'blue'
    }
};

@injectSheet(styles)
export default class HomeComponent extends Component {
    static propTypes = {
        children: PropTypes.any,
        classes: PropTypes.object
    };

    render() {
        const { classes, children } = this.props;
        return (
            <div className={classes.App}>
                <h1>Home</h1>
                {children}
            </div>
        );
    }
}
