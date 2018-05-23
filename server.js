var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

const app = express();

// connect to db
mongoose.connect('mongodb://localhost:27017/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('db connected \n\n');
});

// http listenser
app.listen(3000,() => {
    console.log('Server Started!')
})

// api routes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var data;

app.post('/api/workflow', function (req, res, next) {
    data = req.body.value;
    res.send(data);

    // insert into db
    db.collection('workflows').insertOne(JSON.parse(data));
});
