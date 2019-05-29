module.exports = (server) => {
    const constants = require('./constants');
    const io = require('socket.io')(server);

    io.on('connection', client => {
        console.log('A user connected!');
    });

    io.use((socket, next) => {
        let token = socket.handshake.query.token;
        
        if (token) {
            console.log(`token is ${token}`);
            return next();
        }
        
        return next(new Error('authentication error'));
    });

    io.listen(constants.socket.port);
};