require('dotenv').config();
const db = require('../connection');
const axios = require('axios');


const addBook = async (func, input) => {
  let obj2 = await func; //ob2 = { title: 'Harry Potter and the Deathly Hallows', pubYear: 2007}
  let arrQuery = [];
  arrQuery.push(`${obj2.pubYear}-06-06`,`${input}`, 2, '2022-06-06'); //for Book list, Book category has an id of 2

  return db
    .query(`
      INSERT INTO tasks (start_date, name, category_id, end_date)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
      `,
      arrQuery)
    .then(result => {
        console.log('result.rows:',result.rows); //the newly inserted row = an array with one obj
        return result.rows;
      })
    .catch(err => console.log('NewRow fun error:', err.message)); //catch any error that may occur
};
//note: have to call NewRow(); to have it working

const addQuery = (arr) => {
  return db //NewRow2 is returning a promise with result.rows. .then() or await the func to get result.rows array to use in other funcs
    .query(`
      INSERT INTO tasks (start_date, name, category_id, end_date)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
      `,
      arr)
    .then(result => {
        console.log('result.rows:',result.rows); //the newly inserted row = an array with one obj
        return result.rows;
      })
    .catch(err => console.log('NewRow2 func error:', err.message)); //catch any error that may occur
};

module.exports = {addBook, addQuery}; //NewRow returns an array with one obj
