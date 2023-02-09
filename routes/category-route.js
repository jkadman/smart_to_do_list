
const express = require('express');
const router = express.Router();
const listBooks = require('../db/queries/list-of-books');
const listMovies= require('../db/queries/list-of-movies');
const listRestaurants=require('../db/queries/list-of-restaurants');
const listProducts = require('../db/queries/list-of-products');
router.get('/:id', (req, res) => {
 // console.log('id:', req.params.id);

const id=req.params.id;

  if (id===':to-buy') {
    listProducts().then(tasks=>{
      const templateVars={list:tasks}
      res.render("purchase", templateVars)})
    .catch(e => {
      console.error("Product error",e);
      res.send(e)
    });


  }
   if (id===':to-eat') {
    listRestaurants().
    then(tasks=>{

      const templateVars={list:tasks}
      res.render("restaurant",templateVars)})
    .catch(e => {
      console.error("Restaurant error",e);
      res.send(e)
    });

  }

   if (id===':Movie') {
    listMovies()
    .then(tasks=>{
      const templateVars={list:tasks}
      //console.log("MOVIESSS LIST", templateVars);
      res.render("movies", templateVars)})

    .catch(e => {
      console.error("MOvies error",e);
      res.send(e)
    });

  }
   if (id===':to-read') {
    listBooks()
    .then(tasks=>{
      const templateVars={list:tasks}//object list with array of books
        //console.log('BOOKS LIST', templateVars);

      res.render("books", templateVars)})
         .catch(e => {
          console.error("To read error",e);
          res.send(e)
        });
  }
 // res.render("category-page");
});

module.exports = router;
