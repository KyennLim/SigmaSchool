import 'dotenv/config';
import express from 'express';
import path from 'path';
import cors from 'cors';
import pg from 'pg';
import { fileURLToPath } from 'url';

const { Pool } = pg;

// Get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

const { DATABASE_URL } = process.env;

console.log('DATABASE_URL exists:', !!DATABASE_URL);
if (!DATABASE_URL) {
    console.error('❌ DATABASE_URL not found in .env file!');
    process.exit(1);
}

const pool = new Pool({
    connectionString: DATABASE_URL,
    ssl: {
        require: true
    }
});

// Index route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Show all posts - FIXED to use PostgreSQL
app.get('/posts', async (req, res) => {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM posts');
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "No posts found" });
    }
    
    console.log('Posts retrieved successfully.');
    res.json(result.rows);
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ error: err.message });
  } finally {
    client.release();
  }
});

// Show a single post
app.get('/posts/:id', async (req, res) => {
  const client = await pool.connect();

  try {
    const query = 'SELECT * FROM posts WHERE id = $1';
    const result = await client.query(query, [req.params.id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Post not found' });
    }
    
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.stack);
    res.status(500).json({ error: 'Error retrieving post' });
  } finally {
    client.release();
  }
});

// Create a new post
app.post('/posts', async (req, res) => {
  const { title, content, author } = req.body;
  
  if (!title || !content || !author) {
    return res.status(400).json({ error: 'Title, content, and author are required' });
  }
  
  const client = await pool.connect();
  try {
    const result = await client.query(
      'INSERT INTO posts (title, content, author, created_at) VALUES ($1, $2, $3, NOW()) RETURNING *',
      [title, content, author]
    );
    
    res.status(201).json({
      status: "success",
      message: "Post created successfully",
      post: result.rows[0]
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  } finally {
    client.release();
  }
});

// Update a post
app.put('/posts/:id', async (req, res) => {
  const { id } = req.params;
  const { title, content, author } = req.body;
  
  if (!title || !content || !author) {
    return res.status(400).json({ error: 'Title, content, and author are required' });
  }
  
  const client = await pool.connect();
  try {
    const result = await client.query(
      'UPDATE posts SET title = $1, content = $2, author = $3 WHERE id = $4 RETURNING *',
      [title, content, author, id]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Post not found' });
    }
    
    res.json({
      status: "success",
      message: "Post updated successfully",
      post: result.rows[0]
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  } finally {
    client.release();
  }
});

// Delete a post
app.delete('/posts/:id', async (req, res) => {
  const id = req.params.id;
  const client = await pool.connect();

  try {
    const deleteQuery = 'DELETE FROM posts WHERE id = $1';
    await client.query(deleteQuery, [id]);

    res.json({"Status": "success", "message": "Post deleted successfully"});
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  } finally {
    client.release();
  }
});

app.listen(3000, () => {
  console.log('App is listening on port 3000');
});