import React, { Component } from 'react';
 
class Login extends Component {
    username = "";
    password = "";

    handleLogin = () => {
        //Check to see if this is a legit user, and if so, log in
        console.log(this.username + ' ' + this.password)
    }
    handleBack = () => {
        //Go back to the landing page
        
    }

    handleUsernameChange(username) {
        this.username = username;
    }
    handlePasswordChange(password) {
        this.password = password;
    }
    render() {
        return (
            <div>
                <label>{'Username: '}</label> 
                <input id="username" type="text" onChange={(e) => this.handleUsernameChange(e.target.value)}/><br/>
                <label>Password:</label>
                <input id="password" type="password" onChange={(e) => this.handlePasswordChange(e.target.value)}/><br/>

                <button id="login" value="Login" onClick={this.handleLogin}>Login</button>
                <button id="back" value="Back" onClick={this.handleBack}>Back</button>
            </div>
        )
    }
}

export default Login