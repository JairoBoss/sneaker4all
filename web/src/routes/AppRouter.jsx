import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// Import your components for public and private pages
// import PublicHomePage from './components/PublicHomePage';
// import PublicAboutPage from './components/PublicAboutPage';
// import LoginPage from './components/LoginPage';
// import PrivateHomePage from './components/PrivateHomePage';
// import PrivateAboutPage from './components/PrivateAboutPage';
import PrivateMain from '../pages/private/main';
import PublicMain from '../pages/public/main';

// Define your routes
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" component={PublicHomePage} />
        <Route exact path="/about" component={PublicAboutPage} />
        <Route exact path="/login" component={LoginPage} /> */}
        <PrivateRoute exact path="/home" component={PrivateMain} />
        <PrivateRoute exact path="/private-home" component={PublicMain} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </BrowserRouter>
  );
};

// Create a PrivateRoute component to protect private routes
const PrivateRoute = ({ component: Component, ...rest }) => {
  // Check if the user is authenticated
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  // If the user is authenticated, render the component
  // Otherwise, redirect the user to the login page
  return (
    <Route {...rest} render={props =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      )
    } />
  );
};

export default AppRouter;
