import React from 'react';
import {Avatar } from "@material-ui/core";
import './SidebarChat.css';

function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebar__info">
                <h2>Room name</h2>
                <p>This is the last m</p>
            </div>
        </div>
    )
}

export default SidebarChat
