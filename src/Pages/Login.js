import React, { Component } from "react";
import "./login.css";

class Login extends Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    
    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    render() {
        
        return (
            <div >        
                <div class="login-wrapper">
                    <div class="logo ir"></div>
                    <span class="title">Login</span>
                    <form name="form" onSubmit={this.handleSubmit}>
                        <fieldset>
                        
                            <div class="inputrow">
                                <i class="fa icon-user fa-fw"></i>
                                <input type="text" name="username" id="user" placeholder="Username"  autoFocus required />

                            </div>
                            <div class="inputrow">
                                <i class="fa icon-key fa-fw"></i>
                                <input type="password" name="password" id="password" data-typetoggle="#show" 	placeholder="Password" required />
                            </div>

                            <div class="remember">
                                <input type="checkbox" name="remember_login" value="1" id="remember_login"/>
                                <label for="remember_login" class="radio">Remember me</label>

                            </div>
                            <div class="button-center">
                                <button class="btn-log" type="submit" id="submit" >Login</button>
                            </div>
                        </fieldset>
                    </form>
                </div>  
            </div>
        )
    }
}

export default Login;