const db = require('../connection');

const listProducts = function() {

  return db

    .query(`SELECT * FROM tasks WHERE category_id = 3;`)

    .then((result) => {
      console.log(result.rows);//my books
      return result.rows;

    })
    .catch((err) => {
      console.log("Error", err);
    });
};

module.exports = listProducts;
