import { Button, Stack, TextField } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../globel";

export function Editmovies() {
  const { id } = useParams();
  console.log(id);
  // const [movie,setMovie]= useState({})

  const { isLoading, data: movie } = useQuery(
    ["movies", id],
    async () =>
      await fetch(`${API}/movies/${id}`, { method: "GET" }).then((data) =>
        data.json()
      ),
    {
      // staleTime:1000
    }
  );
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  const navigate = useNavigate();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  console.log(movie);
  const editmovie = async () => {
    const updatedData = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
      trailer: trailer,
    };
    console.log(updatedData);

    await fetch(`${API}/movies/${id}`, {
      method: "POST",
      body: JSON.stringify(updatedData),
      headers: {
        "content-type": "application/json",
      },
    });

    navigate("/movies");
  };

  return (
    <div className="addmovie">
      <Stack spacing={2} sx={{ maxWidth: "50em", minWidth: "25em" }}>
        <TextField
          onChange={(event) => setName(event.target.value)}
          id="outlined-success"
          label="name"
          value={movie.name}
          variant="outlined"
        />
        <TextField
          onChange={(event) => setPoster(event.target.value)}
          id="outlined-success"
          label="poster"
          variant="outlined"
          value={movie.poster}
          sx={{ textTransform: "lowercase" }}
        />
        <TextField
          onChange={(event) => setRating(event.target.value)}
          id="outlined-success"
          label="rating"
          variant="outlined"
          value={movie.rating}
        />
        <TextField
          onChange={(event) => setSummary(event.target.value)}
          id="outlined-success"
          label="summary"
          variant="outlined"
          value={movie.summary}
        />
        <TextField
          onChange={(event) => setTrailer(event.target.value)}
          id="outlined-success"
          label="trailer"
          variant="outlined"
          value={movie.trailer}
        />

        <Button color="success" variant="contained" onClick={editmovie}>
          😍 edit
        </Button>
      </Stack>
    </div>
  );
}
