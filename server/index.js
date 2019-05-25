const express = require('express');
const app = express();
const constants = require('./app/constants');
const socket = require('ws');
const socketServer = new socket.Server({ port: constants.socket.port });

const encrypted = '6bb3ddb5f7b9198dbc3c53a69cbce5421577b305119c5fb2e7bf8326476669cf5ceaef6a27ec5a722d3509cc3ae4f8faf63a1a452fa48c00b19b0b857440e233be83dba051cec5e6085647aa31baa0dd9438956e88e458751b1f1592fabc5e79c32aa58421d2347b4534c023960e3ec8d64f530354f6df5337a31c6ded5e9a42';

const privateKey = '6fd2b39f49fce787af33825d02fb43028e2c06926dbb562411dde85ab4e4f673ab021580dc968899fa9245aabcf037dffb1dc823d5f86307a244a8d86d3edae732698e5710e3fec4b305f3484b5d0d78af09d9eb45d6647ff1a880645f68c2fd482ebac10c8495558e65a98e693cbf208489ab9d0b1d7f7adeeacfb13d01bdbb';

const publicKey = '6fd2b39f49fce787af33825d02fb43028e2c06926dbb562411dde85ab4e4f673ab021580dc968899fa9245aabcf037dffb1dc823d5f86307a244a8d86d3edae732698e5710e3fec4b305f3484b5d0d78af09d9eb45d6647ff1a880645f68c2fd482ebac10c8495558e65a98e693cbf208489ab9d0b1d7f7adeeacfb13d01bdbb';

app.listen(constants.app.port, () => console.log(`App listening on port ${constants.app.port}...`));