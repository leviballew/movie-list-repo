// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      database: 'movie_list_db',
      user:     'postgres',
      password: 'docker'
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }

};
