const db = require('../connection');

const deleteTask =async function(id) {
  const queryParam=[id];
  await db.connect();

  return db

    .query(
     `DELETE FROM tasks WHERE id = $1 RETURNIG*;`
     
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
