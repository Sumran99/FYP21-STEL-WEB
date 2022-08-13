import React from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "busNumber", headerName: "Bus No", width: 85 },
  { field: "chaseNumber", headerName: "Chase No", width: 120 },
  { field: "millage", headerName: "Mileage", width: 120 },
  { field: "capacity", headerName: "Capacity", width: 100 },
  { field: "ac", headerName: "AC", width: 70 },
  { field: "active", headerName: "Active", width: 70 },
];

const Showbus = () => {
  const [buses, setBuses] = React.useState([]);
  const getAllBuses = React.useCallback(async () => {
    const response = await fetch(
      "https://stel-api.herokuapp.com/api/bus/buses"
    );
    const data = await response.json();
    setBuses(data.Buses);
  }, []);

  React.useEffect(() => {
    getAllBuses();
  }, [buses, getAllBuses]);

  return (
    <>
      <Grid item xs={12}>
        <h1>Buses Details</h1>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ height: 400, width: "50%" }}>
          <DataGrid
            pageSize={5}
            rowsPerPageOptions={[10]}
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
