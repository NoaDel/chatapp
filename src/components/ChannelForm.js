import React, { useState } from 'react';
import {addChatterChannel} from '../index.js'


const ChannelForm = () =>{
    console.log("im annoying");
    const tempSubmit = () =>{
        addChatterChannel("name", "text");
    }
    return(
        <form className="channelForm">
            <input placeholder="Create a new Channel..." id="a"></input>
            <input type="submit" onClick={tempSubmit()}></input>
        </form>
    );
}

export default ChannelForm;