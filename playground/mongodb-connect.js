const { MongoClient , ObjectID } = require('mongodb');

var obj =  new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017' , (err , client) => {

    if(err) {
        // console.log('Unable to connect to MongoDB server');
         throw new Error('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')
    var db = client.db('TodoApp')
    // db.collection('Todos').insertOne({
    //     text : 'Something to  do',
    //     completed : false
    // } , (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert todo' , err);
    //     }
    //     console.log(JSON.stringify(result.ops , undefined ,  2));
    // })

    // db.collection('Users').insertOne({
    //     name : 'Voratham',
    //     age : 24,
    //     location : 'Thailand'
    // } , (err , result  ) => {
    //     if(err) {
    //         return console.log('Unable to insert todo' , err);
    //     }
    //     console.log(JSON.stringify(result.ops , undefined ,  2));
        
    // })

    client.close();
});
