/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('movie_list_table', table => {
    table.increments('id'); // adds an auto incrementing PK column
    table.string('movie_title').notNullable(); // equivalent of varchar(255)
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('movie_list_table');
};
