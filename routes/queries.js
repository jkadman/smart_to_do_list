const axios = require('axios');
const express = require('express');
const router  = express.Router();


// router.get('/bo', (req, res) => {
//   res.send('route test')
// })


router.get('/', (req, res) => {
  res.render('/')
})


// function to generate random string
const generateRandomString = function() {
  return Math.floor((1 + Math.random()) * 0x1000000).toString(16).substring(1);
};

// sample database to store interests
const interestDatabase = {};

router.post('/queries', (req, res) => {

newId = generateRandomString();

const searchQuery = req.body.searching;

const urlMovie = `https://api.themoviedb.org/3/search/movie?api_key=a3a238db7e3932463061304b7f22746a&query=${searchQuery}`;

const urlBook = `https://openlibrary.org/search.json?q=${searchQuery}`;


const request1 = axios.get(urlMovie);
const request2 = axios.get(urlBook)

newArray = [];

request1.then((response) => {
  newArray.push(response.data.results)
  // console.log(response.data.results)
})
request2.then((response) => {
  // console.log(response.data.docs)
  newArray.push(response.data.docs)
})
.then((response) => {
  if (newArray.length > 0) {

    interestDatabase = {
      newId: searchQuery
    };

    console.log(interestDatabase)
    // console.log(newArray)

  } else {

    console.log('nope')
  }
})

res.send('Ok')
})



// router.post('/', (req, res) => {
//   console.log(req.body); // Log the POST request body to the console
//   res.send("Ok"); // Respond with 'Ok' (we will replace this)
// })

module.exports = router;
