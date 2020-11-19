// Create express app
let express = require("express");
let app = express();
let db = require("./database.js");
let cors = require("cors");

app.use(cors());

// Server port
let HTTP_PORT = 8000;
// Start server
app.listen(HTTP_PORT, () => {
  console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT));
});

app.get("/", (req, res, next) => {
  let sql = "SELECT * FROM table1 where STATUS = 'Open'";
  let params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

// Insert here other     API endpoints

// Default response for any other request
app.use(function (req, res) {
  res.status(404);
});
