import React from 'react';
import { Switch } from 'react-router-dom';

import AppRoute from './AppRoute';
import { routePaths } from './routePaths';
import NotFound from 'app/NotFound';

export default (
    <Switch>
        {routePaths.map(route => {
            return <AppRoute {...route.params} path={route.path} component={route.component} key={route.name} />;
        })}
        <AppRoute lite component={NotFound} />
    </Switch>
);
