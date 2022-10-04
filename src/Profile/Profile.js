import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Axios from 'axios'


function Profile() {
    const [profile, setProfile] = useState();

  
    useEffect(() => {
        const cancelToken = Axios.CancelToken.source();
        function GetProfile(){
            const params = useParams();
            Axios.post("http://localhost:3001/profile", {
                cancelToken: cancelToken.token,
                username: params.id, 
                })
                .catch((err) => {
                    if (Axios.isCancel(err)){
                        //console.log("canceled")
                    }else{
                        //todo
                    }
                })
                .then((response) =>{
                        if(response.data.message){
                            setProfile(response.data.message)
                            //console.log(response.data)
                        }else{
                            //console.log(response.data);
                            setProfile(response.data[0].name)
                            //console.log(response.data)
                        }
                })
        }
        GetProfile()
           
           
        return () => {
            //console.log("usefect unount")
            cancelToken.cancel()
            };
    }, [])

    
    //console.log(params);
    return (
        <>
            <div className="App">
                <h1>{profile}</h1>
            </div>
        </>
    );
  }
  
  export default Profile;
  