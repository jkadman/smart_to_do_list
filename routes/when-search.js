const express = require('express');
const router  = express.Router();
const db = require('../db/connection');
const adding = require('../db/queries/add-new-book'); //import functions from add-new-book.js (for book api)

router.post('/', async (req, res) => {
  console.log('connected to back-end server'); //to show the button's link is connected to its server
  const user_input = req.body.search; //req.body = {search: input} of 'data' in app.js (front-end)
  console.log('user_input:', user_input); //to confirm the user input

  const newBook = await adding.newBook(user_input);
  if (newBook) { //if the task is a book; newBook = { title: 'Harry Potter and the Deathly Hallows', pubYear: 2007}
    adding.NewRow(newBook, user_input); //adding a row into the database
    return res.send('a new row belonging to the book list has been added'); //go to DevTools: inspect --> console to see the message
  }

  return res.send('the task doesnt belong to book category'); //if it's not a book, return this message
});

module.exports = router;

//below is my own note, don't bother reading it
//'await' is always used for any func that returns a promise, to resolve the promise and get back either its right output or undefined (an error occurred)
/* if (movie api) {
  //   return res.redirect('http://localhost:8080/api/users')
  // } //when u have a bunch of if statements, a return in one if statement will stop the func from running further,
  no return means that the func will continue to read the other if statements
*/
