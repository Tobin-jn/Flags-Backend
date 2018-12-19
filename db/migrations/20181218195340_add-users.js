
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function(table) {
      table.increments('id').primary();
      table.string('username').unique().notNullable();
      table.string('password_digest').notNullable();
      table.string('token').notNullable();
      table.integer('points')

      table.timestamps(true, true);

    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users'),
  ]);
};

