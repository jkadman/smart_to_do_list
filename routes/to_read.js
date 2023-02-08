const axios = require('axios');
// const categorize = require('./public/scripts/categorize')

// request('https://openlibrary.org/search.json?q=${user_input}', function (error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

let searchQuery = 'dksfhdskjfhdf';

let searchQuery2 = 'The Lord of the Rings'

let searchQuery3 = 'indish'

let searchQuery4 = 'men\'s clothing'

const urlMovie = `https://api.themoviedb.org/3/search/movie?api_key=a3a238db7e3932463061304b7f22746a&query=${searchQuery2}`;

const urlBook = `https://openlibrary.org/search.json?q=${searchQuery2}`;

const urlFood = `http://data.streetfoodapp.com/1.1/vendors/${searchQuery3}`

const urlShop = `https://fakestoreapi.com/products/category/${searchQuery4}`


const request1 = axios.get(urlMovie);
const request2 = axios.get(urlBook)
const request3 = axios.get(urlFood)
const request4 = axios.get(urlShop)

newArray = [];

 request1.then((response) => {
   const result = response.data.results;
  newArray.push(response.data.results)
  // categorize(searchQuery2, result, book)
  // console.log(response.data.results)
})
request2.then((response) => {
  // console.log(response.data.docs)
  const result = response.data.results;
     newArray.push(response.data.docs)
 })
request3.then((response) => {
   const result = response.data.name
//   console.log(result)
 })
request4.then((response) => {
  const result = response.data
  console.log(result)
})
.catch((err) => {
  console.log(err)
})
 .then((response) => {
    if (newArray.length > 0) {

     console.log('it works!')

      // console.log(newArray)

  } else {

      console.log('no beano')
    }
})
