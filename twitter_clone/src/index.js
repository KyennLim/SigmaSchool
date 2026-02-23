import express from 'express';
import cors from 'cors';
import pg from 'pg';
const { Pool } = pg;
import dotenv from 'dotenv';
import process from 'process';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const { DATABASE_URL, SECRET_KEY } = process.env;

let app = express();
app.use(cors());
app.use(express.json());


const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: {
    require: true,
  },
});

async function getPostgresVersion() {
  const client = await pool.connect();
  try {
    const res = await client.query('SELECT version()');
    console.log(res.rows[0]);
  } finally {
    client.release();
  }
}

getPostgresVersion();

// Signup endpoint
app.post('/signup', async (req, res) => {
  const client = await pool.connect();
  try {
    // Hash the password and check existence of username
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);
    
    // Check for existing username
    const userResult = await client.query('SELECT * FROM users WHERE username = $1', [username]);

    // If username already exists, return response
    if (userResult.rows.length > 0) {
      return res.status(400).json({ message: "Username already taken." });
    }

    await client.query('INSERT INTO users (username, password) VALUES ($1, $2)',
      [username, hashedPassword]);

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error('Error: ', error.message);
    res.status(500).json({ error: error.message });
  } finally {
    client.release();
  }
});

// Log in endpoint
app.post('/login', async (req, res) => {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM users WHERE username = $1', [req.body.username]);

    const user = result.rows[0];

    if (!user) return res.status(400).json({ message: "Username or password incorrect" });

    const passwordIsValid = await bcrypt.compare(req.body.password, user.password);
    if (!passwordIsValid) return res.status(401).json({ auth: false, token: null });

    var token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: 86400 });
    res.status(200).json({ auth: true, token: token });
  } catch (error) {
    console.error('Error: ', error.message);
    res.status(500).json({ error: error.message });
  } finally {
    client.release();
  }
});

app.get('/username', (req, res) => {
  // Check if the Authorization Bearer token was provided
  const authToken = req.headers.authorization;

  if (!authToken) return res.status(401).json({ error: 'Access Denied' });

  try {
    // Verify the token and fetch the user information
    const verified = jwt.verify(authToken, SECRET_KEY);
    res.json({
      username: verified.username // Here, fetching the username from the token
    });
  } catch (err) {
    // Return an error if the token is not valid
    res.status(400).json({ error: 'Invalid Token' });
  }
});

app.get('/posts/user/:user_id', async (req, res)=>{
    const { user_id } = req.params;
    const client = await pool.connect();

    try {
        const posts = await client.query('SELECT * FROM posts WHERE user_id = $1', [user_id]);
        if (posts.rowCount>0){
            res.json(posts.rows);
        } else {
            res.status(404).json({ error: 'No posts found for this user'});
        }
    } catch (error) {
        console.error('Error', error.message);
        res.status(500).json({error: error.message});
    } finally{
        client.release();
    }
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, () => {
  console.log('App is listening on port 3000');
});