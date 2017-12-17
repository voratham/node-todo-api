const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Delete all
// Todo.remove({}).then( result => {
//     console.log(result) // print total of data removed.
// })


// Todo.findByIdAndRemove
// Todo.findByIdAndRemove({
//     _id : '123'
// }).then( todo => {
//     console.log('findByIdAndRemove :: '  , todo);
// })

// Todo.findByIdAndRemove
// Todo.findByIdAndRemove("123").then( todo => {
//     console.log('findByIdAndRemove :: '  , todo);
// })