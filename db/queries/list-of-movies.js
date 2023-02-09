const db = require('../connection');

const listMovies = function() {

  return db

    .query(`SELECT * FROM tasks WHERE category_id = 1;`)

    .then((result) => {
      console.log(result.rows);//my books
      return result.rows;

    })
    .catch((err) => {
      console.log("Error", err);
    });
};

module.exports = listMovies;
