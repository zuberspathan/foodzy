import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import SignIn from "../component/SignIn";
import SignUp from "../component/SignUp";

import Dashboard from "../component/Dashboard";
import Profile from "../component/Profile";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />

      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={SignIn} />
    </Switch>
  );
}
