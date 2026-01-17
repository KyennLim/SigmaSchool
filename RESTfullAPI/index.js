let express = require("express");
let path = require("path");
let app = express();

const { Pool } = require("pg");
require("dotenv").config();
const { DATABSE_URL } = process.env;

const pool = new Pool({
  connectionString: DATABSE_URL,
  ssl: {
    require: truel,
  },
});

async function getPostgresVersion() {
  const client = await pool.connect();
  try {
    const response = await client.query("SELECT version()");
    console.log(response.rows[0]);
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
