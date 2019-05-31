// var User = require('../database/model/User');

function unauthorized(res) {
    res.status(401);
    res.send('Unauthorized');
}

module.exports = {
    unauthorized: unauthorized,
}