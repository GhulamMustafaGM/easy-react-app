import React, { useState, useEffect } from 'react';
import axios from 'axios';
import user from '../../backend/models/user';

const Portfolio = () => {
    const [users,setUsers] = useState({
        id: '',
        name: '',
        date: '',
        age: null
    })
    useEffect(() => {
        // making GET request
        axios.get('/users')
        .then((users) => {
            console.log(users.data)
            setUsers({
                id:users.data._id,
                name:users.data.name,
                date:users.data.date,
                age:users.data.age
            })
        })
        .catch((e) => console.log(e))
    }, [])

        return (
            <div>
                <h1>Portfolio Page</h1>
                <p>{users.name}</p>
                <p>{users.age}</p>
            </div>
        )
}

export default Portfolio;

