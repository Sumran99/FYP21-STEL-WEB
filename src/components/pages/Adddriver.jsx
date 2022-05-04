import "./adddriver.css";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
export default function AddDriver() {
  const formik = useFormik({
    initialValues: {
      /*name: "",
      phone: "",
      cnic: "",
      license: "",
      yearOfExp: "",*/
    },
  });
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/dashboard`;
    navigate(path);
  };

  return (
    <div className="BOX">
      <>
        <Box
          component="main"
          sx={{
            alignItems: "center",
            display: "flex",
            flexGrow: 1,
            minHeight: "100%",
            justifyContent: "flex-start",
          }}
        >
          <Container maxWidth="sm">
            <Button
              component="a"
              startIcon={<ArrowBackIcon fontSize="small" />}
              onClick={routeChange}
            >
              Dashboard
            </Button>
            <form onSubmit={formik.handleSubmit}>
              <Box sx={{ my: 3 }}>
                <Typography color="textPrimary" variant="h4">
                  Add Driver
                </Typography>
                <Typography color="textSecondary" gutterBottom variant="body2">
                  Add Drivers here
                </Typography>
              </Box>
              <TextField
                error={Boolean(formik.touched.name && formik.errors.name)}
                fullWidth
                helperText={formik.touched.name && formik.errors.name}
                label="Name"
                margin="normal"
                name="name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.name}
                variant="outlined"
                type="text"
              />
              <TextField
                error={Boolean(formik.touched.phone && formik.errors.phone)}
                fullWidth
                helperText={formik.touched.phone && formik.errors.phone}
                label="Phone"
                margin="normal"
                name="phone"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.phone}
                variant="outlined"
              />
              <TextField
                error={Boolean(formik.touched.cnic && formik.errors.cnic)}
                fullWidth
                helperText={formik.touched.cnic && formik.errors.cnic}
                label="CNIC"
                margin="normal"
                name="cnic"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.cnic}
                variant="outlined"
              />
              <TextField
                error={Boolean(formik.touched.license && formik.errors.license)}
                fullWidth
                helperText={formik.touched.license && formik.errors.license}
                label="License Number"
                margin="normal"
                name="license"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.license}
                variant="outlined"
              />
              <TextField
                error={Boolean(formik.touched.license && formik.errors.license)}
                fullWidth
                helperText={formik.touched.yearOfExp && formik.errors.yearOfExp}
                label="Year of experience"
                margin="normal"
                name="experience"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="number"
                value={formik.values.yearOfExp}
                variant="outlined"
              />

              <Box sx={{ py: 2 }}>
                <Button
                  color="primary"
                  disabled={formik.isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  onClick={() => {
                    console.log(JSON.stringify(formik.values));
                    fetch("/api/admin/addDriver", {
                      method: "post",
                      headers: {
                        Accept: "application/json",
                        "Content-type": "application/json",
                      },
                      // (var) payload looks like this {Header: "Sending", . . .}
                      body: JSON.stringify(formik.values),
                    })
                      .then((res) => res.json())
                      .then((resp) => console.log(resp))
                      .catch((err) => console.log(err));
                  }}
                >
                  Add Driver
                </Button>
              </Box>
            </form>
          </Container>
        </Box>
      </>
    </div>
  );
}
