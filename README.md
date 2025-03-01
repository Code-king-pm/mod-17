Social Media API

Description

This project is a Social Media API built using MongoDB, Mongoose, and Express.js. It provides CRUD functionality for users, thoughts (posts), reactions (comments), and friendships.

Table of Contents

Installation

Usage

API Endpoints

Models

Walkthrough Video

Technologies Used

License

Contact

Installation

Clone the repository:

git clone https://github.com/YOUR-USERNAME/mod17-crud-subdoc.git

Navigate to the project directory:

cd mod17-crud-subdoc

Install dependencies:

npm install

Start the server:

npm start

Usage

The API can be tested using Insomnia or Postman.

Ensure MongoDB is running locally or connect to a remote database.

API Endpoints

Users (/api/users)

GET / - Retrieve all users

GET /:id - Retrieve a user by ID

POST / - Create a new user

PUT /:id - Update a user by ID

DELETE /:id - Remove a user by ID

POST /:userId/friends/:friendId - Add a friend

DELETE /:userId/friends/:friendId - Remove a friend

Thoughts (/api/tags)

GET / - Retrieve all thoughts

GET /:id - Retrieve a thought by ID

POST / - Create a new thought

PUT /:id - Update a thought by ID

DELETE /:id - Remove a thought by ID

Reactions (/api/reaction/:reactionId/tags)

POST / - Add a reaction to a thought

DELETE /:tagsId - Remove a reaction by ID

Models

User Model

username (String, Unique, Required, Trimmed)

email (String, Unique, Required, Valid Format)

thoughts (Array of Thought _id values)

friends (Array of User _id values)

Virtual: friendCount - Returns the total number of friends

reaction Model

ReactionText (String, 1-280 characters, Required)

createdAt (Date, Default: Timestamp, Formatted using a getter)

username (String, Required)

tags (Array of reactionSchema documents)

Virtual: tag  - Returns the total number of reactions

Tags Schema (Subdocument)

TagsId (ObjectId, Default: new ObjectId)

TagsBody (String, Max 280 characters, Required)

username (Id, Required)

createdAt (Date, Default: Timestamp, Formatted using a getter)

Walkthrough Video

Click here to view the walkthrough video

Technologies Used

Node.js

Express.js

MongoDB

Mongoose

License

This project is licensed under the MIT License.

Contact

For any questions, feel free to contact:

GitHub: Code-King-pm

Email: nathanchavers@gmail.com

