const express = require('express');
const db = require('./config/db');
require('colors');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: './config/.env' });
}

db();

const app = express();

app.get('/', (req, res) => {
  res.send('Yo bruh we good');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server up and running on port: ${PORT}`.rainbow.bold);
});