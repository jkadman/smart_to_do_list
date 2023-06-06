const express = require('express');
const router  = express.Router();

const addingBook = require('../db/queries/add-new-book'); //import book-api-testing func and add-new-book-row func
// const FoodApi = require('../db/queries/toEat-api'); //import FoodApi func to test
// const ShopApi = require('../db/queries/toBuy-api'); //import ShopApi func to test
// const movieApi = require('../db/queries/towatch-api');
const NewRow2 = require('../db/queries/add-new-row2'); //import adding-new-row func for the other 3 APIs
const { bookAPI, movieApi, foodApi, shopApi } = require('../API/api-calls.js')

router.post('/', async (req, res) => {
  console.log('connected to back-end server'); //to show the button's link is connected to its server
  const user_input = req.body.search; //req.body = {search: input} of 'data' in app.js (front-end)
  console.log('user_input:', user_input); //to confirm the user input
  let nameList = [];

  //the if statements for Food API and shopping API
  let arrQuery = [];
  const resFoodApi = await foodApi(user_input); //success or undefined
  const resShopApi = await shopApi(user_input); //success or undefined
  const resMovieApi = await movieApi(user_input);

  // API for restaurant
  if(resFoodApi) {
    arrQuery.push(`1989-06-06`,`${user_input}`, 4, '2022-06-06'); //for restaurant list, restaurant category has an id of 4
    NewRow2(arrQuery); //NewRow2 is returning a promise with result.rows. We can .then() or await it to get result.rows array to use in other funcs. But if we wanna run the query inside it only, we can just call it and don't have to .then() or await
    console.log('a new row has been added to tasks')
    return nameList.push('a new row belonging to restaurant list has been added');
  };

  // API for shopping
  if(resShopApi) {
    arrQuery.push(`1989-06-06`,`${user_input}`, 3, '2022-06-06'); //for product list, product category has an id of 3
    NewRow2(arrQuery);
    console.log('a new row has been added to tasks')
    return nameList.push('a new row belonging to product list has been added');
  };

  //the if statement for Book API
  const newBook = await addingBook.newBook(user_input);
  if (newBook) { //if the task is a book; newBook = { title: 'Harry Potter and the Deathly Hallows', pubYear: 2007}
    addingBook.NewRow(newBook, user_input); //adding a row into the database, Book list has an id of 2
    console.log('a new row has been added to tasks')
    return nameList.push('a new row belonging to book list has been added'); //go to DevTools: inspect --> console to see the message
  }

  //API for movies
  if(resMovieApi) {
    arrQuery.push(`1989-06-06`,`${user_input}`, 1, '2022-06-06'); //for movie list, movie category has an id of 1
    NewRow2(arrQuery);
    console.log('a new row has been added to tasks')
    return nameList.push('a new row belonging to Movie list has been added');
  }

  return res.json(nameList);
});

module.exports = router;

