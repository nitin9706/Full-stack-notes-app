const mysql = require("mysql2"); // MySQL client (supports modern auth)

// Create a connection pool (recommended for production)
const db = mysql.createPool({
  host: process.env.DB_HOST || "mysql", // MySQL service name (Docker)
  user: process.env.DB_USER || "admin", // DB username
  password: process.env.DB_PASSWORD || "admin", // DB password
  database: process.env.DB_NAME || "notes_db", // Database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Test database connection
db.getConnection((err, connection) => {
  if (err) {
    console.error("❌ MySQL connection failed:", err.message);
  } else {
    console.log("✅ Connected to MySQL database");
    connection.release(); // Release connection back to pool
  }
});

module.exports = db; // Export pool for use in app
