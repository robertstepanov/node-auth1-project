const router = require('express').Router();

const Users = require('./users-model.js');

/**
 * @api {get} /users Request User Information
 * @apiName GetUser
 * @apiGroup Users
 * 
 * @apiParam {Number} id Users unique ID
 * 
 * @apiSuccess {String} username Users Username
 * @apiSuccess {String} password Users Password
 * 
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 * {
 * "username": "JohnDoe",
 * "password": "1234"
 * }
 * 
 * @apiError UsersNotFound There were no users found
 * 
 * @apiErrorExample Error-Response:
 *  HTTP/1.1 404 Not Found
 * {
 * "error": "UsersNotFound"
 * }
 */

router.get('/', (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;