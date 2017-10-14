var express = require('express')
var bodyParser = require('body-parser')

var {mongoose} = require('./db/mongoose.js')
var {Todo} = require('./models/todo.js')
var {User} = require('./models/user.js')

var app = express()
app.use(bodyParser.json())

app.post('/todos', (req,res) =>{
    var newTodo = new Todo(req.body)
    newTodo.save().then( (doc)=> {
      res.send(doc)
      console.log(doc)
    }, (err) =>{
      console.log('cannot save todo', err)
    })
})

app.listen(3000, ()=>{
  console.log('server listening on port 3000')
})
