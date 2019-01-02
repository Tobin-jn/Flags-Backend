const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration); 
const bcrypt = require('bcrypt') 
const crypto = require('crypto') 


const signup = (request, response) => {
  const user = request.body

  for (let requiredParameter of [
    'email',
    'username',
    'password',
    ]) {
      if (user[requiredParameter] === undefined) {
        response.status(422).send({error: 'Missing required parameter'});
        return
      } 
    }

    database('users')
      .where('email', user.email)
      .select()
      .then(foundEmail => {
        if(foundEmail.length === 0){
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
            })
        } else {
          response.status(422).send({ error: 'Email Already Exists' });
        }
      })
      .catch(error => {
        response.status(500).json({ error: error.message })
      });
}

const signin = (request, response) => {
  const userRequest = request.body
  let user

  for (let requiredParameter of [
    'email',
    'password',
    ]) {
      if (userRequest[requiredParameter] === undefined) {
        response.status(422).send({error: 'Missing required parameter'});
        return
      }
    }

    database('users')
      .where('email', userRequest.email)
      .select()
      .then(foundUser => {
        if(foundUser.length === 0){
          response.status(422).send({ error: 'User Does Not Exist' });
        } else {
          user = foundUser
          checkPassword(userRequest.password, foundUser)
            .then((res) => createToken())
            .then(token => updateUserToken(token, user))
            .then(() => {
              delete user[0].password_digest
              response.status(201).json(user)
            })
        }
      })
      .catch(error => {
        response.status(500).json({ error: error.message })
      });
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
    bcrypt.hash(password, 12, (error, hash) => {
      if (error){
        reject(error)
      } else {
        resolve(hash)
      }    
    })
  })
}

// const findUser = (userRequest) => {
//   return database('users')
//     .where('email', userRequest.email)
//     .select()
// }

const updateUserToken = (token, user) => {
  console.log(user)
  return database('users')
    .where('id', user[0].id)
    .update( 'token', token)
    .returning(['id', 'username', 'token'])
}

module.exports = {
  signup,
  signin,
}