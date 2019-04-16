import React, { Component } from "react";
import Logo from "../Logo";
// import Dropdown from "../Dropdown";
// import DropdownItem from "../DropdownItem";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
// import classnames from "classnames";
import "./style.css";

class SignUpForm extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            isTeacher: false,
            errors: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/dashboard");
        }
      }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    
    }

    // Helper function checks if there is any content in required input fields
    validateForm() {
        return this.state.name.length > 0 && this.state.password.length > 0 && this.state.password2.length > 0 && this.state.email.length > 0;
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

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
            isTeacher: this.state.isTeacher
        };

        console.log(newUser);
        this.props.registerUser(newUser, this.props.history); 
    };


   
    // SAVE FOR PARENT OPTIONS COMPONENT
    // <Dropdown>
    //     <DropdownItem />
    // </Dropdown>
    // <div className="ui inverted divider"></div>
    // <div className="ui inverted left icon input">
    //     <input
    //         type="text"
    //         placeholder="Address"
    //         value={this.state.address}
    //         onChange={this.handleChange}
    //         name="address"
    //     ></input>
    // <i className="home icon"></i>
    // </div>
    // <div className="ui inverted divider"></div>
    // <div className="ui inverted left icon input">
    //     <input
    //         type="text"
    //         placeholder="Cell Number"
    //         value={this.state.phone}
    //         onChange={this.handleChange}
    //         name="phone"
    //     ></input>
    // <i className="mobile alternate icon"></i>
    // </div>
    // <div className="ui inverted divider"></div>

    render() {
        const { errors } = this.state;

        return (
            <div className="SignUp col-12">
                <div className="container-fluid p-3">
                    <Logo />
                    <form className="ui inverted segment" onSubmit={this.handleSubmit}>
                        <div className="ui inverted left icon input">
                            <input autoFocus
                                type="text"
                                placeholder="Enter Name"
                                value={this.state.name}
                                onChange={this.handleChange}
                                error={errors.name}
                                id="name"
                                // className={classnames("", {
                                //     invalid: errors.name
                                // })}
                            />
                            <i className="user outline icon"></i>
                            <span className="red-text">{errors.name}</span>
                        </div>
                        <div className="ui inverted divider"></div>
                        <div className="ui inverted left icon input">
                            <input autoFocus
                                type="text"
                                placeholder="Enter Email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                error={errors.email}
                                id="email"
                                // className={classnames("", {
                                //     invalid: errors.email
                                // })}
                            />
                            <i className="user outline icon"></i>
                            <span className="red-text">{errors.email}</span>
                        </div>
                        <div className="ui inverted divider"></div>
                        <div className="ui inverted left icon input">
                            <input
                                type="password"
                                placeholder="Create a password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                error={errors.password}
                                id="password"
                                // className={classnames("", {
                                //     invalid: errors.password
                                // })}
                            />
                            <i className="lock icon"></i>
                            <span className="red-text">{errors.password}</span>
                        </div>
                        <div className="ui inverted divider"></div>
                        <div className="ui inverted left icon input">
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                value={this.state.password2}
                                onChange={this.handleChange}
                                error={errors.password2}
                                id="password2"
                                // className={classnames("", {
                                //     invalid: errors.password2
                                // })}
                            />
                            <i className="lock icon"></i>
                            <span className="red-text">{errors.password2}</span>
                        </div>
                        <div className="ui inverted divider"></div>
                        {/* <div className="ui inverted divider"></div>
                        <div className="ui inverted left icon input">
                            <input
                                type="text"
                                placeholder="Image link (optional)"
                                value={this.state.image}
                                onChange={this.handleChange}
                                name="image"
                            ></input>
                            <i className="camera retro icon"></i>
                        </div> */}
                        {/* <div className="ui inverted left icon input">
                            <input
                                type="text"
                                placeholder="First Name"
                                value={this.state.name.firstName}
                                onChange={this.handleChange}
                                name="firstName"
                            ></input>
                            <i className="keyboard icon"></i>
                        </div>
                        <div className="ui inverted left icon input ml-3">
                            <input
                                type="text"
                                placeholder="Last Name"
                                value={this.state.name.lastName}
                                onChange={this.handleChange}
                                name="lastName"
                            ></input>
                            <i className="keyboard icon"></i>
                        </div> */}
                        {/* <div className="ui inverted divider"></div> */}
                        <div className="ui checkbox">
                            <input 
                                type="checkbox" 
                                name="isTeacher"
                                value={this.state.isTeacher}
                                //toggle between false and true when check is clicked
                                onChange={(e) => this.setState(prevState => ({isTeacher: !prevState.isTeacher}))}
                                
                            />
                            <label className="text-white">I am a teacher</label>
                        </div>
                        <div className="ui inverted divider"></div>
                        <button className="ui inverted button" type="submit" disabled={!this.validateForm()}>Register</button>
                        <button className="ui inverted red button" type="submit" onClick={this.props.handleLogin}>Cancel</button>
                    </form>
                </div>
            </div>
                )
            }
        }
        
        SignUpForm.propTypes = {
            registerUser: PropTypes.func.isRequired,
            auth: PropTypes.object.isRequired,
            errors: PropTypes.object.isRequired
        };

        const mapStateToProps = state => ({
            auth: state.auth,
            errors: state.errors
        });

export default connect(mapStateToProps,{ registerUser })(withRouter(SignUpForm));