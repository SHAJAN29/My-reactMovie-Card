
import { useEffect, useState } from "react";
import { Card } from "./Card";
import "./Movies.css"
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
export function Movies() {
  // const [movieList,setMovieList]= useState([])
  const { isLoading,data: movieList } = useQuery(
    ["movies"],
    async () => await fetch("https://63d75fba5dbd723244249ead.mockapi.io/movies",{method:"GET"})
  
    .then((data)=>data.json()),{

       staleTime:1000
      
      
          }
    
  );
//   function getMovies() {
//     fetch("https://63d75fba5dbd723244249ead.mockapi.io/movies",{method:"GET"})
  
//     .then((data)=>data.json())
    
//     .then((mvs)=>setMovieList(mvs))
 
//   }

// useEffect(

// ()=>{
//   getMovies();
// },[])

if(isLoading){
  return <h1>isLoading</h1>
 
 }
 console.log(movieList)
  return (




    <div className="moviesss">

{/* 
<Movielist moviesss={movieList} /> */}

{movieList.map((num) => (<Card key={num.id} movie={num} />))}

<a href="#" id="scrollarrow">Scroll up this page</a>
    </div>
  );


}
