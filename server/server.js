require('dotenv').config({ path: '../.env' })

const express = require("express");
const app = express();
const cors = require("cors");
const apiRoutes = require('./api/api.js');
const db = require('./db/database.js');

app.use(cors());
app.use(express.json());

// API routes
app.use('/api', apiRoutes);

app.listen(5432, () => {
  console.log("server has started on port 5432");
});

// pool requests - query or modify data in database (CRUD)
// communicate with database
db.getUsers((err, res) => {
  console.log(err, res);
});

db.insertUser({ name: 'John', email: 'john@example.com' }, (err, res) => {
  console.log(err, res);
});
