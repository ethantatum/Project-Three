import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import NavToolbar from "../../components/DashboardComponents/SideNav/NavToolbar";
import NavSidebar from "../../components/DashboardComponents/SideNav/NavSidebar";
import NavBackdrop from "../../components/DashboardComponents/SideNav/NavBackdrop";
// import TeacherClassSelect from "../../components/DashboardComponents/TeacherClassSelect";
// import BehaviorFrequency from "../../components/BehaviorFrequency";
import MessagesComponent from "../../components/DashboardComponents/MessagesComponent";
import ProfileComponent from "../../components/DashboardComponents/ProfileComponent";
import StudentsComponent from "../../components/DashboardComponents/StudentsComponent";
import ClassComponent from "../../components/DashboardComponents/ClassesComponent";
// import MessageDisplay from "../../components/DashboardComponents/MessageDisplay";
import "./style.css";



class Dashboard extends Component {
  state = {
    NavSidebarOpen: false
  };

  NavSidebarClickHandler = () => {
    this.setState((prevState) => {
      return{NavSidebarOpen: !prevState.NavSidebarOpen};
    });
  };

  NavBackdropClickHandler =  () => {
    this.setState({NavSidebarOpen: false});
  };

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  //Tutoring session
//   componentDidMount = () => {
//     if (window.screen.width > 720){
//       console.log("windows is greater than 1024")
//         this.setState({
//           NavSidebarOpen: true
//         })
//     } else {
//       console.log("windows is less than 1024")
//         this.setState({
//           NavSidebarOpen: false
//         });
//     }
// }

  render() {
    const { user } = this.props.auth;
    const { match } = this.props;
    let backdrop;

    if(this.state.NavSidebarOpen) {
      backdrop = <NavBackdrop click={this.NavBackdropClickHandler} />
    }

    return (
      <React.Fragment>
        <Router>
          <NavToolbar clickHandler={this.NavSidebarClickHandler} logoutClick={this.onLogoutClick} user={user.name} />
          <NavSidebar show={this.state.NavSidebarOpen} user={user.name} isTeacher={user.isTeacher} match={match}/>
          {backdrop}
  
          <div className="componentContainer">
              <Switch>
                {/* <Route exact path="/dashboard/class" component={Landing} />
                <Route exact path="/dashboard/students" component={Landing} /> */}
                <Route exact path={`${match.path}/messages`} component={MessagesComponent} />
                <Route exact path={`${match.path}/profile`} component={ProfileComponent} />
                <Route exact path={`${match.path}/students`} component={StudentsComponent} />
                <Route exact path={`${match.path}/classes`} component={ClassComponent} />
                {/* <Route exact path="/dashboard/notes" component={Landing} />
                <Route exact path="/dashboard/reports" component={Landing} />
                <Route exact path="/dashboard/profile" component={Landing} /> */}
              </Switch>
          </div>
      </Router>
      </React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps,{ logoutUser })(Dashboard);