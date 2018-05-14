import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
    App: {
        backgroundColor: 'red'
    }
};

@injectSheet(styles)
export default class BlogComponent extends Component {
    static propTypes = {
        children: PropTypes.any,
        classes: PropTypes.object
    };

    render() {
        const { classes, children } = this.props;
        return (
            <div className={classes.App}>
                <h1>Blog</h1>
                {children}
            </div>
        );
    }
}
