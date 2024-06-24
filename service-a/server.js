const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;

app.use(express.json());

app.post('/process', async (req, res) => {
    const { data } = req.body;
    if (!data) {
        return res.status(400).json({ error: 'Invalid data' });
    }
    try {
        const response = await axios.post('http://localhost:3002/data', { data });
        return res.json(response.data);
    } catch (error) {
        return res.status(500).json({ error: 'Error calling Service B' });
    }
});

app.listen(port, () => {
    console.log(`Service A running on port ${port}`);
});
module.exports = app;
