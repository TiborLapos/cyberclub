import './Default.css';
import {Link } from "react-router-dom";
import { useCookies } from 'react-cookie'
import Test from './Remote_pc/Test';


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
          <header className="App-header">
            <h1>Working</h1>
            <Link to="/test">Go Test</Link>
            <br></br>
            <Link to="/remotepc">Go PC</Link>
            <br></br>
            <Link to="/login">Login</Link>
          </header>
          {Test()}

        </div>
      }
    </>
  );
}

export default Home;
