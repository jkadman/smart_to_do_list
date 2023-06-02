const db = require('../connection');

// list books
const listBooks = async function() {

  return db

    .query(`SELECT * FROM tasks WHERE category_id = 2 LIMIT 10;`)

    .then((result) => {
      console.log(result.rows);//my books
      return result.rows;

    })
    .catch((err) => {
      console.log("Error", err);
    });
};

// get movies
const listMovies = async function() {

  return db

    .query(`SELECT * FROM tasks WHERE category_id = 1 LIMIT 10;`)

    .then((result) => {
      console.log(result.rows);//my books
      return result.rows;

    })
    .catch((err) => {
      console.log("Error", err);
    });
};

//get products
const listProducts = async function() {

  return db

    .query(`SELECT * FROM tasks WHERE category_id = 3 LIMIT 10;`)

    .then((result) => {
      console.log(result.rows);//my books
      return result.rows;

    })
    .catch((err) => {
      console.log("Error", err);
    });
};

// get restaurants
const listRestaurants = async function() {

  return db

    .query(`SELECT * FROM tasks WHERE category_id = 4 LIMIT 10;`)

    .then((result) => {
      console.log(result.rows);//my books
      return result.rows;

    })
    .catch((err) => {
      console.log("Error ", err);
    });
};

// detele queried task
const deleteTask = async function(id) {
  const query =[id];
  return db

    .query(
     `DELETE FROM tasks WHERE id = $1 RETURNING*;`
     , query)

    .then((result) => {
      return result.rows;

    })
    .catch((err) => {
      console.log("Error delete task", err);
    });
};

// get all users
const getUsers = async () => {
  return db.query('SELECT * FROM users;')
    .then(data => {
      return data.rows;
    });
};

module.exports = {listBooks, listMovies, listProducts, listRestaurants, deleteTask, getUsers};
