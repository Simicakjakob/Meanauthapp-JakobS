const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const UserSchema = mongoose.Schema({
    name:  {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true

    }

});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function (id) {
    console.log("id: " +id)
    return User.findById(id).exec();
}

module.exports.getUserByUsername = function(username, callback){
    const query = {username: username}
    User.findOne(query)
        .then(user => {
            callback(null,user);
        })
        .catch(err =>{
            console.log("nej najden");
            callback(err,null);
            
        });
}

module.exports.addUser = function (newUser, callback){
    bcrypt.genSalt(10)
        .then(salt => bcrypt.hash(newUser.password, salt))
        .then(hash => {
            newUser.password = hash;
            return newUser.save();
        })
        .then(savedUser => callback(null,savedUser))
        .catch(err =>callback(err));
        };
    
module.exports.comparePassword = function(candidatePassword, hash, callback){
    console.log('comparePassword - candidatePassword:', candidatePassword);
    console.log('comparePassword - hash:', hash);
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if (err){
            throw err;
        } 
        callback(null, isMatch);
    });
}
