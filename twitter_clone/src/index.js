import express from 'express';
import cors from 'cors';
import pg from 'pg';
const { Pool } = pg;
import dotenv from 'dotenv';
import process from 'process';

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

app.post('/posts', async (req, res) => {
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

// Adding a like to a post
app.post('/likes', async (req, res) => {
    const { post_id, user_id } = req.body;

    const client = await pool.connect();
    
    try {
        const newlike = await client.query('INSERT INTO likes (post_id, user_id) VALUES ($1, $2) RETURNING *', [post_id, user_id]);
        res.json(newlike.rows[0]);
    } catch(err) {
        console.log(err.stack);
        res.status(500).send('An error occurred, please try again later.');
    } finally {
        client.release();
    }
});

// Delete a like from a post
app.delete('/likes/:id', async (req, res) => {
    const { id } = req.params;
    
    const client = await pool.connect();

    try {
        await client.query('DELETE FROM likes WHERE id = $1', [id]);
        res.json({ message: "Like deleted successfully" });
    } catch(err) {
        console.log(err.stack);
        res.status(500).send('An error occurred, please try again later.');
    } finally {
        client.release();
    }
});

function incrementLikeCount(post_id) {
    return new Promise((resolve, reject) => {
        (async () => {
            const client = await pool.connect();

            try {
                await client.query('UPDATE posts SET views = views + 1 WHERE id = $1', [post_id]);
                resolve();
            } catch(err) {
                console.log(err.stack);
                reject('An error occurred, please try again later.');
            } finally {
                client.release();
            }
        })();
    });
}

// see all likes for a post
app.get('/likes/post/:id', async (req, res) => {
    const { id } = req.params;

    const client = await pool.connect();

    try {
        const likes = await client.query(`SELECT users.username FROM likes JOIN users ON likes.user_id = users.id WHERE likes.post_id = $1`, [id]);
        incrementLikeCount(id);
        res.json(likes.rows);
    } catch(err) {
        console.log(err.stack);
        res.status(500).send('An error occurred, please try again later.');
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