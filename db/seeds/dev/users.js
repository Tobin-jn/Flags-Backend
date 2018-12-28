exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'Alex', 
          password_digest: 'secret', 
          token: 'superSecret', 
          email: 'Alex@turing.com',
          points: 1000
        },
      ]);
    });
};
