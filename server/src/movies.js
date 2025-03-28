
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


router.post('/', function(req, res) {
  knex('movie_list_table')
    .insert({
      movie_title: req.body.movie_title
    })
    .returning('*')
    .then(movie => res.status(201).json(movie))
    .catch(err => res.status(500).json({
      message: 'Failed to add the movie'
    }));
});


router.delete('/:id', function(req, res) {
  knex('movie_list_table')
  .where('id', req.params.id)
  .del()
  .then(() => res.sendStatus(204))
  .catch(() => res.status(500).json({
    message: 'Failed to delete movie'
  }));
});


module.exports = router;