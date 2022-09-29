import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Axios from 'axios'
import '../Default/Default.css';
import '../Remote_pc/CssRemotePc.css'



function Test1() {
  const [users, setUsers] = useState();
  const get_user = () => {
    Axios.post("http://localhost:3001/test", {
    }).then((response) =>{
        if(response.data.message){
          console.log(response.dat.message);
        }else{
            setUsers(response.data)
            //console.log(response.data);
        }
    })
  }
  get_user()
    const MINUTE_MS = 25000;

    useEffect(() => {
    const interval = setInterval(() => {
        //console.log('Logs every minute');
        //get_user()
    }, MINUTE_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    }, [])


  return (
    <>
    <div className="App">
        <h1>Test</h1>
        {users &&
        users.map((user) => (
          <div className="item-container" key={user.name}>
            <a key={user.name}>{user.name}</a>
          </div>
        ))}
    </div>
    </>
  );
}

export default Test1;
