var express = require('express');
var bodyParser  = require('body-parser');
var { mongoose } = require('./db/mongoose')
var {ObjectID} = require('mongodb');
var {Todo} = require('./models/todo')
var {User} = require('./models/user')

const PORT = 3000

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req ,res ,next) => {
    // console.log(req.body);
    var todo = new Todo({
         text : req.body.text
    })
    todo.save().then( (todos) => {
        res.send(todos)
    } , (e) => {
        res.status(400).send(e)
    })
})


app.get('/todos' , (req ,res) => {
    Todo.find().then( (todos) => {
        res.send({todos})
    } , (e) => {
        res.status(400).send(e)        
    })
})


app.get('/todos/:id' , (req ,res) => {
    const id = req.params.id;
    if(!ObjectID.isValid(id)){
        return  res.status(404).send();
    }
    Todo.findById(id).then((todo) => {
        if(!todo){
            return res.status(404).send();
        }
        res.send({todo});
    }).catch(e => {
        return  res.status(404).send();        
    })


})

app.listen(PORT, () => {
    console.log(`Start Server on port ${PORT}`)
})


module.exports = {app};