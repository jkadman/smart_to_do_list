require('dotenv').config(); //need this to test the query in this file
//inside smart-to-do-list folder, run: node db/queries/add-new-row.js (need to gain access to .env file)
const db = require('../connection'); //like the pool variable we often use
const axios = require('axios');

// let user_input = 'Harry Potter';
//adding new row of book in the database
async function newBook(input) {
  let obj = {};
  try {
    const response = await axios.get(`https://openlibrary.org/search.json?title=${input}`);
    let ele = response.data.docs[0];
    obj[ele.title] = {title: ele.title, pubYear: ele.first_publish_year};
    console.log('obj[ele.title]:', obj[ele.title]);
    //obj[ele.title] = { title: 'Harry Potter and the Deathly Hallows', pubYear: 2007}
    return obj[ele.title];
  }
  catch (error) {
    console.error(`asyn newBook error: ${error}`);
  }
}//return: { title: 'Harry Potter and the Deathly Hallows', pubYear: 2007}
const NewRow = async (func, input) => {
  let obj2 = await func;
  return db
    .query(`
      INSERT INTO categories (title, year, name)
      VALUES ($1, $2, $3)
      RETURNING *;
      `,
      ['Books', obj2.pubYear,`${input}`])
    .then(result => {
        console.log('result.rows:',result.rows);
        return result.rows;
      })
    .catch(err => console.log('NewRow fun error:', err.message));
};
// NewRow(); call the async func to have to working

module.exports = {newBook, NewRow}; //data.rows = an array
