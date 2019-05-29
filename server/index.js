const constants = require('./app/constants');
const app = require('express')();
const server = require('http').createServer(app);
require('./app/socket')(server);

server.listen(constants.app.port, () => console.log(`Example app listening on port ${constants.app.port}!`));