import React, { useRef } from 'react';
import apiService from './../services/apiService'

function Login() {
    const username = useRef("");
    const password = useRef("");

    const handleLogin = () => {
        //Check to see if this is a legit user, and if so, log in
        console.log(username.current + ' ' + password.current)
        apiService.fetchAccounts(username.current, password.current)
            .then(res => {
                if (res.data.account_id !== undefined) {
                    //Successful login
                    let account_id = res.data.account_id;
                    //Send to app.js
                    console.log(account_id)
                } else {
                    console.log('fail')
                }
            })
    }

    return (
        <div>
            <label>{'Login'}</label> <br/><br/>
            <label>{'Username: '}</label> 
            <input id="username" type="text" onChange={(e) => username.current = e.target.value}/><br/>
            <label>Password:</label>
            <input id="password" type="text" onChange={(e) => password.current = e.target.value}/><br/>

            <button id="login" value="Login" onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login 
