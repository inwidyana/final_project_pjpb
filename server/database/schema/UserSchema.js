var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');

var UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    
    password: {
        type: String,
        required: true,
    },

    salt: { 
        type: String,
        required: true,
        default: crypto.randomBytes(64).toString('hex'),
    },

    token: {
        type: String,
        required: true,
        default: crypto.randomBytes(64).toString('hex'),
        unique: true
    },

    name: {
        type: String,
        require: true,
    }
});

module.exports = UserSchema;