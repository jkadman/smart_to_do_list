const express = require('express');
const router  = express.Router(); //= the app variable we often use
const use = require('../db/queries/add-new-book');

router.get('/', (req, res) => {
  use.NewRow()
    .then(users => {
      res.json({ users }); //data.rows array in json format
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router; //= route + data.rows = router with the .get(callback) saved into it
