import React, { useState, useEffect } from 'react';
import myFirebase from '../config/firebase';

const Messages = () => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        // alert('Message component is rendered!')
        myFirebase.database().ref(`contacts`)
        .on('value',(contacts) => {
            let msgs = []
            contacts.forEach((contact) => {
                // console.log(`Each Contact -- ${contact.val().name}`)
                msgs.push({
                    name:contact.val().name,
                    email:contact.val().email,
                    message:contact.val().message
                })
            })
            setMessages(msgs)
        })
    }, [])
        return (
            <div className="container">
                <h1>Messages</h1>
                {
                    messages.map((message) =>  {
                    return (
                        <div>
                        <p>{message.name}</p>
                        <p>{message.email}</p>  
                        <p>{message.message}</p>
                        <hr />
                    </div>
                    )
                    })
                }
            </div>
        )
}

export default Messages;