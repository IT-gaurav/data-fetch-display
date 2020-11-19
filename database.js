const sqlite3 = require("sqlite3").verbose();

// open the database
const db = new sqlite3.Database(
  "./Database/data.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Connected to database.");
  }
);

module.exports = db;
