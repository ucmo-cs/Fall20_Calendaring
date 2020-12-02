import React, {useRef } from "react";
import apiService from "../services/apiService";

function NewAccount() {
  const username = useRef("");
  const password = useRef("");
  const confirmPassword = useRef("");
  const email = useRef("");

  const createAccount = () => {
    const set = {username: username.current, password: password.current, email: email.current}
    console.log(set)
    apiService.newAccount(set).then(res => {console.log('success')})
  }

  return (
      <div>
        <label>{'New Account'}</label> <br/><br/>
        <label>{'Username: '}</label> 
        <input id="uname" type="text" onChange={(e) => username.current = e.target.value}/><br/>
        <label>{'Email: '}</label> 
        <input id="eml" type="text" onChange={(e) => email.current = e.target.value}/><br/>
        <label>{'Password: '}</label> 
        <input id="pwd" type="text" onChange={(e) => password.current = e.target.value}/><br/>
        <label>Confirm Password:</label>
        <input id="confirmpassword" type="text" onChange={(e) => confirmPassword.current = e.target.value}/><br/>

        <button id="login" value="Login" onClick={createAccount}>Register</button>
      </div>
  );
}

export default NewAccount;
