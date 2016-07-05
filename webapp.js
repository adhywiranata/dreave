var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var app = express();
var db;

app.use(express.static('static'));
app.use('/public', express.static(__dirname + '/public'));
app.use('/app', express.static(__dirname + '/views'));

//GET Requests
app.get('/api/notes', function(req, res) {
  db.collection("notes").find().toArray(function(err, docs) {
    res.json(docs);
  });
});

app.use(bodyParser.json());

//POST Requests
app.post('/api/notes/', function(req, res) {
  console.log("Req body:", req.body);
  var newNote = req.body;
  db.collection("notes").insertOne(newNote, function(err, result) {
    var newId = result.insertedId;
    db.collection("notes").find({_id: newId}).next(function(err, doc) {
      res.json(doc);
    });
  });
});

MongoClient.connect('mongodb://localhost/dreavedb', function(err, dbConnection) {
  db = dbConnection;
  var server = app.listen(3000, function() {
  	var port = server.address().port;
  	console.log("Started server at port", port);
  });
});
