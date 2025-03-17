const express = require('express');
const path = require('path');

const app = express();

// Get the correct path for the frontend
const frontendPath = path.join(__dirname, 'frontend');

// Serve static frontend files
app.use(express.static(frontendPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'));
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Frontend server running on http://127.0.0.1:${PORT}`);
});
