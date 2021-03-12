import React, { useState, useEffect } from 'react';
import myFirebase from '../config/firebase';

const Messages = () => {
    useEffect(() => {
        // alert('Message component is rendered!')
        myFirebase.database().ref(`contacts`)
        .on('value',(contacts) => {
            contacts.forEach((contact) => {
            console.log(`Each Contact -- ${contact.val().name}`)
            })
        })
    }, [])
        return (
            <div>
                <h1>Messages</h1>
            </div>
        )
    
}

export default Messages;