 
const express = require('express');
const app = express();
const cors=require('cors');
var MongoClient = require('mongodb').MongoClient;
app.use(cors())
var url = "mongodb://localhost:27017/";

var pagination = require('pagination');
var paginator = pagination.create('search', {prelink:'/', current: 2, rowsPerPage: 2, totalResult: 10020});
console.log(paginator.render());



app.get('/users', function (req, res) {
	
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("MyNewDatabase");
  var data=dbo.collection("VirtualCapitalDB").find({}).toArray(function(err, result) {
    if (err) throw err;
	console.log(result);
	res.json(result);
	
db.close();
});
});
})


app.listen(8080, () => console.log('Listening on port 8080'));



