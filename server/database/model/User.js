var mongoose = require('mongoose');
var UserSchema = require('../schema/UserSchema');
var crypto = require('crypto');

UserSchema.pre('save', function(next) {
    let User = this;

    User.hashPassword();

    next();
});

UserSchema.methods.hashPassword = function () {
    let User = this;

    let hash = crypto.createHash('sha256');
    const saltedPassword = (User.password + User.salt);
    hash.update(saltedPassword);
    User.password = hash.digest('hex');
}

UserSchema.methods.passwordIs = function (password) {
    let User = this;

    let hash = crypto.createHash('sha256');
    const saltedPassword = (password + User.salt);
    hash.update(saltedPassword);
    const hashedPassword = hash.digest('hex');

    return (hashedPassword === User.password);
};

UserSchema.methods.refreshToken = function () {
    let User = this;

    User.token = crypto.randomBytes(64).toString('hex');
};

UserSchema.methods.getNewToken = function () {
    let User = this;

    User.refreshToken();

    return User.token;
};

UserSchema.methods.attemptLogin = function (password) {
    let User = this;

    return new Promise((resolve, reject) => {
        if (User.passwordIs(password)) {
            resolve(User.token);
        }
        else {
            reject('Wrong Password!');
        }
    });
};

var User = mongoose.model('User', UserSchema);

module.exports = User;