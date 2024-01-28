const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt; 
const User = require('../models/user');
const config = require('../config/database');

module.exports = function(passport){
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('JWT');
    opts.secretOrKey = config.secret;
    console.log("neki dela")
    passport.use(new JwtStrategy(opts,(jwt_payload , done) => {
        console.log(jwt_payload);
        User.getUserById(jwt_payload.user._id)
        .then(user => {
            if (user){
                console.log("najdu")
                return done(null, user);
            }
            else{
                console.log("ne najdu")
                return done(null, false);
            }
        })
        .catch(err => {
            console.log("neki drucga ne stima")
            return done(err, false);
        })
        
    }))
}