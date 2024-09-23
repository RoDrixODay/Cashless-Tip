const express = require('express');
const db = require('./db');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Example route to test the database connection
app.get('/test-db', async (req, res) => {
  try {
    const [rows, fields] = await db.query('SELECT 1 + 1 AS solution');
    res.json({ solution: rows[0].solution });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
