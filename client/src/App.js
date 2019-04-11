import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Hub from "./pages/Hub/Hub";
// import NoMatch from "./pages/NoMatch";
import './App.css';

class App extends Component {
  render() {
    return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/Hub" component={Hub} />
          {/* <Route exact path="/TeacherHub" component={TeacherHub} /> */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
