// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');

const PORT = process.env.PORT //|| 8080;
const app = express();

app.set('view engine', 'ejs');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const userApiRoutes = require('./routes/users-api'); //route + data.rows
const widgetApiRoutes = require('./routes/widgets-api');
const usersRoutes = require('./routes/users');
<<<<<<< HEAD
const deleteRoute = require('./routes/to-delete');
=======
const queries = require('./routes/queries')

// const toEdit = require('./routes/edit-button'); //require the to-read server file
const toSearch = require('./routes/when-search'); //require the when-search server file
<<<<<<< HEAD
>>>>>>> eb43ca5ccec5ede9a12fc0d93f79d2ea796fb99e
=======
const toCategory = require('./routes/category-route'); //same category server file for all 4 buttons in the homepage
>>>>>>> ea6324aa427fdea54d8156e84a4199e367120ec1

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/api/users', userApiRoutes); //= when we go to the api link, we go to / with data.rows instead
app.use('/api/widgets', widgetApiRoutes);
app.use('/users', usersRoutes);
<<<<<<< HEAD
app.use('/api/tasks', deleteRoute);
=======

<<<<<<< HEAD
app.use('/api/to-read', toRead); //link to the to-read category server file
app.use('/search', toSearch); //link to the searching button server file
>>>>>>> eb43ca5ccec5ede9a12fc0d93f79d2ea796fb99e
=======
// app.use('/users/:id/edit', toEdit); //link to the to-read category server file
app.use('/users/search', toSearch); //link to the searching button server file
app.use('/users/category', toCategory); //link to a category page for any list button
>>>>>>> ea6324aa427fdea54d8156e84a4199e367120ec1
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
