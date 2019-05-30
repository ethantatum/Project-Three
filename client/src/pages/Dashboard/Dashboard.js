import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import API from "../../utils/API";
import NavToolbar from "../../components/DashboardComponents/SideNav/NavToolbar";
import NavSidebar from "../../components/DashboardComponents/SideNav/NavSidebar";
import NavBackdrop from "../../components/DashboardComponents/SideNav/NavBackdrop";
import CommentComponent from "../../components/DashboardComponents/CommentComponent";
import ProfileComponent from "../../components/DashboardComponents/ProfileComponent";
import StudentsComponent from "../../components/DashboardComponents/StudentsComponent";
import ClassComponent from "../../components/DashboardComponents/ClassesComponent";
// import ParentComponent from "../../components/DashboardComponents/ParentComponent";
import "./style.css";

class Dashboard extends Component {
  state = {
    NavSidebarOpen: false,
    userImage: ""
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

  componentDidUpdate() {
    this.getImage();
  }

  getImage = () => {
    API.getUserData(this.props.auth.user.id)
    .then(res => {this.setState({ userImage: res.data.image })})
    .catch(err => console.log(err));
  }

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
          <NavSidebar show={this.state.NavSidebarOpen} user={user.name} isTeacher={user.isTeacher} match={match} selectedClass={this.props.selectedClass} userImage={this.state.userImage}/>
          {backdrop}
  
          <div className="componentContainer">
              <Switch>
                <Route exact path={`${match.path}/messages`} component={CommentComponent} />
                <Route exact path={`${match.path}/profile`} component={ProfileComponent} />
                <Route path={`${match.path}/students/:classID`} component={StudentsComponent} />
                <Route exact path={`${match.path}/classes`} component={ClassComponent} />
                {/* <Route exact path={`${match.path}/students`} component={ParentComponent} /> */}
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
  auth: state.auth,
  selectedClass: state.selectedClass
});

export default connect(mapStateToProps,{ logoutUser })(Dashboard);