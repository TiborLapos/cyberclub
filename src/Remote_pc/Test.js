import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Axios from 'axios'
import '../Default.css'
import '../Remote_pc/CssRemotePc.css'



function Test() {
  const [servers, setServer] = useState();

  const get_server = () => {
    Axios.post("http://localhost:3001/test", {
    }).then((response) =>{
        if(response.data.message){
          //console.log(response.dat.message);
        }else{
          setServer(response.data)
          //console.log(response.data);
        }
    })
  }
  const MINUTE_MS = 10000;

  useEffect(() => {
    get_server()
    const interval = setInterval(() => {
        //console.log('Logs every minute');
        get_server()
    }, MINUTE_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, [])

  const server_data = (
    <>
      <table className="Remote_Table">
        <thead>
          <tr>
            <th>PC</th>
            <th>IP</th>
            <th>Status</th>
          </tr>
        </thead>
          {servers &&
            servers.map((server) => (
              <tbody key={server.name}>
                <tr>
                  <td className="pcname">{server.name}</td>
                    <td> 
                        <div className="online-indicator">
                            <span className="blink"></span>
                        </div>
                        OFFLINE
                    </td>
                    <td>more</td>
                </tr>
              </tbody>
          ))}
      </table>
    </>
  )
  return (
    <>
     {server_data}
  </>
  );
}

export default Test;
