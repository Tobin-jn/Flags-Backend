const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration); 
const bcrypt = require('bcrypt') 
const crypto = require('crypto') 


const signup = (request, response) => {
  const user = request.body

  for (let requiredParameter of [
    'username',
    'password',
    ]) {
    if (user[requiredParameter] === undefined) {
      response.status(422).send({error: 'Missing required parameter'});
      return
    } else {
      encryptPassword(user.password)
        .then( encryptedPassword => {
          delete user.password
          user.password_digest = encryptedPassword
        })
        .then(() => createToken())
        .then(token => user.token = token)
        .then(() => createUser(user))
        .then(user => {
          delete user.password_digest
          response.status(201).json({ user })
          return
        })
        .catch((error) => console.error(error)) 
    }
  }
}

const signin = (request, response) => {
  const userRequest = request.body
  let user

  for (let requiredParameter of [
    'username',
    'password',
    ]) {
    if (userRequest[requiredParameter] === undefined) {
      response.status(422).send({error: 'Missing required parameter'});
      return
    } else {
      findUser(userRequest)
        .then(foundUser => {
          user = foundUser

          return checkPassword(userRequest.password, foundUser)
        })
        .then((res) => createToken())
        .then(token => updateUserToken(token, user))
        .then(() => {
          delete user[0].password_digest
          response.status(201).json(user)
        })
        .catch((error) => console.error(error))
    }
  }
}

const checkPassword = (requestPassword, foundUser) => {

  return new Promise((resolve, reject) =>
    bcrypt.compare(requestPassword, foundUser[0].password_digest, (error, response) => {
        if (error) {
          reject(error)
        }
        else if (response) {
          resolve(response)
        } else {
          reject(new Error('Passwords do not match.'))
        }
    })
  )
}

const createToken = () => {
  return new Promise((resolve, reject) => {
    //creates random characters/data
    crypto.randomBytes(16, (error, data) => {
      if (error){
        reject(error)
      } else {
        resolve(data.toString('base64'))
      }    
    })
  })
}

const createUser = (user) => {
  return database('users')
    .returning(['id', 'username', 'created_at', 'token'])
    .insert(user)
}

const encryptPassword = (password) => {
  return new Promise((resolve, reject) => {
    // bcrypt.hash(data, salt, callback)
    bcrypt.hash(password, 12, (error, hash) => {
      if (error){
        reject(error)
      } else {
        resolve(hash)
      }    
    })
  })
}

const findUser = (userRequest) => {
  return database('users')
    .where('username', userRequest.username)
    .select()
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