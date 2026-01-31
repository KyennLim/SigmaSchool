import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import express, { json } from 'express';
import cors from 'cors';
import pkg from 'pg';
const { Pool } = pkg;
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

// Create __dirname equivalent for ES6 modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { DATABASE_URL, SECRET_KEY } = process.env;

const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: {
    require: true,
  },
});

let app = express();
app.use(cors());
app.use(json());

async function getPostGresVersion() {
    const client = await pool.connect();
    try {
        const response = await client.query('SELECT version();');
        console.log(response.rows[0]);
    } finally {
        client.release();
    }
}

getPostGresVersion();



// Signup endpoint
app.post('/signup', async (req, res) => {
    const client = await pool.connect();
    try {
        //Hash the password and check existance of username
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 12);

        // Check for existing username
        const userResult = await client.query('SELECT * FROM users WHERE username = $1', [username]);
        if (userResult.rows.length > 0) {
            return res.status(400).json({ message: "Username already taken."});
        }

        // if username doesn't exist, then we proceed with the rest of the code
        await client.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, hashedPassword]);

        res.status(201).json({ message: "User Registered successfully."});
    } catch (error) {
        console.error('Error: ', error.message)
        res.status(500).json({error: error.message })
    } finally {
        client.release();
    }
})

// Login endpoint
app.post('/login', async (req, res) => {
    const client = await pool.connect();
    try {
        const { username, password } = req.body;
        
        const result = await client.query('SELECT * FROM users WHERE username = $1', [username]);

        const user = result.rows[0];

        if (!user) return res.status(400).json({ message: "Invalid username or password."});

        const passwordIsValid = await bcrypt.compare(password, user.password);
        if (!passwordIsValid) return res.status(400).json({ auth: false, token: null });

        const token = jwt.sign(
            { id: user.id, username: user.username }, 
            SECRET_KEY, 
            { expiresIn: 86400 }
        ); // 24 hours
        
        res.status(200).json({ auth: true, token: token });
    } catch (error) {
        console.error('Error: ', error.message)
        res.status(500).json({error: error.message })
    } finally {
        client.release();
    }
});

// username
app.get('/username', async (req, res) => {
    // Check if the Authorization Bearer was provided
    const authToken = req.headers.authorization;

    if (!authToken) return res.status(401).json({ error: 'Access Denied. '});


    try {
        // verify the token and fetch the user information
        const verified = jwt.verify(authToken, SECRET_KEY);
        res.json({
            username: verified.username // Here, fetching the username from the token
        });
    } catch (error) {
        res.status(400).json({ error: 'Invalid Token' });
    }
});


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Catch 404 and forward to error handler
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
