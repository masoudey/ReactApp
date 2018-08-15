import React, { Component } from "react";
import { connect } from "react-redux";
import { Header } from "./Components/header";
import Footer from "./Components/footer";
import { Router, Route, withRouter } from "react-router-dom";
import ActivePage from "./Components/ActivePage";
import { Routes } from "./Routes";
import { loginSuccess, logOut } from "./actions";
import jwt from "jsonwebtoken";
import { tokenVerification } from "./Components/authVerify";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const PathName = withRouter(({ location, match }) => {
  return location.pathname.substring(1);
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "react",
      activePage: PathName,
      user: null
    };
  }

  componentWillMount() {
    if (typeof localStorage !== 'undefined') {
    const headers = JSON.parse(localStorage.getItem("headers"));
    const { dispatch } = this.props;
    if (headers && headers["x-auth-token"]) {
      const token = headers["x-auth-token"];
      console.log("headers exist", token);
      jwt.verify(token, "my-secret", function(err, decoded) {
        if (decoded) {
          const user = JSON.parse(localStorage.getItem("user"));
          dispatch(loginSuccess(user));
          console.log(decoded);
        } else {
          console.log("not decoded", err);
          if (err.name === "TokenExpiredError") {
            dispatch(logOut());
            console.log("TokenExpiredError");
          }
        }
      });
    }}
    console.log("will mount dd");
  }

  handleUserChange(user) {
    this.setState({ user: user });
    console.log(this.state.user);
  }

  handlePageChange(page) {
    this.setState({ activePage: page });
  }

  render() {
    return (
      <ActivePage>
        <Header
          changeUserState={this.handleUserChange.bind(this)}
          // getActivePage={this.handlePageChange.bind(this)}
          // user= {this.state.user}
          title={this.state.title}
        />
        <main>
          <Routes
            // user= {this.state.user}
            changeUserState={this.handleUserChange.bind(this)}
          />
        </main>
        <Footer />
        
      </ActivePage>
    );
  }
}
const mapStateToProps = state => {
  const { entities: {users}, reducers: {logedinUser} } = state;
  const user = users[logedinUser.data]
  return {
    user
  };
};
const connectedApp = withRouter(connect(mapStateToProps)(App));

export { connectedApp as App };
