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

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Catch 404 and forward to error handler
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});