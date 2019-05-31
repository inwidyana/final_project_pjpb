AuthController = require('../controller/AuthController');

module.exports = (route) => {
    route.post('/login', AuthController.login);

    route.post('/register', AuthController.register);
};