import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Student from '../pages/Student';
import Teacher from '../pages/Teacher';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Dashboard} exact />
    <Route path="/student" component={Student} />
    <Route path="/teacher" component={Teacher} />
  </Switch>
);

export default Routes;
