import React, { useState } from "react";
import { useCookies } from 'react-cookie'
import {Link} from "react-router-dom";
import '../Navigation/Nav.css';
    

function Profile() {
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
        <div className="column">
        {cookies.Name &&
            <div className="card">
                <div className="Login_Register">  
                    <h1>Profile</h1>
                    <p>Name: {cookies.Name}</p>
                    <p><button onClick={logout}>Logout</button></p>
                    </div>
                </div>  
        }
        </div>
    </>
  );
}

export default Profile;
