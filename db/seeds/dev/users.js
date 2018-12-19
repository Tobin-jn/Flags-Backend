
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'Alex@turing.com', 
          password_digest: 'secret', 
          token: 'superSecret', 
          points: 1000
        },
      ]);
    });
};
