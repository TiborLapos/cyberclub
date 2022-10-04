import React from "react";
import '../Navigation/Nav.css';
import Profile from "./Profile";
import User_Change from "./User_Change";
import './Cards.css'
import './Login.css';


function Login() {
  return (
    <>
      <div className="App">
        <div className="row">
          <div className="User_row">
            <div className="user1">
              {Profile()}
            </div>
            <div className="user2">
              {User_Change()}
            </div>
          </div>
         
        </div>
      </div>
     
    </>
  );
}

export default Login;
