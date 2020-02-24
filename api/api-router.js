const bcrypt = require("bcryptjs"); // Added

const router = require("express").Router();

const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/users-router.js");
const restricted = require('../auth/restricted-middleware');

router.use("/auth", authRouter);
router.use("/users", usersRouter);

// Added
router.get("/hash", (req, res) => {
  // read the Authentication header
  const authentication = req.headers.authentication; // how to read the header?
  // hash the value from that header
  const hash = bcrypt.hashSync(authentication, 8); // how to use bcryptjs to hash the authentication value?

  

  res.json({ originalValue: authentication, hasedValue: hash });
});

router.get("/", (req, res) => {
  res.json({ api: "It's alive" });
});

module.exports = router;
