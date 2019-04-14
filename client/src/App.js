import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//redux
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

//imports for REDUX
import { Provider } from "react-redux";
import store from "./store";

import Landing from "./pages/Landing/Landing";
// import SignUp from "./pages/SignUp/SignUp";
// import Hub from "./pages/Hub";
// import NoMatch from "./pages/NoMatch";
import './App.css';
// import NavMenu from './components/Nav';
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./pages/Hub/Dashboard";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./";
  }
}
import Hub from "./pages/Hub/Hub";
// import NoMatch from "./pages/NoMatch";
import './App.css';

class App extends Component {
  render() {
    return (
    //Provider tag for redux
    <Provider store={store}>
      <Router>
        <div>
        
            <Route exact path="/" component={Landing} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
            {/* <Route exact path="/SignUp" component={SignUp} /> */}
            {/*<Route exact path="/Hub" component={Hub} /> */}
            {/* <Route exact path="/TeacherHub" component={TeacherHub} /> */}
            {/* <Route component={NoMatch} /> */}
          
        </div>
      </Router>
    </Provider>
    );
  }
}

export default App;
