import React, { useState } from "react";
import {useEffect} from 'react';
import '../Navigation/Nav.css';
import './Login.css';
import Axios from 'axios'
import { useCookies } from 'react-cookie'
import {Link} from "react-router-dom";

function Login() {
    const [cookies, setCookie, removeCookie] = useCookies(["name"]);
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("")
    const [username, SetUsername] = useState("");
    const [password, SetPassword] = useState("")
    const [registerStatus, SetregisterStatus] = useState("")
    const [loginStatus, SetLoginStatus] = useState("")
    const resgistere = false
    function refreshPage() {
        window.location.reload(false);
      }

    const handle = () => {
        setCookie('Name', username, { path: '/' });
        setCookie('Password', password, { path: "/" });
        refreshPage()
    };

    const register = () => {
        Axios.post("http://localhost:3001/register", {
            username: usernameReg, 
            password: passwordReg
        }).then((response) =>{
            if(response.data.message){
                SetregisterStatus(response.data.message)
            }else{
                SetregisterStatus(response.data);
            }
        })
    }

    const login = () => {
        Axios.post("http://localhost:3001/login", {
            username: username, 
            password: password
        }).then((response) =>{
            if(response.data.message){
                SetLoginStatus(response.data.message)
            }else{
                //console.log(response.data[0]);
                handle();
                SetLoginStatus(response.data[0].name)
            }
        })
    }
    
    const logout = () => {
        removeCookie('Name', { path: '/' })
        removeCookie('Password', { path: "/" });
        refreshPage();
    }

     
    

    
  return (
    <>
        {cookies.Name == null &&
        <div>  
            {resgistere == true &&
               <div className="registration">
                    <label>Username</label>
                    <input type="text" onChange={(e) => {
                        setUsernameReg(e.target.value)
                    }}/>
                    <br/>
                    <label>Password</label>
                    <input type="password"  onChange={(e) => {
                        setPasswordReg  (e.target.value)
                    }}/>
                    <br/>
                    <button onClick={register}>Register</button>
                    <h1>{registerStatus}</h1>
                </div>
            }
            <div className="login">
                <h1>Login to Your Account</h1>
                <input type="text" placeholder="Name" onChange={(e) => {
                    SetUsername(e.target.value)
                }}/>
                <input type="password" placeholder="Password" onChange={(e) => {
                    SetPassword  (e.target.value)
                }}/>
                <button onClick={login}>Login</button>
                <h2>{loginStatus}</h2>
            </div>
        </div>
        }
    </>
  );
}

export default Login;
