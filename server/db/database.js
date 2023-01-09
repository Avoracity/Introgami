

const Pool = require("pg").Pool;

const host = process.env.DATABASE_HOST
const user = process.env.DATABASE_USER
const password = process.env.DATABASE_PASSWORD

const pool = new Pool({
  host: host,
  user: user,
  password: password,
  database: 'introgami_db',
  port: 5432,
})


// pool requests - query or modify data in database (CRUD)
// communicate with database

const getUsers = (callback) => {
  pool.query('SELECT * FROM users', (err, res) => {
    callback(err, res);
  });
}

const insertUser = (user, callback) => {
  pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [user.name, user.email], (err, res) => {
    callback(err, res);
  });
}

module.exports = {
  getUsers,
  insertUser,
  pool
};
