
const express = require('express');
const router = express.Router();
const knex = require('knex')(require('../knexfile.js').development);


router.get('/', function(req, res) {
  knex('movie_list_table')
    .select('*')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
});

module.exports = router;