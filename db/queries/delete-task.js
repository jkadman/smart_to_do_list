const db = require('../connection');

const deleteTask = function(id) {
  const queryParam=[id];


  return db

    .query(
     `DELETE FROM tasks WHERE id = $1 RETURNING*;`

     , queryParam)

    .then((result) => {
      console.log(result.rows);
      return result.rows;

    })
    .catch((err) => {
      console.log("Error delete task", err);
    });
};

module.exports = deleteTask;
