import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import faker from "faker";
import Logo from "../../components/Logo";
import NavToolbar from "../../components/NavToolbar";
import NavSidebar from "../../components/NavSidebar";
import NavBackdrop from "../../components/NavBackdrop";
import TeacherClassSelect from "../../components/TeacherClassSelect";
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
        <NavToolbar clickHandler={this.NavSidebarClickHandler} />
        <NavSidebar show={this.state.NavSidebarOpen} />
        {backdrop}
      
      <div className="row bg-dark mt-5">
        <div className="col-md-3">
          <Logo />
          <div style={{ height: "25vh" }} className="container valign-wrapper text-white">
            <div className="row">
              <div className="col s12 center-align">
                <h4>
                  <b>Hey there,</b> {user.name.split(" ")[0]}
                  <p className="flow-text grey-text text-darken-1">
                    You are logged into a full-stack{" "}
                    <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
                  </p>
                </h4>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  onClick={this.onLogoutClick}
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3 text-white"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
          <img className="ml-3 mt-4 img-thumbnail" src={faker.image.avatar()} alt="avatar" /><br />
          <h3 className="text-white ml-3">{user.name}</h3>
          <h5 className="text-white ml-3">Messages ==></h5>
        </div>
        <div className="col-md-9 text-danger">
          <TeacherClassSelect />
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