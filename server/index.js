const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const { Client } = require('pg')

app.use(cors());
app.use(express.json()); // req.body
// routes 

app.get('/introgami_db', (req, res) => {
    pool.query('SELECT 1;', (error, result) => {
      if (error) {
        res.status(500).json({ error: 'Error connecting to the database' })
      } else {
        res.json({ result: result.rows[0] })
      }
    })
  })

//middleware
app.use(cors());
app.use(express.json());

app.listen(5690, () => {
    console.log("server has started on port 5690");
});

// pool requests
pool.query('SELECT * FROM users', (err, res) => {
    console.log(err, res)
  })
  
  // Don't forget to close the pool when you're finished
  pool.end()