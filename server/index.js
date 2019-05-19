const express = require('express');
const app = express();
const constants = require('./app/constants');
const socket = require('ws');
const socketServer = new socket.Server({ port: constants.socket.port });

app.listen(constants.app.port, () => console.log(`App listening on port ${constants.app.port}...`));