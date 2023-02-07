// require('dotenv').config()
const { Pool } = require('pg')
const { query } = require('express');

// console.log('proceeenv:', process.env)

// const config = {
//   user: process.env.DB_user,
//   password: process.env.DB_pass,
//   host: process.env.DB_host,
//   database: process.env.DB_data
// }

const config = {
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'midterm'
}

const pool = new Pool(config);

pool.connect();

const categorize = function(searchQuery, category) {

  const text = `INSERT INTO categories (name) VALUES ($1);`;
  const values = [`${category}`]

  return pool
    .query(text, values)
    .then((result) => {
      console.log(result.rows)
      return result.rows[0];
    })
    .then((result) => {
      const text = `INSERT INTO TASKS (name) VALUES ($1);`
      const values = [`${searchQuery}`]

      return pool
      .query(text, values)
      .then((result) => {
        return result.rows[0]
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

categorize('Moby Dick', 'book')
module.exports = {categorize};
