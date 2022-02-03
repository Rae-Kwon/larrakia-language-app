// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: 'server/db/migrations'
    },
    seeds: {
      directory: 'server/db/seeds'
    }
  },

  test: {
       client: 'sqlite3',
       connection: {
         filename: ':memory:'
       },
       useNullAsDefault: true,
       migrations: {
         directory: 'server/db/migrations'
       },
       seeds: {
         directory: 'tests/server/db/seeds'
       }
     },

  production: {
    client: 'postgresql',
    connection: {
      connection: process.env.DATABASE_URL,
      ssl: true
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'server/db/migrations'
    },
    seeds: {
      directory: 'server/db/seeds'
    }
  }

};