const User = require('./models/user.js')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('express-cors');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.use(cors());
app.use( bodyParser.json() );

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Flags'


app.post('/signup', User.signup

app.get('/', (request, response) => {
  response.send('Test Root Path');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});

module.exports = app;