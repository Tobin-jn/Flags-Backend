const User = require('./user.js')
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

//USER TABLE
app.post('/signup', User.signup)
app.post('/signin', User.signin)



app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});

module.exports = app;