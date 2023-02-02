const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('./config/database.config');

const indexRout = require('./routes/index');

//Middlewares
app.use(
  cors({
    origin: process.env.SITE_URL,
    credentials: true,
  }),
);

app.use(
  express.json({
    limit: '100mb',
  }),
);

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use('/', indexRout);
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server Running On Port ${process.env.PORT}`);
});
