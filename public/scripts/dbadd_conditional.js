// require('dotenv').config()
const { Pool } = require('pg')
const { query } = require('express');


const config = {
  user: 'labber', //process.env.DB_user,
  password: 'labber', //process.env.DB_pass,
  host: 'localhost', //process.env.DB_host,
  database: 'midterm' //process.env.DB_data
}

const pool = new Pool(config);

pool.connect();

const categorize = function(searchQuery, searchResult, category) {

  if (searchResult.length > 0) {
    const text = `INSERT INTO categories (name) VALUES ('movie');
    INSERT INTO TASKS (name, category_id, start_date, end_date) VALUES ('conan', 15, 'jan 15 1980', 'jan 16 1980');
    `;
    const values = [`${category}`, `${searchQuery}`]
  }

  return pool
    .query(text)
    .then((result) => {
      console.log(result.rows[0])
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err)
    })
}


module.exports = {categorize};
