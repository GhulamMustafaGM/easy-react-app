import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Portfolio = () => {
    const [users,setUsers] = useState([])
    useEffect(() => {
        axios.get('/users')
        .then((users) => {
            console.log(users)
        })
        .catch((e) => console.log(e))
    }, [])

        return (
            <div>
                <h1>Portfolio Page</h1>
            </div>
        )
}

export default Portfolio;

