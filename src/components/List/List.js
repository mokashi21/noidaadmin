import React, { useEffect, useState } from "react";
import "./Lists.scss";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProperties, deleteProperty } from "../../redux/propertiesSlice";
import { CircularProgress, Snackbar, Alert, IconButton, Button } from "@mui/material";

const List = () => {
  const dispatch = useDispatch();
  const { properties, loading, error } = useSelector((state) => state.properties);
  const [selectionModel, setSelectionModel] = useState([]);
  const [data, setData] = useState([]); 
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  useEffect(() => {
    dispatch(fetchProperties());

  }, [dispatch]);

  useEffect(() => {
    if (error) {
      setSnackbarMessage(error);
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    }
  }, [error]);

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this property?")) {
      return;
    }

    dispatch(deleteProperty(id))
      .unwrap()
      .then(() => {
        setData((prevData) => prevData.filter((item) => item.id !== id));
        setSnackbarMessage("Property deleted successfully.");
        setSnackbarSeverity("success");
        setOpenSnackbar(true);
      })
      .catch((err) => {
        let errorMessage = "Failed to delete the property.";
        if (err && typeof err === "object" && err.message) {
          errorMessage = err.message;
        }
        setSnackbarMessage(errorMessage);
        setSnackbarSeverity("error");
        setOpenSnackbar(true);
      });
  };

  const handleBulkDelete = () => {
    if (selectionModel.length === 0) {
      setSnackbarMessage("No properties selected for deletion.");
      setSnackbarSeverity("warning");
      setOpenSnackbar(true);
      return;
    }
    if (!window.confirm("Are you sure you want to delete the selected properties?")) {
      return;
    }
    Promise.all(
      selectionModel.map((id) => dispatch(deleteProperty(id)).unwrap())
    )
      .then(() => {
        setSnackbarMessage("Selected properties deleted successfully.");
        setSnackbarSeverity("success");
        setOpenSnackbar(true);
        setSelectionModel([]); 
      })
      .catch((err) => {
        let errorMessage = "Failed to delete some properties.";
        if (err && typeof err === "object" && err.message) {
          errorMessage = err.message;
        }
        setSnackbarMessage(errorMessage);
        setSnackbarSeverity("error");
        setOpenSnackbar(true);
      });
  };
  const columns = [
    { field: "owner_name", headerName: "Owner Name", width: 150 },
    { field: "property_name", headerName: "Property Name", width: 150 },
    { field: "total_units", headerName: "Total Units", width: 130, type: "number" },
    { field: "vacant_units", headerName: "Vacant Units", width: 130, type: "number" },
    { field: "occupancy_rate", headerName: "Occupancy Rate", width: 150 },
    {
      field: "last_maintenance_date",
      headerName: "Last Maintenance Date",
      width: 180,
      type: "date",
      valueGetter: (params) => new Date(params.value),
      valueFormatter: (params) =>
        params.value
          ? new Date(params.value).toLocaleDateString()
          : "",
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      sortable: false,
      filterable: false,
      renderCell: (params) => {
        return (
          <IconButton
            color="error"
            onClick={() => handleDelete(params.row.id)}
          >
            <DeleteForeverIcon />
          </IconButton>
        );
      },
    },
  ];
  const rows = properties.map((property) => ({
    id: property._id,
    owner_name: property.owner_name,
    property_name: property.property_name,
    total_units: property.total_units,
    vacant_units: property.vacant_units,
    occupancy_rate: property.occupancy_rate,
    last_maintenance_date: property.last_maintenance_date,
  }));
  console.log("rows",rows)

  return (
    <div className="mainList">
      <div className="firstList">
        <div className="subfirstList">
          <p className="propertyPara">
            Property Occupancy Overview{" "}
            <span className="statisList">Statistics</span>
          </p>
          <p className="secondpropertyPara">Detailed occupancy breakdown</p>
        </div>

        <div className="secondList">
          <p
            className="deleteButton"
            onClick={() => handleDelete(selectionModel[0])}
            style={{ cursor: "pointer", marginRight: '10px' }}
          >
            <DeleteForeverIcon className="iconDelete" />
            <span className="deletetext">Delete</span>
          </p>
          <Link to="/create-new-property-data" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
            >
              Add
            </Button>
          </Link>
        </div>
      </div>
      <div style={{ height: 500, width: "100%" }}>
      
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <CircularProgress />
          </div>
        ) : (
          <Paper sx={{ height: "100%", width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              checkboxSelection
              hideFooter={false}
              pageSize={10}
              rowsPerPageOptions={[10, 20, 50]}
              onSelectionModelChange={(newSelection) => {
                setSelectionModel(newSelection);
              }}
              selectionModel={selectionModel}
              disableSelectionOnClick
              sx={{
                border: 0,
                "& .MuiDataGrid-columnHeaders": {
                  backgroundColor: "#F9F9F9",
                  color: "#101828",
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: "12px",
                  lineHeight: "12px",
                  textAlign: "left",
                },
                "& .MuiDataGrid-columnHeaderTitle": {
                  textAlign: "left",
                },
                "& .MuiDataGrid-cell": {
                  backgroundColor: "#FFFFFF",
                  color: "#667085",
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "14.36px",
                  textAlign: "left",
                  paddingTop: "15px",
                },
                "& .MuiDataGrid-row:hover": {
                  backgroundColor: "#E5E5E5",
                },
                "& .MuiCheckbox-root": {
                  color: "#001B79",
                },
              }}
            />
          </Paper>
        )}
      </div>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default List;
