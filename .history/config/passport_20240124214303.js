const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt; 
const User = require('../models/user');
const config = require('../config/database');

module.exports = function(passport){
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('JWT');
    opts.secretOrKey = config.secret;
    passport.use(new JwtStrategy(opts, async (jwt_payload , done) => {
       // console.log(jwt_payload);
        try{
            console.log("user id: "+jwt_payload.user._id)
            const user = await User.getUserById(jwt_payload.user._id);
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        }
        catch (err) {
            return done(err, false);
        }
       
          
        }));
    
}