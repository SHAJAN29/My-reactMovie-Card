import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import "./Movietrailer.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { useQuery } from "@tanstack/react-query";
import { API } from "../globel";

export function Movietrailer() {
  const { id } = useParams();
  // const [movie,setMovie]= useState({})
  const navigate = useNavigate();
  const { isLoading, data: movie } = useQuery(
    ["movies", id],
    async () =>
      await fetch(`${API}/movies/${id}`, { method: "GET" }).then((data) =>
        data.json()
      ),
    {
      staleTime: 50000,
    }
  );

  // useEffect(

  //   ()=>{

  //   fetch(``{API}/movies/${id}`,{method:"GET"})

  //   .then((data)=>data.json())
  //   .then((mvs)=>setMovie(mvs))

  //   },[id])

  console.log(useParams());
  console.log(movie);
  if (isLoading) {
    return <h1>isLoading</h1>;
  }
  return (
    <div className="trailerpPage">
      <iframe
        width="auto"
        height="503"
        src={movie.trailer}
        title="VIKRAM - Official Trailer | Kamal Haasan | VijaySethupathi, FahadhFaasil | LokeshKanagaraj | Anirudh"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

      <Movietrailerdetails movie={movie} id={id} />

      <Button variant="contained" onClick={() => navigate(-1)}>
        {" "}
        <ArrowBackIcon />
        back
      </Button>
    </div>
  );
}

function Movietrailerdetails({ movie }) {
  const styles = {
    color: movie.rating > 5 ? "green" : "red",
  };

  return (
    <div className="trailerpPageContent">
      <Typography variant="h3">{movie.name}</Typography>
      <Typography>{movie.summary}</Typography>
      <Typography>
        {" "}
        Rating <span style={styles}>{movie.rating}⭐</span>
      </Typography>
    </div>
  );
}
