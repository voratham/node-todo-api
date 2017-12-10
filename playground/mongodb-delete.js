const { MongoClient , ObjectID } = require('mongodb');

const URL = `mongodb://localhost:27017`;
MongoClient.connect(URL , ( err , client) => {
    if(err) throw new Error('Unable to connect to Mongodb server.');
    console.log('Connected to Mongodb server');
    
    var db = client.db('TodoApp');

    // deleteMany
    // db.collection('Todos').deleteMany({
    //     text : 'Eat lunch'
    // }).then( docs => {
    //     console.log(docs);
    // })

    // deleteOne
    // db.collection('Todos').deleteOne({ text : 'Eat lunch'}).then( docs => {
    //     console.log(docs);
    // })

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({
    //     text : 'Eat lunch'
    // }).then( res => {
    //     console.log(res);
    // })


    client.close();
    
})