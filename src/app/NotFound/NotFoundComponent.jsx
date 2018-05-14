import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
    App: {
        backgroundColor: 'green'
    }
};

@injectSheet(styles)
export default class NotFoundComponent extends Component {
    static propTypes = {
        children: PropTypes.any,
        classes: PropTypes.object
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.App}>
                <h1>Page Not Found</h1>
            </div>
        );
    }
}
