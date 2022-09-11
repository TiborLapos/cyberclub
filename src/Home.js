import {Link } from "react-router-dom";
import { useCookies } from 'react-cookie'
import Test from './Remote_pc/Test';
import Profile from './Login_Register/Profile';
import './Default.css';


function Home() {
  // eslint-disable-next-line
  const [cookies, setCookie, removeCookie] = useCookies(["name"]);

  return (
    <>
      {cookies.Name == null &&
        <div className="App_Home">
            <h1>Homepage</h1>
        </div>
      }
      {cookies.Name  &&
        <div className="App">
          {Profile()}
          <div className='pc_list'>
            {Test()}
          </div>
        </div>
      }
    </>
  );
}

export default Home;
