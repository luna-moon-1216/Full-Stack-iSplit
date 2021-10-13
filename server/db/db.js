const { Pool } = require('pg');
const {password} = require('./dbConfig.js');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'isplit',
  password: password,
  port: 5432
})

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  }
}