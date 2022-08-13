import React from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

import { DataGrid } from "@mui/x-data-grid";
const columns = [
  { field: "number", headerName: "Route Number", width: 120 },
  { field: "from", headerName: "From", width: 120 },
  { field: "to", headerName: "To", width: 120 },
];
const DeleteRoute = () => {
  const [number, setnumber] = React.useState([]);
  const [deleteRouteNumber, setdeleteRouteNumber] = React.useState([]);
  const getAllRoutes = React.useCallback(async () => {
    const response = await fetch(
      "https://stel-api.herokuapp.com/api/route/routes"
    );
    const data = await response.json();
    setnumber(data.routes);
    console.log(number);
  }, []);
  const handledelete = async () => {
    try {
      await fetch("https://stel-api.herokuapp.com/api/route/deleteRoutes", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          numbers: deleteRouteNumber,
        }),
      })
        .then((res) => res.json())
        .then((resp) => console.log(resp))
        .then((err) => console.log("Error Try Block" + err));
    } catch (err) {
      console.log("Error Catch Block" + err.message);
    }
    console.log(deleteRouteNumber);
  };

  React.useEffect(() => {
    getAllRoutes();
  }, [number, getAllRoutes]);
  return (
    <>
      <Grid item xs={12}>
        <h1>Delete Route Panel</h1>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ height: 400, width: "52%" }}>
          <DataGrid
            pageSize={5}
            rowsPerPageOptions={[10]}
            rows={number}
            columns={columns}
            getRowId={(row) => row._id}
            checkboxSelection
            onSelectionModelChange={(ids) => {
              const selectedIDs = new Set(ids);
              const selectedArray = Array.from(selectedIDs);
              setdeleteRouteNumber(
                number
                  .filter((row) => selectedArray.includes(row._id))
                  .map((item) => item.number)
              );
            }}
          />
        </Box>
      </Grid>
      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={handledelete}
      >
        Delete
      </Button>
    </>
  );
};

export default DeleteRoute;
