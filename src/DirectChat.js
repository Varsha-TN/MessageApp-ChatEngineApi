import React, { useState } from 'react';
import { ChatEngine, getOrCreateChat } from 'react-chat-engine';


const DirectChat = () => {
    const[username, setUsername] = useState('')

    function implementingDirectChat(creds){
        
        getOrCreateChat(
            creds,
            {is_direct_chat: true, usernames:[username]},
            () => setUsername('')
        )
    }

    const displayChatInterface = (creds) => {
        return (
            <div>
                <input 
                    type="text" 
                    placeholder='Find username'
                    value={username} 
                    onChange = {(e) => setUsername(e.target.value)}
                />
                <button onClick={() => implementingDirectChat(creds)}>
                    Create Chat
                </button>

            </div>
        )
    }

    return(
        <ChatEngine
            height='100vh'
            width='100vw'       
            userName='Varsha'
            userSecret ='WuThq2WnDZMmvUOmttOh9VYidea2'
            projectID ='8ff469e8-b53e-4606-b9f9-c3de42be7e49'
            displayNewChatInterface={(creds) => displayChatInterface(creds)}
            />
    )
    
}

export default DirectChat


