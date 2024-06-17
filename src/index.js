const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

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

// PUT endpoint
app.put('/my-endpoint', (req, res) => {
    const { id, name, project } = req.body;
    if (!id || !name || !project) {
        return res.status(400).json({ message: 'ID, name, and project are required' });
    }
    res.json({ message: `Project with ID ${id} has been updated to: Name - ${name}, Project - ${project}` });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
