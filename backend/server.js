const express = require('express');
const app = express();
const keys = require('./config/keys');
const mongoose = require('mongoose');

// Load models
const User = require('./models/user');
const port = 3000;

// connect to MongoDB
mongoose.connect(keys.MongoDB_URI, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}, () =>  {
    console.log('Connected to remote MongoDB ..')
});
// routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.send('This is about route');
});

app.get('/contact', (req, res) => {
    res.json({
        'title': 'This is contact route'
    });
});

// User route

app.get('/users', (req, res) => {
    const newUser = {
        name: 'John',
        age: 20,
        isGraduated: true
    }
    new User(newUser).save((err,user) => {
        if(err) {
            console.log(err)
        }
        if(user) {
            res.json(user)
        }
    })
});

app.listen(port, () => {
    console.log(`Server is running on port!`);
});