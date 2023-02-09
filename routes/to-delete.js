
const express = require('express');
const router  = express.Router();
const deleteTask = require('../db/queries/delete-task');

    router.post('/:id/delete', (req, res) => {

      console.log('ID', req.params.id);
      deleteTask(req.params.id)
      .then(task => {
      res.send('Task deleted');
    })
    .catch(e => {
      console.error("Other Error",e);
      res.send(e)
    });

    });



module.exports = router;

