import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import "./Addmovies.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

function Addmovies(getMovies) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  const navigate = useNavigate();
  
  const addmovie =async () => {
    

    const moviesData = {
     name: name,
       poster: poster,
       rating: rating,
      summary: summary,
      trailer: trailer,
    };
    console.log(moviesData);

   await fetch("https://63d75fba5dbd723244249ead.mockapi.io/movies", {
      method: "POST",
      body: JSON.stringify(moviesData),
      headers: {
        "content-type": "application/json",
      },
    } 
    );

   navigate( "/movies");
  };

  
  return (
    <div className="addmovie">
      <Stack spacing={2} sx={{ maxWidth: "50em", minWidth: "25em" }}>
        <TextField
          onChange={(event) => setName(event.target.value)}
          id="outlined-success"
          label="name"
          variant="outlined"
         
        />
        <TextField
          onChange={(event) => setPoster(event.target.value)}
          id="outlined-success"
          label="poster"
          variant="outlined"
          sx={{textTransform:"lowercase"}}
        />
        <TextField
          onChange={(event) => setRating(event.target.value)}
          id="outlined-success"
          label="rating"
          variant="outlined"
        />
        <TextField
          onChange={(event) => setSummary(event.target.value)}
          id="outlined-success"
          label="summary"
          variant="outlined"
        />
        <TextField
          onChange={(event) => setTrailer(event.target.value)}
          id="outlined-success"
          label="trailer"
          variant="outlined"
        />

        <Button variant="contained" onClick={addmovie}>
      😍 add
        </Button>
      </Stack>
    </div>
  );
}
export { Addmovies };
