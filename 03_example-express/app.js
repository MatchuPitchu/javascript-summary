// set up express
const express = require('express');
// npm package to parse the body of HTTP requests
const bodyParser = require('body-parser');
// import routes
const routes = require('./routes/location');

const app = express();

/*** Send server-side HTML to server and get form data ***/

// set() to set global options for your app
app.set('view engine', 'ejs'); // template enginge used is npm package ejs
app.set('views', 'views'); // path where ejs is located in project

// define middlewares
app.use(bodyParser.urlencoded({ extended: false })); // adds parsed body urlencoded (HTML string) data to request body object

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/html');
  next(); // forwards execution to next middleware and that work is NOT done yet
});

app.use((req, res, next) => {
  const userName = req.body.username || 'Unknown User';

  // OPTION 1: without template view enginge ejs
  // res.send(`
  //   <h1>Hello ${userName}</h1>
  //   <form method="POST" action="/">
  //     <input name="username" type="text">
  //     <button type="submit">Send</button>
  //   </form>
  // `);

  // OPTION 2: with ejs
  // use ejs render method with location of target file and prepare data that you want to inject
  res.render('index', {
    user: userName,
  });
});

/*** REST Routes - Basic API ***/
app.use(bodyParser.json());
// set header to prevent CORS isssues
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // all URLs are allowed (NOT for production)
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS'); // allow only certain HTTP Requests + OPTIONS which is always first sent before a POST request
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use(routes); // now when node server is running, a client could send POST request to localhost:3001/add-location and add a location

const PORT = 3001;
app.listen(PORT);
