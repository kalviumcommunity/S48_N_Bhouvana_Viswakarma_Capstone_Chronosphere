const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const watchRoutes = require('./routes/watches'); // Adjust path if needed

const app = express();
const port = process.env.PORT || 2000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://bhouvana:FO5KzR5350F6kKPN@cluster0.0equbxr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Use routes
app.use('/watches', watchRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
