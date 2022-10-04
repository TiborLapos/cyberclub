import { useCookies } from 'react-cookie'
import React, { useEffect, useState } from "react";
import Axios from 'axios'
import '../Navigation/Nav.css';
    

function Profile() {
    const [cookies, removeCookie] = useCookies();
    const [profile, setProfile] = useState("");
    
    function refreshPage() {
        window.location.reload(false);
      }

    const logout = () => {
        removeCookie('Name', { path: '/' })
        removeCookie('Password', { path: "/" });
        refreshPage();
    }

    useEffect(() => {
        function GetData(){
            Axios.post("http://localhost:3001/profile", {
                username: cookies.Name, 
                })
                .then((response) =>{
                        if(response.data.message){
                            setProfile(response.data.message)
                            //console.log(response.data)
                        }else{
                            //console.log(response.data);
                            setProfile(response.data[0])
                        }
                })
        }
        GetData()
   
         
         
      return () => {
          //console.log("usefect unount")
          };
  }, [cookies.Name])


  return (
    <>
        <div className="column">
        {cookies.Name &&
            <div className="card">
                <div className="Login_Register">  
                    <h1>Profile</h1>
                    <p>Names: {cookies.Name}</p>
                    <p>UIDS: {profile.uuid}</p>
                    <p><button onClick={logout}>Logout</button></p>
                    </div>
                </div>  
        }
        </div>
    </>
  );
}

export default Profile;
