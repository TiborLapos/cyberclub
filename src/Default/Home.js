import {Link } from "react-router-dom";
import { useCookies } from 'react-cookie'
import Test from "../Remote_pc/Test";
import Profile from "../Login_Register/Profile";
import './Default.css';
import Welcome from "../Home/Welcome";
import DeleteIcon from '@mui/icons-material/Delete';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Welcome_Modal from "../Home/Welcome_Modal";



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
