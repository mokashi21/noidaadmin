import React from "react";
import "./Lists.scss";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

// Updated columns with the requested headers
const columns = [
  { field: "ownerName", headerName: "Owner Name", width: 175 },
  { field: "propertyName", headerName: "Property Name", width: 175 },
  { field: "totalUnits", headerName: "Total Units", width: 175 },
  { field: "vacantUnits", headerName: "Vacant Units", width: 175 },
  { field: "occupancyRate", headerName: "Occupancy Rate", width: 175 },
  {
    field: "lastMaintenanceDate",
    headerName: "Last Maintenance Date",
    width: 175,
  },
];

// Example row data with 6 entries
const rows = [
  {
    id: 1,
    ownerName: "John Snow",
    propertyName: "Winterfell Tower",
    totalUnits: 50,
    vacantUnits: 5,
    occupancyRate: "90%",
    lastMaintenanceDate: "2024-09-10",
  },
  {
    id: 2,
    ownerName: "Cersei Lannister",
    propertyName: "Red Keep Apartments",
    totalUnits: 100,
    vacantUnits: 20,
    occupancyRate: "80%",
    lastMaintenanceDate: "2024-08-15",
  },
  {
    id: 3,
    ownerName: "Jaime Lannister",
    propertyName: "Kings Landing Estates",
    totalUnits: 75,
    vacantUnits: 10,
    occupancyRate: "87%",
    lastMaintenanceDate: "2024-07-20",
  },
  {
    id: 4,
    ownerName: "Arya Stark",
    propertyName: "Faceless Mansions",
    totalUnits: 40,
    vacantUnits: 2,
    occupancyRate: "95%",
    lastMaintenanceDate: "2024-09-05",
  },
  {
    id: 5,
    ownerName: "Tyrion Lannister",
    propertyName: "Hand of the King Estates",
    totalUnits: 65,
    vacantUnits: 7,
    occupancyRate: "89%",
    lastMaintenanceDate: "2024-08-25",
  },
  {
    id: 6,
    ownerName: "Sansa Stark",
    propertyName: "Eyrie Heights",
    totalUnits: 30,
    vacantUnits: 3,
    occupancyRate: "90%",
    lastMaintenanceDate: "2024-08-30",
  },
];

const List = () => {
  return (
    <div className="mainList">
      {/* first section */}
      <div className="firstList">
        <div className="subfirstList">
          <p className="propertyPara">
            Property Occupancy Overview{" "}
            <span className="statisList">Statistics</span>
          </p>
          <p className="secondpropertyPara">Detailed occupancy breakdown</p>
        </div>

        <div className="secondList">
          <p className="deleteButton">
            <Link style={{ textDecoration: "none" }}>
              <DeleteForeverIcon className="iconDelete" />
              <span className="deletetext">Delete</span>
            </Link>
          </p>

          <p className="addButton">
            <AddIcon className="iconAdd" />
            <span className="addtext">Add</span>
          </p>
        </div>
      </div>

      {/* table */}
      <div>
        <Paper sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            checkboxSelection
            hideFooter
            sx={{
              border: 0,
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "#F9F9F9", // Header background color
                color: "#101828", // Header text color
                fontFamily: "Poppins",
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: "12px",
                textAlign: "left",
              },
              "& .MuiDataGrid-columnHeaderTitle": {
                textAlign: "left", // Align header text left
              },
              "& .MuiDataGrid-cell": {
                backgroundColor: "#FFFFFF", // Cell background color
                color: "#667085", // Cell text color
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
                color: "#001B79", // Checkbox color
              },
            }}
          />
        </Paper>
      </div>
    </div>
  );
};

export default List;
