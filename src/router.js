import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import TeamDetails from './pages/TeamDetails';

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/:team" component={TeamDetails} />
            </Switch>
        </BrowserRouter>
    );
}
