const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const usersRouter = require('./routes/users');
const gamesRouter = require('./routes/games');
const categoriesRouter = require('./routes/categories');

const connect = require('./middlewares/db');
const cors = require('./middlewares/cors');

const app = express();
const PORT = 3000;


app.use(
  cors, 
  bodyParser.json(),
  connect,
  express.static(path.join(__dirname, 'public')),
  usersRouter, 
  gamesRouter, 
  categoriesRouter
);

app.listen(PORT);