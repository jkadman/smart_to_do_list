const db = require('../connection');

const listBooks = function() {

  return db

    .query(`SELECT * FROM tasks WHERE category_id = 2`)

    .then((result) => {
      console.log(result.rows);//my books
      return result.rows;

    })
    .catch((err) => {
      console.log("Error", err);
    });
};

module.exports = listBooks;
