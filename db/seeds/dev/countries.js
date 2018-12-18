const countries = require('../../../countryData')

const createCountries = (knex, country) => {
  return knex('countries').insert({
    name: country.name, 
    flag: country.flag, 
    outline: country.outline, 
  }, 'id')
  .then(countryId => {
    let factPromises = []

    country.questions.forEach(fact => {
      factPromises.push(createFacts(knex, {
        country_fact: fact,
        country_id: countryId[0]
      }))
    });
    return Promise.all(factPromises)
  })
}

const createFacts = (knex, fact) => {
  return knex('facts').insert(fact);
}

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('facts').del()
    .then(() => knex('countries').del())
    .then(() => {
      let countryPromises = [];

      countries.forEach(country => {
        countryPromises.push(createCountries(knex, country))
      })
        return Promise.all(countryPromises)
        })
        .then(() => console.log('Seeding complete!'))
        .catch(error => console.log(`Error seeding data: ${error}`))
  };
