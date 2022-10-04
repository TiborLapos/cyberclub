import React from "react";
import './Create_movie_CSS.css'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';



function Movies() {
    //const [servers, setServer] = useState();
    const [value, setValue] = React.useState(2);

  return (
    <>
    <div className="App">
        <div className="Create_Movie_Photo">
            <div className="Create_Movie_Photo_Box">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png" alt="alternatetext"></img>
            </div>
            <div>
            <Box
                sx={{
                    '& > legend': { mt: 2 },
                }}
                >
                <Typography component="legend">Stars</Typography>
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}
                />
            </Box>
            </div>
        </div>
        <div className="Create_Movie_Column">
            <div className="Create_Movie_Edit">
                <div className="Create_Movie_Settings">  
                <h1>Information</h1>
                    <div className="CM_Settings">
                        <div className="CM_Info">
                            <div className="CM_ROW">
                            <div className="CM_Name_INPUT">
                                <p>Movie Name</p>
                                <p><input placeholder="Name"></input></p>
                            </div>
                            <div className="CM_Info_INPUT">
                                <p>Movie Date</p>
                                <p><input  type="date" placeholder="Date"></input></p>
                            </div>
                            <div className="CM_Button">
                                <button>Discard Changes</button>
                                <button>Save Changes</button>
                            </div>
                            
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>  
        </div>  

    </div>
   
    </>
  );
}

export default Movies;
