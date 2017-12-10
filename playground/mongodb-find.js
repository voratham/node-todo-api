const { MongoClient , ObjectID } = require('mongodb');

const URL = `mongodb://localhost:27017`;
MongoClient.connect(URL , ( err , client) => {
    if(err) throw new Error('Unable to connect to Mongodb server.');
    console.log('Connected to Mongodb server');
    
    var db = client.db('TodoApp');
    // db.collection('Todos').find({ 
    //         _id : new ObjectID('5a2cf0c01f83134195c99789')   
    //     }).toArray().then((docs ) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs , undefined , 2));

    // } , (err) => {
    //     console.log('Unable to fetch todos' , err);
    // })


    db.collection('Todos').find().count().then((docs) => {
        console.log('Todos count is ' + docs);
        // console.log(JSON.stringify(docs , undefined , 2));

    } , (err) => {
        console.log('Unable to fetch todos' , err);
    })


    client.close();
    
})