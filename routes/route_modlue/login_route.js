const express = require("express");
const passport = require("passport");
const bodyParser = require('body-parser');

const session = require("express-session");
// const cryptionJwt = require('../../helpers/cryptionJwt');
const {initPassportLocal, getToken} = require( "../../controllers/authentication");

// Init all passport
initPassportLocal();

const router = express.Router();

router.use(bodyParser.json());

// Post Request for Login >>>>>> //

router.post('/login', passport.authenticate('local'), (req, res, next) => {
  try {
    var token = getToken({id: req.user.id});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
      status: true,
      token: token,      
      message: 'Successful Login!!'
    });
  } catch (error) {
    return done(null, false, 'Incorrect Data Check your Email and Password')
  }
});


// Post Request for Forgot coming soon >>>>>> //

module.exports = router;