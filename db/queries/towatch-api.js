const axios = require('axios');

//for Shopping category:
//user_input that returns a success response to show off: 'running sneakers'
////user_input that returns a success response to show off in both book and product lists: 'men shoes'
//user_input that returns an error: anything meaingless like 'lsdfjldfs', or 'drill tools'

const movieApi = async (input) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a3a238db7e3932463061304b7f22746a&query=${input}`); //success or undefined
    console.log('result of MovieDB func:', response.data.results[0].original_title); //'Success! Product found'
    return response.data.results[0].original_title;
  }
  catch(err) {
    console.error('axios error in toWatch-api.js:', err.message);
  };
}

module.exports = movieApi;
