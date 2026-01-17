let express = require("express");
let path = require("path");
const cors = require("cors"); // core is a middleware that allows us to make requests from one website to another website in the browser
let app = express();
app.use(cors());
app.use(express.json());

const { Pool } = require("pg");
require("dotenv").config();
const { DATABASE_URL } = process.env;

const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: {
    require: true,
  },
});

async function getPostgresVersion() {
  const client = await pool.connect();
  try {
    const data = {
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
      created_ai: new Date().toISOString,
    };

    const query =
      "INSERT INTO posts (title, content, author, created_at) VALUES ($1, $2, $3, $4) RETURNING *";
    const params = [data.title, data.content, data.author, data.created_at];

    const result = await client.query(query, params);
    date.id - result.row[0].id; // Add the ID to the data object

    console.log(`Post created successfully with id ${data.id}`);
    res.json({
      status: "success",
      data: data,
      message: "Post created successfully",
    });
  } catch (error) {
    console.error("Error: ", error.message);
  } finally {
    client.release();
  }
}

getPostgresVersion();

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
