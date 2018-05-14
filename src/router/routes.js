import React from 'react';
import { Switch } from 'react-router-dom';

import { AppRoute, routePaths } from 'router';
import Home from 'app/Home/index';
import Blog from 'app/Blog/index';
import Gallery from 'app/Gallery/index';

export default (
    <Switch>
        <AppRoute exact path={routePaths.home} component={Home} />
        <AppRoute path={routePaths.blog} component={Blog} />
        <AppRoute path={routePaths.gallery} component={Gallery} />
    </Switch>
);
