import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { Link, NavLink } from 'react-router-dom';

import { routePaths } from 'router/routePaths';

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
    },
    parent: {
        backgroundColor: 'green',
        '&.child': {
            fontWeight: 'bold'
        }
    }
};

@injectSheet(styles)
export default class HeaderComponent extends React.Component {
    static propTypes = {
        classes: PropTypes.object,
        lite: PropTypes.bool
    };

    static defaultProps = {
        lite: false
    };

    render() {
        const { classes, lite } = this.props;
        return (
            <React.Fragment>
                {lite ? (
                    <div>lite header</div>
                ) : (
                    <header className={classes.Header}>
                        <h1 className={classes.Title}>Header Title</h1>
                        <div className={classes.parent}>
                            <NavLink to={routePaths.home}>Home</NavLink>
                            <Link to={routePaths.blog}>Blog</Link>
                            <Link to={routePaths.gallery}>Gallery</Link>
                            <div className={classes.child}>child</div>
                        </div>
                    </header>
                )}
            </React.Fragment>
        );
    }
}
