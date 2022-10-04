import { useCookies } from 'react-cookie'
import React, { useEffect, useState } from "react";
import Axios from 'axios'
import '../Navigation/Nav.css';
    

function Profile() {
    const [cookies, removeCookie] = useCookies(["name"]);
    const [profile, setProfile] = useState("");
    let name = cookies.Name;
    
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
                username: name, 
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
  }, [])




  return (
    <>
        <div className="column">
        {cookies.Name &&
            <div className="card">
                <div className="Login_Register">  
                    <h1>Profile</h1>
                    <p>Name: {cookies.Name}</p>
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
