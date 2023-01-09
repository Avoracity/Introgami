require('dotenv').config({ path: '../.env' })

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

module.exports = pool;