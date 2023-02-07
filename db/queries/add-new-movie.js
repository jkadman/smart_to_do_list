require('dotenv').config(); //need this to test the query in this file
//inside smart-to-do-list folder, run: node db/queries/add-new-row.js (need to gain access to .env file)
const db = require('../connection'); //like the pool variable we often use
const axios = require('axios');

