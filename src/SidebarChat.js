import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarChat.css';

function SidebarChat() {

    // useEffect(()=>{

    // }, [])


    return (

        <div className='sidebarChat'>  
            <Avatar src="https://avatars.dicebear.com/api/male/12313212a.svg" />
            <div className="sidebarChat__info">
                <h2>Room Name</h2>
                <p>Last Message</p>
            </div>
        </div>
    )
}

export default SidebarChat;
