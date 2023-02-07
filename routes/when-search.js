const express = require('express');
const router  = express.Router();
const db = require('../db/connection');
const adding = require('../db/queries/add-new-book');

router.post('/', async (req, res) => {
  console.log('connected to back-end server');
  const user_input = req.body.search;
  console.log('user_input:', user_input);
  const newBook = await adding.newBook(user_input); //return a promise = async, await
    //newBook = either the right obj or undefined (the promise is resolved)

  /* if (movie api) {
  //   return res.redirect('http://localhost:8080/api/users')
  // } //return = stop here, no return = continue to read the other if statements

  */
  if (newBook) {
    adding.NewRow(newBook, user_input);
    return res.send('a new row of the book list has been added');
  }

  return res.send('the task doesnt belong to books category');
  // return res.redirect('http://localhost:8080/api/users');
});

module.exports = router;
// return res.send('the task doesnt belong to books category');
