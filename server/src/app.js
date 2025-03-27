// app.js
const express = require('express');
const app = express();
const PORT = 3000;
const knex = require('knex')(require('../knexfile.js').development);

const moviesRoutes = require('./movies.js');

app.use(express.json());
app.use('/movies', moviesRoutes);



app.listen(PORT, (req, res) => {
  console.log(`The server is running on at http://localhost:${PORT}`);
});

