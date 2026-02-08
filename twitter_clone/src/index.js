import express from 'express';
import cors from 'cors';
import pg from 'pg';
const { Pool } = pg;
import dotenv from 'dotenv';

dotenv.config();
const { DATABASE_URL } = process.env;

let app = express();
app.use(cors());
app.use(express.json());

// Connect to the database
const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

async function getPostgesVersion() {
    const client = await pool.connect();

    try {
        const res = await client.query('SELECT version()');
        console.log(res.rows[0].version);
    } finally {
        client.release();
    }
}

getPostgesVersion();

app.post('/post', async (req, res) => {
    const { title, content, user_id } = req.body;
    const client = await pool.connect();

    try {
        // check if user exists
        const userExists = await client.query('SELECT * FROM users WHERE id = $1', [user_id]);
        if (userExists.rows.length > 0) {
            // User exist, add post
            const post = await client.query('INSERT INTO posts (title, content, user_id, created_at) VALUES ($1, $2, $3, CURRENT_TIMESTAMP) RETURNING *', [title, content, user_id]);
            // Send new post data back to client
            res.json(post.rows[0]);
        } else {
            // User does not exist, send error response
            res.status(400).json({ error: "User does not exist" });
        }
    } finally {
        client.release();
    }
});

app.get('/', (req, res) => {
    res.status(200).json({ message: "Welcome to the twitter API!"});
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});