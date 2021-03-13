const express = require('express');
const app = express();
const port = 3000;
// routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.send('This is about route');
});

app.listen(port, () => {
    console.log(`Server is running on port!`);
});