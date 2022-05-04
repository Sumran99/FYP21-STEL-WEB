import "./adddriver.css"
import React  from "react";
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
      lisense: "",
      yearOfExp: "",*/
    },
    validationSchema: Yup.object({
      name: Yup.number().max(255).required("Name is required"),
      phone: Yup.string().max(255).required("Phone Number is required"),
      cnic: Yup.number().max(13).required("CNIC is required"),
      lisense: Yup.string().required("Lisense Number is required"),
      yearOfExp: Yup.number().required("Experience is required"),
    }),
  });
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/dashboard`; 
    navigate(path);
  }


  
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
            justifyContent: 'flex-start',
          
          }}
        >
          <Container maxWidth="sm"  >
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
                name="Driver Name"
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
                name="Phone Number"
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
                name="CNIC"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.cnic}
                variant="outlined"
              />
              <TextField
                error={Boolean(formik.touched.lisense && formik.errors.lisense)}
                fullWidth
                helperText={formik.touched.lisense && formik.errors.lisense}
                label="Lisense Number"
                margin="normal"
                name="Lisense Number"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.lisense}
                variant="outlined"
              />
              <TextField
                error={Boolean(formik.touched.lisense && formik.errors.lisense)}
                fullWidth
                helperText={formik.touched.yearOfExp && formik.errors.yearOfExp}
                label="Year of experience"
                margin="normal"
                name="Year of Experience"
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
                  onClick={()=>{console.log(JSON.stringify(formik.values))}}
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