const environment = process.env.NODE_ENV || 'development';// set environment
const configuration = require('./knexfile')[environment];// pull in correct db with env configs
const database = require('knex')(configuration); // define database based on above
const bcrypt = require('bcrypt') // bcrypt will encrypt passwords to be saved in db
const crypto = require('crypto') // built-in encryption node module


// request object: {
//        "username": "Alex0@turing.com",
//        "password": "supersecret7",
//        "points": 1002
// }

//POINTS IS NOT WORKING
const signup = (request, response) => {
  // get user from request body
  const user = request.body

  for (let requiredParameter of [
    'username',
    'password',
    ]) {
    if (user[requiredParameter] === undefined) {
      response.status(422).send({error: 'Missing required parameter'});
    } else {
      encryptPassword(user.password) //promise
        .then( encryptedPassword => {
          delete user.password //delete old password
          user.password_digest = encryptedPassword //assign password_digest to the new encrypted
        })
        .then(() => createToken())
        .then(token => user.token = token)
        .then(() => createUser(user))
        .then(user => {
          delete user.password_digest
          response.status(201).json({ user })
        })
        .catch((error) => console.error(error)) 
    }
  }
}
  // encrypt plain text password with bcrypt, returns a promise
  //bcrypt docs : 
  //  bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
  //    Store hash in your password DB.
  //  });
const encryptPassword = (password) => {
  return new Promise((resolve, reject) =>
    // bcrypt.hash(data, salt, callback)
    bcrypt.hash(password, 10, (error, hash) => {
      if (error) {
        reject(error)
      } else {
        resolve(hash)
      }
    })
  )
}
// crypto comes with node 
// randomBytes- generates random bytes that are used as a token
const createToken = () => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(16, (err, data) => {
      if (error) {
        reject(error)
      } else {
        resolve(data.toString('base64'))
      }
    })
  })
}

// user info entered into database
const createUser = (user) => {
  return database('users')
    .returning(['id', 'username', 'created_at', 'token'])
    .insert(user)
}

// const signin = (request, response) => {
//   // get user creds from request body
//   const userRequest = request.body
//   let user

//   // find user based on username in request
//   findUser(userRequest)
//     .then(foundUser => {
//       user = foundUser
//   // check user's password_digest against pw from request
//       return checkPassword(userRequest.password, foundUser)
//     })
//   // if match, create and save a new token for user
//     .then(response => createToken())
//     .then(token => updateToken(token, user))
//     .then(() => {
//       delete user.password_digest
//   // send back json to client with token and user info
//       response.status(200).json(user)
//     })
//     .catch(error) => console.log(error)
// }

// const findUser (userRequest) => {
  
// }

// const checkPassword () => {
  
// }

// const updateToken () => {

// }






module.exports = {
  signup,
  signin
}