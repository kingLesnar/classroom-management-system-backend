var express = require("express");
const router = express.Router();

const { check, validationResult } = require("express-validator");
const { signup, signin, signout } = require("../controllers/auth");

router.post(
  "/signup",
  [
    // check("name", "name should be atleast 5 charater").isLength({ min: 5 }),
    check("password", "password must be atleast 8 charater").isLength({
      min: 8,
    }),
  ],
  signup,
);

router.post(
  "/signin",
  [
    // check("name", "name should be atleast 5 character").isLength({ min: 5 }),
    check("RegNo", "RegNo field is required").isLength({ min: 1 }),
    check("password", "password field is required").isLength({ min: 8 }),
  ],
  signin,
);

// router.get("/signout", signout);

module.exports = router;
