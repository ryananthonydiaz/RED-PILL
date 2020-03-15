const express = require('express');
const db = require('./config/db');
require('colors');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: './config/.env' });
}

db();

const authRoutes = require('./routes/authRoutes');

const app = express();
app.use('/reddot/v1/auth', authRoutes);



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server up and running on port: ${PORT}`.rainbow.bold);
});