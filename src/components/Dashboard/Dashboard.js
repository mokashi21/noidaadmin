import React from 'react'
import "./Dashboard.scss"
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Widgets from '../../assets/Widgets/Widgets';
import List from '../List/List';
import Financial from '../Financial/Financial';


const Home = () => {
  return (
    <div className='home' >
        <Sidebar />
        <div className='homecontainer'>
        <Navbar />
        <div className='titleDash' >Dashboard</div>
        <div className='widgets'>
            <Widgets />
        </div>
        <div className='createDash' >
          <List />
          <Financial />
        </div>
        </div>
    </div>
  )
}

export default Home;