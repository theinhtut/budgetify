import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
// import createHistory from 'history/createBrowserHistory';
import { createBrowserHistory } from 'history';
import BudgetifyDashboardPage from '../components/BudgetifyDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Header from '../components/Header';

// var createBrowserHistory = require('history').createBrowserHistory;
export const history = createBrowserHistory();
// export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
    
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={BudgetifyDashboardPage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
