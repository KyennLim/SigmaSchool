// index.js
import express from 'express';
import pg from 'pg';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';

// Need these for __dirname in ES6 modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // Add this to parse JSON bodies

const { Pool } = pg; // Changed from require
const { DATABASE_URL } = process.env;

const pool = new Pool({
    connectionString: DATABASE_URL,
    ssl: {
        require: true
    }
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// NEW: Route to fetch data from the 'db' table
app.get("/data", async (req, res) => {
  try {
    // 1. Get a client from the pool
    const result = await pool.query('SELECT * FROM db'); 
    
    // 2. Send the rows back to the client
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Catch 404 and forward to error handler
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});