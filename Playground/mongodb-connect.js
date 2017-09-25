const {MongoClient} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return 'Could not Connecto To MongoDB'
  }
   console.log('Connected to MongoDB')

  //  db.collection('Todos').insertOne({
  //    text: 'some thing todo',
  //    completed : false
  //  }, (err, result) => {
  //    if(err){
  //      return console.log('Could not insert document', err)
  //    }
  //    console.log(JSON.stringify(result.ops, undefined, 2))
  //  })

  // db.collection('Users').insertOne({
  //   name : 'sam',
  //   age: 30,
  //   location : 'Dallas'
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert document', err)
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // })
   db.close()
})
