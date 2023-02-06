require('dotenv').config();
const db = require('../connection'); //like the pool variable we often use

const getUsers = () => {
  return db.query('SELECT * FROM users;')
    .then(data => {
      return data.rows;
    });
};
getUsers();

module.exports = { getUsers }; //data.rows = an array
