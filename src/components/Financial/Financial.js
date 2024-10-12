import React from "react";
import "./Financial.scss";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
const columns = [
  { field: "ownerName", headerName: "Owner Name", width: 175 },
  { field: "propertyName", headerName: "Property Name", width: 175 },
  { field: "Income", headerName: "Income", width: 175 },
  { field: "Expenses", headerName: "Expenses", width: 175 },
  { field: "NetProfit", headerName: "Net Profit", width: 175 },
];
const rows = [
  {
    id: 1,
    ownerName: "John Snow",
    propertyName: "Winterfell Tower",
    Income: 5000,
    Expenses: 3000,
    NetProfit: 2000,
  },
  {
    id: 2,
    ownerName: "Cersei Lannister",
    propertyName: "Red Keep Apartments",
    Income: 7000,
    Expenses: 2000,
    NetProfit: 5000,
  },
  {
    id: 3,
    ownerName: "Jaime Lannister",
    propertyName: "Kings Landing Estates",
    Income: 8000,
    Expenses: 4000,
    NetProfit: 4000,
  },
  {
    id: 4,
    ownerName: "Arya Stark",
    propertyName: "Faceless Mansions",
    Income: 6000,
    Expenses: 3000,
    NetProfit: 3000,
  },
  {
    id: 5,
    ownerName: "Tyrion Lannister",
    propertyName: "Hand of the King Estates",
    Income: 5500,
    Expenses: 2500,
    NetProfit: 3000,
  },
  {
    id: 6,
    ownerName: "Sansa Stark",
    propertyName: "Eyrie Heights",
    Income: 6000,
    Expenses: 3500,
    NetProfit: 2500,
  },
];

const Financial = () => {
  return (
    <div className="mainList">
      <div className="firstList">
        <div className="subfirstList">
          <p className="propertyPara">
            Financial Overview <span className="statisList">Statistics</span>
          </p>
          <p className="secondpropertyPara">
            Financial status for each property, summarizing income, expenses, and net profit.
          </p>
        </div>

        <div className="secondList">
          <p className="deleteButton">
            <Link style={{ textDecoration: "none" }}>
              <DeleteForeverIcon className="iconDelete" />
              <span className="deletetext">Delete</span>
            </Link>
          </p>

            <p className="addButton">
            <Link to="/create-new-financial-data" style={{ textDecoration: "none" }}>
              <AddIcon className="iconAdd" />
              <span className="addtext">Add</span>
              </Link>

            </p>
        </div>
      </div>
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
                backgroundColor: "#F9F9F9", // Column header background
                color: "#101828", // Column header text color
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
                backgroundColor: "#FFFFFF", // Cell background
                color: "#667085", // Cell text color
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "14.36px",
                textAlign: "left",
                paddingTop: "15px",
              },
              "& .MuiDataGrid-row:hover": {
                backgroundColor: "#E5E5E5", // Row hover background
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

export default Financial;
