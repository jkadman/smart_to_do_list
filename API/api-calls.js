const axios = require('axios');


const bookAPI = async (input) => {
  let obj = {};
  try {
    const response = await axios.get(`https://openlibrary.org/search.json?title=${input}`); //response = obj returned by the get request
    let result = response.data.docs[0]; //filter out the response
    console.log('result', result)
    // console.log('bookcall', ele)
    // obj[result.title] = {title: result.title, pubYear: result.first_publish_year }; //add new key-value pair into the empty obj
    obj[result.title] = {title: result.title};
    console.log('test', obj[result.title])
    console.log('newBook func result:', obj[result.title]); // = { title: 'Harry Potter and the Deathly Hallows', pubYear: 2007}
    return obj[result.title].name; //= what we're gonna use to query
  }
  catch (error) {
    console.error(`async newBook func error: ${error}`);
  }
}

const movieApi = async (input) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a3a238db7e3932463061304b7f22746a&query=${input}`); //success or undefined
    console.log('result of MovieDB func:', response.data.results[0].original_title);
    return response.data.results[0].original_title;
  }
  catch(err) {
    console.error('axios error in toWatch-api.js:', err.message);
  };
}


const foodApi = async (input) => {
  try {
    const response = await axios.get(`http://data.streetfoodapp.com/1.1/vendors/${input}`); //success or undefined
    console.log('response.status of FoodApi:', response.status);
    return response;
  }
  catch(err) {
    console.error('axios error in toEat-api.js:', err.message); //could be 'err.message', or just 'err' like in add-new-book.js file
  };
}

const shopApi = async (input) => {
  try {
    const response = await axios.get(`https://api.storerestapi.com/products/${input}`); //success or undefined
    console.log('result of ShopApi func:', response.data.message); //'Success! Product found'
    return response.data.message;
  }
  catch(err) {
    console.error('axios error in toBuy-api.js:', err.message);
  };
}

module.exports = { bookAPI, movieApi, foodApi, shopApi};
