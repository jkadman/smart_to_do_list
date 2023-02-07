require('dotenv').config(); //need this to test the query in this file
//inside smart-to-do-list folder, run: node db/queries/add-new-row.js (need to gain access to .env file)
const db = require('../connection'); //like the pool variable we often use
const axios = require('axios');

//adding new row of book in the database
//e.g. user_input = Harry Potter
async function newBook(input) {
  let obj = {};
  try {
    const response = await axios.get(`https://openlibrary.org/search.json?title=${input}`); //response = obj returned by the get request
    let ele = response.data.docs[0]; //filter out the response
    obj[ele.title] = {title: ele.title, pubYear: ele.first_publish_year}; //add new key-value pair into the empty obj
    console.log('obj[ele.title]:', obj[ele.title]);
    //obj[ele.title] = { title: 'Harry Potter and the Deathly Hallows', pubYear: 2007}
    return obj[ele.title]; //= what we're gonna use to query
  }
  catch (error) {
    console.error(`asyn newBook error: ${error}`);
  } //catch any error that may occur
}//return: { title: 'Harry Potter and the Deathly Hallows', pubYear: 2007}
const NewRow = async (func, input) => {
  let obj2 = await func; //ob2 = { title: 'Harry Potter and the Deathly Hallows', pubYear: 2007}
  return db
    .query(`
      INSERT INTO tasks (start_date, name, category_id, end_date)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
      `,
      [`${obj2.pubYear}-06-06`,`${input}`, 1, '1999-06-06']) //Books has an id of 1
    .then(result => {
        console.log('result.rows:',result.rows); //the newly inserted row = an array with one obj
        return result.rows;
      })
    .catch(err => console.log('NewRow fun error:', err.message)); //catch any error that may occur
};
//note: have to call NewRow(); to have it working

module.exports = {newBook, NewRow}; //NewRow returns an array with one obj
