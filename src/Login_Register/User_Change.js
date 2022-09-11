import React, { useState } from "react";
import '../Nav.css';

function User_Change() {
  return (
    <>
          <div className="column1">
              <div className="card_edit">
                <div className="Set_User_Settings">  
                  <h1>Acount Settings</h1>
                    <div className="usersettings">
                      <div className="user_info">
                        <div className="row_user">
                          <div className="column_user">
                            <p>First Name</p>
                            <p><input placeholder="Name"></input></p>
                          </div>
                          <div className="column_user">
                            <p>Last Name</p>
                            <p><input placeholder="Name"></input></p>
                          </div>
                          <div className="column_email">
                            <p>Email Address</p>
                            <p><input placeholder="Email"></input></p>
                          </div>
                          <div className="column_buttons">
                            <button>Discard Changes</button>
                            <button>Save Changes</button>
                          </div>
                          
                        </div>
                        
                      </div>
                    </div>
                   
                </div>
              </div>  
          </div>
    </>
  );
}

export default User_Change;
