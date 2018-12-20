
exports.up = function(knex, Promise) {
    return Promise.all([
      knex.schema.createTable('countries', function(table) {
        table.increments('id').primary();
        table.string('name');
        table.string('flag');
        table.string('country_outline');
  
        table.timestamps(true, true);
      }),
  
      knex.schema.createTable('facts', function(table) {
        table.increments('id').primary();
        table.text('country_fact');
        table.integer('country_id').unsigned()
        table.foreign('country_id')
          .references('countries.id');
  
        table.timestamps(true, true);
      })
    ])
  };
  
  exports.down = function(knex, Promise) {
    return Promise.all([
      knex.schema.dropTable('facts'),
      knex.schema.dropTable('countries')
    ]);
  };