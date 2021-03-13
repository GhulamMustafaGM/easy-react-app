const express = require('express');
const app = express();
const keys = require('./config/keys');
const mongoose = require('mongoose');

const port = 3000;

// connect to MongoDB
mongoose.connect(keys.MongoDB_URI, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}, () =>  {
    console.log('Connected to MongoDB ..')
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

app.listen(port, () => {
    console.log(`Server is running on port!`);
});