import React, { useEffect, useState } from "react";
import './testing.css'

function Profile() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://dani0001414.github.io/mm.json')
        .then(response => response.json())
        .then((jsonData) => {
          // jsonData is parsed json object received from url
          setData(jsonData)
          console.log(jsonData)
       
        })
        .catch((error) => {
          // handle your errors here
          console.error(error)
        })
      }, []);
    
    //console.log(params);
    return (
        <div className="App">
            <div className="content">
                <pre>{JSON.stringify(data, null, 2)}</pre>
                <table>
                {data &&
                    data.map((asd) => (
                    <tbody key={asd.event_id}>
                        <tr>
                        <td className="pcname">{asd.event_title}</td>
                            <td>more</td>
                        </tr>
                    </tbody>
                ))}
                </table>
            </div>
        </div>
      );
  }
  
  export default Profile;
  