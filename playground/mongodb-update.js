// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to Server');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5ba19ca0f38ef790e20688ce')
    },{
        $set: {
            completed:true
        }
    }, {
        returnOriginal:false
    }).then((result) => {   
        console.log(result)
    });
    



    //deleteMany
    // db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
    //     console.log(result);
    // });

});

