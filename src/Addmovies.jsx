import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import "./Addmovies.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
// import { useEffect, useState } from "react";
import { API } from "../globel.js";
import { useFormik } from "formik";
import * as yup from "yup";

const formValidationScama = yup.object({
  name: yup.string().required(),
  poster: yup.string().required().min(4, "poster ah mathura punda"),
  rating: yup.number().required().min(0, "😅10 dha da  punda").max(10),
  summary: yup.string().required().min(2, "🫥20 chrt required"),
  trailer: yup.string().required().min(4, "😅 4 min chrt required"),
});

function Addmovies(getMovies) {
  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [rating, setRating] = useState("");
  // const [summary, setSummary] = useState("");
  // const [trailer, setTrailer] = useState("");
  const { handleSubmit, handleBlur, handleChange, values, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        poster: "",
        rating: "",
        summary: "",
        trailer: "",
      },
      validationSchema: formValidationScama,
      onSubmit: (newMovie) => {
        console.log("form values", ":", newMovie);
        addmovie(newMovie);
      },
    });

  const navigate = useNavigate();

  const addmovie = async (newMovie) => {
    // const moviesData = {
    //   // name: name,
    //   // poster: poster,
    //   // rating: rating,
    //   // summary: summary,
    //   // trailer: trailer,
    // };
    console.log(newMovie);

    await fetch(`${API}/movies`, {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: {
        "content-type": "application/json",
      },
    });

    navigate("/movies");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="addmovie">
        <Stack spacing={2} sx={{ maxWidth: "50em", minWidth: "25em" }}>
          <TextField
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.name}
            name="name"
            id="outlined-success"
            label="name"
            variant="outlined"
            error={touched.name && errors.name}
            helperText={errors.name}
          />

          <TextField
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.poster}
            name="poster"
            id="outlined-success"
            label="poster"
            variant="outlined"
            sx={{ textTransform: "lowercase" }}
            error={touched.poster && errors.poster}
            helperText={errors.poster}
          />

          <TextField
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.rating}
            name="rating"
            id="outlined-success"
            label="rating"
            variant="outlined"
            error={touched.rating && errors.rating}
            helperText={errors.rating}
          />

          <TextField
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.summary}
            name="summary"
            id="outlined-success"
            label="summary"
            variant="outlined"
            error={touched.summary && errors.summary}
            helperText={errors.summary}
          />

          <TextField
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.trailer}
            name="trailer"
            id="outlined-success"
            label="trailer"
            variant="outlined"
            error={touched.trailer && errors.trailer}
            helperText={errors.trailer}
          />

          <Button type="submit" variant="contained">
            😍 add
          </Button>
        </Stack>
      </div>
    </form>
  );
}
export { Addmovies };
