var mongoose = require('mongoose');
const Constant = require('../app/Constant');
const db_name = Constant.app.database.name;
const db_host = Constant.app.database.host;

mongoose.connect(`mongodb://${db_host}/${db_name}`, { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', () => console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connection to database successfully established!'));