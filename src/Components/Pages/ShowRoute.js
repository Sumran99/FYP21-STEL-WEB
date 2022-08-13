import React from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
const columns = [
  { field: "number", headerName: "BUs Number", width: 120 },
  { field: "from", headerName: "From", width: 120 },
  { field: "to", headerName: "To", width: 120 },
];
const ShowRoute = () => {
  const [number, setnumber] = React.useState([]);
  const getAllDrivers = React.useCallback(async () => {
    const response = await fetch(
      "https://stel-api.herokuapp.com/api/route/routes"
    );
    const data = await response.json();
    setnumber(data.routes);
    console.log(number);
  }, []);

  React.useEffect(() => {
    getAllDrivers();
  }, [getAllDrivers]);
  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        ustifyContent="center"
        item
        xs={12}
      >
        <h1>Route Details</h1>
      </Grid>
      <Grid
        item
        xs={12}
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "50vh" }}
      >
        <Box sx={{ height: 400, width: "50%" }}>
          <DataGrid
            rows={number}
            columns={columns}
            getRowId={(row) => row._id}
          />
        </Box>
      </Grid>
    </>
  );
};

export default ShowRoute;
