/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('movie_list_table').del()
    .then( () => {
      // Inserts seed entries
      return knex('movie_list_table').insert([
        {id: 1, movie_title: 'Mean Girls'},
        {id: 2, movie_title: 'Hackers'},
        {id: 3, movie_title: 'The Grey'},
        {id: 4,movie_title: 'Sunshine'},
        {id:5, movie_title: 'Ex Machina'}
      ]);
    });
};