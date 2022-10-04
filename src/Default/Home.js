import { useCookies } from 'react-cookie'
import Profile from "../Login_Register/Profile";
import './Default.css';
import React from 'react';
import Welcome from "../Home/Welcome";



function Home() {
  // eslint-disable-next-line
  const [cookies] = useCookies(["name"]);

  return (
    <>
      {cookies.Name == null &&
        <div className="App_Home">
            <h1>Homepage</h1>
        </div>
      }
      {cookies.Name  &&
        <div className="App">
          {Welcome()}
          {Profile()}
          <div className='pc_list'>
            {/*Test()*/}
            {/*Welcome_Modal()*/}
          </div>
        </div>
      }
    </>
  );
}

export default Home;
