
import "./App.css";
import "./Movies.css";
import TextField from "@mui/material/TextField";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import { Movietrailer } from "./Movietrailer";
import { Movies } from "./Movies";
import { Editmovies } from "./Editmovies";
import { Home } from "./Home";
import { useEffect, useState } from "react";
import {Addmovies} from "./Addmovies"
import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Paper from '@mui/material/Paper';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { QueryClientProvider, QueryClient, useQuery } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useReducer } from "react";








function App() {
  const[mode,setMode]=useState("light");

 
const darkTheme = createTheme({
  palette: {
    mode: mode,
  },
});
const queryClient = new QueryClient();


// const [movieList,setMovieList]= useState([])

// function getMovies() {
  
//   fetch("https://63d75fba5dbd723244249ead.mockapi.io/movies")

// .then((data)=>data.json())

// }

// useEffect(

// ()=>{
// getMovies();
// },[])

//----------------------- MaterialUISwitch------------------------------------------


// function waste(){

//   // fetch("https://63d75fba5dbd723244249ead.mockapi.io/movies");

//   // const navigate = useNavigate();


//   // console.log(movieList[0].id);

//     // {
//     //   "id": "99",
//     //   "name": "Vikram",
//     //   "poster": "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
//     //   "rating": 8.4,
//     //   "summary": "Members of a black ops team must track and eliminate a gang of masked murderers.",
//     //   "trailer": "https://www.youtube.com/embed/OKBMCL-frPU"
//     // },
//     // {
//     //   "id": "100",
//     //   "name": "RRR",
//     //   "poster": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
//     //   "rating": 8.8,
//     //   "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
//     //   "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
//     // },
//     // {
//     //   "id": "101",
//     //   "name": "Iron man 2",
//     //   "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
//     //   "rating": 7,
//     //   "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
//     //   "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
//     // },
//     // {
//     //   "id": "102",
//     //   "name": "No Country for Old Men",
//     //   "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
//     //   "rating": 8.1,
//     //   "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
//     //   "trailer": "https://www.youtube.com/embed/38A__WT3-o0"
//     // },
//     // {
//     //   "id": "103",
//     //   "name": "Jai Bhim",
//     //   "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
//     //   "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//     //   "rating": 8.8,
//     //   "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA"
//     // },
//     // {
//     //   "id": "104",
//     //   "name": "The Avengers",
//     //   "rating": 8,
//     //   "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
//     //   "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
//     //   "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8"
//     // },
//     // {
//     //   "id": "105",
//     //   "name": "Interstellar",
//     //   "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
//     //   "rating": 8.6,
//     //   "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
//     //   "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E"
//     // },
//     // {
//     //   "id": "106",
//     //   "name": "Baahubali",
//     //   "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
//     //   "rating": 8,
//     //   "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
//     //   "trailer": "https://www.youtube.com/embed/sOEg_YZQsTI"
//     // },
//     // {
//     //   "id": "107",
//     //   "name": "Ratatouille",
//     //   "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
//     //   "rating": 8,
//     //   "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
//     //   "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w"
//     // },
//     // {
//     //   "name": "PS2",
//     //   "poster": "https://m.media-amazon.com/images/M/MV5BYjFjMTQzY2EtZjQ5MC00NGUyLWJiYWMtZDI3MTQ1MGU4OGY2XkEyXkFqcGdeQXVyNDExMjcyMzA@._V1_.jpg",
//     //   "summary": "Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan",
//     //   "rating": 8,
//     //   "trailer": "https://www.youtube.com/embed/KsH2LA8pCjo",
//     //   "id": "108"
//     // },
//     // {
//     //   "name": "Thor: Ragnarok",
//     //   "poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
//     //   "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.",
//     //   "rating": 8.8,
//     //   "trailer":"https://www.youtube.com/embed/ue80QwXMRHg ",
//     //   "id": "109"
//     // },
// //     {

// // "name":"Thunivu"
// // "poster": ""



// //     }
  

// }


// const deleteMovie= async (id)=>{

//  await fetch(`https://63d75fba5dbd723244249ead.mockapi.io/movies/${id}`,
//   {method:"DELETE"});

//   getMovies();


//   };


  return (
    <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={true} />
    <ThemeProvider theme={darkTheme}>
      <Paper elevation={0} >
    <div className="App">


< Appbar mode={mode} setMode={setMode}/>

{/* https://63d75fba5dbd723244249ead.mockapi.io/movies */}
    
  <Routes >
  <Route  path="/" element={< Home  />} />
  <Route  path="/movies" element={<Movies />} />
  <Route  path="/movies/:id" element={<Movietrailer />} />
  <Route  path="/*" element={<Error/>} />
  <Route  path="/Addmovies" element={<Addmovies />} />
  <Route  path="/editmovies/:id" element={<Editmovies />} />
  </Routes>
  
    </div>
    </Paper>
    </ThemeProvider>
    </QueryClientProvider>
  );

}
function Appbar({mode,setMode}){

const navigate=useNavigate()
  console.log(mode);

  return(

        <AppBar  position="static">
          <Toolbar>
              <Typography
                variant="h6"
                onClick={()=>navigate("/")}
                
                href="/"
                sx={{
                  
                  display: { xs: 'flex', md: 'flex' },
                  fontFamily: 'poppins',
                  fontWeight: 700,
                  letterSpacing: '.1rem',
                  color: 'red',
                  textDecoration: 'none',
                  cursor:"pointer"
                }}
              >
                NETFLIX
              </Typography>
        
              <Typography    sx={{
                 
                  display: { xs: 'flex'},
                  fontFamily: 'poppins',
                  fontWeight:  '100',
                  letterSpacing: '.1rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}>
               
       <Button color="inherit" onClick={()=>navigate("/")} >Home</Button>               
       <Button color="inherit" onClick={()=>navigate("/movies")} >Movielist</Button>               
       <Button color="inherit" onClick={()=>navigate("/Addmovies")} >Addmovies</Button>               
       <Button color="inherit" onClick={()=>navigate("/*")} >Error</Button>               

  </Typography> 
                  
                  
<Button  onClick={()=>setMode(mode=="light"?"dark":"light")}  sx={{
                 
                 display: { xs: 'flex',md: 'flex'},
                 marginLeft:"auto",
                 overflow:"hidden",
               }}  variant="contained" startIcon={mode=="light" ?   <Brightness4Icon />: <WbSunnyIcon/> }>{mode=="light" ?"Dark": "light" }  </Button>
                    
</Toolbar>
        </AppBar>
  
  )};



 function Error(){

  return (


    <div>

      <img src={"https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif"} />
    </div>
  )
}



// export function Movielist({moviesss}){
 
//   return (

//     <div className=" move">





//     </div>
//   )
// }

    








export default App;
