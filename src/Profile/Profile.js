import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Axios from 'axios'


function Profile() {
    const [profile, setProfile] = useState();
    const params = useParams();

  
    useEffect(() => {
        //console.log("usefect mount")
        const cancelToken = Axios.CancelToken.source();
        //console.log("useEfect run: ")
        Axios.post("http://localhost:3001/profile", {
            cancelToken: cancelToken.token,
            username: params, 
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
                        //console.log(response.data[0]);
                        setProfile(response.data[0].name)
                        //console.log(response.data)
                    }
            })
           
           
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
  