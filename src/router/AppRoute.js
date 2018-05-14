import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Route } from 'react-router-dom';
import AppLayout from 'app/shared/AppLayout';
import AppLayoutLite from 'app/shared/AppLayoutLite';
import { pick, omit } from 'lodash';

const switchProps = ['path', 'exact', 'strict', 'sensitive', 'computedMatch', 'location'];

@withRouter
export class AppRoute extends Component {
    static propTypes = {
        component: PropTypes.func,
        lite: PropTypes.bool
    };

    static defaultProps = {
        lite: false
    };

    getRouteProps = props => pick(props, switchProps);
    getComponentProps = props => omit(props, switchProps.concat('Component'));

    render() {
        const { component: Component, lite } = this.props;
        const Layout = lite ? AppLayoutLite : AppLayout;
        return (
            <Route
                {...this.getRouteProps(this.props)}
                render={props => (
                    <Layout>
                        <Component {...this.getComponentProps(props)} />
                    </Layout>
                )}
            />
        );
    }
}
