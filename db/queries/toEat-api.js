const axios = require('axios');

//for Eat-out category:
//user_input that returns a success response to show off: 'arturos-to-go'
//user_input that returns an error: anything meaingless like 'lsdfjldfs'

const FoodApi = async (input) => {
  try {
    const response = await axios.get(`http://data.streetfoodapp.com/1.1/vendors/${input}`); //success or undefined
    console.log('response.status of FoodApi:', response.status);
    return response;
  }
  catch(err) {
    console.error('axios error in toEat-api.js:', err.message); //could be 'err.message', or just 'err' like in add-new-book.js file
  };
}

module.exports = FoodApi;


