# Flag Trivia Back-end

## Get ready to build your own game witht these jeopardy style questions, and flag and country outlines. With this API you can have access to all the information necessary to build you're own geography trivia game!

### How to Use:

#### Install and Start Server
* Clone this repo.

* `npm install`

* `npm start`

#### Create Postgres Database and Run Migrations
* `psql CREATE DATABASE countries`

* `knex migrate:latest`

* `knex seed:run`

#### Testing 
* `To test run npm test`

### API Endpoints
#### Countries
```
GET /api/v1/countries // get all countries
--> returns an array of country objects

GET /api/v1/countries/:id // get a specific country
--> returns array with specific country object
```
#### Questions
```
GET /api/v1/facts // get all questions/facts
--> returns an array of all question objects

GET /api/v1/facts/:country_id  // get a specific question for a specific country
--> returns an array with a specific question object

```
#### Sign-In
```
POST /api/v1/signin // Sign in with a user name and password
--> returns an id, username, token, and points in a user object

```
#### Sign-Up
```
POST /api/v1/signup
--> returns a user object with the key of user and the value being the id, token, and username

```
# To Contribute to the Project:

- Follow the setup instructions above to get the app up and running locally on your machine.

- Our list of Issues on GitHub Issues: (https://github.com/Tobin-jn/Flags-Backend/issues)
  Please use these issues to direct the contributions you desire to make.

- To send a Pull Request via GitHub:
    - Checkout a new branch
    - Add a forked version of this repo as your remote
    - Push up changes to your forked repo
    - Request the Pull Request to the original repo
    - Include a brief commit message details the changes you have made
    - Make sure to write tests for the front end
    - Make sure all tests are passing before you make a Pull Request
    - Before submitting, Rebase your work on the current master branch

## Technologies Used
- Node.js
- Express
- Knex.js
- Heroku
- Mocha
- Chai 
- Chai-http
- Nightmare.js
- Bcrypt



## Database created and designed by Ben Hayek and Tobin Nelson.
