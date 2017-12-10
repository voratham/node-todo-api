var express = require('express');
var bodyParser  = require('body-parser');

var { mongoose } = require('./db/mongoose')
var {Todo} = require('./models/todo')
var {User} = require('./models/user')

const PORT = 3000

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req ,res ,next) => {
    console.log(req.body);
    var todo = new Todo({
         text : req.body.text
    })
    todo.save().then( (result) => {
        res.send(result)
    } , (e) => {
        res.status(400).send(e)
    })
})


app.listen(PORT, () => {
    console.log(`Start Server on port ${PORT}`)
})