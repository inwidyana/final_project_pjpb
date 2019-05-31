var User = require('../database/model/User');
var Response = require('../app/Response');

function login(req, res) {
    let findUser = User.findOne({ email: req.body.email });

    findUser.then(user => {
        let attemptLogin = user.attemptLogin(req.body.password);

        attemptLogin.then(token => {
            res.send(token)
        });

        attemptLogin.catch(err => {
            Response.unauthorized(res)
        });
    });

    findUser.catch(err => {
        Response.unauthorized(res);
    });
}

function register(req, res) {
    let user = new User({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
    });

    user.save();
    res.send(user.token);
}

module.exports = {
    login: login,
    register: register,
};