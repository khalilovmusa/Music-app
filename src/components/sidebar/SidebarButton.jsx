import React from 'react'
import "./SidebarButton.css";
import { Link } from "react-router-dom";
import { IconContext } from 'react-icons';

const SidebarButton = (props) => {
    return (
        <Link to={props.to}>
            <div className="btn-body">
                <IconContext.Provider value={{ size: '24px', className: "btn-icon" }}>
                    {props.icon}
                    <p className="btn-title">{props.title}</p>
                </IconContext.Provider>
            </div>
        </Link>
    )
}

export default SidebarButton;
