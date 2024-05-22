import React from "react";
import { Switch, Route } from "react-router-dom";
import { HelmetDefault } from "./components/SEO";
import Home from "./pages/Home/index";
const Dashboard = React.lazy(() => import("./pages/Dashboard/Dashboard"));

const Routes = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
      >
        <HelmetDefault title="Home" />
        <Home />
      </Route>
      <Route
        exact
        path="/dashboard"
      >
        <HelmetDefault title="Dashboard" />
        <Dashboard />
      </Route>
    </Switch>
  );
};

export default Routes;
