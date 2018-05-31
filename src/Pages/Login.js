import React, { Component } from "react";
import "./login.css";

class Login extends Component {

    
    
    render() {
        
        return (
            <div class="container">
	            <div class="row">
                    <div class="col-sm-12">
                        
        		            <div class="login">
                                <div class="logo ir"></div>
                                <span class="title">Login</span>
                                <form method="POST" action="/login">
                                    <fieldset>
                                    
                                        <div class="inputrow">
                                            <i class="fa fa-user fa-fw"></i>
                                            <input type="text" name="username" id="user" placeholder="Username" value="" autoFocus required />

                                        </div>
                                        <div class="inputrow">
                                            <i class="fa fa-key fa-fw"></i>
                                            <input type="password" name="password" id="password" value="" data-typetoggle="#show" 	placeholder="Password" required />
                                        </div>

                                        <div class="remember">
                                            <input type="checkbox" name="remember_login" value="1" id="remember_login"/>
                                            <label for="remember_login" class="radio">Remember me</label>

                                        </div>
                                        <div class="button-center">
                                            <button class="btn-light" type="submit" id="submit" >Login</button>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;