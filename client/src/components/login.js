import React, { useState, Component } from "react";
import "../styles/components/login.scss"
 
 function Login() {
    return (
      <div className="login-wrapper">
        <h1>Please Log In</h1>
        <form>
          <labeL>
            <p>Username</p>
            <input type="text" />
          </labeL>
          <label>
            <p>password</p>
            <input type="password" />
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
 
export default Login;