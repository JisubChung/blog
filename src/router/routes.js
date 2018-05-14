import React from 'react';
import { Switch } from 'react-router-dom';

import { AppRoute, routePaths } from 'router';
import Home from 'app/Home';
import Blog from 'app/Blog';
import Gallery from 'app/Gallery';
import NotFound from 'app/NotFound';

export default (
    <Switch>
        <AppRoute exact path={routePaths.home} component={Home} />
        <AppRoute path={routePaths.blog} component={Blog} />
        <AppRoute path={routePaths.gallery} component={Gallery} />
        <AppRoute lite component={NotFound} />
    </Switch>
);
