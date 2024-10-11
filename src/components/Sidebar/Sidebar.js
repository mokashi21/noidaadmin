import React from "react";
import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import EventIcon from '@mui/icons-material/Event';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
      <Link to="/" style={{
        textDecoration : "none"
      }} >
      <span className="logo">Admin Dashboard</span>
      </Link>
      </div>
      <div className="center">
        <ul>
          <p className="title">Main Menu</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">List</p>

          <Link to="/create" style={{ textDecoration : "none" }} >
          <li>
            <PersonAddAlt1Icon className="icon" />
            <span>Create Portfolio</span>
          </li>
          </Link>
          <Link to="/property" style={{ textDecoration : "none" }} >
          <li>
            <EventIcon className="icon" />
            <span>Property List</span>
          </li>

          </Link>
          <p className="title">OTHER</p>
          <Link to="/support" style={{ textDecoration : "none" }}   >
          <li>
            <HeadsetMicIcon className="icon" />
            <span>Support </span>
          </li>
          </Link>
          <Link to="/setting" style={{ textDecoration : "none" }}   >
          <li>
            <SettingsIcon className="icon" />
            <span>Setting</span>
          </li>
          </Link>
         
        </ul>
      </div>

    </div>
  );
};

export default Sidebar;