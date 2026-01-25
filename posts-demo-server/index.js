var express = require('express');
var sqlite3 = require('sqlite3').verbose();
var path = require('path');
const cors = require('cors');


var db = new sqlite3.Database('./db.sqlite');

var app = express();
app.use(cors());
app.use(express.json());  // parse JSON body

db.run('CREATE TABLE IF NOT EXISTS posts(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, content TEXT, author TEXT, created_at TEXT)');

// Index Route
app.get('/', function(_, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// Show all posts
app.get('/posts', function(_, res) {
  db.all('SELECT * FROM posts', [], (err, rows) => {
    if (err) {
      console.log("Error: ", err.message);
      res.status(500).json({ "error": err.message });
      return;
    }
    if (!rows.length) {
      res.status(404).json({ "error": "No posts found" });
      return;
    }
    console.log('Posts retrieved successfully.');
    res.json(rows);
  });
});

const { Pool } = require('pg');
const { DATABASE_URL } = process.env;
const pool = new Pool({
    connectionString: DATABASE_URL,
    ssl: {
        require: true
    }
});

// Show a post
app.get('/posts/:id', async (req, res) => {
  // Database client
  const client = await pool.connect();

  try{
    //SWL query to get all posts
    const query = 'SELECT * FROM posts';
    // running the query
    const result = await client.query(query);
    // send the result to client
    res.json(result.rows);
  } catch (err){
    console.log(err.stack);
    res.status(500).send('Error retrieving posts');
  } finally {
    //Release the client connection
    client.release();
  }
});

app.listen(3000, function() {
  console.log('App is listening on port 3000');
});
