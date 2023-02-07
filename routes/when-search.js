const express = require('express');
const router  = express.Router();
const db = require('../db/connection');
const adding = require('../db/queries/add-new-book');

router.post('/', (req, res) => {
  console.log('connection to backend');
  const user_input = req.body.search;
  console.log('data:', user_input);
  adding.NewRow(adding.newBook(user_input));
  res.send('new row of book added');
});

module.exports = router;
