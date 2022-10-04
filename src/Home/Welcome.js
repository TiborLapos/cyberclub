import React from "react";
import './Welcome_CSS.css'
import Button from '@mui/material/Button';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';

function Welcome() {

    return (
    <>
    <div className="Welcome_board">
        <div className="Welcome_Board_Left">
            <h1>Welcome to the Cyber Club Admin Panel - TEST 3</h1>
            <p>Welcom at the admin panel of the Cyber Club website.Explore the website and use your products. If you don't know hot you get here pleas log out and report the incident.</p>
            <div className="Welcome_Buttons">
                <Button variant="contained" endIcon={<ComputerOutlinedIcon/>}>Get started</Button>
                <Button variant="contained" endIcon={<LibraryBooksOutlinedIcon/>}>More</Button>
            </div>
        </div>
        <div className="Welcome_Board_Right">
        {
        // eslint-disable-next-line
        }
            <img alt='some value' src="https://marmelab.com/react-admin-demo/static/media/welcome_illustration.cd84d2be0e7683dface66dfee9959989.svg"></img>
        </div>
        
    </div>
    </>
  );
}

export default Welcome;
