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
        User.getUserById(jwt_payload.user._id, (err,user) =>{
            if(err)
            {
                return done(err, false);
            }
            if(user){
                return done(null,user)
            }
            else{
                return done(null, false)
            }
        } );
    }))
}