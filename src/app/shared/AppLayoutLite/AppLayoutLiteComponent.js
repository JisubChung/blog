import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Header from 'app/shared/Header/index';
import Footer from 'app/shared/Footer/index';

const styles = {
    App: {
        textAlign: 'center'
    },
    Intro: {
        fontSize: 'large'
    }
};

@injectSheet(styles)
export default class AppLayoutLiteComponent extends Component {
    static propTypes = {
        children: PropTypes.any,
        classes: PropTypes.object
    };

    render() {
        const { classes, children } = this.props;
        return (
            <div className={classes.App}>
                <Header />
                {children}
                <Footer />
            </div>
        );
    }
}
