/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */


const express = require('express');
const router  = express.Router();
const deleteTask = require('../db/queries/dbqueries');

//set cookie
router.get('/', (req, res) => {

  res.cookie('user_id', '1');

  res.redirect('/');
});

// delete user task
router.post('/:id/delete', (req, res) => {

  deleteTask(req.params.id)

  .catch(e => {
    console.error(e);
  });
});



module.exports = router;
