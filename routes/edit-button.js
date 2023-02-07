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

/*
//to handle the edit button
app.post("/urls/:id/edit", (req, res) => {
  const urlId = req.params.id; // = shortened URL = b2xVn2 / 9sm5xK
  const userID = req.session.user_id;
  if (!urlDatabase[urlId]) return res.send('the URL id does not exist');
  if(!userID) return res.send('you need to login or register first');
  if (urlDatabase[urlId].userID !== userID) return res.send('you do not own this URL page');

  urlDatabase[urlId].longURL = req.body.longURL; //update the longURL of an ID
  res.redirect("/urls"); //redirect to the home page
});
*/
