// Backend server using Node.js and Express

const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());

// PostgreSQL configuration
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'library',
  password: '1234',
  port: 5432, // PostgreSQL default port
});

// Example endpoint to fetch data from the database
app.get('/api/lib', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM librarians');
    client.release();
    res.json(result.rows);
    console.log('Fetched data:', result.rows);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching data', error: err });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
