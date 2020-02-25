const express = require('express');
const helmet = require("helmet");
const cors = require("cors");
const session = require('express-session'); // Added for cookies
const KnexStore = require("connect-session-knex")(session); // remember to curry and pass the session
const userRouter = require('../users/users-router');
const authRouter = require('../auth/auth-router');


const restricted = require("../auth/restricted-middleware"); // Added for cookies session

const knex = require("../database/dbConfig"); // needed for storing sessions in the database


const server = express();

// Added for cookies

const sessionConfig = {
  name: 'monster',
  secret: 'keep it secret, keep it safe!',
  resave: false,
  saveUninitialized: true, // related to GDPR COMPLIANCE - depends if client wants cookies could be false
  cookie: {
    maxAge: 1000 * 60 * 10,
    secure: false,  // Should be true in production
    httpOnly: true,  // Should always be true - JS can't touch the cookie
  },
  // remember the new keyword
  store: new KnexStore({
    knex,
    tablename: "sessions",
    createtable: true,
    sidfieldname: "sid",
    clearInterval: 1000 * 60 * 15,
  }),
};

// configureMiddleware(server);
server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(session(sessionConfig)); // turn on the session middleware
// at this point there is a req.session object created by express-session


server.use('/api/auth', authRouter);
server.use('/api/users', restricted, userRouter)


module.exports = server;