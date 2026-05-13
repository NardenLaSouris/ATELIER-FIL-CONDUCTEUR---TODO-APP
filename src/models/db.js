const { Pool } = require("pg");
require("dotenv").config();

const ssl =
  process.env.NODE_ENV === "production" || process.env.NODE_ENV === "staging"
    ? { rejectUnauthorized: false }
    : false;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: ssl,
});

function query(text, params) {
  return pool.query(text, params);
}

async function initDatabase() {
  await query(`
        CREATE TABLE IF NOT EXISTS todos (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            completed BOOLEAN DEFAULT false,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `);

  console.log("Database initialized");
}

module.exports = {
  query,
  initDatabase,
};
