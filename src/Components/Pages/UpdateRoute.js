import React, { useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

function RedBar() {
  return (
    <Box
      sx={{
        height: 10,
      }}
    />
  );
}

const UpdateRoute = () => {
  const [routenumber, setroutenumber] = React.useState([]);
  const [data, setData] = React.useState("");
  const [from, setfrom] = React.useState([]);
  const [to, setto] = React.useState([]);
  const [focus, setFocus] = React.useState(false);
  const [route, setroute] = React.useState([]);
  const [filteredRoute, setFilteredRoute] = React.useState([]);
  const columns = [
    { field: "number", headerName: "Route Number", width: 120 },
    { field: "from", headerName: "From", width: 120 },
    { field: "to", headerName: "To", width: 120 },
  ];
  const handleupdate = async (e) => {
    try {
      await fetch("https://stel-api.herokuapp.com/api/route/updateRoute", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          number: data,
          from: Array.isArray(from) ? from.join() : from,
          to: Array.isArray(to) ? to.join() : to,
        }),
      })
        .then((res) => res.json())
        .then((resp) => console.log(resp))
        .then((err) => console.log("Error Try Block" + err));
      setfrom([]);
      setto([]);
    } catch (err) {
      console.log("Error Catch Block" + err.message);
    }
  };
  const handleChange = async (event) => {
    setData(event.target.value);
  };

  const getRoutes = async () => {
    const response = await fetch(
      "https://stel-api.herokuapp.com/api/route/routes"
    );
    const res = await response.json();
    setroute(res.routes);
  };

  React.useEffect(() => {
    getRoutes();
    if (data === "") {
      setFilteredRoute(route);
    } else {
      setFilteredRoute([
        ...[],
        route.find((element) => element.number === data),
      ]);
    }
  }, [data]);

  React.useEffect(() => {
    setfrom([...[], filteredRoute.map((element) => element.from)]);
    setto([...[], filteredRoute.map((element) => element.to)]);
    console.log(filteredRoute);
  }, [filteredRoute]);

  const getRouteNumbers = React.useCallback(async () => {
    const response = await fetch(
      `https://stel-api.herokuapp.com/api/route/routesNumbers`
    );
    const data = await response.json();
    setroutenumber(data.routes);
  }, []);

  React.useEffect(() => {
    getRouteNumbers();
  }, [filteredRoute, getRouteNumbers]);

  return (
    <>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          "& .MuiTextField-root": { width: "35ch" },
        }}
        autoComplete="off"
      >
        <RedBar />
        <h2>Route Number</h2>
        <FormControl sx={{ m: 2, minWidth: 160 }} size="small">
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={data}
            onChange={handleChange}
          >
            {routenumber.map((item) => {
              return (
                <MenuItem key={item._id} value={item.number}>
                  {item.number}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <Grid item xs={12}>
          <FormControl>
            <TextField
              defaultValue={from}
              key={from}
              label="from"
              variant="outlined"
              autoFocus={focus}
              onChange={(e) => {
                setfrom(e.target.value);
                setFocus(true);
              }}
            />
          </FormControl>
          <RedBar />
          <FormControl>
            <TextField
              key={to}
              defaultValue={to}
              label="To"
              variant="outlined"
              autoFocus={focus}
              onChange={(e) => {
                setto(e.target.value);
                setFocus(true);
              }}
            />
          </FormControl>
          <RedBar />

          <Button variant="outlined" onClick={handleupdate}>
            Update Route
          </Button>
        </Grid>
        <Grid item xs={12}>
          <h1>Route Details</h1>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ height: 250, width: "168%" }}>
            <DataGrid
              rows={filteredRoute}
              columns={columns}
              getRowId={(row) => row._id}
            />
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default UpdateRoute;
