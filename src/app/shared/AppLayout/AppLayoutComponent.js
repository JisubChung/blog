import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Header from 'app/shared/Header/index';
import Footer from 'app/shared/Footer/index';

const styles = {
    App: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
    Intro: {
        fontSize: 'large'
    },
    Header: {
        flexGrow: 5
    }
};

@injectSheet(styles)
export default class AppLayoutComponent extends Component {
    static propTypes = {
        children: PropTypes.any,
        classes: PropTypes.object
    };

    render() {
        const { classes, children } = this.props;
        return (
            <div className={classes.App}>
                <Header className={classes.Header} />
                {children}
                <Footer className={classes.Footer} />
            </div>
        );
    }
}
