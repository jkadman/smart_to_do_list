require('dotenv').config(); //need this to test the query in this file
//inside smart-to-do-list folder, run: node db/queries/add-new-row.js (need to gain access to .env file)
const db = require('../connection'); //like the pool variable we often use
const axios = require('axios');

/* one file, if statement
import func api1
import func api2
import func api3

func 4()
{db.query
.then
return data.rows
}

if(resonse of api1)
{func 4 with data in api1 - insert a row in restaurants
}

if (resopnse of api2) {
func 4 - insert a row in movies
}

if (ap3) {
func 4 - insert a row in books
}

if (ap4) {
func 4 - insert a row in movies
}

modeule. export = func 4 (new row of books/ movies/ restaurants)
route file: import = func 4
route(/ro-read)

** DELETE FILE: one file in queries,

const uesr_input = harry potter
func (uesr_input)
db.query
DELETE FROM TABLE
WHERE name LIKE ${uesr_input}
.then

modeule. export = func

*/
