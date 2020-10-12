import React, { Component } from 'react';

class Login extends Component {
    handleLogin = () => {
        //Check to see if this is a legit user, and if so, log in

    }
    handleBack = () => {
        //Go back to the landing page
        
    }
    handleCreate
    render() {
        return (
            <div>
                <form onSubmit={this.handleLogin} onReset={this.handleBack}>
                    <label>{'Username: '}</label> 
                    <input id="username" type="text"/><br/>
                    <label>Password:</label>
                    <input id="password" type="password"/><br/>
                    <input type="submit" value="Login" />
                </form>

                <button id="back" value="Back" onClick={this.handleBack}>Back</button>
            </div>
        )
    }
}

export default Login
