var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
console.log('MONGODB_URI :: ' , process.env.MONGODB_URI)
const checkConnection = mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
checkConnection.on('error', console.error.bind(console, 'connection error:'));
checkConnection.once('open', function () {
    console.log('Connected Mongo Server.');
});


module.exports = {
    mongoose
}

// process.env.NODE_ENV  === 'test'