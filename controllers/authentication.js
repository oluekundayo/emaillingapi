const passportLocal = require("passport-local");
const passport = require("passport");
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');
const config = require('../config');
const loginService = require("../services/loginService")




let LocalStrategy = passportLocal.Strategy;

let initPassportLocal = () => {
    passport.use(new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        async (req, email, password, done) => {
            try {
                await loginService.findUserByEmail(email).then(async (user) => {
                    if (!user) {
                        return done(null, false, `Errors, This user email "${email}" doesn't exist`);
                    }
                    if (user) {
                        let match = await loginService.comparePassword(password, user);
                        if (match === true) {
                            return done(null, user, null)
                        } else {
                            return done(null, false, "errors," + match )
                        }
                    }else {
                      return done(null, false, "errors,")
                  }
                });
            } catch (err) {
                console.log(err);
                return done(null, false, { message: err });
            }
        }));

};

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    loginService.findUserById(id).then((user) => {
        return done(null, user);
    }).catch(error => {
        return done(error, null)
    });
});

let getToken = function(user) {
  return jwt.sign(user, config.secretkey, 
      {expiresIn: 2600});
};

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secretkey;

let jwtPassport = passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
  const mysqlConn = require("mysql").createConnection(
    require("../config/mysql")
  );
    console.log('JWT payload: ', jwt_payload.id);
    mysqlConn.query(
      "SELECT * FROM ?? WHERE ?? = ?",
      ["users", "id", jwt_payload.id],
      (err, user) => {
        console.log(user)
        if (err) {
          return done(err, false , 'error')
        } else if (user){
          return done(null, user);
        } else {
          return done(null, false, 'error')
        }
      }
    );
}));

let verifyUser = passport.authenticate('jwt', {session: false});

module.exports = {
  initPassportLocal: initPassportLocal,
  verifyUser: verifyUser,
  jwtPassport: jwtPassport,
  getToken: getToken
};
