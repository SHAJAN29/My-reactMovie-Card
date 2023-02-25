import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useFormik } from "formik";
import * as yup from "yup";

const formValidationScama = yup.object({
  email: yup
    .string()
    .required()
    .email()
    .lowercase("🤦‍♂️lowercase")
    .min(12, "🤦‍♂️email length kammiya irukuda mathura punda"),
  password: yup
    .string()
    .required()
    .min(12, "🫥password ah mathura punda")
    .max(15),
});

export function BasicForm() {
  const { handleSubmit, handleBlur, handleChange, values, errors, touched } =
    useFormik({
      initialValues: { email: "", password: "" },
      validationSchema: formValidationScama,
      onSubmit: (values) => console.log("form values", ":", values),
    });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "50px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <input
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
          type="email"
          placeholder="emali"
          name="email"
          id=""
        />
        {touched.email && errors.email ? errors.email : null}
        <br />
        <input
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password}
          type="password"
          placeholder="password"
          name="password"
          id=""
        />
        {touched.password && errors.password ? errors.password : null}

        <Button variant="contained" type="submit">
          submit
        </Button>
      </form>
    </Box>
  );
}
