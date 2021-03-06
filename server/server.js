require('../config/config.js')

var express = require('express');
var bodyParser  = require('body-parser');
var { mongoose } = require('./db/mongoose')
var {ObjectID} = require('mongodb');
var {Todo} = require('./models/todo')
var {User} = require('./models/user')
const _ = require('lodash');
const PORT = process.env.PORT 


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

app.patch('/todos/:id' , (req,res) => {
    const id = req.params.id;
    let body = _.pick(req.body , ['text' , 'completed']);
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    if(_.isBoolean(body.completed) && body.completed){
        body.completedAt = new Date().getTime();
    }else{
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id , {$set: body} , {new : true}).then((todo) => {
        if(!todo){
            return res.status(404).send();
        }
        res.status(200).send({todo})

    }).catch( e => res.status(400).send(e))
     

})

app.delete('/todos/:id' , (req, res) => {
    const id = req.params.id;
    if (!ObjectID.isValid(id)) return res.status(404).send();
    Todo.findByIdAndRemove(id).then( todo => {

        if(!todo)  return res.status(404).send();
        res.status(200).send({todo})
    }).catch( err =>   res.status(404).send() )


})



app.listen(PORT, () => {
    console.log(`Start Server on port ${PORT}`)
})


module.exports = {app};