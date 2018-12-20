const express = require('express')
const bodyParser = require('body-parser')
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const database = require('knex')(config)
const app = express()
const User = require('./user')
const cors = require('express-cors');

app.use(cors());
app.use(bodyParser.json())
app.use(express.static('public'));

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Flags';

app.post('/signup', User.signup)
app.post('/signin', User.signin)
  
app.get('/api/v1/country', (request, response) => {
    database('countries').select()
        .then(country => {
            response.status(200).json(country)
        })
        .catch(error => {
            response.status(500).json({ error: error.message });
        })
  })

app.get('/api/v1/country/:id', (request, response) => {
    const { id } = request.params
    
    database('countries').where('id', id).select()
        .then(country => response.status(200).json(country))
        .catch(error => response.status(500).json(`Error fetching project: ${error.message}`))
  })

app.get('/api/v1/facts', (request, response) => {
    database('facts').select()
        .then(fact => {
            response.status(200).json(fact)
        })
        .catch(error => {
            response.status(500).json({ error: error.message });
        })
  })

app.get('/api/v1/facts/:country_id', (request, response) => {
    const { country_id } = request.params
    
    database('facts').where('id', country_id).select()
        .then(fact => response.status(200).json(fact))
        .catch(error => response.status(500).json(`Error fetching fact: ${error.message}`))
  })

app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});

module.exports = app
