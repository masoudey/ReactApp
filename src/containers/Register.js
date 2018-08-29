import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";

import { registerUser } from "../actions";
import "./login.css";

const loadData = (props) => {
  console.log(props)
  const {regUser} = props;
  props.registerUser(regUser)
}

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  username: '',
  password: '',
  passwordConfirm: '',
  error: '',
  passwordMatch: true
}

class Register extends Component {
  constructor(props) {
    super(props);

    // reset login status
    // this.props.dispatch(logout());

    this.state = { ...initialState};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  validateForm() {
    const { firstName, lastName, email, username, password, passwordConfirm } = this.state;
    const isInvalid = !firstName || !lastName || !email || !username || !password || password !== passwordConfirm;
    console.log("is invalid", isInvalid)
    return isInvalid;
  }

  confirmPW() {
    const { password, passwordConfirm } = this.state
    const isMatch = password !== passwordConfirm;
    this.setState({
        passwordMatch: isMatch
    });
}

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { firstName, lastName, email, username, password, passwordConfirm } = this.state;
    if (username && password) {
      const regUser = {
        options: {
          firstName,
          lastName,
          email
        },
        username,
        password
      }
      console.log("user", regUser)
      loadData({regUser, ...this.props} );
      
    }
  }

  render() {
    const { registering, registered } = this.props.logedinUser;
    const { username, password, firstName, lastName, email, passwordConfirm, passwordMatch } = this.state;
      if (registered) {
        return <Redirect to='/'></Redirect>
      }

    return (
      <div>
        <div class="login-wrapper">
          <span class="title">Register</span>
          <form name="form" onSubmit={this.handleSubmit}>
            <fieldset>
              <div class="inputrow">
                <i class="fa icon-user fa-fw" />
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="UserName"
                  onChange={this.handleChange}
                  onBlur={this.validateForm.bind(this)}
                  value={username}
                  autoFocus
                  required
                />
              </div>
              <div class="inputrow">
                <i class="fa icon-user fa-fw" />
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="FirstName"
                  onChange={this.handleChange}
                  value={firstName}
                  required
                />
              </div>
              <div class="inputrow">
                <i class="fa icon-user fa-fw" />
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="LastName"
                  onChange={this.handleChange}
                  value={lastName}
                  required
                />
              </div>
              <div class="inputrow">
                <i class="fa icon-mail4 fa-fw" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                  value={email}
                  required
                />
              </div>
              <div class="inputrow">
                <i class="fa icon-key fa-fw" />
                <input
                  type="password"
                  name="password"
                  id="password"
                  data-typetoggle="#show"
                  onChange={this.handleChange}
                  value={password}
                  placeholder="Password"
                  required
                />
              </div>
              <div class="inputrow">
                <i class="fa icon-key fa-fw" />
                <input
                  type="password"
                  name="passwordConfirm"
                  id="passwordConfirm"
                  data-typetoggle="#show"
                  onChange={this.handleChange}
                  onBlur={this.confirmPW.bind(this)}
                  value={passwordConfirm}
                  placeholder="Confirm Password"
                  required
                />
              </div>

             
              <div class="button-center">
                <button class="btn-log" type="submit" id="submit" disabled={passwordMatch || this.validateForm()} >
                  Register
                </button>
                {registering && (
                  <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                )}
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { entities: {users}, reducers:{logedinUser} } = state;
  
  
  return {
    users,
    logedinUser,
  };
};

const connectedLoginPage = withRouter(connect(mapStateToProps, {registerUser})(Register));
export default connectedLoginPage;
