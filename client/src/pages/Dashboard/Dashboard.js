import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import NavToolbar from "../../components/NavToolbar";
import NavSidebar from "../../components/NavSidebar";
import NavBackdrop from "../../components/NavBackdrop";
import CompleteProfile from "../../components/CompleteProfile";
import BehaviorFrequency from "../../components/BehaviorFrequency";
import MessageInput from "../../components/MessageInput";
import MessageDisplay from "../../components/MessageDisplay";
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

  render() {
    const { user } = this.props.auth;
    let backdrop;

    if(this.state.NavSidebarOpen) {
      backdrop = <NavBackdrop click={this.NavBackdropClickHandler} />
    }

    return (
      <React.Fragment>
        <NavToolbar clickHandler={this.NavSidebarClickHandler} logoutClick={this.onLogoutClick} user={user.name} />
        <NavSidebar show={this.state.NavSidebarOpen} user={user.name}/>
        {backdrop}
      
      <div className="row bg-dark mt-5">
        <div className="col-md-3"></div>
        <div className="col-md-9 mt-5">
          <CompleteProfile isTeacher={user.isTeacher} />
          <BehaviorFrequency />
          <MessageInput />
          <MessageDisplay />
        </div>
      </div>
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
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);