import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Header from 'Components/Layouts/shared/Header';

const styles = {
    App: {
        textAlign: 'center'
    },
    Intro: {
        fontSize: 'large'
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
                <Header />
                <p className={classes.Intro}>{children}</p>
            </div>
        );
    }
}
