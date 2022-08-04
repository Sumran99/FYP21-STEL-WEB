import React from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "busnumber", headerName: "Bus No", width: 120 },
  { field: "chasenumber", headerName: "Chase No", width: 120 },
  { field: "millage", headerName: "Mileage", width: 120 },
  { field: "capacity", headerName: "Capacity", width: 120 },
  { field: "ac", headerName: "AC", width: 70 },
  { field: "active", headerName: "Active", width: 70 },
];

const Showbus = () => {
  const [buses, setBuses] = React.useState([]);

  const getAllBuses = async () => {
    const response = await fetch("https://stel-api.herokuapp.com/api/bus/buses");
    const data = await response.json();
    setBuses(data.Buses);
    console.log(buses);
  };

  React.useEffect(() => {
    getAllBuses();
  }, [buses]);
  return (
    <>
      <Grid item xs={12}>
        <h1>Buses Details</h1>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={buses}
            columns={columns}
            getRowId={(row) => row._id}
          />
        </Box>
      </Grid>
    </>
  );
};

export default Showbus;
