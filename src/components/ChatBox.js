import React from 'react';
import addChannelMessage from '../index.js'

const ChatBox = () =>{
    return(
        <div className="ChatBox">
            <form>
                <input placeholder="Enter your message here" id="chatBoxID"></input>
                <button type="submit" className="submitChat" onSubmit="addChannelMessage()"></button>
            </form>
        </div>
    );
}


export default ChatBox;