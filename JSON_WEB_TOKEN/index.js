const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const { DATABASE_URL } = process.env;

const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: {
    require: true,
  },
});

let app = express();
app.use(cors());
app.use(express.json());

async function getPostGresVersion() {
    const client = await pool.connect();
    try {
        const response = await client.query('SELECT version();');
        console.log(response.ros[0]);
    } finally {
        client.release();
    }
}

getPostGresVersion();