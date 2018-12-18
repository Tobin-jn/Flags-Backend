const questionData = require('./questions')


const cleanedData = questionData.reduce( (countryObject, country) => {
  if(!countryObject[country.country]) {
    countryObject[country.country] = [country.question];
  } 
  if(!countryObject[country.country].includes(country.question)){
    countryObject[country.country].push(country.question)
  }
  return countryObject
}, {})

