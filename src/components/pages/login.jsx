import React from "react";
import { useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Link,
  Grid,
  Paper,
  Avatar,
  FormControlLabel,
  Button,
  Typography,
} from "@material-ui/core";
import { Checkbox, TextField } from "@mui/material";

export default function Login(handleChange) {
  
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/dashboard`; 
    navigate(path);
  }
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 300,
    margin: "10px auto",
  };
  const avatarStyle = {
    backgroundColor: "#1bbd7e",
  };
  const btnStyle = {
    margin: "8px 0",
  };
  const tfStyle = {
    marginTop: "19px",
  };
  const tyStyle = {
    marginTop: "10px",
  };
  const cbStyle = {
    marginTop: "10px",
  };
  
  return (
    <div>
      <Grid>
        <Paper style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign In</h2>
          </Grid>
          <TextField
            id="standard-basic"
            label="Username"
            variant="standard"
            placeholder="Enter Username"
            style={tfStyle}
            fullWidth
            required
          />
          <TextField
            id="standard-basic"
            label="Password"
            variant="standard"
            placeholder="Enter Password"
            type="password"
            fullWidth
            style={tfStyle}
            required
          />
          <FormControlLabel
            style={cbStyle}
            control={<Checkbox name="checkdB" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            color="primary"
            variant="contained" 
            style={btnStyle}
            fullWidth
            onClick={routeChange}
          >
            Sign In
          </Button>
          <Typography style={tyStyle}>
            <Link href="#">Forget password?</Link>
          </Typography>
          <Typography style={tyStyle}>
            Do you have an account?
            <Link href="#" onClick={() => handleChange("event", 1)}>
              Sign Up
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </div>
  );
}
