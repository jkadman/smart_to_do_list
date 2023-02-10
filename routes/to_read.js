const axios = require('axios');
const { Pool } = require('pg')
const { query } = require('express');

// console.log('proceeenv:', process.env)

// const config = {
//   user: process.env.DB_user,
//   password: process.env.DB_pass,
//   host: process.env.DB_host,
//   database: process.env.DB_data
// }

const config = {
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'midterm'
}

const pool = new Pool(config);

pool.connect();

const categorize = function(searchQuery, category) {

  const text = `INSERT INTO categories (name) VALUES ($1);`;
  const values = [`${category}`]

  return pool
    .query(text, values)
    .then((result) => {
      console.log(result.rows)
      return result.rows[0];
    })
    .then((result) => {
      const text = `INSERT INTO TASKS (name) VALUES ($1);`
      const values = [`${searchQuery}`]

      return pool
      .query(text, values)
      .then((result) => {
        return result.rows[0]
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

// categorize('Moby Dick', 'book')
module.exports = categorize;

// request('https://openlibrary.org/search.json?q=${user_input}', function (error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

let searchQuery = 'dksfhdskjfhdf';

let searchQuery2 = 'The Lord of the Rings'

// let searchQuery3 = 'indish'

// let searchQuery4 = 'running-sneaker'

const urlMovie = `https://api.themoviedb.org/3/search/movie?api_key=a3a238db7e3932463061304b7f22746a&query=${searchQuery2}`;

const urlBook = `https://openlibrary.org/search.json?q=${searchQuery2}`;

// const urlFood = `http://data.streetfoodapp.com/1.1/vendors/${searchQuery3}`

// const urlShop = `https://api.storerestapi.com/products/${searchQuery4}`


const request1 = axios.get(urlMovie);
const request2 = axios.get(urlBook)
// const request3 = axios.get(urlFood)
// const request4 = axios.get(urlShop)

newArray = [];

request1.then((response) => {
  const result = response.data.results[0].original_title;
  console.log(result)
  newArray.push(response.data.results)
  // categorize(searchQuery2, result, book)
  // console.log(response.data.results)
})
// request2.then((response) => {
//   // console.log(response.data.docs)
//   const result = response.data.results;
//   newArray.push(response.data.docs)
// })
// request3.then((response) => {
//   const result = response.data.name
//   console.log(result)
// })
// request4.then((response) => {
//   const result = response.data.message
//   console.log(result)
// })
// .catch((err) => {
//   console.log(err)
// })
// .then((response) => {
//     if (newArray.length > 0) {

//       console.log('it works!')
//  request1.then((response) => {
//    const result = response.data.results;
//   newArray.push(response.data.results)
//   // categorize(searchQuery2, result, book)
//   // console.log(response.data.results)
// })
// request2.then((response) => {
//   // console.log(response.data.docs)
//   const result = response.data.results;
//      newArray.push(response.data.docs)
//  })
// request3.then((response) => {
//    const result = response.data.name
// //   console.log(result)
//  })


// const urlShop = `https://api.storerestapi.com/products/${searchQuery4}`
// let searchQuery4 = 'running-sneaker'
// let searchQuery3 = 'indish'





// const queryFunc = function(query) {
//   const urlFood = `http://data.streetfoodapp.com/1.1/vendors/${query}`
//   const url = axios.get(urlFood)
//   newArr = []
//   url.then((response) => {
//     const result = response.data.name
//     console.log(result);
//     newArr.push(result)
//   })
//   .then((response) => {
//     if (newArr.length > 0) {
//       categorize(newArr)
//     } else {
//       console.log('no such item')
//     }
//   })
//   .catch((err) => {
//     console.log(err.code)
//   })
// }

// queryFunc('indi');

// request4.then((response) => {
//   const result = response.data.message
//   console.log(result)
// })
// .catch((err) => {
//   console.log(err)
// })
//  .then((response) => {
//     if (newArray.length > 0) {

//      console.log('it works!')

//       // console.log(newArray)

//     } else {

//       console.log('no beano')
//     }
// })

//   } else {

//       console.log('no beano')
//     }
// })
