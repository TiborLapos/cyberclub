import './Default.css';
import { useCookies } from 'react-cookie'
import {Link} from "react-router-dom";


function Login() {
    //const [cookies, setCookie] = useCookies(["user"]);
    const [cookies, setCookie, removeCookie] = useCookies(["name"]);

    function refreshPage() {
      window.location.reload(false);
    }

    const handle = () => {
        setCookie('Name', "Tibor", { 
        path: '/', 
        //maxAge: 30, // 1 hour
        sameSite: 'strict',});
        setCookie('Password', "anya", { path: '/' });
        //setCookie("name", "Faszodnak van farka ?", { path: "/" });
        //removeCookie('name', { path: '/' })
        refreshPage();

    };

 
    const remove = () => {
        removeCookie('Name', { path: '/' })
        refreshPage();
    };

   

    function handleCookie() {
      setCookie("Test", "Password", {
        path: "/"
      });
    }

    return (
      <>
        <div className='App'>
          <header className="App-header">
            <h1>Test the login</h1>
            <button onClick={handle}>Set Cookie</button>{' '}
            <Link onClick={remove} to="/home"><button>Clear Cookie</button></Link>
            {cookies.Name && <p>Name:{cookies.Name}</p>}
          </header>
        </div>
      </>
     
    );
  }

export default Login;
