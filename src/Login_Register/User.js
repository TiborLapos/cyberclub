import React, { useState } from "react";
import '../Nav.css';
import './Login.css';
import { useCookies } from 'react-cookie'
import {Link} from "react-router-dom";

function Login() {
    const [cookies, setCookie, removeCookie] = useCookies(["name"]);
    function refreshPage() {
        window.location.reload(false);
      }
    const logout = () => {
        removeCookie('Name', { path: '/' })
        removeCookie('Password', { path: "/" });
        refreshPage();
    }
  return (
    <>
        {cookies.Name &&
             <div className="Login_Register">  
                <h1>Profile:</h1>
                <label>Name: {cookies.Name}</label>
                <br></br>
                <button onClick={logout}>Logout</button>
             </div>
        }
    </>
  );
}

export default Login;
