var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const checkConnection = mongoose.connect('mongodb://localhost:27017/TodoApp', {useMongoClient: true})
checkConnection.on('error', console.error.bind(console, 'connection error:'));
checkConnection.once('open', function () {
    console.log('Connected Mongo Server.');
});


module.exports = {
    mongoose
}