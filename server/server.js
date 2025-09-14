const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 3005;
app.use(cors());

const data = require('./sampledata.json');

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send(`Welcome to the transformer api server!`);
});

// Define api call for getting transformers
app.get('/transformers', (req, res) => {
    res.json(data);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});