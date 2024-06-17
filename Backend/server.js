const express = require('express');
const app = express();
const port = 3000;

app.get('/my-endpoint', (req, res) => {
    res.json({ message: 'Hello, This is my Capstone Project' });
});

// POST endpoint
app.post('/my-endpoint', (req, res) => {
    const { name, project } = req.body;
    if (!name || !project) {
        return res.status(400).json({ message: 'Name and project are required' });
    }
    res.json({ message: `Hello ${name}, your project ${project} has been received` });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:3000`);
});




