const Constant = require('./app/Constant');
const app = require('express')();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const api = require('./routes/api')(app);

const server = require('http').createServer(app);
const socket = require('./app/socket')(server);

require('./database/index');

server.listen(Constant.app.port, () => console.log(`Example app listening on port ${Constant.app.port}!`));