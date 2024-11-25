const express = require("express");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Get the database path from the environment variable or use the local fallback
const dbPath = process.env.DATABASE_URL ? process.env.DATABASE_URL.replace("sqlite://", "") : "database.db";
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Failed to connect to the database:", err.message);
  } else {
    console.log("Connected to the SQLite database.");
  }
});

// Initialize database table
db.serialize(() => {
  db.run(
    `CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id TEXT NOT NULL,
      action TEXT,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    )`
  );
});

// API Endpoints

// Record user actions
app.post("/track", (req, res) => {
  const { action, user_id } = req.body;

  // If no user_id is provided, generate one
  const newUserId = user_id || uuidv4();

  if (!action) {
    return res.status(400).json({ error: "Action is required" });
  }

  db.run(
    "INSERT INTO users (user_id, action) VALUES (?, ?)", // Use user_id instead of id
    [newUserId, action],
    function (err) {
      if (err) {
        console.error("Error inserting data:", err.message); // Log the error for debugging
        return res.status(500).json({ error: err.message });
      }

      res.json({ user_id: newUserId, action });
    }
  );
});

// Retrieve metrics
app.get("/metrics", (req, res) => {
  db.all(
    `SELECT action, COUNT(*) as count FROM users GROUP BY action`,
    [],
    (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      res.json(rows);
    }
  );
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
