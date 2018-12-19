const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration); 
const bcrypt = require('bcrypt') 
const crypto = require('crypto') 


// request object: {
//        "username": "Alex0@turing.com",
//        "password": "supersecret7",
//        "points": 1002
// }

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

const createToken = () => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(16, (error, data) => {
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

const signin = (request, response) => {
  const userRequest = request.body
  let user
//find user, if found in database, check the password, create a Token
  findUser(userRequest)
    .then(foundUser => {
      user = foundUser
      // console.log(userRequest.password)
      return checkPassword(userRequest.password, foundUser)
    })
    .then((res) => createToken())
    .then(token => updateUserToken(token, user))
    .then(() => {
      delete user[0].password_digest
      response.status(200).json(user)
    })
    .catch((err) => console.error(err))
}


const findUser = (userRequest) => {
  return database('users')
    .where('username', userRequest.username)
    .select()
}

const checkPassword = (reqPassword, foundUser) => {
  return new Promise((resolve, reject) =>
    bcrypt.compare(reqPassword, foundUser[0].password_digest, (err, response) => {
        if (err) {
          reject(err)
        }
        else if (response) {
          resolve(response)
        } else {
          reject(new Error('Passwords do not match.'))
        }
    })
  )
}

const updateUserToken = (token, user) => {
  console.log(user)
  return database('users')
    .where('id', user[0].id)
    .update( 'token', token)
    .returning(['id', 'username', 'token'])
}



module.exports = {
  signup,
  signin
}