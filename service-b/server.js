const express = require('express');
const app = express();
const port = 3002;

app.use(express.json());

app.post('/data', (req, res) => {
    const { data } = req.body;
    if (!data) {
        return res.status(400).json({ error: 'Invalid data' });
    }
    // For now, return hard-coded data
    const result = { message: `Received data: ${data}` };
    return res.json(result);
});

app.listen(port, () => {
    console.log(`Service B running on port ${port}`);
});
