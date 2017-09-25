const {MongoClient, ObjectID} = require('mongodb')
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if (err){
    return console.log('Unable to Connect to MongoDB');
  }
  console.log('Connected to MongoDB')
  // db.collection('Todos').find(
  //   {_id: new ObjectID('59bd51c416d17151942bf778')}
  // ).toArray().then((docs)=>{
  //   console.log('Todos')
  //   console.log(JSON.stringify(docs, undefined, 2))
  // }, (err)=>{
  //   console.log('Unable to fetch todos');
  // })

db.collection('Todos').find().count().then((count) => {
  console.log(`Number of records:  ${count}`)
}, (err) =>{
  console.log('Unable to find count' , err)
})
//  db.close()
})
