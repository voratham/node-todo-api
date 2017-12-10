const { MongoClient , ObjectID } = require('mongodb');

const URL = `mongodb://localhost:27017`;
MongoClient.connect(URL , ( err , client) => {
    if(err) throw new Error('Unable to connect to Mongodb server.');
    console.log('Connected to Mongodb server');
    
    var db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id : new ObjectID("5a2d1af41f388721346450b7")
    // }, {
    //     $set : {
    //         completed : true
    //     }
    // },{
    //     returnOrginal :false
    // }).then( res =>{
    //     console.log(res)
    // })

    db.collection('Users').findOneAndUpdate({
        _id : new ObjectID("5a2cf150dbc7694522c0bcee")
    } , {
        $inc : {
            age : 1
        }
    },{
        returnOriginal : false
    }).then( res => {
        console.log(res)
    })


    client.close();
    
})