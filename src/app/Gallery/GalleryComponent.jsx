import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
    h1: {
        color: 'red'
    }
};

@injectSheet(styles)
export default class GalleryComponent extends Component {
    static propTypes = {
        classes: PropTypes.object
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <h1 className={classes.h1}>This is a gallery</h1>
            </div>
        );
    }
}
