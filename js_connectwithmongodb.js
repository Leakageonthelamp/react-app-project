const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017';

//connect to database
MongoClient.connect(url, function(err, client) {
    if (err) throw err;
    console.log("Database Created!");

//use database 
    const db = client.db("mydb1");
    db.collection("Users").find({}).toArray((err, docs) => {
        if (err) throw err;
        console.log(docs);
        client.close();
    });
});