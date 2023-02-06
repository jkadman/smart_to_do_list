const axios = require('axios');

// request('https://openlibrary.org/search.json?q=${user_input}', function (error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

let searchQuery = 'dksfhdskjfhdf';

let searchQuery2 = 'The Lord of the Rings'

let searchQuery3 = 'Moby Dick'

// let query = axios({
//   method: 'get',
//   url: `https://openlibrary.org/search.json?q=${searchQuery3}`,
// })
//   .then(function (response) {
//     // console.log(response.data.docs[0].title)
//     return response.data.docs[0].title
//   })
//   .catch((err) => {
//     console.log(err)
//   })

// if (query !== undefined) {
//   console.log('did it!')
// }


const urlMovie = `https://api.themoviedb.org/3/search/movie?api_key=a3a238db7e3932463061304b7f22746a&query=${searchQuery2}`;

const urlBook = `https://openlibrary.org/search.json?q=${searchQuery2}`;


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

    console.log('it works!')

    // console.log(newArray)

  } else {

    console.log('no beano')
  }
})

// let query = axios({
//   method: 'get',
//   url: `https://api.themoviedb.org/3/search/movie?api_key=a3a238db7e3932463061304b7f22746a&query=${searchQuery2}`,
// })
//   .then(function (response) {
//     // console.log(response.data.docs[0].title)
//     // let result = response.data.results[1].original_title
//     let result = response.data.results
//         // console.log(response.data.results)
//         // console.log('length:', result.length)

//     newArray.push(result)
//   })
//   .then(axios({
//     method: 'get',
//     url: `https://openlibrary.org/search.json?q=${searchQuery2}`,
//   }))
//     .then(function(response) {
//     let result = response.data.docs
//     newArray.push(result)
//   })

//   .then(function(response) {
//     if (response.length > 0) {
//       console.log('it works!')
//       console.log('length:', newArray.length)
//       console.log('newArray:', newArray)
//     } else {
//       console.log('no Beano')
//     }
//   })
//   .catch((err) => {
//     console.log(err)
//   })

// console.log('queryLength:', query.length)

  // if (query.length > 0) {
  //   console.log('it works!')
  // } else {
  //   console.log('no Beano')
  // }

  // axios({
  //   method: 'get',
  //   url: `https://openlibrary.org/search.json?title=the+lord+of+the+rings`,
  //   // responseType: 'stream',
  // })
  //   .then(function (response) {
  //     console.log(response.data.docs[0].title)
  //   });

    // axios({
    //   method: 'get',
    //   url: `https://api.yelp.com/v3/businesses/search?term=starbucks`,
    //   responseType: 'stream',
    //   headers: {'ERI5m5nr-Ra35PZI2WMmqA': '7afdbLy_FBEFziHbEneXf6jWBmTBSlahbkQXEi1v9VQUotBzNNf3OXao04ZSTRr7S0xhyAjKLBE-x5SwdyjMGOtD7KGDPZKZ6xPOHbz149mVBsqzc-1f_u2ehqHgY3Yx' }
    // })
    //   .then(function (response) {
    //     console.log(response)
    //   })
    //   .catch((err)=> {
    //     console.log(err)
    //   })



    // get API working (done)
    // make searchabout query value (done on back end)
    // make routes for front end
    // add functions to routes
    // 