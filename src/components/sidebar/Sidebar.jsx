import React from 'react';
import "./Sidebar.css";
import SidebarButton from './SidebarButton';
import { MdSpaceDashboard } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { FaGripfire } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";


const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <img src="https://i.pinimg.com/236x/e8/11/7e/e8117e433782eca317599567833b1a13.jpg" className="profile-img" alt="profile" />
            <div>
                <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
                <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} />
                <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
                <SidebarButton title="Favorites" to="/favorites" icon={< MdFavorite />} />
                <SidebarButton title="Library" to="/" icon={<IoLibrary/>} />
            </div>
            <SidebarButton title="Sign Out" to="/" icon={<FaSignOutAlt />} />
        </div>
    )
}

export default Sidebar
