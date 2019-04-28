import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import Logo from "../Logo";
import "./style.css";
//redux imports
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../../actions/authActions";
// import classnames from "classnames";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            if(this.props.auth.user.isTeacher){
                this.props.history.push("/dashboard/classes");
            }
            else{
                this.props.history.push("/dashboard/students");
            }   
        }
    }
    //===========Redux=================
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
         if(nextProps.auth.user.isTeacher){
                this.props.history.push("/dashboard/classes");
            }
            else{
                this.props.history.push("/dashboard/students");
            }   
        }
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
    }
    //=================================
    // Helper function checks if there is any content in username/password input fields
    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    // Helper function that updates state to be the user inputs
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    // Helper function that prevents page from loading - WILL ADD MORE FUNCTIONALITY
    handleSubmit = (event) => {
        event.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.loginUser(userData);
    };

    render() {
        const { errors } = this.state;
        return (
            <div className="Login col-12">
                <div className="p-3">
                    <Logo />
                    <form className="ui inverted segment" onSubmit={this.handleSubmit}>
                        <div className="ui inverted left icon input">
                            <input autoFocus
                                type="text"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                error={errors.email}
                                id="email"
                                // className={classnames("", {
                                //     invalid: errors.email || errors.emailnotfound
                                // })}
                            />
                            <i className="user outline icon"></i>
                            <span className="red-text">
                            {errors.email}
                            {errors.emailnotfound}
                            </span>
                        </div>
                        <div className="ui inverted divider"></div>
                        <div className="ui inverted left icon input">
                            <input
                                type="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                error={errors.password}
                                id="password"
                                // className={classnames("", {
                                //     invalid: errors.password || errors.passwordincorrect
                                // })}
                            />
                            <i className="lock icon"></i>
                            <span>
                            {errors.password}
                            {errors.passwordincorrect}
                            </span>
                        </div>
                        <div className="ui inverted divider"></div>
                        <div>{errors.passwordincorrect}</div>
                        <button className="ui inverted button" type="submit" disabled={!this.validateForm()}>Login</button>
                        <button className="ui inverted red button" type="submit" onClick={this.props.handleLogin}>Cancel</button>
                    </form>
                </div>
            </div>
        )
    }
}

//==========Redux=================
Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
auth: state.auth,
errors: state.errors
});
//===============================
export default connect(mapStateToProps,{ loginUser })(withRouter(Login));