import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Badge from "@mui/material/Badge";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import "./Card.css";

export function Card({ movie}) {
  const navigate = useNavigate();
  const { poster, name, rating, summary, id } = movie;

  const [view, setView] = useState(true);
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const deleteMovie = async(id) => {
    await fetch(`https://63d75fba5dbd723244249ead.mockapi.io/movies/${id}`,
    {
      method: "DELETE",
    });

    window. location. reload(navigate( "/movies"));
  };

  return (
    <div className="container">
      <div className="card">
        <div className="cardBody">
          <img src={poster} className="logo react" alt="React logo" />
        </div>
        <div className="cardContent">
          <div className="cardContentTitle">
            <h1 className="titer">
              {name}{" "}
              <button className="btn1" onClick={() => setView(!view)}>
                {view == true ? (
                  <KeyboardArrowDownIcon />
                ) : (
                  <KeyboardArrowUpIcon />
                )}
              </button>
              <IconButton
                size="small"
                color="inherit"
                onClick={() => navigate(`/movies/${movie.id}`)}
              >
                <InfoIcon
                  size="small"
                  aria-label="go to movie trailer page"
                  color="primary"
                />
              </IconButton>
            </h1>

            <p className={rating > 5 ? "greenRating" : "redRating"}>
              ⭐{rating}
            </p>
          </div>

          <p className={view == true ? "summary" : "summaryhide"}>{summary}</p>

          {/*-----------------card icons--------------------*/}
          <div className="icons">
            {/*-----------------like icon--------------------*/}

            <Badge badgeContent={like} color="primary">
              <IconButton
                onClick={() => setLike(like + 1)}
                color="success"
                aria-label="add to shopping cart"
              >
                👍
              </IconButton>
            </Badge>

            {/*-----------------dislike icon--------------------*/}

            <Badge badgeContent={dislike} color="error">
              <IconButton
                onClick={() => setDislike(dislike + 1)}
                color="error"
                aria-label="add to shopping cart"
              >
                👎
              </IconButton>
            </Badge>

       {/*-----------------EditIcon icon--------------------*/}
            <IconButton
              sx={{ marginLeft: "auto",width:"fit-content" }}
              onClick={() => navigate(`/editmovies/${movie.id}`)}
              color={"success"}
              aria-label="DELETE FORM CART"
            >
              <EditIcon />
            </IconButton>


            {/*-----------------deleteMovie icon--------------------*/}

            <IconButton
              sx={{ marginLeft: "auto",width:"fit-content" }}
              onClick={() => deleteMovie(movie.id)}
              color={"secondary"}
              aria-label="DELETE FORM CART"
            >
              <DeleteIcon />
            </IconButton>

            {/*-----------------editMovie icon--------------------*/}
            {/* <IconButton
             sx={{marginLeft:"auto" }}
          onClick={() => editMovie(movie.id)}
          color="primary"
          aria-label="DELETE FORM CART"
        >
          <DeleteIcon  />
        </IconButton> */}
          </div>
        </div>
      </div>
    </div>
  );
}
