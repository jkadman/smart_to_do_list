const axios = require('axios');

//for Shopping category:
//user_input that returns a success response to show off: 'running sneakers'
////user_input that returns a success response to show off in both book and product lists: 'men shoes'
//user_input that returns an error: anything meaingless like 'lsdfjldfs', or 'drill tools'

const ShopApi = async (input) => {
  try {
    const response = await axios.get(`https://api.storerestapi.com/products/${input}`); //success or undefined
    console.log('result of ShopApi func:', response.data.message); //'Success! Product found'
    return response.data.message;
  }
  catch(err) {
    console.error('axios error in toBuy-api.js:', err.message);
  };
}

module.exports = ShopApi;


