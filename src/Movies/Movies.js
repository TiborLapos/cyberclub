import React, { useState } from "react";
import './Movies.css'

function Movies() {
    //const [servers, setServer] = useState();
    const servers = ["test","alma","korte","fasz","Jebko","Pán kokot","Pán okot a Madar"];

  return (
    <>
    <div className="App">
        <h1>Moovies</h1>
            <div className="Movie_row">
            {servers &&
                servers.map((server) => (
                    <div key={server} className="Movie_column">

                        <div className="Movie_card">
                            <div className="Movie_photo">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png" alt="alternatetext"></img>
                            </div>
                            <div className="Movie_info">
                                <h3>{server}</h3>
                                <p>10.10.2022</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
      </div>
    </>
  );
}

export default Movies;
