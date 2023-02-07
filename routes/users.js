/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const cookieParser = require('cookie-parser')

router.use(cookieParser())

router.get('/', (req, res) => {

  res.cookie('user_id', '1');

  const templateVars = {
    user_id: req.cookies["user_id"],
  };

  // send the user somewhere
  res.redirect('/', templateVars);
});

// router.get('/', (req, res) => {

//   res.render('index');1
// });



module.exports = router;
