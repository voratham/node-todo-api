const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5a2d5deed1c15dcfc0c3063c';

if(!ObjectID.isValid(id)){
    console.log('ID not valid');
}else{
    console.log('ID valid');
}

// Todo.find({
//     _id : id
// }).then( (todos) => {
//     console.log('Todos ' , todos);
// })



// Todo.findOne({_id: id})
//     .then((todo) => {
//         console.log('----------------');
//         console.log('Todo ', todo);
// })


// Todo.findById(id).then( res => {
//     if(!res){
//         return console.log('Id not found !');  
//     }
//     console.log('Todo by id :: ' , res)
// }).catch( err => console.log(err));


// User.findById("5a2d2c1f3decea0667ea9569").then( user => {
//     if(!user) return console.log('User not found !');
//     console.log(JSON.stringify(user , undefined , 2));
// }).catch( err => console.log('err :: ' , err))

