import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home/index';
const Dashboard = React.lazy(() => import('./pages/Dashboard/Dashboard'));

const Routes = () => {
   return (
      <Switch>
         <Route exact path="/">
            <Home />
         </Route>
         <Route exact path="/dashboard">
            <Dashboard />
         </Route>
      </Switch>
   );
};

export default Routes;
