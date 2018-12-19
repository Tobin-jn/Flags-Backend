const express = require('express')
const bodyParser = require('body-parser')
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const database = require('knex')(config)
const app = express()
const cors = require('express-cors');
app.use(cors());

app.use(bodyParser.json())
app.set('port', process.env.PORT || 3000);
app.locals.title = 'Flags';
app.use(express.static('public'));

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

app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});

module.exports = app
