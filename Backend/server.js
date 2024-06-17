const express = require('express');
const app = express();
const port = 3000;

app.get('/my-endpoint', (req, res) => {
    res.json({ message: 'Hello, This is my Capstone Project' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:3000`);
});
