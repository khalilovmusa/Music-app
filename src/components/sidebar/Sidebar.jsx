import React, { useEffect, useState } from 'react';
import "./Sidebar.css";
import SidebarButton from './SidebarButton';
import { MdSpaceDashboard } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { FaGripfire } from "react-icons/fa6";
import { VscSignOut } from "react-icons/vsc";
import { IoLibrary } from "react-icons/io5";
import apiClient from '../../../spotify';


const Sidebar = () => {
    const [image, setImage] = useState("https://i.pinimg.com/236x/e8/11/7e/e8117e433782eca317599567833b1a13.jpg");
    useEffect(() => {
        apiClient.get("me").then(res => {
            console.log(res)
        })
    },[])
    return (
        <div className="sidebar-container">
            <img src={image} className="profile-img" alt="profile" />
            <div>
                <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
                <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} />
                <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
                <SidebarButton title="Favorites" to="/favorites" icon={< MdFavorite />} />
                <SidebarButton title="Library" to="/" icon={<IoLibrary/>} />
            </div>
            <SidebarButton title="Sign Out" to="" icon={<VscSignOut /> } />
        </div>
    )
}

export default Sidebar
