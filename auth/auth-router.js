const bcrypt = require("bcryptjs");

const router = require("express").Router();

const Users = require("../users/users-model.js");

/**
 * @api {post} /register Register User
 * @apiName Register
 * @apiGroup Users
 * 
 * @apiParam {Number} id Users unique ID (auto-increments)
 * 
 * @apiSuccess {String} username  Username
 * @apiSuccess {String} password  Password
 * 
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 201 OK
 * {
 * "username": "JohnDoe",
 * "password": "1234"
 * }
 * 
 * 
 * @apiError UsersNotFound There were no users found
 * 
 * @apiErrorExample Error-Response:
 *  HTTP/1.1 400 Not Found
 * {
 * "error": "Trouble adding new user"
 * }
 */

router.post("/register", (req, res) => {
  // added password
  let user = req.body;

  // Added 2 below lines
  const hash = bcrypt.hashSync(user.password, 8);

  user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

/**
 * @api {post} /login Login User
 * @apiName Login
 * @apiGroup Users
 * 
 * 
 * 
 * @apiSuccess {String} username  Username unique required
 * @apiSuccess {String} password  Password unique required
 * 
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 201 OK
 * {
 * "username": "JohnDoe",
 * "password": "1234"
 * }
 * 
 * 
 * @apiError Incorrect Credentials
 * 
 * @apiErrorExample Error-Response:
 *  HTTP/1.1 400 Not Found
 * {
 * "error": "No user with those credentials"
 * }
 */

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      // Added bcrypt to if
      if (user && bcrypt.compareSync(password, user.password)) {
        res.status(200).json({ message: `Welcome ${user.username}!` });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
